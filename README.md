# country-data-package-pt

A simple npm package that exports an array of country objects with name (in Portuguese), flag emoji, ISO country code, and international dial code.

## Installation

```bash
npm install country-data-package-pt
```

## Usage

### CommonJS (require)

```javascript
// Import the main array and search methods
const { countries, getCountryByCode, getCountryByName, getCountryByDialCode, searchCountriesByName } = require('country-data-package-pt');

// Or import just the countries array (backward compatible)
const countries = require('country-data-package-pt').countries;
// const countries = require('country-data-package-pt'); // This also works for backward compatibility

console.log(countries);
// Output: Array of country objects

// Example: Find a specific country using new methods
const portugal = getCountryByCode('PT');
console.log(portugal);
// { name: "Portugal", flag: "🇵🇹", code: "PT", dialCode: "+351" }

const brasil = getCountryByName('Brasil');
console.log(brasil);
// { name: "Brasil", flag: "🇧🇷", code: "BR", dialCode: "+55" }

const usa = getCountryByDialCode('+1');
console.log(usa);
// { name: "Estados Unidos", flag: "🇺🇸", code: "US", dialCode: "+1" }
```

### ES Modules (import)

```javascript
// Import the main array and search methods
import { countries, getCountryByCode, getCountryByName, getCountryByDialCode, searchCountriesByName } from 'country-data-package-pt';

// Or import just the countries array (backward compatible)
import countries from 'country-data-package-pt';

console.log(countries);
// Output: Array of country objects

// Example: Use new search methods
const portugal = getCountryByCode('pt'); // Case-insensitive
console.log(portugal);

const germany = getCountryByName('Alemanha');
console.log(germany);

// Search for countries containing a term
const islands = searchCountriesByName('Ilhas');
console.log(islands); // Returns all countries with "Ilhas" in the name

// Example: Filter countries by dial code (old way still works)
const usAndCanada = countries.filter((c) => c.dialCode === '+1');
console.log(usAndCanada);
```

### TypeScript

The package includes TypeScript definitions for type safety:

```typescript
import countries, {
    Country,
    getCountryByCode,
    getCountryByName,
    getCountryByDialCode,
    searchCountriesByName,
} from 'country-data-package-pt';

const country: Country = countries[0];
console.log(country.name); // Type-safe access
console.log(country.flag); // Type-safe access
console.log(country.code); // Type-safe access
console.log(country.dialCode); // Type-safe access

// Type-safe search methods
const foundCountry: Country | null = getCountryByCode('PT');
const searchResults: Country[] = searchCountriesByName('Reino');

if (foundCountry) {
    console.log(`Found: ${foundCountry.name}`);
}
```

## Data Structure

Each country object has the following structure:

```typescript
interface Country {
    name: string; // Full country name in Portuguese
    flag: string; // Flag emoji
    code: string; // ISO 3166-1 alpha-2 country code
    dialCode: string; // International dialing code
}
```

## Search Methods

The package provides convenient search methods to find countries:

### `getCountryByCode(code: string): Country | null`

Finds a country by its ISO country code (case-insensitive).

```javascript
const portugal = getCountryByCode('PT');
const brazil = getCountryByCode('br'); // Case-insensitive
console.log(portugal); // { name: "Portugal", flag: "🇵🇹", code: "PT", dialCode: "+351" }
```

### `getCountryByName(name: string): Country | null`

Finds a country by its exact name (case-insensitive).

```javascript
const germany = getCountryByName('Alemanha');
const france = getCountryByName('frança'); // Case-insensitive
console.log(germany); // { name: "Alemanha", flag: "🇩🇪", code: "DE", dialCode: "+49" }
```

### `getCountryByDialCode(dialCode: string): Country | null`

Finds a country by its international dial code. Accepts both "+351" and "351" formats.

```javascript
const portugal = getCountryByDialCode('+351');
const usa = getCountryByDialCode('1'); // Auto-adds + prefix
console.log(portugal); // { name: "Portugal", flag: "🇵🇹", code: "PT", dialCode: "+351" }
```

### `searchCountriesByName(searchTerm: string): Country[]`

Searches for countries whose names contain the search term (case-insensitive partial matching).

```javascript
const islands = searchCountriesByName('Ilhas');
const kingdoms = searchCountriesByName('Reino');
console.log(islands); // Returns array of all countries with "Ilhas" in name
console.log(kingdoms); // Returns [{ name: "Reino Unido", ... }]
```

