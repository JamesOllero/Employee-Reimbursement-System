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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _services_auth_guard_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth-guard-service.service */ "./src/app/services/auth-guard-service.service.ts");
/* harmony import */ var _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-menu/main-menu.component */ "./src/app/main-menu/main-menu.component.ts");
/* harmony import */ var _modules_manager_components_employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/manager/components/employee-details/employee-details.component */ "./src/app/modules/manager/components/employee-details/employee-details.component.ts");
/* harmony import */ var _modules_employee_components_employee_profile_employee_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/employee/components/employee-profile/employee-profile.component */ "./src/app/modules/employee/components/employee-profile/employee-profile.component.ts");
/* harmony import */ var _modules_reimbursement_components_new_reimbursement_new_reimbursement_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/reimbursement/components/new-reimbursement/new-reimbursement.component */ "./src/app/modules/reimbursement/components/new-reimbursement/new-reimbursement.component.ts");
/* harmony import */ var _modules_reimbursement_components_rebursements_rebursements_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/reimbursement/components/rebursements/rebursements.component */ "./src/app/modules/reimbursement/components/rebursements/rebursements.component.ts");
/* harmony import */ var _modules_manager_components_new_employee_new_employee_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/manager/components/new-employee/new-employee.component */ "./src/app/modules/manager/components/new-employee/new-employee.component.ts");
/* harmony import */ var _modules_reimbursement_components_reimbursement_detail_reimbursement_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/reimbursement/components/reimbursement-detail/reimbursement-detail.component */ "./src/app/modules/reimbursement/components/reimbursement-detail/reimbursement-detail.component.ts");
/* harmony import */ var _modules_manager_components_employees_employees_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/manager/components/employees/employees.component */ "./src/app/modules/manager/components/employees/employees.component.ts");













