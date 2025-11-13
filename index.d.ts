export interface Country {
  name: string;
  flag: string;
  code: string;
  dialCode: string;
}

declare const countries: Country[];

export default countries;
