export interface LeadData {
  email: string;
  emri: string;
  mbiemri: string;
  telefonnumri: string;
}

export interface SubmitResponse {
  success: boolean;
  message: string;
}

export type Language = 'sq' | 'mk' | 'en';

export interface TranslationContent {
  headline: string;
  subtext: string;
  emailLabel: string;
  nameLabel: string;
  surnameLabel: string;
  phoneLabel: string;
  emailPlaceholder: string;
  optionalPlaceholder: string;
  buttonText: string;
  buttonLoading: string;
  privacy: string;
  successTitle: string;
  successMsg: string;
  back: string;
  location: string;
  address: string;
  errorEmailRequired: string;
  errorGeneric: string;
  footerCopyright: string;
}