var routes = [
    {
        path: 'main',
        component: _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_5__["MainMenuComponent"],
        canActivate: [_services_auth_guard_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardServiceService"]],
        children: [
            {
                path: 'manager',
                children: [
                    {
                        path: 'reimbursements',
                        component: _modules_reimbursement_components_rebursements_rebursements_component__WEBPACK_IMPORTED_MODULE_9__["RebursementsComponent"]
                    },
                    {
                        path: 'reimbursements/details/:id',
                        component: _modules_reimbursement_components_reimbursement_detail_reimbursement_detail_component__WEBPACK_IMPORTED_MODULE_11__["ReimbursementDetailComponent"]
                    },
                    {
                        path: 'employees',
                        component: _modules_manager_components_employees_employees_component__WEBPACK_IMPORTED_MODULE_12__["EmployeesComponent"]
                    },
                    {
                        path: 'employees/details/:id',
                        component: _modules_manager_components_employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeDetailsComponent"]
                    },
                    {
                        path: 'create-employee',
                        component: _modules_manager_components_new_employee_new_employee_component__WEBPACK_IMPORTED_MODULE_10__["NewEmployeeComponent"]
                    },
                    {
                        path: '',
                        redirectTo: 'reimbursements',
                        pathMatch: 'full'
                    }
                ]
            },
            {
                path: 'employee',
                children: [
                    {
                        path: 'profile',
                        component: _modules_employee_components_employee_profile_employee_profile_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeProfileComponent"]
                    },
                    {
                        path: 'reimbursements',
                        component: _modules_reimbursement_components_rebursements_rebursements_component__WEBPACK_IMPORTED_MODULE_9__["RebursementsComponent"]
                    },
                    {
                        path: 'reimbursements/details/:id',
                        component: _modules_reimbursement_components_reimbursement_detail_reimbursement_detail_component__WEBPACK_IMPORTED_MODULE_11__["ReimbursementDetailComponent"]
                    },
                    {
                        path: 'create-reimbursement',
                        component: _modules_reimbursement_components_new_reimbursement_new_reimbursement_component__WEBPACK_IMPORTED_MODULE_8__["NewReimbursementComponent"]
                    },
                    {
                        path: '',
                        redirectTo: 'profile',
                        pathMatch: 'full'
                    }
                ]
            }
        ]
    },
    {
        path: 'logout',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: '**',
        redirectTo: 'main'
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

module.exports = "<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_router_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-router.module */ "./src/app/app-router.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-menu/main-menu.component */ "./src/app/main-menu/main-menu.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _modules_employee_employee_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/employee/employee.module */ "./src/app/modules/employee/employee.module.ts");
/* harmony import */ var _modules_reimbursement_reimbursement_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/reimbursement/reimbursement.module */ "./src/app/modules/reimbursement/reimbursement.module.ts");
/* harmony import */ var _modules_manager_manager_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/manager/manager.module */ "./src/app/modules/manager/manager.module.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_8__["MainMenuComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_router_module__WEBPACK_IMPORTED_MODULE_6__["AppRouterModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _modules_employee_employee_module__WEBPACK_IMPORTED_MODULE_10__["EmployeeModule"],
                _modules_reimbursement_reimbursement_module__WEBPACK_IMPORTED_MODULE_11__["ReimbursementModule"],
                _modules_manager_manager_module__WEBPACK_IMPORTED_MODULE_12__["ManagerModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\r\n  <form #loginForm=\"ngForm\" novalidate (ngSubmit)=\"loginSubmit()\">\r\n    <div>\r\n      <input\r\n        type=\"text\"\r\n        name=\"username\"\r\n        placeholder=\"email\"\r\n        [(ngModel)]=\"username\"\r\n        required/>\r\n    </div>\r\n    <div>\r\n      <input\r\n        type=\"password\"\r\n        name=\"password\"\r\n        placeholder=\"password\"\r\n        [(ngModel)]=\"password\"\r\n        required/>\r\n    </div>\r\n    <div>\r\n      <button type=\"submit\" [disabled]=\"!loginForm.valid\">Login</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth-service.service */ "./src/app/services/auth-service.service.ts");
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
        this.authService.authenticate(this.username, this.password, function () { return _this.router.navigate([_this.returnUrl]); }, function (err) {
            console.log(err);
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main-menu/main-menu.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4tbWVudS9tYWluLW1lbnUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main-menu/main-menu.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navs\">\r\n  <span>\r\n    <app-navigation [navItems]=\"userNavs\"></app-navigation>\r\n  </span>\r\n</div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/main-menu/main-menu.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.ts ***!
  \**************************************************/
/*! exports provided: MainMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function() { return MainMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth-service.service */ "./src/app/services/auth-service.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var MainMenuComponent = /** @class */ (function () {
    function MainMenuComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    MainMenuComponent.prototype.ngOnInit = function () {
        if (this.authService.hasRoles(['Manager'])) {
            this.userNavs = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].managerNav;
            this.router.navigate(['main/manager/reimbursements']);
        }
        else {
            this.userNavs = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].employeeNav;
            this.router.navigate(['main/employee/profile']);
        }
    };
    MainMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-menu',
            template: __webpack_require__(/*! ./main-menu.component.html */ "./src/app/main-menu/main-menu.component.html"),
            styles: [__webpack_require__(/*! ./main-menu.component.css */ "./src/app/main-menu/main-menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], MainMenuComponent);
    return MainMenuComponent;
}());



/***/ }),

/***/ "./src/app/modules/employee/components/employee-profile/employee-profile.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/employee/components/employee-profile/employee-profile.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZW1wbG95ZWUvY29tcG9uZW50cy9lbXBsb3llZS1wcm9maWxlL2VtcGxveWVlLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/employee/components/employee-profile/employee-profile.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/employee/components/employee-profile/employee-profile.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile\">\r\n<h2>{{employee.firstName | uppercase}} {{employee.lastName | uppercase}} Details</h2>\r\n<div><span>id: </span>{{employee.id}}</div>\r\n<div><span>username: </span>{{employee.username}}</div>\r\n<div><span>First Name: </span>{{employee.firstName}}</div>\r\n<div><span>Last Name: </span>{{employee.lastName}}</div>\r\n<div><span>email: </span>{{employee.email}}</div>\r\n<div><span>role: </span>{{employee.role}}</div>\r\n</div>\r\n<br>\r\n<div>\r\n<span>Recent Reimbursements</span>\r\n  <table>\r\n    <tr>\r\n      <th>Id</th><th>Description</th><th>Amount</th><th>Status</th>\r\n    </tr>\r\n    <tr *ngFor=\"let reimbursement of recentReimbursements\">\r\n      <td>{{reimbursement.id}}</td><td>{{reimbursement.description}}</td><td>{{reimbursement.amount}}</td><td>{{reimbursement.status}}</td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/employee/components/employee-profile/employee-profile.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/employee/components/employee-profile/employee-profile.component.ts ***!
  \********************************************************************************************/
/*! exports provided: EmployeeProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeProfileComponent", function() { return EmployeeProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _reimbursement_services_reimbursement_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../reimbursement/services/reimbursement-service.service */ "./src/app/modules/reimbursement/services/reimbursement-service.service.ts");
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/auth-service.service */ "./src/app/services/auth-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var EmployeeProfileComponent = /** @class */ (function () {
    function EmployeeProfileComponent(reimbursementService, authService, location) {
        this.reimbursementService = reimbursementService;
        this.authService = authService;
        this.location = location;
        this.employee = JSON.parse(localStorage.getItem('authToken'));
    }
    EmployeeProfileComponent.prototype.ngOnInit = function () {
        this.getRecentReimbursements();
    };
    EmployeeProfileComponent.prototype.getRecentReimbursements = function () {
        var _this = this;
        this.reimbursementService.getRecentReimbursements(this.employee.id, function () {
            var reimbArr = JSON.parse(localStorage.getItem('reimbursements'));
            _this.recentReimbursements = reimbArr;
        }, function (err) {
            console.log(err);
        });
    };
    EmployeeProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-profile',
            template: __webpack_require__(/*! ./employee-profile.component.html */ "./src/app/modules/employee/components/employee-profile/employee-profile.component.html"),
            styles: [__webpack_require__(/*! ./employee-profile.component.css */ "./src/app/modules/employee/components/employee-profile/employee-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_reimbursement_services_reimbursement_service_service__WEBPACK_IMPORTED_MODULE_2__["ReimbursementServiceService"],
            _services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], EmployeeProfileComponent);
    return EmployeeProfileComponent;
}());



/***/ }),

/***/ "./src/app/modules/employee/employee.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/employee/employee.module.ts ***!
  \*****************************************************/
/*! exports provided: EmployeeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeModule", function() { return EmployeeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_employee_profile_employee_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/employee-profile/employee-profile.component */ "./src/app/modules/employee/components/employee-profile/employee-profile.component.ts");




var EmployeeModule = /** @class */ (function () {
    function EmployeeModule() {
    }
    EmployeeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_employee_profile_employee_profile_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeProfileComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _components_employee_profile_employee_profile_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeProfileComponent"]
            ]
        })
    ], EmployeeModule);
    return EmployeeModule;
}());



/***/ }),

/***/ "./src/app/modules/employee/employee.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/employee/employee.ts ***!
  \**********************************************/
/*! exports provided: Employee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());



/***/ }),

