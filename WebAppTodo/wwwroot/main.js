(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  background-color: #EEEEEE;\r\n}\r\n\r\n.todolist {\r\n  background-color: #FFF;\r\n  padding: 20px 20px 10px 20px;\r\n  margin-top: 30px;\r\n}\r\n\r\n.todolist h1 {\r\n  margin: 0;\r\n  padding-bottom: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.form-control {\r\n  border-radius: 0;\r\n}\r\n\r\nli.ui-state-default {\r\n  background: #fff;\r\n  border: none;\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n\r\nli.ui-state-default:last-child {\r\n  border-bottom: none;\r\n}\r\n\r\n.todo-footer {\r\n  background-color: #F4FCE8;\r\n  margin: 0 -20px -10px -20px;\r\n  padding: 10px 20px;\r\n}\r\n\r\n#done-items li {\r\n  padding: 10px 0;\r\n  border-bottom: 1px solid #ddd;\r\n  text-decoration: line-through;\r\n}\r\n\r\n#done-items li:last-child {\r\n  border-bottom: none;\r\n}\r\n\r\n#checkAll {\r\n  margin-top: 10px;\r\n}\r\n\r\n.info {\r\n  margin: 65px auto 0;\r\n  color: #0e0a0a6e;\r\n  font-size: 10px;\r\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\r\n  text-align: center;\r\n}\r\n\r\n.info a {\r\n  color: #242121;\r\n  text-decoration: none;\r\n  font-weight: 400;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"todoapp\">\n  <header class=\"header\">\n    <h1>To Do List</h1>\n    <app-new-todo></app-new-todo>\n  </header>\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n</section>\n<footer class=\"info\">\n  <p>Writen by\n    <a href=\"https://twitter.com/Heberth26\">Hebert Godoy</a>\n  </p>\n  <p>Tecnologies used\n    <a href=\"https://angular.io/\">Angular 6</a>, \n    <a href=\"https://github.com/ngxs/store\">@ngxs/store</a>, \n    <a href=\"https://docs.microsoft.com/en-us/azure/service-fabric/\">Azure service fabric</a>  \n  </p>\n</footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/devtools-plugin */ "./node_modules/@ngxs/devtools-plugin/fesm5/ngxs-devtools-plugin.js");
/* harmony import */ var _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/logger-plugin */ "./node_modules/@ngxs/logger-plugin/fesm5/ngxs-logger-plugin.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _new_todo_new_todo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-todo/new-todo.component */ "./src/app/new-todo/new-todo.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./todo-list/todo-list-component */ "./src/app/todo-list/todo-list-component.ts");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _store_todo_state__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./store/todo.state */ "./src/app/store/todo.state.ts");
/* harmony import */ var _shared_todo_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/todo.service */ "./src/app/shared/todo.service.ts");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./http-error-handler.service */ "./src/app/http-error-handler.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var devtools = [];
var routes = [
    // basic routes
    { path: '', component: _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_12__["TodoListComponent"], pathMatch: 'full' },
    { path: ':filter', component: _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_12__["TodoListComponent"] }
];
if (!_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production) {
    devtools = [
        _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_4__["NgxsReduxDevtoolsPluginModule"].forRoot(),
        _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_5__["NgxsLoggerPluginModule"].forRoot()
    ];
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _new_todo_new_todo_component__WEBPACK_IMPORTED_MODULE_7__["NewTodoComponent"],
                _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_12__["TodoListComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _todo_todo_component__WEBPACK_IMPORTED_MODULE_13__["TodoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(routes),
                _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["NgxsModule"].forRoot([
                    _store_todo_state__WEBPACK_IMPORTED_MODULE_15__["TodoState"]
                ]),
                devtools,
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"].forRoot()
            ],
            providers: [
                _shared_todo_service__WEBPACK_IMPORTED_MODULE_16__["TodoService"],
                _message_service__WEBPACK_IMPORTED_MODULE_18__["MessageService"],
                _http_error_handler_service__WEBPACK_IMPORTED_MODULE_17__["HttpErrorHandler"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\" class=\"footer\" *ngIf=\"showFooter\">\r\n  <span id=\"todo-count\" class=\"todo-count\">{{ countTodos }} items left</span>\r\n  <ul id=\"filters\" class=\"filters\">\r\n    <li>\r\n      <a [routerLink]=\"['/']\" [class.selected]=\"(currentFilter$ | async) == 'SHOW_ALL'\">\r\n        All\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a [routerLink]=\"['/','active']\" [class.selected]=\"(currentFilter$ | async) == 'SHOW_ACTIVE'\">\r\n        Active\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a [routerLink]=\"['/','completed']\" [class.selected]=\"(currentFilter$ | async) == 'SHOW_COMPLETED'\">\r\n        Completed\r\n      </a>\r\n    </li>\r\n  </ul>\r\n  <button id=\"clear-completed\" class=\"clear-completed\" (click)=\"clearCompleted()\">Clear completed</button>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _store_todo_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/todo.actions */ "./src/app/store/todo.actions.ts");
/* harmony import */ var _store_todo_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/todo.state */ "./src/app/store/todo.state.ts");
/* harmony import */ var _shared_todo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/todo.service */ "./src/app/shared/todo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FooterComponent = /** @class */ (function () {
    function FooterComponent(store, todoService) {
        this.store = store;
        this.todoService = todoService;
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs = this.todos$.subscribe(function (todos) {
            _this.countTodos = todos.filter(function (t) { return !t.completed; }).length;
            _this.showFooter = todos.length > 0;
        });
        this.store.dispatch(new _store_todo_actions__WEBPACK_IMPORTED_MODULE_2__["TodoFromServer"]());
    };
    FooterComponent.prototype.clearCompleted = function () {
        this.store.dispatch(new _store_todo_actions__WEBPACK_IMPORTED_MODULE_2__["ClearCompleted"]());
    };
    FooterComponent.prototype.completedAll = function () {
        this.store.dispatch(new _store_todo_actions__WEBPACK_IMPORTED_MODULE_2__["CompletedAll"]());
    };
    FooterComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(_store_todo_state__WEBPACK_IMPORTED_MODULE_3__["TodoState"].getTodos),
        __metadata("design:type", Object)
    ], FooterComponent.prototype, "todos$", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(_store_todo_state__WEBPACK_IMPORTED_MODULE_3__["TodoState"].getFilter),
        __metadata("design:type", Object)
    ], FooterComponent.prototype, "currentFilter$", void 0);
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html")
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"], _shared_todo_service__WEBPACK_IMPORTED_MODULE_4__["TodoService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/http-error-handler.service.ts":
/*!***********************************************!*\
  !*** ./src/app/http-error-handler.service.ts ***!
  \***********************************************/
