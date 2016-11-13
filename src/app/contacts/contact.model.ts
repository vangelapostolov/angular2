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
/*
export enum Role {
    CUSTOMER = 2, OPERATOR= 4, ADMIN = 6
}

let nextId = 1; // Autoincrement ids

abstract class ContactImpl implements Contact {
    public id: number;
    constructor(
        public firstName: string, public lastName: string, public gender: Gender,
        public email: string, public password: string,
        public contact?: Contact,
        public role: Role = Role.CUSTOMER) {
        this.id = nextId++;
    }

    public get name() {
        return `${this.firstName} ${this.lastName}`;
    }

    public get roleAsString() {
        return Role[this.role];
    }

    // public get rolesAsString() {
    //     return this.roles.map(role => Role[role]).join(', ');
    // }

    public get salutation() {
        return `${this.name} in role: ${this.role}`;
    }
}

export class Customer extends ContactImpl {
    constructor(
        firstName: string, lastName: string, gender: Gender,
        email: string, password: string,
        contact?: Contact) {
        super(firstName, lastName, gender, email, password, contact);
    }
}

export class Operator extends ContactImpl {
    constructor(
        firstName: string, lastName: string, gender: Gender,
        email: string, password: string,
        contact?: Contact, role: Role = Role.OPERATOR) {
        super(firstName, lastName, gender, email, password, contact, role);
    }
}

export class Admin extends ContactImpl {
    constructor(
        firstName: string, lastName: string, gender: Gender,
        email: string, password: string,
        contact?: Contact, role: Role = Role.ADMIN) {
        super(firstName, lastName, gender, email, password, contact, role);
    }
}
*/

