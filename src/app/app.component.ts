import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'angular9forTeacher';
  signShowGroupOption:boolean = false;
  signAddNewGroupOption:boolean = false;
  signEditGroupOption:boolean = false;
  signDeleteGroupOption:boolean = false;
  captionGroupOption = "Опции";
  captionAddNewGroupOption = "Добавить новую группу";
  captionEditGroupOption = "Редактировать выбранную группу";
  constructor(){
    
  }
  showGroupOption(){
    if(this.signShowGroupOption)
      this.captionGroupOption = "\u00d7";
    else
      this.captionGroupOption = "Опции";
  }
  showAddNewGroupOption(){
    if(this.signAddNewGroupOption)
      this.captionAddNewGroupOption = "Создать";
    else
      this.captionAddNewGroupOption = "Добавить новую группу";
  }
  showEditGroupOption(){
    if(this.signEditGroupOption)
      this.captionEditGroupOption = "Применить";
    else
      this.captionEditGroupOption = "Редактировать выбранную группу";
  }
}