/***/ "./src/app/modules/manager/components/employee-details/employee-details.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/manager/components/employee-details/employee-details.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlci9jb21wb25lbnRzL2VtcGxveWVlLWRldGFpbHMvZW1wbG95ZWUtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/manager/components/employee-details/employee-details.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/manager/components/employee-details/employee-details.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile\">\r\n  <h2>{{employee.firstName | uppercase}} {{employee.lastName | uppercase}} Details</h2>\r\n  <div><span>id: </span>{{employee.id}}</div>\r\n  <div><span>username: </span>{{employee.username}}</div>\r\n  <div><span>First Name: </span>{{employee.firstName}}</div>\r\n  <div><span>Last Name: </span>{{employee.lastName}}</div>\r\n  <div><span>email: </span>{{employee.email}}</div>\r\n  <div><span>role: </span>{{employee.role}}</div>\r\n</div>\r\n<br>\r\n<div *ngIf=\"checkedEmployeeIsManager()\">\r\n  <span>Employee Reimbursements</span>\r\n  <table>\r\n    <tr>\r\n      <th>Id</th><th>Description</th><th>Amount</th><th>Status</th>\r\n    </tr>\r\n    <tr *ngFor=\"let reimbursement of employeeReimbursements\">\r\n      <td>{{reimbursement.id}}</td><td>{{reimbursement.description}}</td><td>{{reimbursement.amount}}</td><td>{{reimbursement.status}}</td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n<br>\r\n<br>\r\n<button (click)=\"goBack()\">Go Back</button>\r\n"

/***/ }),

