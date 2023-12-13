import { Component, EventEmitter, Output } from '@angular/core';
import { BluePrintData, Server, ServerData } from '../server.model';

@Component({
  selector: 'app-server-form',
  templateUrl: './server-form.component.html',
  styleUrls: ['./server-form.component.css']
})
export class ServerFormComponent {
  @Output() serverAdded = new EventEmitter<ServerData>();
  @Output() bluePrintAdded = new EventEmitter<BluePrintData>();
  newServerName: string = "";
  newServerContent: string = "";

  onAddServer(){
    this.serverAdded.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    })
    this.newServerName = "";
    this.newServerContent = "";
  }

  onAddBluePrint()
  {
    this.bluePrintAdded.emit({
      blueprintName: this.newServerName,
      blueprintcontent: this.newServerContent
    })
    this.newServerName = "";
    this.newServerContent = "";
  }
}
