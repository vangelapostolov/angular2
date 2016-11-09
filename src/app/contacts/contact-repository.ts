import { Contact } from './contact.model';

interface ManageContact<T> {
    (contact: T): void;
}

export interface Repository<T> {
    addContact: ManageContact<T>;
    deleteContactById: (id: number) => void;
    editContact: ManageContact<T>;
    findContactById(id: number): T;
    findContactByEmail(email: string): T;
    findAllContacts(): Array<T>;
}

export class DemoContactRepository implements Repository<Contact> {
    private contacts = new Map<number, Contact>();

    public addContact(contact: Contact): void {
        if (this.findContactByEmail(contact.email)) {
            throw `Contact with email ${contact.email} already exists.`;
        }
        contact.id = this.getNextId();
        this.contacts.set(contact.id, contact);
    }

    public editContact(contact: Contact): void {
        let found = this.findContactByEmail(contact.email);
        if (found && found.id !== contact.id) {
            throw `Another contact with email ${contact.email} already exists.`;
        }
        this.contacts.set(contact.id, contact);
    }

    public deleteContactById(id: number): void {
        delete this.contacts.get(id);
    }

    public findContactById(id: number): Contact {
        return this.contacts.get(id);
    }

    public findContactByEmail(email: string): Contact {
        let result: Contact = undefined;
        this.contacts.forEach(contact => {
            if (contact.email === email) {
                result = contact;
                return false;
            }
        });
        return result;
    }

    public findAllContacts(): Contact[] {
        let results: Contact[] = [];
        this.contacts.forEach(contact => results.push(contact));
        return results;
    }

    private getNextId(): number {
        let maxId = 0;
        this.contacts.forEach((contact) => {
            if (contact.id > maxId) maxId = contact.id;
        });
        return maxId + 1;
    }

}