/***/ "./src/app/modules/manager/components/employee-details/employee-details.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/manager/components/employee-details/employee-details.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: EmployeeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailsComponent", function() { return EmployeeDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_manager_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/manager-service.service */ "./src/app/modules/manager/services/manager-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _reimbursement_services_reimbursement_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../reimbursement/services/reimbursement-service.service */ "./src/app/modules/reimbursement/services/reimbursement-service.service.ts");





var EmployeeDetailsComponent = /** @class */ (function () {
    function EmployeeDetailsComponent(managerService, reimbursementService, location) {
        this.managerService = managerService;
        this.reimbursementService = reimbursementService;
        this.location = location;
        this.employee = JSON.parse(localStorage.getItem('employee'));
    }
    EmployeeDetailsComponent.prototype.ngOnInit = function () {
        this.getEmployeeDetails();
    };
    EmployeeDetailsComponent.prototype.getEmployeeDetails = function () {
        var _this = this;
        this.reimbursementService.getUserReimbursements(this.employee.id, function () {
            var reimbArr = JSON.parse(localStorage.getItem('reimbursements'));
            _this.employeeReimbursements = reimbArr;
        }, function (err) {
            console.log(err);
        });
    };
    EmployeeDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    EmployeeDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-details',
            template: __webpack_require__(/*! ./employee-details.component.html */ "./src/app/modules/manager/components/employee-details/employee-details.component.html"),
            styles: [__webpack_require__(/*! ./employee-details.component.css */ "./src/app/modules/manager/components/employee-details/employee-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_manager_service_service__WEBPACK_IMPORTED_MODULE_2__["ManagerServiceService"],
            _reimbursement_services_reimbursement_service_service__WEBPACK_IMPORTED_MODULE_4__["ReimbursementServiceService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], EmployeeDetailsComponent);
    return EmployeeDetailsComponent;
}());



/***/ }),

/***/ "./src/app/modules/manager/components/employees/employees.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/modules/manager/components/employees/employees.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlci9jb21wb25lbnRzL2VtcGxveWVlcy9lbXBsb3llZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/manager/components/employees/employees.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/manager/components/employees/employees.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <table>\r\n    <tr>\r\n      <th>Id</th><th>Name</th><th>Email</th><th>To Details</th>\r\n    </tr>\r\n    <tr *ngFor=\"let employee of employees\">\r\n      <td>{{employee.id}}</td>\r\n      <td>{{employee.firstName}} {{employee.lastName}}</td>\r\n      <td>{{employee.email}}</td>\r\n      <td><button (click)=\"loadDetails(employee.id)\">To Details</button></td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/manager/components/employees/employees.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/manager/components/employees/employees.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_manager_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/manager-service.service */ "./src/app/modules/manager/services/manager-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent(managerService, router) {
        this.managerService = managerService;
        this.router = router;
    }
    EmployeesComponent.prototype.ngOnInit = function () {
        this.getAllEmployees();
    };
    EmployeesComponent.prototype.getAllEmployees = function () {
        var _this = this;
        this.managerService.getEmployees(function () {
            var empArr = JSON.parse(localStorage.getItem('employees'));
            _this.employees = empArr;
            return;
        }, function (err) {
            console.log(err);
        });
    };
    EmployeesComponent.prototype.loadDetails = function (id) {
        var _this = this;
        this.managerService.getEmployee(id, function () { return _this.router.navigateByUrl('/main/manager/employees/details/' + id.toString()); }, function (err) {
            console.log(err);
        });
    };
    EmployeesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employees',
            template: __webpack_require__(/*! ./employees.component.html */ "./src/app/modules/manager/components/employees/employees.component.html"),
            styles: [__webpack_require__(/*! ./employees.component.css */ "./src/app/modules/manager/components/employees/employees.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_manager_service_service__WEBPACK_IMPORTED_MODULE_2__["ManagerServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./src/app/modules/manager/components/new-employee/new-employee.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/modules/manager/components/new-employee/new-employee.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlci9jb21wb25lbnRzL25ldy1lbXBsb3llZS9uZXctZW1wbG95ZWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/manager/components/new-employee/new-employee.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/manager/components/new-employee/new-employee.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h3>New Employee</h3>\r\n  <form (ngSubmit)=\"onSubmit()\" #employeeForm=\"ngForm\">\r\n    <div class=\"form-group\">\r\n      <label for=\"firstName\">First Name: </label>\r\n      <input type=\"text\" id=\"firstName\" [(ngModel)]=\"newEmployee.firstName\" name=\"firstName\" required=\"true\">\r\n    </div>\r\n    <div>\r\n      <label for=\"lastName\">Last Name: </label>\r\n      <input type=\"text\" id=\"lastName\" [(ngModel)]=\"newEmployee.lastName\" name=\"lastName\" required=\"true\">\r\n    </div>\r\n    <div>\r\n      <label for=\"username\">Username: </label>\r\n      <input type=\"text\" id=\"username\" [(ngModel)]=\"newEmployee.username\" name=\"username\" required=\"true\">\r\n    </div>\r\n    <div>\r\n      <label for=\"password\">Password: </label>\r\n      <input type=\"password\" id=\"password\" [(ngModel)]=\"newEmployee.password\" name=\"password\" required=\"true\">\r\n    </div>\r\n    <div>\r\n      <label for=\"email\">Email: </label>\r\n      <input type=\"text\" id=\"email\" [(ngModel)]=\"newEmployee.email\" name=\"email\" required=\"true\">\r\n    </div>\r\n    <div>\r\n      <label for=\"role\">Role: </label>\r\n      <select id=\"role\" [(ngModel)]=\"newEmployee.role\" name=\"role\" required=\"true\">\r\n        <option value=\"Employee\">Employee</option>\r\n        <option value=\"Manager\">Manager</option>\r\n      </select>\r\n    </div>\r\n    <button type=\"submit\" [disabled]=\"!employeeForm.form.valid\">Submit</button>\r\n    <button type=\"reset\">Reset Form</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/manager/components/new-employee/new-employee.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/manager/components/new-employee/new-employee.component.ts ***!
  \***********************************************************************************/
/*! exports provided: NewEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewEmployeeComponent", function() { return NewEmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _employee_employee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../employee/employee */ "./src/app/modules/employee/employee.ts");
/* harmony import */ var _services_manager_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/manager-service.service */ "./src/app/modules/manager/services/manager-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var NewEmployeeComponent = /** @class */ (function () {
    function NewEmployeeComponent(managerService, router) {
        this.managerService = managerService;
        this.router = router;
        this.newEmployee = new _employee_employee__WEBPACK_IMPORTED_MODULE_2__["Employee"];
    }
    NewEmployeeComponent.prototype.ngOnInit = function () {
        this.newEmployee.id = 0;
        this.newEmployee.firstName = '';
        this.newEmployee.lastName = '';
        this.newEmployee.username = '';
        this.newEmployee.email = '';
        this.newEmployee.password = '';
        this.newEmployee.role = 'Employee';
    };
    NewEmployeeComponent.prototype.onSubmit = function () {
        var _this = this;
        this.managerService.createEmployee(this.newEmployee, function () {
            _this.router.navigateByUrl('main/manager/employees');
        }, function (err) {
            console.log(err);
        });
    };
    NewEmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-employee',
            template: __webpack_require__(/*! ./new-employee.component.html */ "./src/app/modules/manager/components/new-employee/new-employee.component.html"),
            styles: [__webpack_require__(/*! ./new-employee.component.css */ "./src/app/modules/manager/components/new-employee/new-employee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_manager_service_service__WEBPACK_IMPORTED_MODULE_3__["ManagerServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NewEmployeeComponent);
    return NewEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/modules/manager/manager.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/manager/manager.module.ts ***!
  \***************************************************/
/*! exports provided: ManagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerModule", function() { return ManagerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_employees_employees_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/employees/employees.component */ "./src/app/modules/manager/components/employees/employees.component.ts");
/* harmony import */ var _components_employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/employee-details/employee-details.component */ "./src/app/modules/manager/components/employee-details/employee-details.component.ts");
/* harmony import */ var _components_new_employee_new_employee_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/new-employee/new-employee.component */ "./src/app/modules/manager/components/new-employee/new-employee.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var ManagerModule = /** @class */ (function () {
    function ManagerModule() {
    }
    ManagerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_employees_employees_component__WEBPACK_IMPORTED_MODULE_3__["EmployeesComponent"], _components_employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeDetailsComponent"], _components_new_employee_new_employee_component__WEBPACK_IMPORTED_MODULE_5__["NewEmployeeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            exports: [
                _components_employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeDetailsComponent"], _components_employees_employees_component__WEBPACK_IMPORTED_MODULE_3__["EmployeesComponent"], _components_new_employee_new_employee_component__WEBPACK_IMPORTED_MODULE_5__["NewEmployeeComponent"]
            ]
        })
    ], ManagerModule);
    return ManagerModule;
}());



/***/ }),

/***/ "./src/app/modules/manager/services/manager-service.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/manager/services/manager-service.service.ts ***!
  \*********************************************************************/
/*! exports provided: ManagerServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerServiceService", function() { return ManagerServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ManagerServiceService = /** @class */ (function () {
    function ManagerServiceService(http) {
        this.http = http;
        this.employeeUrl = 'http://localhost:8080/user';
    }
    ManagerServiceService.prototype.getEmployees = function (success, fail) {
        return this.http.get(this.employeeUrl).toPromise()
            .then(function (resp) {
            localStorage.setItem('employees', JSON.stringify(resp));
            console.log('Got all employees');
            success();
        }, function (err) {
            fail(err);
        });
    };
    ManagerServiceService.prototype.getEmployee = function (employeeId, success, fail) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('employeeId', employeeId.toString());
        return this.http.get(this.employeeUrl, { params: params }).toPromise()
            .then(function (resp) {
            localStorage.setItem('employee', JSON.stringify(resp));
            success();
        }, function (err) {
            fail(err);
        });
    };
    ManagerServiceService.prototype.createEmployee = function (employee, success, fail) {
        return this.http.post(this.employeeUrl, JSON.stringify(employee)).toPromise()
            .then(function (resp) {
            success();
        }, function (err) {
            fail(err);
        });
    };
    ManagerServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ManagerServiceService);
    return ManagerServiceService;
}());