/*! exports provided: HttpErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorHandler", function() { return HttpErrorHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/** Handles HttpClient errors */
var HttpErrorHandler = /** @class */ (function () {
    function HttpErrorHandler(messageService) {
        var _this = this;
        this.messageService = messageService;
        /** Create curried handleError function that already knows the service name */
        this.createHandleError = function (serviceName) {
            if (serviceName === void 0) { serviceName = ''; }
            return function (operation, result) {
                if (operation === void 0) { operation = 'operation'; }
                if (result === void 0) { result = {}; }
                return _this.handleError(serviceName, operation, result);
            };
        };
    }
    /**
     * Returns a function that handles Http operation failures.
     * This error handler lets the app continue to run as if no error occurred.
     * @param serviceName = name of the data service that attempted the operation
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    HttpErrorHandler.prototype.handleError = function (serviceName, operation, result) {
        var _this = this;
        if (serviceName === void 0) { serviceName = ''; }
        if (operation === void 0) { operation = 'operation'; }
        if (result === void 0) { result = {}; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            var message = (error.error instanceof ErrorEvent) ?
                error.error.message :
                "server returned code " + error.status + " with body \"" + error.error + "\"";
            // TODO: better job of transforming error for user consumption
            _this.messageService.add(serviceName + ": " + operation + " failed: " + message);
            // Let the app keep running by returning a safe result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    HttpErrorHandler = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], HttpErrorHandler);
    return HttpErrorHandler;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/new-todo/new-todo.component.html":
/*!**************************************************!*\
  !*** ./src/app/new-todo/new-todo.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input id=\"new-todo\" class=\"new-todo\" type=\"text\" autofocus (keyup.enter)=\"saveTodo()\" placeholder=\"Add new task...\" [formControl]=\"textField\"\r\n/>\r\n"

/***/ }),

