(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-agencies-agencies-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/agencies/agencies-list/agencies-list.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/agencies/agencies-list/agencies-list.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <div class=\"agencies\" *ngIf=\"agencies$ | async as agencies; else notFound\">\n    <app-agency-card *ngFor=\"let agency of agencies\" [agency] = \"agency\" [routerLink]=\"['/agencies', agency.id]\">\n    </app-agency-card>\n  </div>\n  <ng-template #notFound>\n    <mat-card>\n      <mat-card-title>\n        Either you have no agencies\n      </mat-card-title>\n    </mat-card>\n  </ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/agencies/agency-card/agency-card.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/agencies/agency-card/agency-card.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<mat-card>\n    <div mat-card-avatar class=\"agency-header-image\"></div>\n    <mat-card-title>{{ agency.agencia }}</mat-card-title>\n    <mat-card-subtitle>{{ agency.provincia }}</mat-card-subtitle>   \n</mat-card>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/agencies/agency-details/agency-details.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/agencies/agency-details/agency-details.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"agency$ | async as agency; else spinner\">\n\n    <mat-card>\n        <mat-card-subtitle class=\"error\" *ngIf=\"errorMessages$ | async as errorMessage\">\n            {{ errorMessage }}\n        </mat-card-subtitle>\n        <mat-card-content>\n            <app-agency-form [agency]=\"agency\" (saveAgency)=\"saveAgency($event)\" (sendError)=\"sendError($event)\"></app-agency-form>\n        </mat-card-content>\n    </mat-card>\n\n</div>\n\n<ng-template #spinner>\n    <mat-spinner></mat-spinner>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/agencies/agency-form/agency-form.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/agencies/agency-form/agency-form.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"note-container\" [formGroup]=\"agencyForm\">\n    <mat-form-field>\n      <input matInput placeholder=\"Nombre de agencia\" formControlName=\"name\" value={{agency.agencia}} required>\n    </mat-form-field>\n    <br>\n    <mat-form-field>\n      <textarea matInput placeholder=\"Direccion\" formControlName=\"address\" value={{agency.direccion}} required cdkTextareaAutosize></textarea>\n    </mat-form-field>\n    <mat-form-field>\n        <input matInput placeholder=\"Distrito\" formControlName=\"name\" value={{agency.distrito}} required>\n      </mat-form-field>\n      <br> \n      <mat-form-field>\n        <input matInput placeholder=\"Latitud\" formControlName=\"name\" value={{agency.lat}} required>\n      </mat-form-field>\n      <br>  \n      <mat-form-field>\n        <input matInput placeholder=\"Longitud\" formControlName=\"name\" value={{agency.lon}} required>\n      </mat-form-field>\n      <br>\n  </div>\n  <br>\n  <br>\n  <div class=\"text-right\">\n    <button mat-raised-button color=\"primary\" (click)=\"addAgency()\">Actualizar</button>\n  </div>");

/***/ }),

/***/ "./src/app/modules/agencies/agencies-list/agencies-list.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/agencies/agencies-list/agencies-list.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWdlbmNpZXMvYWdlbmNpZXMtbGlzdC9hZ2VuY2llcy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/agencies/agencies-list/agencies-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/agencies/agencies-list/agencies-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: AgenciesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgenciesListComponent", function() { return AgenciesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/data.service */ "./src/app/modules/core/data.service.ts");



let AgenciesListComponent = class AgenciesListComponent {
    constructor(db) {
        this.db = db;
        this.title = "Detalle de la agencia";
    }
    ngOnInit() {
        this.agencies$ = this.db.getAgencies();
        this.isDbLoading$ = this.db.isLoading$;
    }
};
AgenciesListComponent.ctorParameters = () => [
    { type: _core_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
AgenciesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-agencies-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./agencies-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/agencies/agencies-list/agencies-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./agencies-list.component.scss */ "./src/app/modules/agencies/agencies-list/agencies-list.component.scss")).default]
    })
], AgenciesListComponent);



/***/ }),

/***/ "./src/app/modules/agencies/agencies-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/agencies/agencies-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AgenciesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgenciesRoutingModule", function() { return AgenciesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _agencies_list_agencies_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agencies-list/agencies-list.component */ "./src/app/modules/agencies/agencies-list/agencies-list.component.ts");
/* harmony import */ var _agency_details_agency_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./agency-details/agency-details.component */ "./src/app/modules/agencies/agency-details/agency-details.component.ts");