/***/ }),

/***/ "./src/app/modules/reimbursement/components/approve-reimbursement/approve-reimbursement.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/reimbursement/components/approve-reimbursement/approve-reimbursement.component.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVpbWJ1cnNlbWVudC9jb21wb25lbnRzL2FwcHJvdmUtcmVpbWJ1cnNlbWVudC9hcHByb3ZlLXJlaW1idXJzZW1lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/reimbursement/components/approve-reimbursement/approve-reimbursement.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/reimbursement/components/approve-reimbursement/approve-reimbursement.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  approve-reimbursement works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/modules/reimbursement/components/approve-reimbursement/approve-reimbursement.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/reimbursement/components/approve-reimbursement/approve-reimbursement.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ApproveReimbursementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveReimbursementComponent", function() { return ApproveReimbursementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ApproveReimbursementComponent = /** @class */ (function () {
    function ApproveReimbursementComponent() {
    }
    ApproveReimbursementComponent.prototype.ngOnInit = function () {
    };
    ApproveReimbursementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-approve-reimbursement',
            template: __webpack_require__(/*! ./approve-reimbursement.component.html */ "./src/app/modules/reimbursement/components/approve-reimbursement/approve-reimbursement.component.html"),
            styles: [__webpack_require__(/*! ./approve-reimbursement.component.css */ "./src/app/modules/reimbursement/components/approve-reimbursement/approve-reimbursement.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ApproveReimbursementComponent);
    return ApproveReimbursementComponent;
}());



/***/ }),

/***/ "./src/app/modules/reimbursement/components/new-reimbursement/new-reimbursement.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/reimbursement/components/new-reimbursement/new-reimbursement.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVpbWJ1cnNlbWVudC9jb21wb25lbnRzL25ldy1yZWltYnVyc2VtZW50L25ldy1yZWltYnVyc2VtZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/reimbursement/components/new-reimbursement/new-reimbursement.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/reimbursement/components/new-reimbursement/new-reimbursement.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h3>New Reimbursement</h3>\r\n  <form (ngSubmit)=\"onSubmit()\" #reimbursementForm=\"ngForm\">\r\n    <div class=\"form-group\">\r\n      <label for=\"description\">Description: </label>\r\n      <input type=\"text\" id=\"description\" required [(ngModel)]=\"newReimbursement.description\" name=\"description\">\r\n    </div>\r\n    <div>\r\n      <label for=\"amount\">Amount: </label>\r\n      <input type=\"number\" id=\"amount\" required [(ngModel)]=\"newReimbursement.amount\" name=\"amount\">\r\n    </div>\r\n    <div>\r\n      <label for=\"type\">Type: </label>\r\n      <select id=\"type\" [(ngModel)]=\"newReimbursement.type\" name=\"type\">\r\n        <option value=\"Travel\">Travel</option>\r\n        <option value=\"Lodging\">Lodging</option>\r\n        <option value=\"Food\">Food</option>\r\n        <option value=\"Other\">Other</option>\r\n      </select>\r\n    </div>\r\n    <button type=\"submit\" [disabled]=\"!reimbursementForm.form.valid\">Submit</button>\r\n    <button type=\"reset\">Reset Form</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/reimbursement/components/new-reimbursement/new-reimbursement.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/reimbursement/components/new-reimbursement/new-reimbursement.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: NewReimbursementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewReimbursementComponent", function() { return NewReimbursementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _reimbursement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reimbursement */ "./src/app/modules/reimbursement/reimbursement.ts");
/* harmony import */ var _services_reimbursement_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/reimbursement-service.service */ "./src/app/modules/reimbursement/services/reimbursement-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var NewReimbursementComponent = /** @class */ (function () {
    function NewReimbursementComponent(reimbursementService, router) {
        this.reimbursementService = reimbursementService;
        this.router = router;
        this.newReimbursement = new _reimbursement__WEBPACK_IMPORTED_MODULE_2__["Reimbursement"];
    }
    NewReimbursementComponent.prototype.ngOnInit = function () {
        var employee;
        employee = JSON.parse(localStorage.getItem('authToken'));
        this.newReimbursement.authorId = employee.id;
        this.newReimbursement.id = 0;
        this.newReimbursement.description = '';
        this.newReimbursement.type = '';
        this.newReimbursement.amount;
    };
    NewReimbursementComponent.prototype.onSubmit = function () {
        var _this = this;
        this.reimbursementService.createReimbursement(this.newReimbursement, function () {
            _this.router.navigateByUrl('main/employee/profile');
        }, function (err) {
            console.log(err);
        });
    };
    NewReimbursementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-reimbursement',
            template: __webpack_require__(/*! ./new-reimbursement.component.html */ "./src/app/modules/reimbursement/components/new-reimbursement/new-reimbursement.component.html"),
            styles: [__webpack_require__(/*! ./new-reimbursement.component.css */ "./src/app/modules/reimbursement/components/new-reimbursement/new-reimbursement.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_reimbursement_service_service__WEBPACK_IMPORTED_MODULE_3__["ReimbursementServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NewReimbursementComponent);
    return NewReimbursementComponent;
}());



/***/ }),

