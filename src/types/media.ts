export type Media =
  | "Forbes"
  | "Vogue"
  | "Entrepreneur"
  | "NationalGeographic"
  | "GQ"
  | "CoinTelegraph"
  | "CryptoNews"
  | "TheGuardian"
  | "Investing";

export interface Quote {
  id: number;
  quote: string;
  media: Media;
  logo: string;
  logoDark: string;
  link: string;
}
