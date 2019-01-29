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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
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

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_new_ticket_new_ticket_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/new-ticket/new-ticket.component */ "./src/app/components/new-ticket/new-ticket.component.ts");
/* harmony import */ var _components_update_ticket_update_ticket_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/update-ticket/update-ticket.component */ "./src/app/components/update-ticket/update-ticket.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_new_ticket_new_ticket_component__WEBPACK_IMPORTED_MODULE_5__["NewTicketComponent"],
                _components_update_ticket_update_ticket_component__WEBPACK_IMPORTED_MODULE_6__["UpdateTicketComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/new-ticket/new-ticket.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/new-ticket/new-ticket.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmV3LXRpY2tldC9uZXctdGlja2V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/new-ticket/new-ticket.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/new-ticket/new-ticket.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <label for=\"ticket\"><b>Expense Description</b></label>\r\n  <input type=\"text\" placeholder=\"Describe the expenses you wish to have reimbursed here\" name=\"ticket\" required>\r\n  \r\n  <label for=\"amt\"><b>Amount</b></label>\r\n  <input type=\"text\" placeholder=\"$\" name=\"amt\" required>\r\n\r\n\r\n  <label for=\"date\"><b>date of billing</b></label>\r\n  <input type=\"date\" name=\"date\" required>\r\n<br>\r\n      <input type=\"radio\" name=\"ticketType\" value=\"Food\">Food<br>\r\n      <input type=\"radio\" name=\"ticketType\" value=\"Lodging\">Lodging<br>\r\n      <input type=\"radio\" name=\"ticketType\" value=\"Travel\">Travel<br>\r\n      <input type=\"radio\" name=\"ticketType\" value=\"other\" checked>Other<br>\r\n\r\n\r\n  <label for=\"receipt\"><b>upload receipt data</b></label>\r\n  <input type = \"file\" name = \"receipt\" required>\r\n\r\n  <button type=\"submit\">Submit Ticket</button>\r\n  <button type=\"reset\">Cancel</button>\r\n</div>\r\n\r\n\r\n<button type=\"submit\">Back to Main Menu</button>\r\n<button type=\"submit\">Logout</button>\r\n"

/***/ }),

/***/ "./src/app/components/new-ticket/new-ticket.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/new-ticket/new-ticket.component.ts ***!
  \***************************************************************/
/*! exports provided: NewTicketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTicketComponent", function() { return NewTicketComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NewTicketComponent = /** @class */ (function () {
    function NewTicketComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    NewTicketComponent.prototype.ngOnInit = function () {
    };
    NewTicketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-ticket',
            template: __webpack_require__(/*! ./new-ticket.component.html */ "./src/app/components/new-ticket/new-ticket.component.html"),
            styles: [__webpack_require__(/*! ./new-ticket.component.css */ "./src/app/components/new-ticket/new-ticket.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], NewTicketComponent);
    return NewTicketComponent;
}());



/***/ }),

/***/ "./src/app/components/update-ticket/update-ticket.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/update-ticket/update-ticket.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n    width: 100%;\r\n    border: 1px solid #ddd;\r\n  }\r\n  \r\n  th, td {\r\n    text-align: left;\r\n    padding: 16px;\r\n  }\r\n  \r\n  tr:nth-child(even) {\r\n    background-color: #f2f2f2\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91cGRhdGUtdGlja2V0L3VwZGF0ZS10aWNrZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHVCQUF1QjtHQUN4Qjs7RUFFRDtJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0dBQ2Y7O0VBRUQ7SUFDRSx5QkFBeUI7R0FDMUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VwZGF0ZS10aWNrZXQvdXBkYXRlLXRpY2tldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIH1cclxuICBcclxuICB0aCwgdGQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyXHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/update-ticket/update-ticket.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/update-ticket/update-ticket.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <table>\r\n    <tr>\r\n      <th>Ticket Number</th>\r\n      <th>Submitted By</th>\r\n      <th>Date of submission</th>\r\n      <th>Type</th>\r\n      <th>Cost</th>\r\n      <th>Description</th>\r\n      <th>Approve/Deny</th>\r\n      <th></th>\r\n    </tr>\r\n  <tr>\r\n    <td>1</td>\r\n    <td>James O</td>\r\n    <td>Lodging</td>\r\n    <td>01/25/19</td>\r\n    <td>$110</td>\r\n    <td>Rent for IQ Apartments</td>\r\n    <td><input type=\"radio\" name=\"Approve/Deny\" value=\"Approve\">Approve<br>\r\n      <input type=\"radio\" name=\"Approve/Deny\" value=\"Deny\">Deny<br></td>\r\n      \r\n      <td><button type=\"submit\" [disabled]=\"Approve/Deny == null\">Update</button></td>\r\n  </tr>\r\n    \r\n  </table>\r\n\r\n<button type=\"submit\">Back to Main Menu</button>\r\n<button type=\"submit\">Logout</button>\r\n    \r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/components/update-ticket/update-ticket.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/update-ticket/update-ticket.component.ts ***!
  \*********************************************************************/
/*! exports provided: UpdateTicketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTicketComponent", function() { return UpdateTicketComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_model_ticket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app/model/ticket */ "./src/app/model/ticket.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




// -Admin-Exclusive
// -Pulls all Unchecked Tickets from database not submitted by user
// -Allows Admin to approve/deny tickets
// -Requires an amount to reimburse employee if approved
// -Logout
var UpdateTicketComponent = /** @class */ (function () {
    function UpdateTicketComponent(router, route) {
        this.router = router;
        this.route = route;
        this.tickets = [];
        this.temp = new _app_model_ticket__WEBPACK_IMPORTED_MODULE_2__["Ticket"](0, null, '', '', 0, '', '', '');
    }
    UpdateTicketComponent.prototype.ngOnInit = function () {
    };
    UpdateTicketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-ticket',
            template: __webpack_require__(/*! ./update-ticket.component.html */ "./src/app/components/update-ticket/update-ticket.component.html"),
            styles: [__webpack_require__(/*! ./update-ticket.component.css */ "./src/app/components/update-ticket/update-ticket.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], UpdateTicketComponent);
    return UpdateTicketComponent;
}());



/***/ }),

/***/ "./src/app/model/ticket.ts":
/*!*********************************!*\
  !*** ./src/app/model/ticket.ts ***!
  \*********************************/
/*! exports provided: Ticket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ticket", function() { return Ticket; });
var Ticket = /** @class */ (function () {
    // Ticket ID, Submission Date, Type, Description, Cost, Status, Updated By, Date of Approval/Denial
    function Ticket(id, subDate, type, description, cost, status, updater, approveDeny) {
    }
    return Ticket;
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
    production: false
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

module.exports = __webpack_require__(/*! D:\Programming\project_1\ers-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map