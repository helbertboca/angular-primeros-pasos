import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'

})
export class ListComponent {

  // evento que se va a emitir
  //onDelete = Index value : number
  @Output()
  public onDelete : EventEmitter<string> = new EventEmitter();


  @Input()
  public characterList : Character[] = [{
    name : 'Trunks',
    power : 10
  }]

  onDeleteCharacter(uuid?:string):void{

    if (!uuid) return;
    //TODO Emitir el ID del personaje
    this.onDelete.emit(uuid);
  }




}