/***/ "./src/app/modules/reimbursement/components/rebursements/rebursements.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/reimbursement/components/rebursements/rebursements.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVpbWJ1cnNlbWVudC9jb21wb25lbnRzL3JlYnVyc2VtZW50cy9yZWJ1cnNlbWVudHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/reimbursement/components/rebursements/rebursements.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/reimbursement/components/rebursements/rebursements.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <table>\r\n    <tr>\r\n      <th>Id</th><th>Author</th><th>Description</th><th>Amount</th><th>Status</th><th>Type</th><th>Resolver</th><th>To Details</th>\r\n    </tr>\r\n    <tr *ngFor=\"let reimbursement of reimbursementsPile\">\r\n      <td>{{reimbursement.id}}</td>\r\n      <td>{{reimbursement.authorName}}</td>\r\n      <td>{{reimbursement.description}}</td>\r\n      <td>${{reimbursement.amount}}</td>\r\n      <td>{{reimbursement.status}}</td>\r\n      <td>{{reimbursement.type}}</td>\r\n      <td>{{reimbursement.resolverName}}</td>\r\n      <td><button (click)=\"loadDetails(reimbursement.id)\">To Details</button></td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/reimbursement/components/rebursements/rebursements.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/reimbursement/components/rebursements/rebursements.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: RebursementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RebursementsComponent", function() { return RebursementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_reimbursement_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/reimbursement-service.service */ "./src/app/modules/reimbursement/services/reimbursement-service.service.ts");
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/auth-service.service */ "./src/app/services/auth-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RebursementsComponent = /** @class */ (function () {
    function RebursementsComponent(authService, reimbursementService, router, route) {
        this.authService = authService;
        this.reimbursementService = reimbursementService;
        this.router = router;
        this.route = route;
    }
    RebursementsComponent.prototype.ngOnInit = function () {
        this.getReimbursements();
        this.managerState = this.authService.hasRoles(['Manager']);
    };
    RebursementsComponent.prototype.getReimbursements = function () {
        if (this.authService.hasRoles(['Manager'])) {
            this.getAllReimbursements();
            return;
        }
        else {
            this.getUserReimbursements();
            return;
        }
    };
    RebursementsComponent.prototype.getAllReimbursements = function () {
        var _this = this;
        this.reimbursementService.getReimbursements(function () {
            var reimbArr = JSON.parse(localStorage.getItem('reimbursements'));
            _this.reimbursementsPile = reimbArr;
            return;
        }, function (err) {
            console.log(err);
        });
    };
    RebursementsComponent.prototype.getUserReimbursements = function () {
        var _this = this;
        var employee = JSON.parse(localStorage.getItem('authToken'));
        this.reimbursementService.getUserReimbursements(employee.id, function () {
            var reimbArr = JSON.parse(localStorage.getItem('reimbursements'));
            var i;
            for (i = 0; i < reimbArr.length; i++) {
                reimbArr[i].submissionDate = new Date(reimbArr[i].submitted);
            }
            _this.reimbursementsPile = reimbArr;
        }, function (err) {
            console.log(err);
        });
    };
    RebursementsComponent.prototype.loadDetails = function (id) {
        var _this = this;
        if (this.authService.hasRoles(['Manager'])) {
            this.reimbursementService.getReimbursement(id, function () { return _this.router.navigateByUrl('/main/manager/reimbursements/details/' + id.toString()); }, function (err) {
                console.log(err);
            });
        }
        else {
            this.reimbursementService.getReimbursement(id, function () { return _this.router.navigateByUrl('/main/employee/reimbursements/details/' + id.toString()); }, function (err) {
                console.log(err);
            });
        }
    };
    RebursementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rebursements',
            template: __webpack_require__(/*! ./rebursements.component.html */ "./src/app/modules/reimbursement/components/rebursements/rebursements.component.html"),
            styles: [__webpack_require__(/*! ./rebursements.component.css */ "./src/app/modules/reimbursement/components/rebursements/rebursements.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"],
            _services_reimbursement_service_service__WEBPACK_IMPORTED_MODULE_2__["ReimbursementServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], RebursementsComponent);
    return RebursementsComponent;
}());



/***/ }),