## Available Countries

The package includes **246 countries** from around the world with names in Portuguese.

### Sample Countries

Here are some examples from the complete list:

-   Portugal 🇵🇹 (PT, +351)
-   Brasil 🇧🇷 (BR, +55)
-   Estados Unidos 🇺🇸 (US, +1)
-   Reino Unido 🇬🇧 (GB, +44)
-   Canadá 🇨🇦 (CA, +1)
-   Austrália 🇦🇺 (AU, +61)
-   Alemanha 🇩🇪 (DE, +49)
-   França 🇫🇷 (FR, +33)
-   Itália 🇮🇹 (IT, +39)
-   Espanha 🇪🇸 (ES, +34)
-   Países Baixos 🇳🇱 (NL, +31)
-   Bélgica 🇧🇪 (BE, +32)
-   Suíça 🇨🇭 (CH, +41)
-   Suécia 🇸🇪 (SE, +46)
-   Noruega 🇳🇴 (NO, +47)
-   Dinamarca 🇩🇰 (DK, +45)
-   Finlândia 🇫🇮 (FI, +358)
-   Polónia 🇵🇱 (PL, +48)
-   Japão 🇯🇵 (JP, +81)
-   China 🇨🇳 (CN, +86)
-   Índia 🇮🇳 (IN, +91)
-   México 🇲🇽 (MX, +52)
-   Argentina 🇦🇷 (AR, +54)
-   África do Sul 🇿🇦 (ZA, +27)

And many more! The complete list includes all countries and territories worldwide.

## Example Use Cases

### Display country selector in a form

```javascript
const { countries } = require('country-data-package-pt');

countries.forEach((country) => {
    console.log(`${country.flag} ${country.name} (${country.dialCode})`);
});
```

### Phone number validation

```javascript
const { getCountryByDialCode } = require('country-data-package-pt');

function validatePhoneNumber(phoneNumber) {
    // Extract dial code from phone number (simplified example)
    const dialCode = phoneNumber.match(/^\+\d{1,4}/)?.[0];

    if (dialCode) {
        const country = getCountryByDialCode(dialCode);
        if (country) {
            console.log(`Phone number appears to be from: ${country.name}`);
            return { valid: true, country };
        }
    }

    return { valid: false, country: null };
}

const result = validatePhoneNumber('+351912345678');
console.log(result); // { valid: true, country: { name: "Portugal", ... } }
```

### Country code lookup

```javascript
const { getCountryByCode } = require('country-data-package-pt');

function displayCountryInfo(countryCode) {
    const country = getCountryByCode(countryCode);

    if (country) {
        console.log(`${country.flag} ${country.name}`);
        console.log(`Code: ${country.code}`);
        console.log(`Dial Code: ${country.dialCode}`);
    } else {
        console.log('Country not found');
    }
}

displayCountryInfo('US'); // 🇺🇸 Estados Unidos...
displayCountryInfo('invalid'); // Country not found
```

### Search and autocomplete functionality

```javascript
const { searchCountriesByName } = require('country-data-package-pt');

function autocompleteCountries(userInput) {
    if (userInput.length < 2) return [];

    const results = searchCountriesByName(userInput);
    return results.slice(0, 5); // Limit to 5 results
}

console.log(autocompleteCountries('Bra')); // Returns Brasil, etc.
console.log(autocompleteCountries('Reino')); // Returns Reino Unido
```

### Multiple search strategies

```javascript
const { getCountryByCode, getCountryByName, getCountryByDialCode, searchCountriesByName } = require('country-data-package-pt');

function findCountry(input) {
    // Try different search strategies
    let country = null;

    // Try by country code (2 letters)
    if (input.length === 2) {
        country = getCountryByCode(input);
    }

    // Try by dial code
    if (!country && (input.startsWith('+') || /^\d+$/.test(input))) {
        country = getCountryByDialCode(input);
    }

    // Try by exact name
    if (!country) {
        country = getCountryByName(input);
    }

    // Try partial name search
    if (!country) {
        const results = searchCountriesByName(input);
        country = results[0] || null; // Return first match
    }

    return country;
}

console.log(findCountry('PT')); // Portugal (by code)
console.log(findCountry('+351')); // Portugal (by dial code)
console.log(findCountry('Portugal')); // Portugal (by name)
console.log(findCountry('Port')); // Portugal (by partial name)
```

## License

GPL-3.0

## Repository

https://github.com/deciosfernandes/country-data-package
