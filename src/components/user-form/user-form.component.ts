import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input() title = '';

  public userForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private usersService: UsersService) { }

  ngOnInit() {
    this.setForm();
  }

  setForm() {
    this.userForm = this.formBuilder.group(
      {
        UserName: ['', [Validators.required]],
        Password: ['', [Validators.required, Validators.minLength(8)]],
      }
    );
  }

  saveUser() {
    if(this.userForm.valid) {
      this.usersService.saveUser(this.userForm.value).subscribe((response) => {
        debugger
      }, (error) => {
        console.log(error);
      });
    }
  }

}