/***/ "./src/app/new-todo/new-todo.component.ts":
/*!************************************************!*\
  !*** ./src/app/new-todo/new-todo.component.ts ***!
  \************************************************/
/*! exports provided: NewTodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTodoComponent", function() { return NewTodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _store_todo_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/todo.actions */ "./src/app/store/todo.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewTodoComponent = /** @class */ (function () {
    function NewTodoComponent(store) {
        this.store = store;
        this.textField = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
    }
    NewTodoComponent.prototype.ngOnInit = function () {
    };
    NewTodoComponent.prototype.saveTodo = function () {
        var _this = this;
        if (this.textField.valid) {
            var text = this.textField.value;
            this.store.dispatch(new _store_todo_actions__WEBPACK_IMPORTED_MODULE_3__["AddTodo"](text.trim()))
                .subscribe(function () {
                _this.store.dispatch(new _store_todo_actions__WEBPACK_IMPORTED_MODULE_3__["TodoFromServer"]());
            });
            this.textField.setValue('', { emitEvent: false });
        }
    };
    NewTodoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-todo',
            template: __webpack_require__(/*! ./new-todo.component.html */ "./src/app/new-todo/new-todo.component.html")
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], NewTodoComponent);
    return NewTodoComponent;
}());



/***/ }),

