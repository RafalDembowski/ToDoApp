export interface Task {
    id : string;
    description : string;
    isComplete : boolean;
    priority : number;
    type : number;
}

export class Task implements Task {

}