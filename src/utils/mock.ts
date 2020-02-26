import faker from 'faker';
import { validateBSN } from './bsn';
import { randomBytes } from 'crypto';

faker.locale = 'nl';

export const roepnaam = () => faker.name.firstName();

export const voornamen = () => faker.name.findName();

export const achternaam = () => faker.name.lastName();

export const geslacht = () => faker.random.arrayElement(['M', 'V', 'X']);

export const bsn = () => {
    while (true) {
        const randomBSN = randomBytes(256)
            .readUIntBE(0, 6)
            .toString()
            .substring(0, 9);
        if (validateBSN(randomBSN)) {
            return randomBSN;
        }
    }
};

export const geboortedatum = () => faker.date.between('2006-01-01', '2007-12-31');

export const geboorteplaats = () => faker.address.city();

export const postcode = () => faker.address.zipCode();

export const huisnummer = () => faker.random.number({ min: 1, max: 500 }).toString();

export const straat = () => faker.address.streetName().replace(/ /g, '');

export const woonplaats = () => faker.address.city();

export const advies = () => faker.random.arrayElement(['vwo', 'havo/vwo']);