/***/ "./src/app/shared/todo.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/todo.service.ts ***!
  \****************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var _node_modules_angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/@angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-error-handler.service */ "./src/app/http-error-handler.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//Accept: application/json;odata=verbose;
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Accept': 'application/json;odata=verbose',
        'Content-Type': 'application/json'
    })
};
var TodoService = /** @class */ (function () {
    function TodoService(http, httpErrorHandler) {
        this.http = http;
        this.apiUrl = "api/todos/";
        this.handleError = httpErrorHandler.createHandleError('TodoService');
    }
    /** get todos */
    TodoService.prototype.getTodos = function () {
        return this.http.get(this.apiUrl + "all")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getTodos', [])));
    };
    /** add a new todo */
    TodoService.prototype.addTodo = function (todo) {
        return this.http.post(this.apiUrl + "add", todo, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addTodo', todo)));
    };
    /** update a new todo */
    TodoService.prototype.UpdateTodo = function (todo) {
        return this.http.put(this.apiUrl + "update", todo, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('UpdateTodo', todo)));
    };
    /** toggle a new todo */
    TodoService.prototype.toggle = function (todo) {
        return this.http.put(this.apiUrl + "toggle", todo, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('toggle', null)));
    };
    /** remove a new todo */
    TodoService.prototype.remove = function (todo) {
        return this.http.put(this.apiUrl + "remove", todo, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('remove', null)));
    };
    TodoService = __decorate([
        Object(_node_modules_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _http_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["HttpErrorHandler"]])
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "./src/app/store/todo.actions.ts":
/*!***************************************!*\
  !*** ./src/app/store/todo.actions.ts ***!
  \***************************************/
/*! exports provided: AddTodo, PopulateTodos, DeleteTodo, ToggleTodo, UpdateTodo, ClearCompleted, CompletedAll, TodoFromServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodo", function() { return AddTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopulateTodos", function() { return PopulateTodos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTodo", function() { return DeleteTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleTodo", function() { return ToggleTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTodo", function() { return UpdateTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearCompleted", function() { return ClearCompleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletedAll", function() { return CompletedAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoFromServer", function() { return TodoFromServer; });
var AddTodo = /** @class */ (function () {
    function AddTodo(payload) {
        this.payload = payload;
    }
    AddTodo.type = '[TODO] add';
    return AddTodo;
}());

var PopulateTodos = /** @class */ (function () {
    function PopulateTodos(payload) {
        this.payload = payload;
    }
    PopulateTodos.type = '[TODO] populate';
    return PopulateTodos;
}());

var DeleteTodo = /** @class */ (function () {
    function DeleteTodo(payload) {
        this.payload = payload;
    }
    DeleteTodo.type = '[TODO] delete';
    return DeleteTodo;
}());

var ToggleTodo = /** @class */ (function () {
    function ToggleTodo(payload) {
        this.payload = payload;
    }
    ToggleTodo.type = '[TODO] toggle';
    return ToggleTodo;
}());

var UpdateTodo = /** @class */ (function () {
    function UpdateTodo(payload) {
        this.payload = payload;
    }
    UpdateTodo.type = '[TODO] update';
    return UpdateTodo;
}());

var ClearCompleted = /** @class */ (function () {
    function ClearCompleted() {
    }
    ClearCompleted.type = '[TODO] clear completed';
    return ClearCompleted;
}());

var CompletedAll = /** @class */ (function () {
    function CompletedAll() {
    }
    CompletedAll.type = '[TODO] complete all';
    return CompletedAll;
}());

var TodoFromServer = /** @class */ (function () {
    function TodoFromServer() {
    }
    TodoFromServer.type = '[TODO] From server';
    return TodoFromServer;
}());



/***/ }),

/***/ "./src/app/store/todo.filter.ts":
/*!**************************************!*\
  !*** ./src/app/store/todo.filter.ts ***!
  \**************************************/
/*! exports provided: SetFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetFilter", function() { return SetFilter; });
var SetFilter = /** @class */ (function () {
    function SetFilter(payload) {
        this.payload = payload;
    }
    SetFilter.type = '[SET] filter';
    return SetFilter;
}());



/***/ }),

/***/ "./src/app/store/todo.state.ts":
/*!*************************************!*\
  !*** ./src/app/store/todo.state.ts ***!
  \*************************************/
/*! exports provided: TodoStateModel, TodoState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoStateModel", function() { return TodoStateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoState", function() { return TodoState; });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.actions */ "./src/app/store/todo.actions.ts");
/* harmony import */ var _todo_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.filter */ "./src/app/store/todo.filter.ts");
/* harmony import */ var _shared_todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/todo.service */ "./src/app/shared/todo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoStateModel = /** @class */ (function () {
    function TodoStateModel() {
    }
    return TodoStateModel;
}());

