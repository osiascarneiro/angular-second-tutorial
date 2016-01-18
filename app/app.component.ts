import {Component} from 'angular2/core';
import {TodoInput} from './todo-input.component'

@Component({
    selector: 'my-app',
    directives: [TodoInput],
    template: '<todo-input></todo-input>'
})
export class AppComponent { 

}
