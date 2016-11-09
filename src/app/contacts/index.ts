// import greeter from './greeter';
/*
import { Repository, DemoContactRepository } from './contact-repository';
import { DemoLoginController, LoginController } from './login-controller';
import { Contact } from './contact';
import { LoginComponent } from './login-component';

const contactRepo: Repository<Contact>  = new DemoContactRepository();
contactRepo.addContact(new Customer('John', 'Smith', 'john@abv.bg', 'john'));
contactRepo.addContact(new Customer('Sara', 'Smith', 'sara@abv.bg', 'sara'));
contactRepo.addContact(new Admin('Brian', 'Harisson', 'brian@gmail.com', 'brian'));

const loginController: LoginController = new DemoLoginController(contactRepo);
// loginController.login('john@abv.bg', 'john');

// let contact = 'TypeScript Contact';
// document.getElementById('content').innerHTML = JSON.stringify( loginController.getCurrentContact() );

const loginComponent = new LoginComponent('#content', loginController);
*/
// console.log(new PhysicalPerson('Ivan', 'Donchev', 'Petrov').salutation);

// interface Repository<T> {
//     findById: (id: number) => T;
//     findAll(): Array<T>;
// }
// export class RepositoryImpl<T> implements Repository<T> {
//     private data = new Map<number, T>();
//     public findById(id: number): T {
//         return this.data.get(id);
//     }
//     public findAll(): T[] {
//         let results: T[] = [];
//         this.data.forEach(item => results.push(item));
//         return results;
//     }
// }