const routes = [
    {
        path: "",
        component: _agencies_list_agencies_list_component__WEBPACK_IMPORTED_MODULE_3__["AgenciesListComponent"]
    },
    {
        path: ":id",
        component: _agency_details_agency_details_component__WEBPACK_IMPORTED_MODULE_4__["AgencyDetailsComponent"]
    }
];
let AgenciesRoutingModule = class AgenciesRoutingModule {
};
AgenciesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AgenciesRoutingModule);



/***/ }),

/***/ "./src/app/modules/agencies/agencies.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/agencies/agencies.module.ts ***!
  \*****************************************************/
/*! exports provided: AgenciesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgenciesModule", function() { return AgenciesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _agencies_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agencies-routing.module */ "./src/app/modules/agencies/agencies-routing.module.ts");
/* harmony import */ var _agencies_list_agencies_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./agencies-list/agencies-list.component */ "./src/app/modules/agencies/agencies-list/agencies-list.component.ts");
/* harmony import */ var _agency_details_agency_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agency-details/agency-details.component */ "./src/app/modules/agencies/agency-details/agency-details.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _agency_card_agency_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./agency-card/agency-card.component */ "./src/app/modules/agencies/agency-card/agency-card.component.ts");
/* harmony import */ var _agency_form_agency_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./agency-form/agency-form.component */ "./src/app/modules/agencies/agency-form/agency-form.component.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layout/layout.module */ "./src/app/modules/layout/layout.module.ts");










let AgenciesModule = class AgenciesModule {
};
AgenciesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _agencies_list_agencies_list_component__WEBPACK_IMPORTED_MODULE_4__["AgenciesListComponent"],
            _agency_details_agency_details_component__WEBPACK_IMPORTED_MODULE_5__["AgencyDetailsComponent"],
            _agency_card_agency_card_component__WEBPACK_IMPORTED_MODULE_7__["AgencyCardComponent"], _agency_form_agency_form_component__WEBPACK_IMPORTED_MODULE_8__["AgencyFormComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _agencies_routing_module__WEBPACK_IMPORTED_MODULE_3__["AgenciesRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"]
        ]
    })
], AgenciesModule);



/***/ }),

/***/ "./src/app/modules/agencies/agency-card/agency-card.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/agencies/agency-card/agency-card.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".space-between {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.agency-header-image {\n  background-image: url(\"/assets/img/agencia1.jpg\");\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWdkYWp1YXJlei9EZXNrdG9wL3NvdXJjZV9jb2RlL2JjcHRlc3RhcHAvc3JjL2FwcC9tb2R1bGVzL2FnZW5jaWVzL2FnZW5jeS1jYXJkL2FnZW5jeS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FnZW5jaWVzL2FnZW5jeS1jYXJkL2FnZW5jeS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7VUFBQSxPQUFBO0FDQ0o7O0FERUE7RUFDSSxpREFBQTtFQUNBLHNCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FnZW5jaWVzL2FnZW5jeS1jYXJkL2FnZW5jeS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNlLWJldHdlZW4ge1xuICAgIGZsZXg6MTtcbn1cblxuLmFnZW5jeS1oZWFkZXItaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvYWdlbmNpYTEuanBnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn0iLCIuc3BhY2UtYmV0d2VlbiB7XG4gIGZsZXg6IDE7XG59XG5cbi5hZ2VuY3ktaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvYWdlbmNpYTEuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/agencies/agency-card/agency-card.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/agencies/agency-card/agency-card.component.ts ***!
  \***********************************************************************/
/*! exports provided: AgencyCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgencyCardComponent", function() { return AgencyCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AgencyCardComponent = class AgencyCardComponent {
    constructor() {
        this.edit = true;
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AgencyCardComponent.prototype, "agency", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AgencyCardComponent.prototype, "loading", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AgencyCardComponent.prototype, "edit", void 0);
AgencyCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-agency-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./agency-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/agencies/agency-card/agency-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./agency-card.component.scss */ "./src/app/modules/agencies/agency-card/agency-card.component.scss")).default]
    })
], AgencyCardComponent);



/***/ }),

