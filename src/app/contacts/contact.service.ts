import { Injectable } from '@angular/core';

import { User } from './contact.model';
import { BackendService } from '../common/backend.service';
import { Logger } from '../common/logger.service';

@Injectable()
export class UserService {

  constructor(
    private backend: BackendService,
    private logger: Logger) { }

  public getUsers() {
    return this.backend.findAll(User).then(
      users => {
        this.logger.log(`Fetched ${users.length} users.`);
        return users;
      });
  }

  public getUser(id: number): Promise<User> {
    return this.backend.find(User, id);
  }

  public addUser(User: User): Promise<User> {
    return this.backend.add(User, User);
  }

  public editUser(User: User): Promise<User> {
    return this.backend.edit(User, User);
  }

  public deleteUser(userId: number): Promise<User> {
    return this.backend.delete(User, userId);
  }
}
