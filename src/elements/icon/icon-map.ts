import email from '@/assets/icons/email.svg';
import github from '@/assets/icons/github.svg';
import instagram from '@/assets/icons/instagram.svg';
import linkedin from '@/assets/icons/linkedin.svg';
import profileCard from '@/assets/icons/profile-card.svg';
import strava from '@/assets/icons/strava.svg';

export type IconName = 'email' | 'github' | 'instagram' | 'linkedin' | 'profile-card' | 'strava';

const getIconSrc = (icon: unknown): string =>
  typeof icon === 'string' ? icon : (icon as { src: string }).src;

const icons: Record<IconName, string> = {
  email: getIconSrc(email),
  github: getIconSrc(github),
  instagram: getIconSrc(instagram),
  linkedin: getIconSrc(linkedin),
  'profile-card': getIconSrc(profileCard),
  strava: getIconSrc(strava),
};

export default icons;