/***/ "./src/app/modules/agencies/agency-details/agency-details.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/agencies/agency-details/agency-details.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWdlbmNpZXMvYWdlbmN5LWRldGFpbHMvYWdlbmN5LWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/agencies/agency-details/agency-details.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/agencies/agency-details/agency-details.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AgencyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgencyDetailsComponent", function() { return AgencyDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/data.service */ "./src/app/modules/core/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_snack_bar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/snack-bar.service */ "./src/app/modules/core/snack-bar.service.ts");






let AgencyDetailsComponent = class AgencyDetailsComponent {
    constructor(data, route, snackBar) {
        this.data = data;
        this.route = route;
        this.snackBar = snackBar;
        this.errorMessages$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.showDetails = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.title = "Detalle de la agencia";
    }
    ngOnInit() {
        this.showDetails.emit(this.title);
        const id = this.route.snapshot.paramMap.get("id");
        this.id = id;
        this.agency$ = this.data.getAgency(id);
        this.isDbLoading$ = this.data.isLoading$;
    }
    edit() {
        this.isEdit = !this.isEdit;
    }
    saveAgency(values) {
        this.data
            .editAgency(this.id, values)
            .then(() => {
            this.snackBar.open("Successfully done");
            this.edit();
        })
            .catch(e => {
            this.snackBar.open("Unable to edit this note");
            this.edit();
        });
    }
    sendError(message) {
        this.errorMessages$.next(message);
    }
};
AgencyDetailsComponent.ctorParameters = () => [
    { type: _core_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _core_snack_bar_service__WEBPACK_IMPORTED_MODULE_5__["SnackBarService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AgencyDetailsComponent.prototype, "showDetails", void 0);
AgencyDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-agency-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./agency-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/agencies/agency-details/agency-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./agency-details.component.scss */ "./src/app/modules/agencies/agency-details/agency-details.component.scss")).default]
    })
], AgencyDetailsComponent);



/***/ }),

/***/ "./src/app/modules/agencies/agency-form/agency-form.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/agencies/agency-form/agency-form.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWdlbmNpZXMvYWdlbmN5LWZvcm0vYWdlbmN5LWZvcm0uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/agencies/agency-form/agency-form.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/agencies/agency-form/agency-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: AgencyFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgencyFormComponent", function() { return AgencyFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let AgencyFormComponent = class AgencyFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.saveAgency = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sendError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.createForm();
        if (this.agency) {
            this.agencyForm.patchValue(this.agency);
        }
    }
    createForm() {
        this.agencyForm = this.fb.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    addAgency() {
        if (this.agencyForm.valid) {
            this.saveAgency.emit(this.agencyForm.value);
        }
        else {
            this.sendError.emit("please fill all fields");
        }
    }
};
AgencyFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AgencyFormComponent.prototype, "agency", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AgencyFormComponent.prototype, "saveAgency", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AgencyFormComponent.prototype, "sendError", void 0);
AgencyFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-agency-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./agency-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/agencies/agency-form/agency-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./agency-form.component.scss */ "./src/app/modules/agencies/agency-form/agency-form.component.scss")).default]
    })
], AgencyFormComponent);



/***/ }),

/***/ "./src/app/modules/core/data.service.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/core/data.service.ts ***!
  \**********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let DataService = class DataService {
    constructor(afDb) {
        this.afDb = afDb;
        this.AGENCIES_COLLECTION = "agencias";
        this.isLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](true);
    }
    get timestamp() {
        return new Date().getTime();
    }
    getAgenciesCollection() {
        return this.afDb.collection(this.AGENCIES_COLLECTION, ref => ref.orderBy("agencia"));
    }
    getAgencies() {
        return this.getAgenciesCollection()
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(snapshot => snapshot.map(a => {
            //Get document data
            const data = a.payload.doc.data();
            //Get document id
            const id = a.payload.doc.id;
            //Use spread operator to add the id to the document data
            return Object.assign({ id }, data);
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(agencies => {
            this.isLoading$.next(false);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(e)));
    }
    editAgency(id, data) {
        return this.getAgenciesCollection()
            .doc(id)
            .update(Object.assign({}, data, { updated_at: this.timestamp }));
    }
    getAgency(id) {
        return this.getAgenciesCollection()
            .doc(id)
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(snapshot => {
            const data = snapshot.payload.data();
            const id = snapshot.payload.id;
            return Object.assign({ id }, data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(e)));
    }
};
DataService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], DataService);



/***/ }),

/***/ "./src/app/modules/core/snack-bar.service.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/core/snack-bar.service.ts ***!
  \***************************************************/
/*! exports provided: SnackBarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackBarService", function() { return SnackBarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");



let SnackBarService = class SnackBarService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    open(message) {
        this.snackBar.open(message, null, {
            duration: 3500
        });
    }
    dismiss() {
        this.snackBar.dismiss();
    }
};
SnackBarService.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
SnackBarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SnackBarService);



/***/ })

}]);
//# sourceMappingURL=modules-agencies-agencies-module-es2015.js.map