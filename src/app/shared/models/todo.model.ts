import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export class Todo {
    public name: string;
    public label: string;
    public deadline: NgbDateStruct;
    public isCompleted: boolean;

    constructor(name: string, label: string, deadline: NgbDateStruct, isCompleted: boolean) {
        this.name = name;
        this.label = label;
        this.deadline = deadline;
        this.isCompleted = isCompleted;
    }
}