/***/ "./src/app/modules/reimbursement/components/reimbursement-detail/reimbursement-detail.component.css":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/reimbursement/components/reimbursement-detail/reimbursement-detail.component.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVpbWJ1cnNlbWVudC9jb21wb25lbnRzL3JlaW1idXJzZW1lbnQtZGV0YWlsL3JlaW1idXJzZW1lbnQtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/reimbursement/components/reimbursement-detail/reimbursement-detail.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/reimbursement/components/reimbursement-detail/reimbursement-detail.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!editing\">\r\n<table>\r\n  <tr>\r\n    <th>Id</th><th>Author</th><th>Description</th><th>Amount</th><th>Status</th><th>Type</th><th>Resolver</th>\r\n  </tr>\r\n  <tr>\r\n    <td>{{reimbursement.id}}</td>\r\n    <td>{{reimbursement.authorName}}</td>\r\n    <td>{{reimbursement.description}}</td>\r\n    <td>{{reimbursement.amount}}</td>\r\n    <td>{{reimbursement.status}}</td>\r\n    <td>{{reimbursement.type}}</td>\r\n    <td>{{reimbursement.resolverName}}</td>\r\n  </tr>\r\n</table>\r\n<button *ngIf=\"isManager()\" (click)=\"startEdit()\">Update Reimbursement</button>\r\n<br>\r\n</div>\r\n<div *ngIf=\"editing\">\r\n  <form (ngSubmit)=\"onSubmit()\" #approvalForm=\"ngForm\">\r\n    <div class=\"form-group\">\r\n      <label>{{reimbursement.id}}</label><br>\r\n      <label>{{reimbursement.authorName}}</label><br>\r\n      <label>{{reimbursement.description}}</label><br>\r\n      <label>${{reimbursement.amount}}</label><br>\r\n      <label>{{reimbursement.type}}</label>\r\n    </div>\r\n    <div>\r\n      <label for=\"newStatus\">New Status:</label>\r\n      <select id=\"newStatus\" [(ngModel)]=\"reimbursement.status\" name=\"status\">\r\n        <option value=\"approved\">Approved</option>\r\n        <option value=\"denied\">Denied</option>\r\n      </select>\r\n    </div>\r\n    <button type=\"submit\" [disabled]=\"isActiveUser()\">Submit</button>\r\n  </form>\r\n</div>\r\n<br>\r\n<button (click)=\"goBack()\">Return</button>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/reimbursement/components/reimbursement-detail/reimbursement-detail.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/reimbursement/components/reimbursement-detail/reimbursement-detail.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ReimbursementDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReimbursementDetailComponent", function() { return ReimbursementDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_reimbursement_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/reimbursement-service.service */ "./src/app/modules/reimbursement/services/reimbursement-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/auth-service.service */ "./src/app/services/auth-service.service.ts");







var ReimbursementDetailComponent = /** @class */ (function () {
    function ReimbursementDetailComponent(route, reimbursementService, location, http, authService) {
        this.route = route;
        this.reimbursementService = reimbursementService;
        this.location = location;
        this.http = http;
        this.authService = authService;
        this.editing = false;
        this.reimbursementUrl = 'http://localhost:8080/ticket';
    }
    ReimbursementDetailComponent.prototype.ngOnInit = function () {
        this.getReimbursement();
    };
    ReimbursementDetailComponent.prototype.getReimbursement = function () {
        this.reimbursement = JSON.parse(localStorage.getItem('reimbursement'));
    };
    ReimbursementDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    ReimbursementDetailComponent.prototype.startEdit = function () {
        this.editing = true;
    };
    ReimbursementDetailComponent.prototype.onSubmit = function () {
        var _this = this;
        var employee;
        employee = JSON.parse(localStorage.getItem('authToken'));
        this.reimbursement.resolverId = employee.id;
        this.reimbursementService.updateReimbursement(this.reimbursement, function () {
            _this.editing = false;
            _this.goBack();
        }, function (err) {
            console.log(err);
            _this.goBack();
        });
    };
    ReimbursementDetailComponent.prototype.isManager = function () {
        return this.authService.hasRoles(['Manager']);
    };
    ReimbursementDetailComponent.prototype.isActiveUser = function () {
        var employee;
        employee = JSON.parse(localStorage.getItem('authToken'));
        if (this.reimbursement.authorId === employee.id) {
            return true;
        }
        else {
            return false;
        }
    };
    ReimbursementDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reimbursement-detail',
            template: __webpack_require__(/*! ./reimbursement-detail.component.html */ "./src/app/modules/reimbursement/components/reimbursement-detail/reimbursement-detail.component.html"),
            styles: [__webpack_require__(/*! ./reimbursement-detail.component.css */ "./src/app/modules/reimbursement/components/reimbursement-detail/reimbursement-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_reimbursement_service_service__WEBPACK_IMPORTED_MODULE_3__["ReimbursementServiceService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _services_auth_service_service__WEBPACK_IMPORTED_MODULE_6__["AuthServiceService"]])
    ], ReimbursementDetailComponent);
    return ReimbursementDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/reimbursement/reimbursement.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/reimbursement/reimbursement.module.ts ***!
  \***************************************************************/
/*! exports provided: ReimbursementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReimbursementModule", function() { return ReimbursementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_rebursements_rebursements_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/rebursements/rebursements.component */ "./src/app/modules/reimbursement/components/rebursements/rebursements.component.ts");
/* harmony import */ var _components_reimbursement_detail_reimbursement_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/reimbursement-detail/reimbursement-detail.component */ "./src/app/modules/reimbursement/components/reimbursement-detail/reimbursement-detail.component.ts");
/* harmony import */ var _components_new_reimbursement_new_reimbursement_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/new-reimbursement/new-reimbursement.component */ "./src/app/modules/reimbursement/components/new-reimbursement/new-reimbursement.component.ts");
/* harmony import */ var _components_approve_reimbursement_approve_reimbursement_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/approve-reimbursement/approve-reimbursement.component */ "./src/app/modules/reimbursement/components/approve-reimbursement/approve-reimbursement.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var ReimbursementModule = /** @class */ (function () {
    function ReimbursementModule() {
    }
    ReimbursementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_rebursements_rebursements_component__WEBPACK_IMPORTED_MODULE_3__["RebursementsComponent"], _components_reimbursement_detail_reimbursement_detail_component__WEBPACK_IMPORTED_MODULE_4__["ReimbursementDetailComponent"], _components_new_reimbursement_new_reimbursement_component__WEBPACK_IMPORTED_MODULE_5__["NewReimbursementComponent"], _components_approve_reimbursement_approve_reimbursement_component__WEBPACK_IMPORTED_MODULE_6__["ApproveReimbursementComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            exports: [
                _components_rebursements_rebursements_component__WEBPACK_IMPORTED_MODULE_3__["RebursementsComponent"], _components_reimbursement_detail_reimbursement_detail_component__WEBPACK_IMPORTED_MODULE_4__["ReimbursementDetailComponent"], _components_new_reimbursement_new_reimbursement_component__WEBPACK_IMPORTED_MODULE_5__["NewReimbursementComponent"], _components_approve_reimbursement_approve_reimbursement_component__WEBPACK_IMPORTED_MODULE_6__["ApproveReimbursementComponent"]
            ]
        })
    ], ReimbursementModule);
    return ReimbursementModule;
}());



