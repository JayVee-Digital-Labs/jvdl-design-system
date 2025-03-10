import { execSync } from "child_process";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import readline from "readline";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, "..");

const packageJsonPath = join(__dirname, "../package.json");
const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf-8"));

function getNextVersion(currentVersion, commitType) {
  const [major, minor, patch] = currentVersion.split(".").map(Number);

  switch (commitType) {
    case "major":
      return `${major + 1}.0.0`;
    case "minor":
      return `${major}.${minor + 1}.0`;
    case "patch":
      return `${major}.${minor}.${patch + 1}`;
    default:
      throw new Error("Invalid commit type");
  }
}

function getCommitType() {
  const commitMessage = execSync("git log -1 --pretty=%B").toString().trim();

  if (/^feat(\(.*\))?!/.test(commitMessage)) {
    return "major";
  } else if (/^feat/.test(commitMessage)) {
    return "minor";
  } else if (/^fix/.test(commitMessage)) {
    return "patch";
  } else {
    throw new Error("Commit message does not follow conventional commit style");
  }
}

function updateVersion(newVersion) {
  console.log(`Updating version to ${newVersion} ...`);
  packageJson.version = newVersion;
  const latestCommit = execSync("git log -1 --pretty=%B").toString().trim();
  console.log(`Latest commit: ${latestCommit}`);
  packageJson.latestCommit = latestCommit;
  writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
}

function createGitTag(version) {
  console.log(`Creating git tag v${version}...`);
  execSync(`git tag v${version}`);
}

function pushChanges() {
  console.log("Pushing changes...");

  execSync("git push origin main", { stdio: "inherit" }); // Adjust branch name if necessary
  execSync("git push origin --tags", { stdio: "inherit" });
}

function promptUser() {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const question =
      "\x1b[41m\x1b[30mThis script will update the version, create a git tag, and push to the latest branch. It should only be used on main. Do you want to proceed? (Y/N): \x1b[0m";
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.toLowerCase() === "y");
    });
  });
}

async function main() {
  const proceed = await promptUser();
  if (!proceed) {
    console.log("Operation aborted.");
    return;
  }

  console.log("Getting current version...");
  const currentVersion = packageJson.version;
  console.log("Determining commit type...");
  const commitType = getCommitType();
  console.log("Calculating next version...");
  const newVersion = getNextVersion(currentVersion, commitType);

  updateVersion(newVersion);

  console.log("Staging updated package.json...");
  execSync("git add package.json");

  console.log("Amending latest commit...");
  execSync("git commit --amend --no-edit");

  createGitTag(newVersion);
  pushChanges();

  console.log("Building Storybook files...");
  execSync("npm run build-storybook", { stdio: "inherit" });

  console.log("Deploying to Firebase...");
  execSync("firebase deploy", { stdio: "inherit" });
}

main();
