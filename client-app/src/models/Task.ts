export interface Task {
    id : string;
    description : string;
    isComplete : boolean;
    priority : number;
    type : number;
}

export class Task implements Task {
    id : string = "";
    description : string = "";
    isComplete : boolean = false;
    priority : number = 0;
    type : number = 0;

    constructor(id: string,  description: string , isComplete : boolean , priority: number , type: number){
        this.id = id;
        this.description = description;
        this.isComplete = isComplete;
        this.priority = priority;
        this.type = type;
    }

}

export class PostTask {
    description : string;
    priority : number;
    type : number;

    constructor(description: string , priority: number , type: number){
        this.description = description;
        this.priority = priority;
        this.type = type;
    }
}

export class UpdateTask {
    description : string;
    isComplete : boolean;
    priority : number;
    type : number;

    constructor(description: string , isComplete: boolean,  priority: number , type: number){
        this.description = description;
        this.isComplete = isComplete
        this.priority = priority;
        this.type = type;
    }
}