/***/ }),

/***/ "./src/app/modules/reimbursement/reimbursement.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/reimbursement/reimbursement.ts ***!
  \********************************************************/
/*! exports provided: Reimbursement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reimbursement", function() { return Reimbursement; });
var Reimbursement = /** @class */ (function () {
    function Reimbursement() {
    }
    return Reimbursement;
}());



/***/ }),

/***/ "./src/app/modules/reimbursement/services/reimbursement-service.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/reimbursement/services/reimbursement-service.service.ts ***!
  \*********************************************************************************/
/*! exports provided: ReimbursementServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReimbursementServiceService", function() { return ReimbursementServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ReimbursementServiceService = /** @class */ (function () {
    function ReimbursementServiceService(http) {
        this.http = http;
        this.reimbursementUrl = 'http://localhost:8080/ticket';
    }
    ReimbursementServiceService.prototype.getUserReimbursements = function (userId, success, fail) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('userId', userId.toString());
        return this.http.get(this.reimbursementUrl, { params: params }).toPromise()
            .then(function (resp) {
            localStorage.setItem('reimbursements', JSON.stringify(resp));
            console.log('Got user reimbursements');
            success();
        }, function (err) {
            fail(err);
        });
    };
    ReimbursementServiceService.prototype.getReimbursements = function (success, fail) {
        return this.http.get(this.reimbursementUrl).toPromise()
            .then(function (resp) {
            localStorage.setItem('reimbursements', JSON.stringify(resp));
            console.log('Got all reimbursements');
            success();
        }, function (err) {
            fail(err);
        });
    };
    ReimbursementServiceService.prototype.getRecentReimbursements = function (userId, success, fail) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('userId', userId.toString()).set('recent', 'true');
        return this.http.get(this.reimbursementUrl, { params: params }).toPromise()
            .then(function (resp) {
            localStorage.setItem('reimbursements', JSON.stringify(resp));
            success();
        }, function (err) {
            fail(err);
        });
    };
    ReimbursementServiceService.prototype.getReimbursement = function (reimbursementId, success, fail) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('reimbursementId', reimbursementId.toString());
        return this.http.get(this.reimbursementUrl, { params: params }).toPromise()
            .then(function (resp) {
            localStorage.setItem('reimbursement', JSON.stringify(resp));
            success();
        }, function (err) {
            fail(err);
        });
    };
    ReimbursementServiceService.prototype.updateReimbursement = function (reimbursement, success, fail) {
        return this.http.post(this.reimbursementUrl, JSON.stringify(reimbursement)).toPromise()
            .then(function (resp) {
            success();
        }, function (err) {
            fail(err);
        });
    };
    ReimbursementServiceService.prototype.createReimbursement = function (reimbursement, success, fail) {
        return this.http.post(this.reimbursementUrl, JSON.stringify(reimbursement)).toPromise()
            .then(function (resp) {
            success();
        }, function (err) {
            fail(err);
        });
    };
    ReimbursementServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ReimbursementServiceService);
    return ReimbursementServiceService;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n  list-style: none;\r\n  border-bottom: 1px solid #bbbb;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nli {\r\n  display: inline-block;\r\n  margin-right: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JiYmI7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmxpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\r\n  <ul>\r\n    <li *ngFor=\"let item of navItems\">\r\n      <a [routerLink]=[item.link] class=\"nav-link\">{{item.title}}</a>\r\n    </li>\r\n    <button type=\"submit\" (click)=\"logout()\">Logout</button>\r\n  </ul>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth-service.service */ "./src/app/services/auth-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'logout';
    };
    NavigationComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate([this.returnUrl]);
        window.location.reload();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], NavigationComponent.prototype, "navItems", void 0);
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/services/auth-guard-service.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/auth-guard-service.service.ts ***!
  \********************************************************/
/*! exports provided: AuthGuardServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardServiceService", function() { return AuthGuardServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuardServiceService = /** @class */ (function () {
    function AuthGuardServiceService(router) {
        this.router = router;
    }
    AuthGuardServiceService.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('authToken')) {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuardServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardServiceService);
    return AuthGuardServiceService;
}());



/***/ }),

/***/ "./src/app/services/auth-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/auth-service.service.ts ***!
  \**************************************************/
/*! exports provided: AuthServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServiceService", function() { return AuthServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AuthServiceService = /** @class */ (function () {
    function AuthServiceService(http) {
        this.http = http;
        this.authUrl = 'http://localhost:8080/login/auth';
    }
    AuthServiceService.prototype.isLoggedIn = function () {
        return localStorage.getItem('authToken') !== null;
    };
    AuthServiceService.prototype.hasRoles = function (roles) {
        var tokenRoles = JSON.parse(localStorage.getItem('authToken')).role;
        return roles.every(function (role) { return tokenRoles.indexOf(role) >= 0; });
    };
    AuthServiceService.prototype.authenticate = function (username, password, success, fail) {
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
    AuthServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthServiceService);
    return AuthServiceService;
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
            title: 'Reimbursements',
            link: 'manager/reimbursements'
        },
        {
            title: 'Employees',
            link: 'manager/employees'
        },
        {
            title: 'New Employee',
            link: 'manager/create-employee'
        },
        {
            title: 'New Reimbursement',
            link: 'employee/create-reimbursement'
        },
        {
            title: 'Profile',
            link: 'employee/profile'
        }
    ],
    employeeNav: [
        {
            title: 'Reimbursements',
            link: 'employee/reimbursements'
        },
        {
            title: 'New Reimbursement',
            link: 'employee/create-reimbursement'
        },
        {
            title: 'Profile',
            link: 'employee/profile'
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