var TodoState = /** @class */ (function () {
    function TodoState(todoService) {
        this.todoService = todoService;
    }
    TodoState.getTodos = function (state) {
        return state.todos;
    };
    TodoState.getFilter = function (state) {
        return state.filter;
    };
    TodoState.getVisibleTodos = function (state) {
        if (state.filter === 'SHOW_ALL') {
            return state.todos;
        }
        else if (state.filter === 'SHOW_COMPLETED') {
            return state.todos.filter(function (t) { return t.completed; });
        }
        else if (state.filter === 'SHOW_ACTIVE') {
            return state.todos.filter(function (t) { return !t.completed; });
        }
    };
    TodoState.getStateCompleted = function (state) {
        return state.todos.every(function (todo) { return todo.completed; });
    };
    TodoState.prototype.add = function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        var payload = _b.payload;
        var todo = { text: payload, completed: false };
        this.todoService.addTodo(todo)
            .subscribe(function (result) {
            patchState({
                todos: getState().todos.concat([{ id: result, text: todo.text, completed: todo.completed }])
            });
        }, function (error) {
            console.log(error);
        });
    };
    TodoState.prototype.addTodosFromServer = function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        this.todoService.getTodos()
            .subscribe(function (result) {
            patchState({
                todos: result
            });
        }, function (error) {
            //TODO:HG Add logic to display error to users
            console.log(error);
        });
    };
    TodoState.prototype.populate = function (_a, _b) {
        var patchState = _a.patchState;
        var payload = _b.payload;
        patchState({
            todos: payload
        });
    };
    TodoState.prototype.toggle = function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        var payload = _b.payload;
        var newTodo = getState().todos.filter(function (td) { return td.id == payload; });
        var td = {
            completed: !newTodo[0].completed,
            id: newTodo[0].id,
            text: newTodo[0].text
        };
        this.todoService.toggle(td)
            .subscribe(function (result) {
            patchState({
                todos: getState().todos.map(function (td) {
                    if (td.id === payload) {
                        td.completed = !td.completed;
                    }
                    return td;
                })
            });
        }, function (error) {
            //TODO:HG Add logic to display error to users
            console.log(error);
        });
    };
    TodoState.prototype.delete = function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        var payload = _b.payload;
        var newTodo = getState().todos.filter(function (td) { return td.id == payload; });
        var td = {
            completed: newTodo[0].completed,
            id: newTodo[0].id,
            text: newTodo[0].text
        };
        this.todoService.remove(td)
            .subscribe(function (result) {
            patchState({
                todos: getState().todos.filter(function (td) { return td.id !== payload; })
            });
        }, function (error) {
            //TODO:HG Add logic to display error to users
            console.log(error);
        });
    };
    TodoState.prototype.update = function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        var payload = _b.payload;
        var newTodo = getState().todos.filter(function (td) { return td.id == payload.id; });
        var td = {
            completed: newTodo[0].completed,
            id: newTodo[0].id,
            text: payload.text
        };
        this.todoService.UpdateTodo(td)
            .subscribe(function (id) {
            patchState({
                todos: getState().todos.map(function (td) {
                    if (td.id === newTodo[0].id) {
                        td.text = payload.text;
                    }
                    return td;
                })
            });
        }, function (error) {
            //TODO:HG Add logic to display error to users
            console.log(error);
        });
    };
    TodoState.prototype.clear = function (_a) {
        var getState = _a.getState, patchState = _a.patchState;
        patchState({
            todos: getState().todos.filter(function (td) { return !td.completed; })
        });
    };
    TodoState.prototype.complete = function (_a) {
        var getState = _a.getState, patchState = _a.patchState;
        patchState({
            todos: getState().todos.map(function (td) {
                td.completed = true;
                return td;
            })
        });
    };
    TodoState.prototype.filter = function (_a, _b) {
        var patchState = _a.patchState;
        var payload = _b.payload;
        patchState({
            filter: payload
        });
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_todo_actions__WEBPACK_IMPORTED_MODULE_1__["AddTodo"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _todo_actions__WEBPACK_IMPORTED_MODULE_1__["AddTodo"]]),
        __metadata("design:returntype", void 0)
    ], TodoState.prototype, "add", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_todo_actions__WEBPACK_IMPORTED_MODULE_1__["TodoFromServer"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _todo_actions__WEBPACK_IMPORTED_MODULE_1__["TodoFromServer"]]),
        __metadata("design:returntype", void 0)
    ], TodoState.prototype, "addTodosFromServer", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_todo_actions__WEBPACK_IMPORTED_MODULE_1__["PopulateTodos"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _todo_actions__WEBPACK_IMPORTED_MODULE_1__["PopulateTodos"]]),
        __metadata("design:returntype", void 0)
    ], TodoState.prototype, "populate", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_todo_actions__WEBPACK_IMPORTED_MODULE_1__["ToggleTodo"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _todo_actions__WEBPACK_IMPORTED_MODULE_1__["ToggleTodo"]]),
        __metadata("design:returntype", void 0)
    ], TodoState.prototype, "toggle", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_todo_actions__WEBPACK_IMPORTED_MODULE_1__["DeleteTodo"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _todo_actions__WEBPACK_IMPORTED_MODULE_1__["DeleteTodo"]]),
        __metadata("design:returntype", void 0)
    ], TodoState.prototype, "delete", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_todo_actions__WEBPACK_IMPORTED_MODULE_1__["UpdateTodo"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _todo_actions__WEBPACK_IMPORTED_MODULE_1__["UpdateTodo"]]),
        __metadata("design:returntype", void 0)
    ], TodoState.prototype, "update", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_todo_actions__WEBPACK_IMPORTED_MODULE_1__["ClearCompleted"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TodoState.prototype, "clear", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_todo_actions__WEBPACK_IMPORTED_MODULE_1__["CompletedAll"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TodoState.prototype, "complete", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_todo_filter__WEBPACK_IMPORTED_MODULE_2__["SetFilter"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _todo_filter__WEBPACK_IMPORTED_MODULE_2__["SetFilter"]]),
        __metadata("design:returntype", void 0)
    ], TodoState.prototype, "filter", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [TodoStateModel]),
        __metadata("design:returntype", void 0)
    ], TodoState, "getTodos", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [TodoStateModel]),
        __metadata("design:returntype", void 0)
    ], TodoState, "getFilter", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [TodoStateModel]),
        __metadata("design:returntype", void 0)
    ], TodoState, "getVisibleTodos", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [TodoStateModel]),
        __metadata("design:returntype", void 0)
    ], TodoState, "getStateCompleted", null);
    TodoState = __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["State"])({
            name: 'todos',
            defaults: {
                filter: 'SHOW_ALL',
                todos: []
            }
        }),
        __metadata("design:paramtypes", [_shared_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"]])
    ], TodoState);
    return TodoState;
}());



