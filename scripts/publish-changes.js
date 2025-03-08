import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import readline from 'readline';

const packageJsonPath = join(__dirname, '../package.json');
const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));

function getNextVersion(currentVersion, commitType) {
    const [major, minor, patch] = currentVersion.split('.').map(Number);

    switch (commitType) {
        case 'major':
            return `${major + 1}.0.0`;
        case 'minor':
            return `${major}.${minor + 1}.0`;
        case 'patch':
            return `${major}.${minor}.${patch + 1}`;
        default:
            throw new Error('Invalid commit type');
    }
}

function getCommitType() {
    const commitMessage = execSync('git log -1 --pretty=%B').toString().trim();

    if (/^feat(\(.*\))?!/.test(commitMessage)) {
        return 'major';
    } else if (/^feat/.test(commitMessage)) {
        return 'minor';
    } else if (/^fix/.test(commitMessage)) {
        return 'patch';
    } else {
        throw new Error('Commit message does not follow conventional commit style');
    }
}

function updateVersion(newVersion) {
    packageJson.version = newVersion;
    const latestCommit = execSync('git log -1 --pretty=%B').toString().trim();
    packageJson.latestCommit = latestCommit;
    writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
}

function createGitTag(version) {
    execSync(`git tag v${version}`);
}

function pushChanges() {
    execSync('git push origin main'); // Adjust branch name if necessary
    execSync('git push origin --tags');
}

function promptUser() {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        const question = '\x1b[41m\x1b[30mThis script will update the version, create a git tag, and push to the latest branch. It should only be used on main. Do you want to proceed? (Y/N): \x1b[0m';
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer.toLowerCase() === 'y');
        });
    });
}

async function main() {
    const proceed = await promptUser();
    if (!proceed) {
        console.log('Operation aborted.');
        return;
    }

    const currentVersion = packageJson.version;
    const commitType = getCommitType();
    const newVersion = getNextVersion(currentVersion, commitType);

    updateVersion(newVersion);

    // Stage the updated package.json
    execSync('git add package.json');

    // Amend the latest commit with the updated package.json
    execSync('git commit --amend --no-edit');

    createGitTag(newVersion);
    pushChanges();
}

main();