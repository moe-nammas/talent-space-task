import { ReactElement } from 'react';
import Jordan from './Jordan';
import SaudiArabia from './SaudiArabia';

export interface ICountriesLookup {
  [key: string]: ReactElement;
}

export const COUNTRIES: ICountriesLookup = Object.freeze({
  jordan: <Jordan />,
  'saudi arabia': <SaudiArabia />,
});
