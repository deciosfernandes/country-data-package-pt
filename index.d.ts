export interface Country {
    name: string;
    flag: string;
    code: string;
    dialCode: string;
}

declare const countries: Country[];

// Search methods
export declare function getCountryByCode(code: string): Country | null;
export declare function getCountryByName(name: string): Country | null;
export declare function getCountryByDialCode(dialCode: string): Country | null;
export declare function searchCountriesByName(searchTerm: string): Country[];

export { countries };
export default countries;
