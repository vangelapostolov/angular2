import { Identifiable } from './../common/common.interfaces';
let nextId = 1; // Autoincrement ids

export class Contact implements Identifiable {
    public id: number;
    constructor(
        public name: string, public family: string, public gender: Gender,
        public email: string, public phone: string, public address: string) {
        this.id = nextId++;
    }
}

export enum Gender {
    FEMALE = 0, MALE = 1
}