/***/ }),

/***/ "./src/app/todo-list/todo-list-component.ts":
/*!**************************************************!*\
  !*** ./src/app/todo-list/todo-list-component.ts ***!
  \**************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _store_todo_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/todo.actions */ "./src/app/store/todo.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _store_todo_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/todo.state */ "./src/app/store/todo.state.ts");
/* harmony import */ var _store_todo_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/todo.filter */ "./src/app/store/todo.filter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

;






var TodoListComponent = /** @class */ (function () {
    function TodoListComponent(store, route) {
        this.store = store;
        this.route = route;
        this.checkFieldForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.readParams();
    }
    TodoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stateCompleted$.subscribe(function (status) {
            _this.checkFieldForm.setValue(status);
        });
    };
    TodoListComponent.prototype.toggleAll = function () {
        this.store.dispatch(new _store_todo_actions__WEBPACK_IMPORTED_MODULE_3__["CompletedAll"]());
    };
    TodoListComponent.prototype.setFilter = function (filter) {
        switch (filter) {
            case 'active': {
                this.store.dispatch(new _store_todo_filter__WEBPACK_IMPORTED_MODULE_6__["SetFilter"]('SHOW_ACTIVE'));
                break;
            }
            case 'completed': {
                this.store.dispatch(new _store_todo_filter__WEBPACK_IMPORTED_MODULE_6__["SetFilter"]('SHOW_COMPLETED'));
                break;
            }
            default: {
                this.store.dispatch(new _store_todo_filter__WEBPACK_IMPORTED_MODULE_6__["SetFilter"]('SHOW_ALL'));
                break;
            }
        }
    };
    TodoListComponent.prototype.readParams = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.setFilter(params.filter);
        });
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(_store_todo_state__WEBPACK_IMPORTED_MODULE_5__["TodoState"].getVisibleTodos),
        __metadata("design:type", Object)
    ], TodoListComponent.prototype, "todos$", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(_store_todo_state__WEBPACK_IMPORTED_MODULE_5__["TodoState"].getStateCompleted),
        __metadata("design:type", Object)
    ], TodoListComponent.prototype, "stateCompleted$", void 0);
    TodoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-list',
            template: __webpack_require__(/*! ./todo-list.component.html */ "./src/app/todo-list/todo-list.component.html")
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "./src/app/todo-list/todo-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/todo-list/todo-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"main\" class=\"main\">\r\n  <div class=\"toogle-view\" *ngIf=\"(todos$ | async).length > 0\">\r\n    <input id=\"toggle-all\" class=\"toggle-all\" type=\"checkbox\" [formControl]=\"checkFieldForm\">\r\n    <label (click)=\"toggleAll()\">Mark all as complete</label>\r\n  </div>\r\n  <ul id=\"todo-list\" class=\"todo-list\">\r\n    <app-todo [todo]=\"todo\" *ngFor=\"let todo of (todos$ | async)\"></app-todo>\r\n  </ul>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/todo/todo.component.html":
/*!******************************************!*\
  !*** ./src/app/todo/todo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li [class.completed]=\"todo.completed\" [class.editing]=\"editing\">\r\n  <div class=\"view\">\r\n    <input class=\"toggle\" type=\"checkbox\" [formControl]=\"checkField\" />\r\n    <label (dblclick)=\"activeEditMode()\" title=\"Double-click to edit a task\"> {{ todo.text }} </label>\r\n    <button class=\"destroy\" (click)=\"deleteTodo()\" title=\"Remove task\"></button>\r\n  </div>\r\n  <input class=\"edit\" type=\"text\" #textInput (keyup.enter)=\"updateText()\" (blur)=\"updateText()\" [formControl]=\"textField\" [hidden]=\"editing\"\r\n  />\r\n</li>\r\n"

/***/ }),

