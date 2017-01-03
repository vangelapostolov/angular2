import { Component, Input, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { Location } from '@angular/common';
import { Contact, Gender } from './contact.model';
import { ContactService } from './contact.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  //moduleId: module.id,
  selector: 'contact-detail',
  templateUrl: './contact-detail.component.html'
})

    
export class ContactDetailComponent implements OnInit, OnChanges {
  @Input('contact')
  public contactMaster: Contact = {id: undefined} as Contact;
  public contact: Contact;
  public contactForm: FormGroup;

  public isNewContact: boolean;

  private formErrors = {
    'name': '', 'family': '', 'address': '',
    'email': '', 'gender': '', 'phone': ''
  };
  private validationMessages = {
    'name': {
      'required': 'Name is required.',
      'minlength': 'Name must be at least 2 characters long.',
      'maxlength': 'Name cannot be more than 40 characters long.'
    },
    'family': {
      'required': 'Family is required.',
      'minlength': 'Family must be at least 2 characters long.',
      'maxlength': 'Family cannot be more than 40 characters long.'
    },
    'address': {
      'required': 'Address is required.',
      'minlength': 'Address must be at least 2 characters long.',
      'maxlength': 'Address cannot be more than 40 characters long.'
    },
    'email': {
      'required': 'Email is required.',
      'pattern': 'Email should be real email.'
    },
    'gender': {
      'required': 'Gender is required.'
    },
    'phone': {
      'required': 'Phone is required.',
      'pattern': 'Phone should be only numbers.'
    }
  };

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private service: ContactService) { }

  public ngOnInit() {
    this.resetForm();
    this.buildForm();
    this.route.params.forEach((params: Params) => {
      let id = +params['id']; // (+) converts string 'id' to a number
      if (id) {
        this.isNewContact = false; // has Id => not new
        this.service.getContact(id).then(
          contact => {
            this.contactMaster = contact;
            this.resetForm();
            this.buildForm();
          });
      }
    });
  }

  public ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    let chng = changes['contact'];
    if (chng.currentValue !== chng.previousValue) {
      this.resetForm();
    }
  }

  public resetForm() {
    this.contact = Object.assign({}, this.contactMaster);
  }

  public buildForm(): void {
    this.isNewContact = !this.contact.id; // if contact doesn't have ID => it is a new contact 
    
    this.contactForm = this.fb.group({
      'id': [{ value: this.contact.id, disabled: true }],
      'gender': [this.contact.gender, 
        Validators.required
      ],
      'name': [this.contact.name, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(40)
      ]],
      'family': [this.contact.family, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(40)
      ]],
      'email': [this.contact.email, [
        Validators.required,
        Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
      ]],
      'phone': [this.contact.phone, [
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ]],
      'address': [this.contact.address, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(255)
      ]]
    });

    this.contactForm.statusChanges
      .subscribe(data => this.onStatusChanged(data));

    this.onStatusChanged(); // reset validation messages

  }

  public onSubmit() {
    this.contact = this.contactForm.getRawValue() as Contact;
    if(this.contact.gender == 1){
      this.contact.gender = Gender.MALE;
    }else{
      this.contact.gender = Gender.FEMALE;
    }
    if (this.isNewContact) {
       this.service.addContact(this.contact).then(contact => {
         this.contact = contact;
         this.goBack();
       });

    } else {
       this.service.editContact(this.contact).then(contact => {
         this.contact = contact;
         this.goBack();
       });

    }
  }

  public goBack() {
    this.location.back();
  }

  private onStatusChanged(data?: any) {
    if (!this.contactForm) { return; }
    const form = this.contactForm;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  public deleteContact() {
    this.service.deleteContact(this.contact.id).then(result => {
      if(result){
        alert('Contact Successfull Deleted!');
      }else{
        alert('Error on Contact Deleted!');
      }
      this.router.navigateByUrl("contacts");
    });
  }

}
