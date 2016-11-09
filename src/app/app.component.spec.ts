import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BackendService } from './common/backend.service';
//import { ContactService } from './contacts/contact.service';
import { Logger } from './common/logger.service';
describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [FormsModule],
      providers: [BackendService, 
        //ContactService, 
        Logger ],
      declarations: [AppComponent
        //, ContactDetailComponent, ContactListComponent 
      ]});
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });
});
