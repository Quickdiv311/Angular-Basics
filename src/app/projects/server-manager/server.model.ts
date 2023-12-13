export class Server{
    type: string;
    name:string;
    content: string;

    constructor(type: string, name: string, content: string){
        this.type = type;
        this.name = name;
        this.content = content;
    }
}

export class ServerData{
    serverName:string;
    serverContent: string;

    constructor(serverName: string, serverContent: string){
        this.serverName = serverName;
        this.serverContent = serverContent;
    }
}

export class BluePrintData{
    blueprintName:string;
    blueprintcontent: string;

    constructor(blueprintName: string, blueprintcontent: string){
        this.blueprintName = blueprintName;
        this.blueprintcontent = blueprintcontent;
    }
}