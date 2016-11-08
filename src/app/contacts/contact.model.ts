export class Contact {
    public id: number;
    public gender: Gender;
    public name: string;
    public family: string;
    public email: string;
    public phone: string;
    public address: string;
}
/*
export class User extends Person {
    public password?: string;
    public role?: Role;
    public readonly name?: string;
    public readonly roleAsString?: string;
    public readonly salutation?: string;
}

export interface Contact {
    city?: String;
    address?: string;
    phone?: string;
}
*/
export enum Gender {
    FEMALE = 0, MALE = 1
}
/*
export enum Role {
    CUSTOMER = 2, OPERATOR= 4, ADMIN = 6
}

let nextId = 1; // Autoincrement ids

abstract class UserImpl implements User {
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

export class Customer extends UserImpl {
    constructor(
        firstName: string, lastName: string, gender: Gender,
        email: string, password: string,
        contact?: Contact) {
        super(firstName, lastName, gender, email, password, contact);
    }
}

export class Operator extends UserImpl {
    constructor(
        firstName: string, lastName: string, gender: Gender,
        email: string, password: string,
        contact?: Contact, role: Role = Role.OPERATOR) {
        super(firstName, lastName, gender, email, password, contact, role);
    }
}

export class Admin extends UserImpl {
    constructor(
        firstName: string, lastName: string, gender: Gender,
        email: string, password: string,
        contact?: Contact, role: Role = Role.ADMIN) {
        super(firstName, lastName, gender, email, password, contact, role);
    }
}
*/