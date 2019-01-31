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

/***/ "./src/app/app-router.module.ts":
/*!**************************************!*\
  !*** ./src/app/app-router.module.ts ***!
  \**************************************/
/*! exports provided: AppRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouterModule", function() { return AppRouterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main-menu/main-menu.component */ "./src/app/components/main-menu/main-menu.component.ts");





var routes = [
    {
        path: '',
        component: _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_4__["MainMenuComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }
];
var AppRouterModule = /** @class */ (function () {
    function AppRouterModule() {
    }
    AppRouterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRouterModule);
    return AppRouterModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ers-client';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_router_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-router.module */ "./src/app/app-router.module.ts");
/* harmony import */ var _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main-menu/main-menu.component */ "./src/app/components/main-menu/main-menu.component.ts");
/* harmony import */ var _components_reimbursements_reimbursements_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/reimbursements/reimbursements.component */ "./src/app/components/reimbursements/reimbursements.component.ts");
/* harmony import */ var _components_reimbursement_details_reimbursement_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/reimbursement-details/reimbursement-details.component */ "./src/app/components/reimbursement-details/reimbursement-details.component.ts");
/* harmony import */ var _components_reimbursement_creator_reimbursement_creator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/reimbursement-creator/reimbursement-creator.component */ "./src/app/components/reimbursement-creator/reimbursement-creator.component.ts");
/* harmony import */ var _components_reimbursement_approval_reimbursement_approval_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/reimbursement-approval/reimbursement-approval.component */ "./src/app/components/reimbursement-approval/reimbursement-approval.component.ts");
/* harmony import */ var _components_employees_employees_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/employees/employees.component */ "./src/app/components/employees/employees.component.ts");
/* harmony import */ var _components_employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/employee-details/employee-details.component */ "./src/app/components/employee-details/employee-details.component.ts");
/* harmony import */ var _components_employee_creator_employee_creator_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/employee-creator/employee-creator.component */ "./src/app/components/employee-creator/employee-creator.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_5__["MainMenuComponent"],
                _components_reimbursements_reimbursements_component__WEBPACK_IMPORTED_MODULE_6__["ReimbursementsComponent"],
                _components_reimbursement_details_reimbursement_details_component__WEBPACK_IMPORTED_MODULE_7__["ReimbursementDetailsComponent"],
                _components_reimbursement_creator_reimbursement_creator_component__WEBPACK_IMPORTED_MODULE_8__["ReimbursementCreatorComponent"],
                _components_reimbursement_approval_reimbursement_approval_component__WEBPACK_IMPORTED_MODULE_9__["ReimbursementApprovalComponent"],
                _components_employees_employees_component__WEBPACK_IMPORTED_MODULE_10__["EmployeesComponent"],
                _components_employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_11__["EmployeeDetailsComponent"],
                _components_employee_creator_employee_creator_component__WEBPACK_IMPORTED_MODULE_12__["EmployeeCreatorComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_14__["NavigationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_router_module__WEBPACK_IMPORTED_MODULE_4__["AppRouterModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/employee-creator/employee-creator.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/employee-creator/employee-creator.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWUtY3JlYXRvci9lbXBsb3llZS1jcmVhdG9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/employee-creator/employee-creator.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/employee-creator/employee-creator.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  employee-creator works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/employee-creator/employee-creator.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/employee-creator/employee-creator.component.ts ***!
  \***************************************************************************/
/*! exports provided: EmployeeCreatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeCreatorComponent", function() { return EmployeeCreatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmployeeCreatorComponent = /** @class */ (function () {
    function EmployeeCreatorComponent() {
    }
    EmployeeCreatorComponent.prototype.ngOnInit = function () {
    };
    EmployeeCreatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-creator',
            template: __webpack_require__(/*! ./employee-creator.component.html */ "./src/app/components/employee-creator/employee-creator.component.html"),
            styles: [__webpack_require__(/*! ./employee-creator.component.css */ "./src/app/components/employee-creator/employee-creator.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmployeeCreatorComponent);
    return EmployeeCreatorComponent;
}());



/***/ }),

/***/ "./src/app/components/employee-details/employee-details.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/employee-details/employee-details.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWUtZGV0YWlscy9lbXBsb3llZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/employee-details/employee-details.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/employee-details/employee-details.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  employee-details works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/employee-details/employee-details.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/employee-details/employee-details.component.ts ***!
  \***************************************************************************/
/*! exports provided: EmployeeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailsComponent", function() { return EmployeeDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmployeeDetailsComponent = /** @class */ (function () {
    function EmployeeDetailsComponent() {
    }
    EmployeeDetailsComponent.prototype.ngOnInit = function () {
    };
    EmployeeDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-details',
            template: __webpack_require__(/*! ./employee-details.component.html */ "./src/app/components/employee-details/employee-details.component.html"),
            styles: [__webpack_require__(/*! ./employee-details.component.css */ "./src/app/components/employee-details/employee-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmployeeDetailsComponent);
    return EmployeeDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/employees/employees.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/employees/employees.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWVzL2VtcGxveWVlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/employees/employees.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/employees/employees.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  employees works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/employees/employees.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/employees/employees.component.ts ***!
  \*************************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent() {
    }
    EmployeesComponent.prototype.ngOnInit = function () {
    };
    EmployeesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employees',
            template: __webpack_require__(/*! ./employees.component.html */ "./src/app/components/employees/employees.component.html"),
            styles: [__webpack_require__(/*! ./employees.component.css */ "./src/app/components/employees/employees.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n  <form #loginForm=\"ngForm\" novalidate (ngSubmit)=\"loginSubmit()\">\n    <div>\n      <input type=\"text\" name=\"username\" placeholder=\"email\" [(ngModel)]=\"username\" required/>\n    </div>\n    <div>\n      <input type=\"password\" name=\"password\" placeholder=\"password\" [(ngModel)]=\"password\" required/>\n    </div>\n    <div>\n      <button type=\"submit\" [disabled]=\"!loginForm.valid\">Login</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.loginSubmit = function () {
        var _this = this;
        this.authService.authenticate(this.username, this.password, function () { return _this.router.navigate([_this.returnUrl]); }, function (err) { console.log(err); });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/main-menu/main-menu.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/main-menu/main-menu.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1tZW51L21haW4tbWVudS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/main-menu/main-menu.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/main-menu/main-menu.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation [navItems]=\"userNavs\"></app-navigation>\n"

/***/ }),

/***/ "./src/app/components/main-menu/main-menu.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/main-menu/main-menu.component.ts ***!
  \*************************************************************/
/*! exports provided: MainMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function() { return MainMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var MainMenuComponent = /** @class */ (function () {
    function MainMenuComponent(authService) {
        this.authService = authService;
    }
    MainMenuComponent.prototype.ngOnInit = function () {
        if (this.authService.hasRoles(['Manager'])) {
            this.userNavs = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].managerNav;
        }
        else {
            this.userNavs = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].employeeNav;
        }
    };
    MainMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-menu',
            template: __webpack_require__(/*! ./main-menu.component.html */ "./src/app/components/main-menu/main-menu.component.html"),
            styles: [__webpack_require__(/*! ./main-menu.component.css */ "./src/app/components/main-menu/main-menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], MainMenuComponent);
    return MainMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <ul>\n    <li *ngFor=\"let item of navItems\">{{ item.title }}</li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], NavigationComponent.prototype, "navItems", void 0);
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/components/navigation/navigation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/reimbursement-approval/reimbursement-approval.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/reimbursement-approval/reimbursement-approval.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVpbWJ1cnNlbWVudC1hcHByb3ZhbC9yZWltYnVyc2VtZW50LWFwcHJvdmFsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/reimbursement-approval/reimbursement-approval.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/reimbursement-approval/reimbursement-approval.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  reimbursement-approval works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/reimbursement-approval/reimbursement-approval.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/reimbursement-approval/reimbursement-approval.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ReimbursementApprovalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReimbursementApprovalComponent", function() { return ReimbursementApprovalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReimbursementApprovalComponent = /** @class */ (function () {
    function ReimbursementApprovalComponent() {
    }
    ReimbursementApprovalComponent.prototype.ngOnInit = function () {
    };
    ReimbursementApprovalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reimbursement-approval',
            template: __webpack_require__(/*! ./reimbursement-approval.component.html */ "./src/app/components/reimbursement-approval/reimbursement-approval.component.html"),
            styles: [__webpack_require__(/*! ./reimbursement-approval.component.css */ "./src/app/components/reimbursement-approval/reimbursement-approval.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReimbursementApprovalComponent);
    return ReimbursementApprovalComponent;
}());



/***/ }),

/***/ "./src/app/components/reimbursement-creator/reimbursement-creator.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/reimbursement-creator/reimbursement-creator.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVpbWJ1cnNlbWVudC1jcmVhdG9yL3JlaW1idXJzZW1lbnQtY3JlYXRvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/reimbursement-creator/reimbursement-creator.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/reimbursement-creator/reimbursement-creator.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  reimbursement-creator works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/reimbursement-creator/reimbursement-creator.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/reimbursement-creator/reimbursement-creator.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ReimbursementCreatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReimbursementCreatorComponent", function() { return ReimbursementCreatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReimbursementCreatorComponent = /** @class */ (function () {
    function ReimbursementCreatorComponent() {
    }
    ReimbursementCreatorComponent.prototype.ngOnInit = function () {
    };
    ReimbursementCreatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reimbursement-creator',
            template: __webpack_require__(/*! ./reimbursement-creator.component.html */ "./src/app/components/reimbursement-creator/reimbursement-creator.component.html"),
            styles: [__webpack_require__(/*! ./reimbursement-creator.component.css */ "./src/app/components/reimbursement-creator/reimbursement-creator.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReimbursementCreatorComponent);
    return ReimbursementCreatorComponent;
}());



/***/ }),

/***/ "./src/app/components/reimbursement-details/reimbursement-details.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/reimbursement-details/reimbursement-details.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVpbWJ1cnNlbWVudC1kZXRhaWxzL3JlaW1idXJzZW1lbnQtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/reimbursement-details/reimbursement-details.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/reimbursement-details/reimbursement-details.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  reimbursement-details works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/reimbursement-details/reimbursement-details.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/reimbursement-details/reimbursement-details.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ReimbursementDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReimbursementDetailsComponent", function() { return ReimbursementDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReimbursementDetailsComponent = /** @class */ (function () {
    function ReimbursementDetailsComponent() {
    }
    ReimbursementDetailsComponent.prototype.ngOnInit = function () {
    };
    ReimbursementDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reimbursement-details',
            template: __webpack_require__(/*! ./reimbursement-details.component.html */ "./src/app/components/reimbursement-details/reimbursement-details.component.html"),
            styles: [__webpack_require__(/*! ./reimbursement-details.component.css */ "./src/app/components/reimbursement-details/reimbursement-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReimbursementDetailsComponent);
    return ReimbursementDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/reimbursements/reimbursements.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/reimbursements/reimbursements.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVpbWJ1cnNlbWVudHMvcmVpbWJ1cnNlbWVudHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/reimbursements/reimbursements.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/reimbursements/reimbursements.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  reimbursements works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/reimbursements/reimbursements.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/reimbursements/reimbursements.component.ts ***!
  \***********************************************************************/
/*! exports provided: ReimbursementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReimbursementsComponent", function() { return ReimbursementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReimbursementsComponent = /** @class */ (function () {
    function ReimbursementsComponent() {
    }
    ReimbursementsComponent.prototype.ngOnInit = function () {
    };
    ReimbursementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reimbursements',
            template: __webpack_require__(/*! ./reimbursements.component.html */ "./src/app/components/reimbursements/reimbursements.component.html"),
            styles: [__webpack_require__(/*! ./reimbursements.component.css */ "./src/app/components/reimbursements/reimbursements.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReimbursementsComponent);
    return ReimbursementsComponent;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('authToken')) {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.authUrl = 'http://localhost:8080/auth';
    }
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.getItem('authToken') !== null;
    };
    AuthService.prototype.hasRoles = function (roles) {
        var tokenRoles = JSON.parse(localStorage.getItem('authToken')).roles;
        return roles.every(function (role) { return tokenRoles.indexOf(role) >= 0; });
    };
    AuthService.prototype.authenticate = function (username, password, success, fail) {
        return this.http.post(this.authUrl, JSON.stringify({ email: username, password: password }), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .toPromise()
            .then(function (resp) {
            localStorage.setItem('authToken', JSON.stringify(resp));
            success();
        }, function (err) {
            fail(err);
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: "http://localhost:3000",
    managerNav: [
        {
            title: 'Reimbursemnts'
        },
        {
            title: 'Employees'
        },
        {
            title: 'New Employee'
        }
    ],
    employeeNav: [
        {
            title: 'Reimbursements'
        },
        {
            title: 'New Reimbursement'
        },
        {
            title: 'Profile'
        }
    ]
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Coding\project_1\ers-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map