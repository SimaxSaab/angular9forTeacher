import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators, FormArray } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  mainForm: FormGroup;
  form: FormGroup;
  formEdit: FormGroup;
  ngOnInit() {
    this.mainForm = new FormGroup({
      mainFormSelect: new FormControl("", []),
    });
    this.form = new FormGroup({
      name: new FormControl("", [
        Validators.minLength(7),
        Validators.maxLength(8),
        Validators.pattern(RegExp("[А-Я]{2,3}-[0-9]{2}-[0-9]")),
      ]),
    });
    this.formEdit = new FormGroup({
      name1: new FormArray([]),
    });
  }

  title: string = "angular9forTeacher";
  groups = [{ name: "ЭМС-00-1", students: 
              [
                {lname:"Иванов",name:"Иван",patronymic:"Иванович",mark:100,},
                {lname:"Петров",name:"Петр",patronymic:"Петрович",mark:10,},
                {lname:"Сидоров",name:"Сидор",patronymic:"Сидорович",mark:900,},
                {lname:"Михайлов",name:"Михаил",patronymic:"Михайлович",mark:75,},
              ]
            }, 
            { name: "ЭМС-00-2", students:
              [
                {lname:"Романенко",name:"Юрий",patronymic:"Николаевич",mark:100,},
                {lname:"Галышак",name:"Марьян",patronymic:"Иванович",mark:10,},
                {lname:"Щерба",name:"Денис",patronymic:"Александрович",mark:900,},
              ] 
            }, 
            { name: "ЭМС-00-3", students:
              [
                {lname:"Калашник",name:"Алексей",patronymic:"Александрович",mark:100,},
						    {lname:"Фоменко",name:"Стасьян",patronymic:"Александрович",mark:10,},
              ] 
            }
          ];
  signShowGroupOption: boolean = false;
  signAddNewGroupOption: boolean = false;
  signEditGroupOption: boolean = false;
  signDeleteGroupOption: boolean = false;
  captionGroupOption = "Опции";
  captionEditGroupOption = "Редактировать выбранную группу";
  newNameEditGroup: string;
  newN: string;

  numGroup: number = 2;
  students = [];

  constructor() {}
  showGroupOption() {
    if (this.signShowGroupOption) {
      this.captionGroupOption = "\u00d7";
    } else this.captionGroupOption = "Опции";
  }
  addNewGroup(ev) {
    // if (this.signAddNewGroupOption)
    ev.preventDefault();
    console.log(1);
      this.groups.push({ name: this.form.get("name").value, students: [] });
    this.resetAddForm();
  }

  addEditGroup() {
    //console.log(this.formEdit);this.mainForm.get("mainFormSelect").value
    const control = new FormControl( this.mainForm.get("mainFormSelect").value , [
      Validators.required,
      Validators.minLength(7),
      Validators.maxLength(8),
      Validators.pattern(RegExp("[А-Я]{2,3}-[0-9]{2}-[0-9]")),
    ]);
    (this.formEdit.get("name1") as FormArray).push(control);
    console.log(this.formEdit.get("name1")["controls"]);
  }

  editGroup() {
    if (this.signEditGroupOption) {
      this.groups.forEach((item, idx) => {
        if (item.name == this.mainForm.get("mainFormSelect").value) {
          console.log(this.mainForm.get("mainFormSelect"));
          item.name = this.formEdit.get("name1")["controls"][0].value;
        }
      });
    }
    this.deleteEditInput();
  }

  deleteEditInput() {
    console.log(this.formEdit.get("name1")["controls"][0]);
    (this.formEdit.get("name1") as FormArray).removeAt(0);
  }

  deleteGroup() {
    this.groups.forEach((item, idx, arr) => {
      if (item.name == this.mainForm.get("mainFormSelect").value) { 
        arr.splice(idx, 1);
      }
    });
  }
  resetAddForm() {
    this.form.reset();
  }
  resetMainForm() {
    this.mainForm.reset();
  }

  
  onGroupChange() {
    this.groups.forEach((item, idx) => {
      if (item.name == this.mainForm.get("mainFormSelect").value) {
        console.log(this.mainForm.get("mainFormSelect").value);
        this.students = this.groups[idx].students;
        //item.name = this.formEdit.get("name1")["controls"][0].value;
      }
    });
  }

  countOfGroup = function () {
    var count = 0;
      this.groups.forEach((item) => {
        if (item) { count++ }
      });    
    return count;
  }
}