/***/ "./src/app/todo/todo.component.ts":
/*!****************************************!*\
  !*** ./src/app/todo/todo.component.ts ***!
  \****************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _store_todo_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/todo.actions */ "./src/app/store/todo.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoComponent = /** @class */ (function () {
    function TodoComponent(store) {
        var _this = this;
        this.store = store;
        this.textField = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.checkField = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false);
        this.checkField.valueChanges
            .subscribe(function (state) {
            _this.store.dispatch(new _store_todo_actions__WEBPACK_IMPORTED_MODULE_3__["ToggleTodo"](_this.todo.id));
        });
    }
    TodoComponent.prototype.ngOnInit = function () {
        this.textField.setValue(this.todo.text);
        this.checkField.setValue(this.todo.completed, { emitEvent: false });
    };
    TodoComponent.prototype.updateText = function () {
        var _this = this;
        if (this.textField.valid && this.editing) {
            var id = this.todo.id;
            var newText = this.textField.value;
            this.store.dispatch(new _store_todo_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateTodo"]({ id: id, text: newText.trim() })).subscribe(function () {
                _this.store.dispatch(new _store_todo_actions__WEBPACK_IMPORTED_MODULE_3__["TodoFromServer"]()).subscribe(function () {
                    _this.editing = !_this.editing;
                });
            });
        }
    };
    TodoComponent.prototype.activeEditMode = function () {
        var _this = this;
        this.editing = true;
        setTimeout(function () {
            _this.textInput.nativeElement.focus();
        });
    };
    TodoComponent.prototype.deleteTodo = function () {
        this.store.dispatch(new _store_todo_actions__WEBPACK_IMPORTED_MODULE_3__["DeleteTodo"](this.todo.id));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TodoComponent.prototype, "todo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('textInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TodoComponent.prototype, "textInput", void 0);
    TodoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__(/*! ./todo.component.html */ "./src/app/todo/todo.component.html")
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Personal projects\TO-DO\WebAppTodo\WebAppUI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map