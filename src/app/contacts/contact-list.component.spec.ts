import { TestBed, ComponentFixture, async, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ContactDetailComponent } from './contact-detail.component';
import { ContactListComponent } from './contact-list.component';

import { FormsModule } from '@angular/forms';
import { BackendService } from '../common/backend.service';
import { ContactService } from './contact.service';
import { Logger } from '../common/logger.service';
import { Admin } from './contact.model';

let comp: ContactListComponent;
let fixture: ComponentFixture<ContactListComponent>;
let spy: jasmine.Spy;
let de: DebugElement;
// let el: HTMLElement;
let backendService: BackendService;

const testContacts = [new Admin('Brian', 'Harisson', 'brian@gmail.com', 'brian')];

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      providers: [BackendService, ContactService, Logger],
      declarations: [ContactDetailComponent, ContactListComponent]
    });

    // Create component
    fixture = TestBed.createComponent(ContactListComponent);
    comp = fixture.componentInstance;

    // Get BackendService actually injected into the component
    backendService = fixture.debugElement.injector.get(BackendService);

    // Setup spy on the `getQuote` method
    spy = spyOn(backendService, 'getAll')
      .and.returnValue(Promise.resolve(testContacts));

    // Get the Twain quote element by CSS selector (e.g., by class name)
    de = fixture.debugElement.query(By.css('.items'));
    // el = de.nativeElement;
  });

  it('should be ContactListComponent', () => {
    expect(fixture.componentInstance instanceof ContactListComponent).toBe(true, 'should create AppComponent');
  });

  it('should call getAll() contacts', () => {
    expect(de.children.length).toBe(0, 'should be no contacts yet');
    fixture.detectChanges();
    // getAll service is async => still has not returned with contactss
    expect(de.children.length).toBe(0, 'no contacts yet');
    expect(spy.calls.any()).toBe(true, 'getAll called');
  });

  it('should show one contact after getAll promise (fakeAsync)', fakeAsync(() => {
    fixture.detectChanges();
    tick();                  // wait for async getQuote
    fixture.detectChanges(); // update view with quote
    expect(de.children.length).toBe(1, 'should be shown one contact');
    expect(de.children[0].nativeElement.textContent).toContain('Test Contact', 'should contain "Test Contact"');
  }));
});
