import { CustomerI } from './CustomerModelI';
export class Customer implements CustomerI {
/*   id: number;
  name: string;
  surname: string;
  country: string; */

   constructor(
    public id: number,
    public name: string,
    public surname: string,
    public country: string
  ) {}
}

