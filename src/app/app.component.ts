import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'angular9forTeacher';
  groups = [{name:"ЭМС-00-1"},
   {name:"ЭМС-00-2"}, 
   {name:"ЭМС-00-3"}]; 
  signShowGroupOption:boolean = false;
  signAddNewGroupOption:boolean = false;
  signEditGroupOption:boolean = false;
  signDeleteGroupOption:boolean = false;
  captionGroupOption = "Опции";
  captionAddNewGroupOption = "Добавить новую группу";
  captionEditGroupOption = "Редактировать выбранную группу";
  nameNewGroup:string ='';
  nameEditGroup:string;
  newNameEditGroup:string;
  newN:string;
  constructor(){
    
  }
  showGroupOption(){
    if(this.signShowGroupOption)
      this.captionGroupOption = "\u00d7";
    else
      this.captionGroupOption = "Опции";
  }
  addNewGroup() {
    if(this.signAddNewGroupOption) this.groups.push({name:this.nameNewGroup});
  }
  showAddNewGroupOption(){
    if(this.signAddNewGroupOption)
      this.captionAddNewGroupOption = "Создать";
    else
      this.captionAddNewGroupOption = "Добавить новую группу";
  }
  editGroup() {
    if(this.signEditGroupOption) {
      this.groups.forEach((item, idx)=>{
        if(item.name == this.nameEditGroup) {
          item.name = this.newNameEditGroup;
        }
      });
    }
  }
  showEditGroupOption(){
    if(this.signEditGroupOption) {
      this.captionEditGroupOption = "Применить";
      this.newNameEditGroup = this.nameEditGroup;
    }
    else
      this.captionEditGroupOption = "Редактировать выбранную группу";
  }
  deleteGroup(){
    this.groups.forEach((item, idx, arr)=>{
      if(item.name == this.nameEditGroup) {
        arr.splice(idx,1);
      }
    });
  }
}
