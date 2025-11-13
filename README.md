# country-data-package

A simple npm package that exports an array of country objects with name, flag emoji, ISO country code, and international dial code.

## Installation

```bash
npm install country-data-package
```

## Usage

### CommonJS (require)

```javascript
const countries = require('country-data-package');

console.log(countries);
// Output: Array of country objects

// Example: Find a specific country
const portugal = countries.find(c => c.code === 'PT');
console.log(portugal);
// { name: "Portugal", flag: "🇵🇹", code: "PT", dialCode: "+351" }
```

### ES Modules (import)

```javascript
import countries from 'country-data-package';

console.log(countries);
// Output: Array of country objects

// Example: Filter countries by dial code
const usAndCanada = countries.filter(c => c.dialCode === '+1');
console.log(usAndCanada);
```

### TypeScript

The package includes TypeScript definitions for type safety:

```typescript
import countries, { Country } from 'country-data-package';

const country: Country = countries[0];
console.log(country.name);    // Type-safe access
console.log(country.flag);    // Type-safe access
console.log(country.code);    // Type-safe access
console.log(country.dialCode); // Type-safe access
```

## Data Structure

Each country object has the following structure:

```typescript
interface Country {
  name: string;      // Full country name
  flag: string;      // Flag emoji
  code: string;      // ISO 3166-1 alpha-2 country code
  dialCode: string;  // International dialing code
}
```

## Available Countries

The package includes 25 countries:

- United States 🇺🇸 (US, +1)
- United Kingdom 🇬🇧 (GB, +44)
- Canada 🇨🇦 (CA, +1)
- Australia 🇦🇺 (AU, +61)
- Germany 🇩🇪 (DE, +49)
- France 🇫🇷 (FR, +33)
- Italy 🇮🇹 (IT, +39)
- Spain 🇪🇸 (ES, +34)
- Portugal 🇵🇹 (PT, +351)
- Netherlands 🇳🇱 (NL, +31)
- Belgium 🇧🇪 (BE, +32)
- Switzerland 🇨🇭 (CH, +41)
- Sweden 🇸🇪 (SE, +46)
- Norway 🇳🇴 (NO, +47)
- Denmark 🇩🇰 (DK, +45)
- Finland 🇫🇮 (FI, +358)
- Poland 🇵🇱 (PL, +48)
- Japan 🇯🇵 (JP, +81)
- South Korea 🇰🇷 (KR, +82)
- China 🇨🇳 (CN, +86)
- India 🇮🇳 (IN, +91)
- Brazil 🇧🇷 (BR, +55)
- Mexico 🇲🇽 (MX, +52)
- Argentina 🇦🇷 (AR, +54)
- South Africa 🇿🇦 (ZA, +27)

## Example Use Cases

### Display country selector in a form

```javascript
const countries = require('country-data-package');

countries.forEach(country => {
  console.log(`${country.flag} ${country.name} (${country.dialCode})`);
});
```

### Phone number validation

```javascript
const countries = require('country-data-package');

function getCountryByDialCode(dialCode) {
  return countries.find(c => c.dialCode === dialCode);
}

const country = getCountryByDialCode('+351');
console.log(country.name); // "Portugal"
```

### Country code lookup

```javascript
const countries = require('country-data-package');

function getCountryByCode(code) {
  return countries.find(c => c.code === code);
}

const country = getCountryByCode('US');
console.log(country.flag); // "🇺🇸"
```

## License

GPL-3.0

## Repository

https://github.com/deciosfernandes/country-data-package
