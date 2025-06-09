import angular from '@/assets/icons/angular.svg';
import cypress from '@/assets/icons/cypress.svg';
import email from '@/assets/icons/email.svg';
import firebase from '@/assets/icons/firebase.svg';
import github from '@/assets/icons/github.svg';
import githubCopilot from '@/assets/icons/github-copilot.svg';
import instagram from '@/assets/icons/instagram.svg';
import javascript from '@/assets/icons/javascript.svg';
import jest from '@/assets/icons/jest.svg';
import linkedin from '@/assets/icons/linkedin.svg';
import nodejs from '@/assets/icons/nodejs.svg';
import profileCard from '@/assets/icons/profile-card.svg';
import react from '@/assets/icons/react.svg';
import sass from '@/assets/icons/sass.svg';
import strava from '@/assets/icons/strava.svg';
import typescript from '@/assets/icons/typescript.svg';
import vue from '@/assets/icons/vue.svg';

export enum IconName {
  EMAIL = 'email',
  GITHUB = 'github',
  INSTAGRAM = 'instagram',
  LINKEDIN = 'linkedin',
  PROFILE_CARD = 'profile-card',
  STRAVA = 'strava',
  JAVASCRIPT = 'javascript',
  TYPESCRIPT = 'typescript',
  REACT = 'react',
  VUE = 'vue',
  ANGULAR = 'angular',
  JEST = 'jest',
  SASS = 'sass',
  CYPRESS = 'cypress',
  FIREBASE = 'firebase',
  GITHUB_COPILOT = 'github-copilot',
  NODEJS = 'nodejs'
}

// This is to maintain backward compatibility with legacy icon names
export type IconNameLegacy =
  | 'email'
  | 'github'
  | 'instagram'
  | 'linkedin'
  | 'profile-card'
  | 'strava';

const getIconSrc = (icon: unknown): string =>
  typeof icon === 'string' ? icon : (icon as { src: string }).src;

const importedIcons: Record<string, unknown> = {
  [IconName.ANGULAR]: angular,
  [IconName.CYPRESS]: cypress,
  [IconName.EMAIL]: email,
  [IconName.FIREBASE]: firebase,
  [IconName.GITHUB]: github,
  [IconName.GITHUB_COPILOT]: githubCopilot,
  [IconName.INSTAGRAM]: instagram,
  [IconName.JAVASCRIPT]: javascript,
  [IconName.JEST]: jest,
  [IconName.LINKEDIN]: linkedin,
  [IconName.NODEJS]: nodejs,
  [IconName.PROFILE_CARD]: profileCard,
  [IconName.REACT]: react,
  [IconName.SASS]: sass,
  [IconName.STRAVA]: strava,
  [IconName.TYPESCRIPT]: typescript,
  [IconName.VUE]: vue
};

const icons: Record<IconName, string> = Object.values(IconName).reduce(
  (acc, iconName) => {
    const importedIcon = importedIcons[iconName];
    if (importedIcon) {
      acc[iconName] = getIconSrc(importedIcon);
    }
    return acc;
  },
  {} as Record<IconName, string>
);

export default icons;
