export interface IConfig {
  language: string;
  supportedLanguages: string[];
  theme: string;
  endpoint: string;
  hero: IHero;
  navigation: INavigation;
  footer: IFooter;
  auth: IAuthProvider;
  terms: ITerms;
}

export interface IHero {
  title: string;
  subtitle: string;
  heroImgUrl?: string;
  large?: boolean;
  fontColor?: {
    title: string;
    subtitle: string;
  };
  overlayColor?: string;
  buttonColor?: {
    login: string;
    logout: string;
  };
}

export interface INavigation {
  links: ILink[];
  separator: string;
  showHomeLink: boolean;
}

export interface IFooter {
  links: ILink[];
  separator: string;
}

export interface ILink {
  name: string;
  link: string;
  openInNewTab: boolean;
  useRouter?: boolean;
}

export interface IAuthProvider {
  url: string;
  realm: string;
  clientId: string;
}

export interface ITerms {
  enabled: boolean;
  termsLink: string;
  privacyLink: string;
}
