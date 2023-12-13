import { Component } from '@angular/core';
import { BluePrintData, Server, ServerData } from './server.model';

@Component({
  selector: 'app-server-manager',
  templateUrl: './server-manager.component.html',
  styleUrls: ['./server-manager.component.css']
})
export class ServerManagerComponent {
  serverElements: Server[] = [{type: 'server', name: 'server', content: 'test Server'}];

  onServerAdded(server: ServerData){
    this.serverElements.push({
      type: 'server',
      name: server.serverName,
      content: server.serverContent
    })
  }

  onBluePrintAdded(blueprint: BluePrintData)
  {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprint.blueprintName,
      content: blueprint.blueprintcontent
    })
  }
}
