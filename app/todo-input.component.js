System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var TodoInput;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TodoInput = (function () {
                function TodoInput() {
                }
                TodoInput.prototype.onClick = function (event, value) {
                    console.log(event, value);
                };
                TodoInput = __decorate([
                    core_1.Component({
                        selector: 'todo-input',
                        template: "\n\t\t<input type=\"text\" #myInput>\n\t\t<button (click)=\"onClick($event, myInput.value)\">Click me</button>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoInput);
                return TodoInput;
            })();
            exports_1("TodoInput", TodoInput);
        }
    }
});
//# sourceMappingURL=todo-input.component.js.map