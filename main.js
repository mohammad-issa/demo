(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mohammadissa/Desktop/jesus/abu-shaqdam/src/main.ts */"zUnb");


/***/ }),

/***/ "3YiQ":
/*!********************************************!*\
  !*** ./src/app/models/models.component.ts ***!
  \********************************************/
/*! exports provided: ModelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelsComponent", function() { return ModelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ModelsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ModelsComponent.ɵfac = function ModelsComponent_Factory(t) { return new (t || ModelsComponent)(); };
ModelsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModelsComponent, selectors: [["app-models"]], decls: 2, vars: 0, template: function ModelsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "models works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RlbHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "5H6s":
/*!**************************************************!*\
  !*** ./src/app/controles/controles.component.ts ***!
  \**************************************************/
/*! exports provided: ControlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlesComponent", function() { return ControlesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_editor_editor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/editor/editor.service */ "IhKX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");




const _c0 = function (a0) { return { "background-image": a0 }; };
function ControlesComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const frame_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, "url(" + frame_r9.url + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](frame_r9.name);
} }
function ControlesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Frames");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ControlesComponent_div_1_div_4_Template, 4, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.door.frames);
} }
function ControlesComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const board_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, "url(" + board_r11.url + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](board_r11.name);
} }
function ControlesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Lengthwise");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ControlesComponent_div_2_div_4_Template, 4, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.door.lengthwise);
} }
function ControlesComponent_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const board_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, "url(" + board_r13.url + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](board_r13.name);
} }
function ControlesComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Crosswise");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ControlesComponent_div_3_div_4_Template, 4, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.door.crosswise);
} }
function ControlesComponent_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const board_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, "url(" + board_r15.url + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](board_r15.name);
} }
function ControlesComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "45 Degree");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ControlesComponent_div_4_div_4_Template, 4, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.door["45-degree"]);
} }
function ControlesComponent_div_5_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const board_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, "url(" + board_r17.url + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](board_r17.name);
} }
function ControlesComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edges");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ControlesComponent_div_5_div_4_Template, 4, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.door.edges);
} }
function ControlesComponent_div_6_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const board_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, "url(" + board_r19.url + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](board_r19.name);
} }
function ControlesComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Short Handles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ControlesComponent_div_6_div_4_Template, 4, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.door["short-handles"]);
} }
function ControlesComponent_div_7_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const board_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, "url(" + board_r21.url + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](board_r21.name);
} }
function ControlesComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Long Handles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ControlesComponent_div_7_div_4_Template, 4, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.door["long-handles"]);
} }
const _c1 = function (a0) { return { "background-color": a0 }; };
function ControlesComponent_div_8_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlesComponent_div_8_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const divider_r23 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.editorService.selectedDividers = divider_r23; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const divider_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, divider_r23));
} }
function ControlesComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dividers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ControlesComponent_div_8_div_4_Template, 1, 3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.door.dividers);
} }
const _c2 = function (a0) { return { "disabled": a0 }; };
class ControlesComponent {
    constructor(editorService) {
        this.editorService = editorService;
    }
    ngOnInit() {
    }
}
ControlesComponent.ɵfac = function ControlesComponent_Factory(t) { return new (t || ControlesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_editor_editor_service__WEBPACK_IMPORTED_MODULE_1__["EditorService"])); };
ControlesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ControlesComponent, selectors: [["app-controles"]], inputs: { door: "door", doorName: "doorName" }, decls: 9, vars: 11, consts: [[1, "controles-wrapper", 3, "ngClass"], ["class", "controle-row", 4, "ngIf"], [1, "controle-row"], [1, "row-title"], [1, "preview-items"], ["cdkDropList", "", 4, "ngFor", "ngForOf"], ["cdkDropList", ""], ["cdkDrag", "", 1, "preview-item", "frame-item", 3, "ngStyle"], [1, "item-name"], ["cdkDrag", "", 1, "preview-item", "board-item", 3, "ngStyle"], [4, "ngFor", "ngForOf"], [1, "preview-item", "board-item", 3, "ngStyle"], [1, "preview-items", "short-handles"], ["cdkDrag", "", 1, "preview-item", "handle-item", "short-handle-item", 3, "ngStyle"], [1, "preview-items", "long-handles"], ["cdkDrag", "", 1, "preview-item", "handle-item", "long-handle-item", 3, "ngStyle"], [1, "preview-items", "dividers"], ["class", "preview-item divider-item", 3, "ngStyle", "click", 4, "ngFor", "ngForOf"], [1, "preview-item", "divider-item", 3, "ngStyle", "click"]], template: function ControlesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ControlesComponent_div_1_Template, 5, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ControlesComponent_div_2_Template, 5, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ControlesComponent_div_3_Template, 5, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ControlesComponent_div_4_Template, 5, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ControlesComponent_div_5_Template, 5, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ControlesComponent_div_6_Template, 5, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ControlesComponent_div_7_Template, 5, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ControlesComponent_div_8_Template, 5, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c2, ctx.editorService.isEditing));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.door.frames == null ? null : ctx.door.frames.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.door.lengthwise == null ? null : ctx.door.lengthwise.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.door.crosswise == null ? null : ctx.door.crosswise.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.door["45-degree"] == null ? null : ctx.door["45-degree"].length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.door.edges == null ? null : ctx.door.edges.length) && ctx.doorName === "modern-model-b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.door["short-handles"] == null ? null : ctx.door["short-handles"].length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.door["long-handles"] == null ? null : ctx.door["long-handles"].length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.door.dividers == null ? null : ctx.door.dividers.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDropList"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDrag"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: ["@charset \"UTF-8\";\n.controles-wrapper[_ngcontent-%COMP%] {\n  background: #fff;\n  border-left: 1px solid #279cff;\n  box-sizing: border-box;\n  height: 100vh;\n  overflow-y: scroll;\n  padding: 20px;\n  width: 100%;\n}\n.controles-wrapper.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.controle-row[_ngcontent-%COMP%] {\n  padding-bottom: 12px;\n  margin-bottom: 12px;\n}\n.preview-items[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n  grid-template-columns: repeat(6, 1fr);\n}\n.preview-items.short-handles[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(4, 1fr);\n}\n.preview-items.short-handles[_ngcontent-%COMP%]   .short-handle-item[_ngcontent-%COMP%] {\n  height: 105px;\n}\n.preview-items.long-handles[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(12, 1fr);\n}\n.preview-items.long-handles[_ngcontent-%COMP%]   .long-handle-item[_ngcontent-%COMP%] {\n  height: 200px;\n}\n.preview-items.dividers[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(12, 1fr);\n}\n.preview-item[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: contain;\n  cursor: pointer;\n  height: 120px;\n  position: relative;\n}\n.preview-item.checked[_ngcontent-%COMP%]:before {\n  background: #279cff;\n  border-radius: 50%;\n  content: \"\u2713\";\n  display: inline-block;\n  height: 20px;\n  left: -6px;\n  position: absolute;\n  top: -6px;\n  width: 20px;\n  z-index: 2;\n  color: #fff;\n  text-align: center;\n}\n.preview-item.handle-item[_ngcontent-%COMP%] {\n  height: 104px;\n}\n.preview-item.divider-item[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n}\n.item-name[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.row-title[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #dbdbdb;\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbnRyb2xlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUVGO0FBQUU7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7QUFFSjtBQUVBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtBQUNGO0FBRUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHFDQUFBO0FBQ0Y7QUFDRTtFQUNFLHFDQUFBO0FBQ0o7QUFDSTtFQUNFLGFBQUE7QUFDTjtBQUdFO0VBQ0Usc0NBQUE7QUFESjtBQUdJO0VBQ0UsYUFBQTtBQUROO0FBS0U7RUFDRSxzQ0FBQTtBQUhKO0FBT0E7RUFDRSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUpGO0FBT0k7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUxOO0FBU0U7RUFDRSxhQUFBO0FBUEo7QUFVRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBUko7QUFZQTtFQUNFLGVBQUE7QUFURjtBQVlBO0VBQ0UsZ0NBQUE7RUFDQSxrQkFBQTtBQVRGIiwiZmlsZSI6ImNvbnRyb2xlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250cm9sZXMtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzI3OWNmZjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcblxuICAmLmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbn1cblxuLmNvbnRyb2xlLXJvdyB7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4ucHJldmlldy1pdGVtcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMTBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcblxuICAmLnNob3J0LWhhbmRsZXMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG5cbiAgICAuc2hvcnQtaGFuZGxlLWl0ZW0ge1xuICAgICAgaGVpZ2h0OiAxMDVweDtcbiAgICB9XG4gIH1cblxuICAmLmxvbmctaGFuZGxlcyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIDFmcik7XG5cbiAgICAubG9uZy1oYW5kbGUtaXRlbSB7XG4gICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIH1cbiAgfVxuXG4gICYuZGl2aWRlcnMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCAxZnIpO1xuICB9XG59XG5cbi5wcmV2aWV3LWl0ZW0ge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICYuY2hlY2tlZCB7XG4gICAgJjpiZWZvcmUge1xuICAgICAgYmFja2dyb3VuZDogIzI3OWNmZjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGNvbnRlbnQ6ICdcXDI3MTMnO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgbGVmdDogLTZweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogLTZweDtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgei1pbmRleDogMjtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gICYuaGFuZGxlLWl0ZW0ge1xuICAgIGhlaWdodDogMTA0cHg7XG4gIH1cblxuICAmLmRpdmlkZXItaXRlbSB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICB9XG59XG5cbi5pdGVtLW5hbWUge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5yb3ctdGl0bGUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RiZGJkYjtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ "9M9Z":
/*!**************************************************************************!*\
  !*** ./src/app/editor/modern/modern-model-e/modern-model-e.component.ts ***!
  \**************************************************************************/
/*! exports provided: ModernModelEComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModernModelEComponent", function() { return ModernModelEComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_editor_editor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/editor/editor.service */ "IhKX");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { "background-image": a0 }; };
const _c1 = function (a0) { return { "editing": a0 }; };
const _c2 = function (a0) { return { "background-color": a0 }; };
class ModernModelEComponent {
    constructor(editorService) {
        this.editorService = editorService;
    }
    ngOnInit() {
    }
    editItem(directory) {
        if (!this.editorService.isEditing) {
            return;
        }
        const url = `${this.editorService.bucketPath}${this.editorService.door.category.id}-doors/${this.editorService.door.model.id}/${directory}`;
        window.open(url, '_blank');
    }
    onDroped(event) {
        event.container.element.nativeElement.classList.remove('drag-over');
        const dragedElement = event.item.element.nativeElement;
        const dropedElement = event.container.element.nativeElement;
        if (dragedElement.className.includes('frame-item') && dropedElement.className.includes('frame')) {
            dropedElement.style.backgroundImage = dragedElement.style.backgroundImage;
        }
        if (dragedElement.className.includes('board-item') && dropedElement.className.includes('board')) {
            dropedElement.style.backgroundImage = dragedElement.style.backgroundImage;
        }
        if (dragedElement.className.includes('handle-item') && dropedElement.className.includes('handle')) {
            dropedElement.style.backgroundImage = dragedElement.style.backgroundImage;
            console.log('dragedElement.className.includes: ', dragedElement.className);
            if (dragedElement.className.includes('short-handle-item')) {
                dropedElement.classList.add('short-handle');
                dropedElement.classList.remove('long-handle');
            }
            if (dragedElement.className.includes('long-handle-item')) {
                dropedElement.classList.add('long-handle');
                dropedElement.classList.remove('short-handle');
            }
        }
    }
    onEntered(event) {
        event.container.element.nativeElement.innerHTML = '';
        const dragedElement = event.item.element.nativeElement;
        const dropedElement = event.container.element.nativeElement;
        if (dragedElement.className.includes('frame-item') && dropedElement.className.includes('frame')) {
            event.container.element.nativeElement.classList.add('drag-over');
        }
        if (dragedElement.className.includes('board-item') && dropedElement.className.includes('board')) {
            event.container.element.nativeElement.classList.add('drag-over');
        }
        if (dragedElement.className.includes('handle-item') && dropedElement.className.includes('handle')) {
            event.container.element.nativeElement.classList.add('drag-over');
        }
    }
    onExit(event) {
        event.container.element.nativeElement.classList.remove('drag-over');
    }
}
ModernModelEComponent.ɵfac = function ModernModelEComponent_Factory(t) { return new (t || ModernModelEComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_editor_editor_service__WEBPACK_IMPORTED_MODULE_1__["EditorService"])); };
ModernModelEComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModernModelEComponent, selectors: [["app-modern-model-e"]], inputs: { assets: "assets" }, decls: 14, vars: 48, consts: [[1, "door"], ["cdkDropList", "", 1, "area", "frame", 3, "ngStyle", "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited"], [1, "shadow"], ["cdkDropList", "", 1, "area", "board", "piece-1", 3, "ngStyle", "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited"], ["cdkDropList", "", 1, "area", "board", "piece-2", 3, "ngStyle", "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited"], ["cdkDropList", "", 1, "area", "board", "piece-3", 3, "ngStyle", "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited"], ["cdkDropList", "", 1, "area", "board", "piece-4", 3, "ngStyle", "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited"], ["cdkDropList", "", 1, "area", "board", "piece-5", 3, "ngStyle", "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited"], ["cdkDropList", "", 1, "area", "handle", "short-handle", 3, "ngStyle", "ngClass", "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited"], ["shortHandle", ""], [1, "divider", "divider-1", 3, "ngStyle", "ngClass"], [1, "divider", "divider-2", 3, "ngStyle", "ngClass"], [1, "divider", "divider-3", 3, "ngStyle", "ngClass"], [1, "divider", "divider-4", 3, "ngStyle", "ngClass"]], template: function ModernModelEComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ModernModelEComponent_Template_div_cdkDropListDropped_1_listener($event) { return ctx.onDroped($event); })("cdkDropListEntered", function ModernModelEComponent_Template_div_cdkDropListEntered_1_listener($event) { return ctx.onEntered($event); })("cdkDropListExited", function ModernModelEComponent_Template_div_cdkDropListExited_1_listener($event) { return ctx.onExit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ModernModelEComponent_Template_div_cdkDropListDropped_3_listener($event) { return ctx.onDroped($event); })("cdkDropListEntered", function ModernModelEComponent_Template_div_cdkDropListEntered_3_listener($event) { return ctx.onEntered($event); })("cdkDropListExited", function ModernModelEComponent_Template_div_cdkDropListExited_3_listener($event) { return ctx.onExit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ModernModelEComponent_Template_div_cdkDropListDropped_4_listener($event) { return ctx.onDroped($event); })("cdkDropListEntered", function ModernModelEComponent_Template_div_cdkDropListEntered_4_listener($event) { return ctx.onEntered($event); })("cdkDropListExited", function ModernModelEComponent_Template_div_cdkDropListExited_4_listener($event) { return ctx.onExit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ModernModelEComponent_Template_div_cdkDropListDropped_5_listener($event) { return ctx.onDroped($event); })("cdkDropListEntered", function ModernModelEComponent_Template_div_cdkDropListEntered_5_listener($event) { return ctx.onEntered($event); })("cdkDropListExited", function ModernModelEComponent_Template_div_cdkDropListExited_5_listener($event) { return ctx.onExit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ModernModelEComponent_Template_div_cdkDropListDropped_6_listener($event) { return ctx.onDroped($event); })("cdkDropListEntered", function ModernModelEComponent_Template_div_cdkDropListEntered_6_listener($event) { return ctx.onEntered($event); })("cdkDropListExited", function ModernModelEComponent_Template_div_cdkDropListExited_6_listener($event) { return ctx.onExit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ModernModelEComponent_Template_div_cdkDropListDropped_7_listener($event) { return ctx.onDroped($event); })("cdkDropListEntered", function ModernModelEComponent_Template_div_cdkDropListEntered_7_listener($event) { return ctx.onEntered($event); })("cdkDropListExited", function ModernModelEComponent_Template_div_cdkDropListExited_7_listener($event) { return ctx.onExit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ModernModelEComponent_Template_div_cdkDropListDropped_8_listener($event) { return ctx.onDroped($event); })("cdkDropListEntered", function ModernModelEComponent_Template_div_cdkDropListEntered_8_listener($event) { return ctx.onEntered($event); })("cdkDropListExited", function ModernModelEComponent_Template_div_cdkDropListExited_8_listener($event) { return ctx.onExit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, "url(" + ctx.assets.frames[2].url + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, "url(" + ctx.assets.lengthwise[2].url + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, "url(" + ctx.assets.lengthwise[2].url + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, "url(" + ctx.assets.lengthwise[2].url + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c0, "url(" + ctx.assets.crosswise[3].url + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, "url(" + ctx.assets.crosswise[3].url + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c0, "url(" + ctx.assets["short-handles"][0].url + ")"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c1, ctx.editorService.isEditing));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c2, ctx.editorService.selectedDividers || ctx.assets.dividers[0]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c1, ctx.editorService.isEditing));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c2, ctx.editorService.selectedDividers || ctx.assets.dividers[0]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c1, ctx.editorService.isEditing));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](40, _c2, ctx.editorService.selectedDividers || ctx.assets.dividers[0]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](42, _c1, ctx.editorService.isEditing));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](44, _c2, ctx.editorService.selectedDividers || ctx.assets.dividers[0]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](46, _c1, ctx.editorService.isEditing));
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".door[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 764px;\n}\n\n.editing[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.editing[_ngcontent-%COMP%]:hover::before {\n  background: #279cff;\n  content: \"\";\n  height: 100%;\n  left: 0;\n  opacity: 0.5;\n  position: absolute;\n  right: 100%;\n  top: 0;\n  width: 100%;\n  z-index: 2;\n}\n\n.area[_ngcontent-%COMP%] {\n  background-position: left top;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-size: cover;\n}\n\n.frame[_ngcontent-%COMP%] {\n  height: 800px;\n  width: 393px;\n  z-index: 1;\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0px -1px 4px 2px #0000001f;\n  height: 761px;\n  left: 36px;\n  position: absolute;\n  top: 38px;\n  width: 321px;\n}\n\n.piece-1[_ngcontent-%COMP%], .piece-2[_ngcontent-%COMP%], .piece-3[_ngcontent-%COMP%], .piece-4[_ngcontent-%COMP%], .piece-5[_ngcontent-%COMP%], .divider[_ngcontent-%COMP%] {\n  left: 36px;\n  width: 322px;\n}\n\n.piece-1[_ngcontent-%COMP%] {\n  top: 36px;\n  height: 440px;\n  position: absolute;\n  z-index: 1;\n}\n\n.piece-2[_ngcontent-%COMP%] {\n  height: 440px;\n  position: absolute;\n  top: 194px;\n  z-index: 3;\n}\n\n.piece-3[_ngcontent-%COMP%] {\n  height: 440px;\n  position: absolute;\n  bottom: 0;\n  z-index: 2;\n}\n\n.piece-4[_ngcontent-%COMP%] {\n  height: 57px;\n  position: absolute;\n  top: 194px;\n  z-index: 4;\n}\n\n.piece-5[_ngcontent-%COMP%] {\n  height: 57px;\n  position: absolute;\n  top: 578px;\n  z-index: 5;\n}\n\n.divider[_ngcontent-%COMP%] {\n  height: 3px;\n  top: 191px;\n  position: absolute;\n  z-index: 4;\n}\n\n.divider.divider-1[_ngcontent-%COMP%] {\n  top: 250px;\n}\n\n.divider.divider-2[_ngcontent-%COMP%] {\n  top: 575px;\n}\n\n.divider.divider-3[_ngcontent-%COMP%] {\n  top: 635px;\n}\n\n.handle[_ngcontent-%COMP%] {\n  background-size: cover;\n  left: 46px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(calc(-50% + 45px));\n  z-index: 5;\n}\n\n.short-handle[_ngcontent-%COMP%] {\n  height: 72px;\n  width: 80px;\n}\n\n.long-handle[_ngcontent-%COMP%] {\n  height: 460px;\n  width: 73px;\n}\n\n@media (max-width: 500px) {\n  .door[_ngcontent-%COMP%] {\n    margin: 20px auto;\n    min-height: 400px;\n    width: 200px;\n  }\n\n  .frame[_ngcontent-%COMP%] {\n    height: 400px;\n    width: 200px;\n  }\n\n  .piece-1[_ngcontent-%COMP%] {\n    height: 382px;\n    right: 18px;\n    width: 106px;\n  }\n\n  .piece-2[_ngcontent-%COMP%] {\n    left: 18px;\n    height: 382px;\n    width: 65px;\n  }\n\n  .divider-1[_ngcontent-%COMP%] {\n    left: 83px;\n    height: 382px;\n    width: 2px;\n  }\n\n  .handle[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 44px;\n    left: 28px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21vZGVybi1tb2RlbC1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFSTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUFOOztBQU1BO0VBQ0UsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUhGOztBQU1BO0VBQ0Usc0NBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFIRjs7QUFNQTs7Ozs7O0VBTUUsVUFBQTtFQUNBLFlBQUE7QUFIRjs7QUFNQTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFIRjs7QUFNQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBSEY7O0FBTUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQUhGOztBQU1BO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFIRjs7QUFLRTtFQUNFLFVBQUE7QUFISjs7QUFNRTtFQUNFLFVBQUE7QUFKSjs7QUFPRTtFQUNFLFVBQUE7QUFMSjs7QUFTQTtFQUNFLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHdDQUFBO0VBQ0EsVUFBQTtBQU5GOztBQVNBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFORjs7QUFTQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FBTkY7O0FBU0E7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxZQUFBO0VBTkY7O0VBU0E7SUFDRSxhQUFBO0lBQ0EsWUFBQTtFQU5GOztFQVNBO0lBQ0UsYUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBTkY7O0VBU0E7SUFDRSxVQUFBO0lBQ0EsYUFBQTtJQUNBLFdBQUE7RUFORjs7RUFTQTtJQUNFLFVBQUE7SUFDQSxhQUFBO0lBQ0EsVUFBQTtFQU5GOztFQVNBO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0VBTkY7QUFDRiIsImZpbGUiOiJtb2Rlcm4tbW9kZWwtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kb29yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiA3NjRweDtcbn1cblxuLmVkaXRpbmcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJjpob3ZlciB7XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQ6ICMyNzljZmY7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMTAwJTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgei1pbmRleDogMjtcbiAgICB9XG4gIH1cblxufVxuXG4uYXJlYSB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgdG9wO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uZnJhbWUge1xuICBoZWlnaHQ6IDgwMHB4O1xuICB3aWR0aDogMzkzcHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5zaGFkb3cge1xuICBib3gtc2hhZG93OiAwcHggLTFweCA0cHggMnB4ICMwMDAwMDAxZjtcbiAgaGVpZ2h0OiA3NjFweDtcbiAgbGVmdDogMzZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM4cHg7XG4gIHdpZHRoOiAzMjFweDtcbn1cblxuLnBpZWNlLTEsXG4ucGllY2UtMixcbi5waWVjZS0zLFxuLnBpZWNlLTQsXG4ucGllY2UtNSxcbi5kaXZpZGVyIHtcbiAgbGVmdDogMzZweDtcbiAgd2lkdGg6IDMyMnB4O1xufVxuXG4ucGllY2UtMSB7XG4gIHRvcDogMzZweDtcbiAgaGVpZ2h0OiA0NDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xufVxuXG4ucGllY2UtMiB7XG4gIGhlaWdodDogNDQwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOTRweDtcbiAgei1pbmRleDogMztcbn1cblxuLnBpZWNlLTMge1xuICBoZWlnaHQ6IDQ0MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogMjtcbn1cblxuLnBpZWNlLTQge1xuICBoZWlnaHQ6IDU3cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOTRweDtcbiAgei1pbmRleDogNDtcbn1cblxuLnBpZWNlLTUge1xuICBoZWlnaHQ6IDU3cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1NzhweDtcbiAgei1pbmRleDogNTtcbn1cblxuLmRpdmlkZXIge1xuICBoZWlnaHQ6IDNweDtcbiAgdG9wOiAxOTFweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA0O1xuXG4gICYuZGl2aWRlci0xIHtcbiAgICB0b3A6IDI1MHB4O1xuICB9XG5cbiAgJi5kaXZpZGVyLTIge1xuICAgIHRvcDogNTc1cHg7XG4gIH1cblxuICAmLmRpdmlkZXItMyB7XG4gICAgdG9wOiA2MzVweDtcbiAgfVxufVxuXG4uaGFuZGxlIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbGVmdDogNDZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKGNhbGMoLTUwJSArIDQ1cHgpKTtcbiAgei1pbmRleDogNTtcbn1cblxuLnNob3J0LWhhbmRsZSB7XG4gIGhlaWdodDogNzJweDtcbiAgd2lkdGg6IDgwcHg7XG59XG5cbi5sb25nLWhhbmRsZSB7XG4gIGhlaWdodDogNDYwcHg7XG4gIHdpZHRoOiA3M3B4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmRvb3Ige1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICAgIHdpZHRoOiAyMDBweFxuICB9XG5cbiAgLmZyYW1lIHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuXG4gIC5waWVjZS0xIHtcbiAgICBoZWlnaHQ6IDM4MnB4O1xuICAgIHJpZ2h0OiAxOHB4O1xuICAgIHdpZHRoOiAxMDZweDtcbiAgfVxuXG4gIC5waWVjZS0yIHtcbiAgICBsZWZ0OiAxOHB4O1xuICAgIGhlaWdodDogMzgycHg7XG4gICAgd2lkdGg6IDY1cHg7XG4gIH1cblxuICAuZGl2aWRlci0xIHtcbiAgICBsZWZ0OiA4M3B4O1xuICAgIGhlaWdodDogMzgycHg7XG4gICAgd2lkdGg6IDJweDtcbiAgfVxuXG4gIC5oYW5kbGUge1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDRweDtcbiAgICBsZWZ0OiAyOHB4O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "BAMr":
/*!**************************************************************************!*\
  !*** ./src/app/editor/modern/modern-model-c/modern-model-c.component.ts ***!
  \**************************************************************************/
/*! exports provided: ModernModelCComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModernModelCComponent", function() { return ModernModelCComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_editor_editor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/editor/editor.service */ "IhKX");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = ["shortHandle"];
const _c1 = ["longHandle"];
const _c2 = function (a0) { return { "background-image": a0 }; };
const _c3 = function (a0) { return { "editing": a0 }; };
const _c4 = function (a0) { return { "background-color": a0 }; };
class ModernModelCComponent {
    constructor(editorService) {
        this.editorService = editorService;
    }
    ngOnInit() {
    }
    onDroped(event) {
        event.container.element.nativeElement.classList.remove('drag-over');
        const dragedElement = event.item.element.nativeElement;
        const dropedElement = event.container.element.nativeElement;
        if (dragedElement.className.includes('frame-item') && dropedElement.className.includes('frame')) {
            dropedElement.style.backgroundImage = dragedElement.style.backgroundImage;
        }
        if (dragedElement.className.includes('board-item') && dropedElement.className.includes('board')) {
            dropedElement.style.backgroundImage = dragedElement.style.backgroundImage;
        }
        if (dragedElement.className.includes('handle-item') && dropedElement.className.includes('handle')) {
            dropedElement.style.backgroundImage = dragedElement.style.backgroundImage;
            console.log('dragedElement.className.includes: ', dragedElement.className);
            if (dragedElement.className.includes('short-handle-item')) {
                dropedElement.classList.add('short-handle');
                dropedElement.classList.remove('long-handle');
            }
            if (dragedElement.className.includes('long-handle-item')) {
                dropedElement.classList.add('long-handle');
                dropedElement.classList.remove('short-handle');
            }
        }
    }
    onEntered(event) {
        event.container.element.nativeElement.innerHTML = '';
        const dragedElement = event.item.element.nativeElement;
        const dropedElement = event.container.element.nativeElement;
        if (dragedElement.className.includes('frame-item') && dropedElement.className.includes('frame')) {
            event.container.element.nativeElement.classList.add('drag-over');
        }
        if (dragedElement.className.includes('board-item') && dropedElement.className.includes('board')) {
            event.container.element.nativeElement.classList.add('drag-over');
        }
        if (dragedElement.className.includes('handle-item') && dropedElement.className.includes('handle')) {
            event.container.element.nativeElement.classList.add('drag-over');
        }
    }
    onExit(event) {
        event.container.element.nativeElement.classList.remove('drag-over');
    }
}
ModernModelCComponent.ɵfac = function ModernModelCComponent_Factory(t) { return new (t || ModernModelCComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_editor_editor_service__WEBPACK_IMPORTED_MODULE_1__["EditorService"])); };
ModernModelCComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModernModelCComponent, selectors: [["app-modern-model-c"]], viewQuery: function ModernModelCComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.shortHandle = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.longHandle = _t.first);
    } }, inputs: { assets: "assets" }, decls: 13, vars: 39, consts: [[1, "door"], ["cdkDropList", "", 1, "area", "frame", 3, "ngStyle", "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited"], [1, "shadow"], ["cdkDropList", "", 1, "area", "board", "piece-1", 3, "ngStyle", "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited"], ["cdkDropList", "", 1, "area", "board", "piece-2", 3, "ngStyle", "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited"], ["cdkDropList", "", 1, "area", "board", "piece-3", 3, "ngStyle", "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited"], ["cdkDropList", "", 1, "area", "board", "piece-4", 3, "ngStyle", "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited"], ["cdkDropList", "", 1, "area", "handle", "short-handle", 3, "ngStyle", "ngClass", "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited"], ["shortHandle", ""], [1, "divider", "divider-1", 3, "ngStyle", "ngClass"], [1, "divider", "divider-2", 3, "ngStyle", "ngClass"], [1, "divider", "divider-3", 3, "ngStyle", "ngClass"]], template: function ModernModelCComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ModernModelCComponent_Template_div_cdkDropListDropped_1_listener($event) { return ctx.onDroped($event); })("cdkDropListEntered", function ModernModelCComponent_Template_div_cdkDropListEntered_1_listener($event) { return ctx.onEntered($event); })("cdkDropListExited", function ModernModelCComponent_Template_div_cdkDropListExited_1_listener($event) { return ctx.onExit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ModernModelCComponent_Template_div_cdkDropListDropped_3_listener($event) { return ctx.onDroped($event); })("cdkDropListEntered", function ModernModelCComponent_Template_div_cdkDropListEntered_3_listener($event) { return ctx.onEntered($event); })("cdkDropListExited", function ModernModelCComponent_Template_div_cdkDropListExited_3_listener($event) { return ctx.onExit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ModernModelCComponent_Template_div_cdkDropListDropped_4_listener($event) { return ctx.onDroped($event); })("cdkDropListEntered", function ModernModelCComponent_Template_div_cdkDropListEntered_4_listener($event) { return ctx.onEntered($event); })("cdkDropListExited", function ModernModelCComponent_Template_div_cdkDropListExited_4_listener($event) { return ctx.onExit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ModernModelCComponent_Template_div_cdkDropListDropped_5_listener($event) { return ctx.onDroped($event); })("cdkDropListEntered", function ModernModelCComponent_Template_div_cdkDropListEntered_5_listener($event) { return ctx.onEntered($event); })("cdkDropListExited", function ModernModelCComponent_Template_div_cdkDropListExited_5_listener($event) { return ctx.onExit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ModernModelCComponent_Template_div_cdkDropListDropped_7_listener($event) { return ctx.onDroped($event); })("cdkDropListEntered", function ModernModelCComponent_Template_div_cdkDropListEntered_7_listener($event) { return ctx.onEntered($event); })("cdkDropListExited", function ModernModelCComponent_Template_div_cdkDropListExited_7_listener($event) { return ctx.onExit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ModernModelCComponent_Template_div_cdkDropListDropped_8_listener($event) { return ctx.onDroped($event); })("cdkDropListEntered", function ModernModelCComponent_Template_div_cdkDropListEntered_8_listener($event) { return ctx.onEntered($event); })("cdkDropListExited", function ModernModelCComponent_Template_div_cdkDropListExited_8_listener($event) { return ctx.onExit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c2, "url(" + ctx.assets.frames[3].url + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c2, "url(" + ctx.assets.lengthwise[3].url + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c2, "url(" + ctx.assets.lengthwise[3].url + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c2, "url(" + ctx.assets["45-degree"][2].url + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c2, "url(" + ctx.assets.lengthwise[8].url + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c2, "url(" + ctx.assets["short-handles"][0].url + ")"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c3, ctx.editorService.isEditing));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c4, ctx.editorService.selectedDividers || ctx.assets.dividers[0]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c3, ctx.editorService.isEditing));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c4, ctx.editorService.selectedDividers || ctx.assets.dividers[0]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](33, _c3, ctx.editorService.isEditing));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](35, _c4, ctx.editorService.selectedDividers || ctx.assets.dividers[0]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](37, _c3, ctx.editorService.isEditing));
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".door[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 764px;\n  overflow: hidden;\n}\n\n.area[_ngcontent-%COMP%] {\n  background-position: left top;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-size: cover;\n}\n\n.frame[_ngcontent-%COMP%] {\n  height: 800px;\n  width: 393px;\n  z-index: 1;\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0px -1px 4px 2px #0000001f;\n  height: 761px;\n  left: 36px;\n  position: absolute;\n  top: 38px;\n  width: 321px;\n}\n\n.piece-1[_ngcontent-%COMP%] {\n  top: 35px;\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 60%);\n          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 60%);\n  height: 458px;\n  position: absolute;\n  right: 34px;\n  width: 217px;\n  z-index: 2;\n}\n\n.piece-2[_ngcontent-%COMP%] {\n  bottom: -146px;\n  -webkit-clip-path: polygon(0 0, 100% 62%, 100% 100%, 0 100%);\n          clip-path: polygon(0 0, 100% 62%, 100% 100%, 0 100%);\n  height: 446px;\n  position: absolute;\n  right: 34px;\n  width: 324px;\n  z-index: 5;\n}\n\n.piece-3[_ngcontent-%COMP%] {\n  background-position: center;\n  -webkit-clip-path: polygon(0 0, 100% 36%, 100% 100%, 0 66%);\n          clip-path: polygon(0 0, 100% 36%, 100% 100%, 0 66%);\n  height: 528px;\n  position: absolute;\n  right: 34px;\n  top: 250px;\n  width: 217px;\n  z-index: 4;\n}\n\n.piece-4[_ngcontent-%COMP%] {\n  top: 35px;\n  height: 575px;\n  left: 35px;\n  position: absolute;\n  width: 242px;\n  z-index: 1;\n}\n\n.divider-1[_ngcontent-%COMP%] {\n  height: 764px;\n  bottom: 0;\n  left: 140px;\n  position: absolute;\n  width: 3px;\n  z-index: 4;\n}\n\n.divider-2[_ngcontent-%COMP%] {\n  height: 285px;\n  left: 249px;\n  position: absolute;\n  top: 201px;\n  transform: rotate(-48.7deg);\n  width: 3px;\n  z-index: 6;\n}\n\n.divider-3[_ngcontent-%COMP%] {\n  height: 424px;\n  left: 196px;\n  position: absolute;\n  top: 427px;\n  transform: rotate(-49.6deg);\n  width: 3px;\n  z-index: 6;\n}\n\n.handle[_ngcontent-%COMP%] {\n  background-size: cover;\n  left: 46px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(calc(-50% + 45px));\n  z-index: 7;\n}\n\n.short-handle[_ngcontent-%COMP%] {\n  height: 74px;\n  width: 80px;\n}\n\n.long-handle[_ngcontent-%COMP%] {\n  height: 460px;\n  width: 73px;\n}\n\n@media (max-width: 500px) {\n  .door[_ngcontent-%COMP%] {\n    margin: 20px auto;\n    min-height: 400px;\n    width: 200px;\n  }\n\n  .frame[_ngcontent-%COMP%] {\n    height: 400px;\n    width: 200px;\n  }\n\n  .piece-1[_ngcontent-%COMP%] {\n    height: 382px;\n    right: 18px;\n    width: 106px;\n  }\n\n  .piece-2[_ngcontent-%COMP%] {\n    left: 18px;\n    height: 382px;\n    width: 65px;\n  }\n\n  .divider-1[_ngcontent-%COMP%] {\n    left: 83px;\n    height: 382px;\n    width: 2px;\n  }\n\n  .handle[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 44px;\n    left: 28px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21vZGVybi1tb2RlbC1jLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQ0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLHlEQUFBO1VBQUEsaURBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSw0REFBQTtVQUFBLG9EQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtFQUNBLDJEQUFBO1VBQUEsbURBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0Esd0NBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7RUFDRjs7RUFFQTtJQUNFLGFBQUE7SUFDQSxZQUFBO0VBQ0Y7O0VBRUE7SUFDRSxhQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUFDRjs7RUFFQTtJQUNFLFVBQUE7SUFDQSxhQUFBO0lBQ0EsV0FBQTtFQUNGOztFQUVBO0lBQ0UsVUFBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0VBQ0Y7O0VBRUE7SUFDRSxZQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7RUFDRjtBQUNGIiwiZmlsZSI6Im1vZGVybi1tb2RlbC1jLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvb3Ige1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDc2NHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYXJlYSB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgdG9wO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uZnJhbWUge1xuICBoZWlnaHQ6IDgwMHB4O1xuICB3aWR0aDogMzkzcHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5zaGFkb3cge1xuICBib3gtc2hhZG93OiAwcHggLTFweCA0cHggMnB4ICMwMDAwMDAxZjtcbiAgaGVpZ2h0OiA3NjFweDtcbiAgbGVmdDogMzZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM4cHg7XG4gIHdpZHRoOiAzMjFweDtcbn1cblxuLnBpZWNlLTEge1xuICB0b3A6IDM1cHg7XG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDYwJSk7XG4gIGhlaWdodDogNDU4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDM0cHg7XG4gIHdpZHRoOiAyMTdweDtcbiAgei1pbmRleDogMjtcbn1cblxuLnBpZWNlLTIge1xuICBib3R0b206IC0xNDZweDtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSA2MiUsIDEwMCUgMTAwJSwgMCAxMDAlKTtcbiAgaGVpZ2h0OiA0NDZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMzRweDtcbiAgd2lkdGg6IDMyNHB4O1xuICB6LWluZGV4OiA1O1xufVxuXG4ucGllY2UtMyB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAzNiUsIDEwMCUgMTAwJSwgMCA2NiUpO1xuICBoZWlnaHQ6IDUyOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzNHB4O1xuICB0b3A6IDI1MHB4O1xuICB3aWR0aDogMjE3cHg7XG4gIHotaW5kZXg6IDQ7XG59XG5cbi5waWVjZS00IHtcbiAgdG9wOiAzNXB4O1xuICBoZWlnaHQ6IDU3NXB4O1xuICBsZWZ0OiAzNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyNDJweDtcbiAgei1pbmRleDogMTtcbn1cblxuLmRpdmlkZXItMSB7XG4gIGhlaWdodDogNzY0cHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMTQwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDNweDtcbiAgei1pbmRleDogNDtcbn1cblxuLmRpdmlkZXItMiB7XG4gIGhlaWdodDogMjg1cHg7XG4gIGxlZnQ6IDI0OXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjAxcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00OC43ZGVnKTtcbiAgd2lkdGg6IDNweDtcbiAgei1pbmRleDogNjtcbn1cblxuLmRpdmlkZXItMyB7XG4gIGhlaWdodDogNDI0cHg7XG4gIGxlZnQ6IDE5NnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDI3cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00OS42ZGVnKTtcbiAgd2lkdGg6IDNweDtcbiAgei1pbmRleDogNjtcbn1cblxuLmhhbmRsZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGxlZnQ6IDQ2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWShjYWxjKC01MCUgKyA0NXB4KSk7XG4gIHotaW5kZXg6IDc7XG59XG5cbi5zaG9ydC1oYW5kbGUge1xuICBoZWlnaHQ6IDc0cHg7XG4gIHdpZHRoOiA4MHB4O1xufVxuXG4ubG9uZy1oYW5kbGUge1xuICBoZWlnaHQ6IDQ2MHB4O1xuICB3aWR0aDogNzNweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5kb29yIHtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgICB3aWR0aDogMjAwcHhcbiAgfVxuXG4gIC5mcmFtZSB7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cblxuICAucGllY2UtMSB7XG4gICAgaGVpZ2h0OiAzODJweDtcbiAgICByaWdodDogMThweDtcbiAgICB3aWR0aDogMTA2cHg7XG4gIH1cblxuICAucGllY2UtMiB7XG4gICAgbGVmdDogMThweDtcbiAgICBoZWlnaHQ6IDM4MnB4O1xuICAgIHdpZHRoOiA2NXB4O1xuICB9XG5cbiAgLmRpdmlkZXItMSB7XG4gICAgbGVmdDogODNweDtcbiAgICBoZWlnaHQ6IDM4MnB4O1xuICAgIHdpZHRoOiAycHg7XG4gIH1cblxuICAuaGFuZGxlIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQ0cHg7XG4gICAgbGVmdDogMjhweDtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "HAH0":
/*!**************************************************************************!*\
  !*** ./src/app/editor/modern/modern-model-d/modern-model-d.component.ts ***!
  \**************************************************************************/
/*! exports provided: ModernModelDComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModernModelDComponent", function() { return ModernModelDComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_editor_editor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/editor/editor.service */ "IhKX");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = ["shortHandle"];
const _c1 = ["longHandle"];
const _c2 = function (a0) { return { "background-image": a0 }; };
const _c3 = function (a0) { return { "editing": a0 }; };
const _c4 = function (a0) { return { "background-color": a0 }; };
class ModernModelDComponent {
    constructor(editorService) {
        this.editorService = editorService;
    }
    ngOnInit() {
    }
    editItem(directory) {
        if (!this.editorService.isEditing) {
            return;
        }
        const url = `${this.editorService.bucketPath}${this.editorService.door.category.id}-doors/${this.editorService.door.model.id}/${directory}`;
        window.open(url, '_blank');
    }
    onDroped(event) {
        event.container.element.nativeElement.classList.remove('drag-over');
        const dragedElement = event.item.element.nativeElement;
        const dropedElement = event.container.element.nativeElement;
        if (dragedElement.className.includes('frame-item') && dropedElement.className.includes('frame')) {
            dropedElement.style.backgroundImage = dragedElement.style.backgroundImage;
        }
        if (dragedElement.className.includes('board-item') && dropedElement.className.includes('board')) {
            dropedElement.style.backgroundImage = dragedElement.style.backgroundImage;
        }
        if (dragedElement.className.includes('handle-item') && dropedElement.className.includes('handle')) {
            dropedElement.style.backgroundImage = dragedElement.style.backgroundImage;
            if (dragedElement.className.includes('short-handle-item')) {
                dropedElement.classList.add('short-handle');
                dropedElement.classList.remove('long-handle');
            }
            if (dragedElement.className.includes('long-handle-item')) {
                dropedElement.classList.add('long-handle');
                dropedElement.classList.remove('short-handle');
            }
        }
    }
    onEntered(event) {
        event.container.element.nativeElement.innerHTML = '';
        const dragedElement = event.item.element.nativeElement;
        const dropedElement = event.container.element.nativeElement;
        if (dragedElement.className.includes('frame-item') && dropedElement.className.includes('frame')) {
            event.container.element.nativeElement.classList.add('drag-over');
        }
        if (dragedElement.className.includes('board-item') && dropedElement.className.includes('board')) {
            event.container.element.nativeElement.classList.add('drag-over');
        }
        if (dragedElement.className.includes('handle-item') && dropedElement.className.includes('handle')) {
            event.container.element.nativeElement.classList.add('drag-over');
        }
    }
    onExit(event) {
        event.container.element.nativeElement.classList.remove('drag-over');
    }
}
ModernModelDComponent.ɵfac = function ModernModelDComponent_Factory(t) { return new (t || ModernModelDComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_editor_editor_service__WEBPACK_IMPORTED_MODULE_1__["EditorService"])); };
ModernModelDComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModernModelDComponent, selectors: [["app-modern-model-d"]], viewQuery: function ModernModelDComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.shortHandle = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.longHandle = _t.first);
    } }, inputs: { assets: "assets" }, decls: 12, vars: 36, consts: [[1, "door"], ["cdkDropList", "", 1, "area", "frame", 3, "ngStyle", "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited"], [1, "shadow"], ["cdkDropList", "", 1, "area", "board", "piece-1", 3, "ngStyle", "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited"], ["cdkDropList", "", 1, "area", "board", "piece-2", 3, "ngStyle", "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited"], ["cdkDropList", "", 1, "area", "board", "piece-3", 3, "ngStyle", "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited"], ["cdkDropList", "", 1, "area", "board", "piece-4", 3, "ngStyle", "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited"], ["cdkDropList", "", 1, "area", "board", "piece-5", 3, "ngStyle", "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited"], ["cdkDropList", "", 1, "area", "handle", "short-handle", 3, "ngStyle", "ngClass", "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited"], ["shortHandle", ""], [1, "divider", "divider-1", 3, "ngStyle", "ngClass"], [1, "divider", "divider-2", 3, "ngStyle", "ngClass"]], template: function ModernModelDComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ModernModelDComponent_Template_div_cdkDropListDropped_1_listener($event) { return ctx.onDroped($event); })("cdkDropListEntered", function ModernModelDComponent_Template_div_cdkDropListEntered_1_listener($event) { return ctx.onEntered($event); })("cdkDropListExited", function ModernModelDComponent_Template_div_cdkDropListExited_1_listener($event) { return ctx.onExit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ModernModelDComponent_Template_div_cdkDropListDropped_3_listener($event) { return ctx.onDroped($event); })("cdkDropListEntered", function ModernModelDComponent_Template_div_cdkDropListEntered_3_listener($event) { return ctx.onEntered($event); })("cdkDropListExited", function ModernModelDComponent_Template_div_cdkDropListExited_3_listener($event) { return ctx.onExit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ModernModelDComponent_Template_div_cdkDropListDropped_4_listener($event) { return ctx.onDroped($event); })("cdkDropListEntered", function ModernModelDComponent_Template_div_cdkDropListEntered_4_listener($event) { return ctx.onEntered($event); })("cdkDropListExited", function ModernModelDComponent_Template_div_cdkDropListExited_4_listener($event) { return ctx.onExit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ModernModelDComponent_Template_div_cdkDropListDropped_5_listener($event) { return ctx.onDroped($event); })("cdkDropListEntered", function ModernModelDComponent_Template_div_cdkDropListEntered_5_listener($event) { return ctx.onEntered($event); })("cdkDropListExited", function ModernModelDComponent_Template_div_cdkDropListExited_5_listener($event) { return ctx.onExit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ModernModelDComponent_Template_div_cdkDropListDropped_6_listener($event) { return ctx.onDroped($event); })("cdkDropListEntered", function ModernModelDComponent_Template_div_cdkDropListEntered_6_listener($event) { return ctx.onEntered($event); })("cdkDropListExited", function ModernModelDComponent_Template_div_cdkDropListExited_6_listener($event) { return ctx.onExit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ModernModelDComponent_Template_div_cdkDropListDropped_7_listener($event) { return ctx.onDroped($event); })("cdkDropListEntered", function ModernModelDComponent_Template_div_cdkDropListEntered_7_listener($event) { return ctx.onEntered($event); })("cdkDropListExited", function ModernModelDComponent_Template_div_cdkDropListExited_7_listener($event) { return ctx.onExit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ModernModelDComponent_Template_div_cdkDropListDropped_8_listener($event) { return ctx.onDroped($event); })("cdkDropListEntered", function ModernModelDComponent_Template_div_cdkDropListEntered_8_listener($event) { return ctx.onEntered($event); })("cdkDropListExited", function ModernModelDComponent_Template_div_cdkDropListExited_8_listener($event) { return ctx.onExit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c2, "url(" + ctx.assets.frames[3].url + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c2, "url(" + ctx.assets.lengthwise[3].url + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c2, "url(" + ctx.assets.lengthwise[3].url + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c2, "url(" + ctx.assets.lengthwise[3].url + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c2, "url(" + ctx.assets.lengthwise[3].url + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c2, "url(" + ctx.assets.crosswise[0].url + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c2, "url(" + ctx.assets["short-handles"][0].url + ")"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c3, ctx.editorService.isEditing));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c4, ctx.editorService.selectedDividers || ctx.assets.dividers[0]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c3, ctx.editorService.isEditing));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c4, ctx.editorService.selectedDividers || ctx.assets.dividers[0]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c3, ctx.editorService.isEditing));
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".door[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 764px;\n}\n\n.area[_ngcontent-%COMP%] {\n  background-position: left top;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-size: cover;\n}\n\n.frame[_ngcontent-%COMP%] {\n  height: 800px;\n  width: 393px;\n  z-index: 1;\n  overflow: hidden;\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0px -1px 4px 2px #0000001f;\n  height: 761px;\n  left: 36px;\n  position: absolute;\n  top: 38px;\n  width: 321px;\n}\n\n.piece-1[_ngcontent-%COMP%] {\n  bottom: 0;\n  height: 764px;\n  position: absolute;\n  right: 35px;\n  width: 159px;\n  z-index: 10;\n}\n\n.piece-2[_ngcontent-%COMP%] {\n  bottom: 0;\n  height: 764px;\n  left: 35px;\n  position: absolute;\n  width: 159px;\n  z-index: 1;\n}\n\n.piece-3[_ngcontent-%COMP%] {\n  height: 255px;\n  position: absolute;\n  width: 160px;\n  top: 36px;\n  left: 144px;\n  z-index: 3;\n}\n\n.piece-4[_ngcontent-%COMP%] {\n  height: 255px;\n  position: absolute;\n  width: 160px;\n  top: 544px;\n  left: 144px;\n  z-index: 3;\n}\n\n.piece-5[_ngcontent-%COMP%] {\n  height: 255px;\n  position: absolute;\n  width: 160px;\n  top: 289px;\n  left: 144px;\n  z-index: 3;\n}\n\n.divider[_ngcontent-%COMP%] {\n  bottom: 0;\n  height: 764px;\n  position: absolute;\n  width: 3px;\n  z-index: 10;\n}\n\n.divider.divider-1[_ngcontent-%COMP%] {\n  height: 764px;\n  left: 143px;\n}\n\n.divider.divider-2[_ngcontent-%COMP%] {\n  height: 764px;\n  left: 197px;\n}\n\n.handle[_ngcontent-%COMP%] {\n  background-size: cover;\n  left: 46px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(calc(-50% + 45px));\n  z-index: 5;\n}\n\n.short-handle[_ngcontent-%COMP%] {\n  height: 72px;\n  width: 80px;\n}\n\n.long-handle[_ngcontent-%COMP%] {\n  height: 460px;\n  width: 73px;\n}\n\n@media (max-width: 500px) {\n  .door[_ngcontent-%COMP%] {\n    margin: 20px auto;\n    min-height: 400px;\n    width: 200px;\n  }\n\n  .frame[_ngcontent-%COMP%] {\n    height: 400px;\n    width: 200px;\n  }\n\n  .piece-1[_ngcontent-%COMP%] {\n    height: 382px;\n    right: 18px;\n    width: 106px;\n  }\n\n  .piece-2[_ngcontent-%COMP%] {\n    left: 18px;\n    height: 382px;\n    width: 65px;\n  }\n\n  .divider-1[_ngcontent-%COMP%] {\n    left: 83px;\n    height: 382px;\n    width: 2px;\n  }\n\n  .handle[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 44px;\n    left: 28px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21vZGVybi1tb2RlbC1kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQ0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUVBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUdBO0VBQ0UsU0FBQTtFQUVBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQURGOztBQUlBO0VBQ0UsU0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBREY7O0FBR0U7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQURKOztBQUlFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUFGSjs7QUFNQTtFQUNFLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHdDQUFBO0VBQ0EsVUFBQTtBQUhGOztBQU1BO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FBSEY7O0FBTUE7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxZQUFBO0VBSEY7O0VBTUE7SUFDRSxhQUFBO0lBQ0EsWUFBQTtFQUhGOztFQU1BO0lBQ0UsYUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBSEY7O0VBTUE7SUFDRSxVQUFBO0lBQ0EsYUFBQTtJQUNBLFdBQUE7RUFIRjs7RUFNQTtJQUNFLFVBQUE7SUFDQSxhQUFBO0lBQ0EsVUFBQTtFQUhGOztFQU1BO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0VBSEY7QUFDRiIsImZpbGUiOiJtb2Rlcm4tbW9kZWwtZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kb29yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiA3NjRweDtcbn1cblxuLmFyZWEge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IHRvcDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmZyYW1lIHtcbiAgaGVpZ2h0OiA4MDBweDtcbiAgd2lkdGg6IDM5M3B4O1xuICB6LWluZGV4OiAxO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMHB4IC0xcHggNHB4IDJweCAjMDAwMDAwMWY7XG4gIGhlaWdodDogNzYxcHg7XG4gIGxlZnQ6IDM2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzOHB4O1xuICB3aWR0aDogMzIxcHg7XG59XG5cbi5waWVjZS0xIHtcbiAgYm90dG9tOiAwO1xuICAvLyBib3gtc2hhZG93OiAycHggLTJweCAycHggMHB4IHJnYigwIDAgMCAvIDIwJSk7XG4gIGhlaWdodDogNzY0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAxNTlweDtcbiAgei1pbmRleDogMTA7XG59XG5cbi5waWVjZS0yIHtcbiAgYm90dG9tOiAwO1xuICAvLyBib3gtc2hhZG93OiAtMnB4IC0zcHggMnB4IDBweCByZ2IoMCAwIDAgLyAyMCUpO1xuICBoZWlnaHQ6IDc2NHB4O1xuICBsZWZ0OiAzNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNTlweDtcbiAgei1pbmRleDogMTtcbn1cblxuLnBpZWNlLTMge1xuICBoZWlnaHQ6IDI1NXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNjBweDtcbiAgdG9wOiAzNnB4O1xuICBsZWZ0OiAxNDRweDtcbiAgei1pbmRleDogMztcbn1cblxuLnBpZWNlLTQge1xuICBoZWlnaHQ6IDI1NXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNjBweDtcbiAgdG9wOiA1NDRweDtcbiAgbGVmdDogMTQ0cHg7XG4gIHotaW5kZXg6IDM7XG59XG5cbi5waWVjZS01IHtcbiAgaGVpZ2h0OiAyNTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTYwcHg7XG4gIHRvcDogMjg5cHg7XG4gIGxlZnQ6IDE0NHB4O1xuICB6LWluZGV4OiAzO1xufVxuXG4uZGl2aWRlciB7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiA3NjRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogM3B4O1xuICB6LWluZGV4OiAxMDtcblxuICAmLmRpdmlkZXItMSB7XG4gICAgaGVpZ2h0OiA3NjRweDtcbiAgICBsZWZ0OiAxNDNweDtcbiAgfVxuXG4gICYuZGl2aWRlci0yIHtcbiAgICBoZWlnaHQ6IDc2NHB4O1xuICAgIGxlZnQ6IDE5N3B4O1xuICB9XG59XG5cbi5oYW5kbGUge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBsZWZ0OiA0NnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYygtNTAlICsgNDVweCkpO1xuICB6LWluZGV4OiA1O1xufVxuXG4uc2hvcnQtaGFuZGxlIHtcbiAgaGVpZ2h0OiA3MnB4O1xuICB3aWR0aDogODBweDtcbn1cblxuLmxvbmctaGFuZGxlIHtcbiAgaGVpZ2h0OiA0NjBweDtcbiAgd2lkdGg6IDczcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuZG9vciB7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgbWluLWhlaWdodDogNDAwcHg7XG4gICAgd2lkdGg6IDIwMHB4XG4gIH1cblxuICAuZnJhbWUge1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG5cbiAgLnBpZWNlLTEge1xuICAgIGhlaWdodDogMzgycHg7XG4gICAgcmlnaHQ6IDE4cHg7XG4gICAgd2lkdGg6IDEwNnB4O1xuICB9XG5cbiAgLnBpZWNlLTIge1xuICAgIGxlZnQ6IDE4cHg7XG4gICAgaGVpZ2h0OiAzODJweDtcbiAgICB3aWR0aDogNjVweDtcbiAgfVxuXG4gIC5kaXZpZGVyLTEge1xuICAgIGxlZnQ6IDgzcHg7XG4gICAgaGVpZ2h0OiAzODJweDtcbiAgICB3aWR0aDogMnB4O1xuICB9XG5cbiAgLmhhbmRsZSB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0NHB4O1xuICAgIGxlZnQ6IDI4cHg7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "IhKX":
/*!******************************************!*\
  !*** ./src/app/editor/editor.service.ts ***!
  \******************************************/
/*! exports provided: EditorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorService", function() { return EditorService; });
/* harmony import */ var html_to_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! html-to-image */ "53SV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class EditorService {
    constructor() {
        this.door = null;
        this.style = {};
        this.isEditing = false;
        this.showControlles = false;
        this.bucketPath = 'https://console.cloud.google.com/storage/browser/';
        this.selectedStyle = {};
    }
    toggelEditing() {
        this.isEditing = !this.isEditing;
    }
    saveImage(filename) {
        const element = document.querySelector('.playground');
        console.log('element: ', element);
        html_to_image__WEBPACK_IMPORTED_MODULE_0__["toPng"](element)
            .then((dataUrl) => {
            const img = new Image();
            img.src = dataUrl;
            const a = document.createElement('a'); // Create <a>
            a.href = dataUrl; // Image Base64 Goes here
            a.download = `${filename}.png`; // File name Here
            a.click(); // Downloaded file
        })
            .catch((error) => {
            alert('oops, something went wrong!');
        });
    }
}
EditorService.ɵfac = function EditorService_Factory(t) { return new (t || EditorService)(); };
EditorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EditorService, factory: EditorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "IvFE":
/*!****************************************************!*\
  !*** ./src/app/svg/svg-icon/svg-icon.component.ts ***!
  \****************************************************/
/*! exports provided: SvgIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgIconComponent", function() { return SvgIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SvgIconComponent {
}
SvgIconComponent.ɵfac = function SvgIconComponent_Factory(t) { return new (t || SvgIconComponent)(); };
SvgIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SvgIconComponent, selectors: [["app-svg-icon"]], inputs: { name: "name" }, decls: 2, vars: 1, consts: [["version", "1.1", "viewBox", "0 0 50 50", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "svg-icon"]], template: function SvgIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", "#" + ctx.name, null, "xlink");
    } }, styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n  height: 30px;\n  position: relative;\n  vertical-align: middle;\n  width: 30px;\n}\n\n.svg-icon[_ngcontent-%COMP%] {\n  fill: currentColor;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N2Zy1pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoic3ZnLWljb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4uc3ZnLWljb24ge1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG4iXX0= */"] });


/***/ }),

/***/ "LBdP":
/*!****************************************************!*\
  !*** ./src/app/file-upload/file-upload.service.ts ***!
  \****************************************************/
/*! exports provided: FileUploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadService", function() { return FileUploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FileUploadService {
    constructor() {
        // API url
        this.baseApiUrl = 'https://file.io';
    }
    // Returns an observable
    upload(file) {
        // Create form data
        // const formData = new FormData();
        // // Store form name as "file" with file data
        // formData.append('file', file, file.name);
        // Make http post request over api
        // with formData as req
        // return this.http.post(this.baseApiUrl, formData);
    }
}
FileUploadService.ɵfac = function FileUploadService_Factory(t) { return new (t || FileUploadService)(); };
FileUploadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FileUploadService, factory: FileUploadService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var assets_data_categories_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/data/categories.json */ "nsEa");
var assets_data_categories_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! assets/data/categories.json */ "nsEa", 1);
/* harmony import */ var assets_data_modern_models_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/data/modern-models.json */ "rNjp");
var assets_data_modern_models_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! assets/data/modern-models.json */ "rNjp", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_editor_editor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/editor/editor.service */ "IhKX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = function (a0) { return { "selected": a0 }; };
function DashboardComponent_ng_container_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardComponent_ng_container_2_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const category_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r5.selectCategory(category_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, (ctx_r3.selectedDoor.category == null ? null : ctx_r3.selectedDoor.category.name) === category_r4.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", category_r4.img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](category_r4.name);
} }
function DashboardComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DashboardComponent_ng_container_2_div_4_Template, 4, 5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.categories);
} }
function DashboardComponent_ng_template_3_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardComponent_ng_template_3_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const model_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r10.selectModel(model_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const model_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, (ctx_r8.selectedDoor.model == null ? null : ctx_r8.selectedDoor.model.id) === model_r9.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", model_r9.img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](model_r9.name);
} }
function DashboardComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Models");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DashboardComponent_ng_template_3_div_3_Template, 4, 5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.models);
} }
class DashboardComponent {
    constructor(router, editorService) {
        this.router = router;
        this.editorService = editorService;
        this.categories = [];
        this.modernModels = [];
        this.models = [];
        this.selectedDoor = {};
        this.page = 'category';
    }
    ngOnInit() {
        this.categories = assets_data_categories_json__WEBPACK_IMPORTED_MODULE_0__.categories;
        this.modernModels = assets_data_modern_models_json__WEBPACK_IMPORTED_MODULE_1__.models;
    }
    selectCategory(category) {
        this.selectedDoor.category = category;
        if (this.selectedDoor.category.id === 'modern') {
            this.models = this.modernModels;
        }
        this.page = 'model';
    }
    selectModel(model) {
        this.selectedDoor.model = model;
        this.editorService.door = this.selectedDoor;
        this.router.navigate(['/editor']);
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_editor_editor_service__WEBPACK_IMPORTED_MODULE_4__["EditorService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 5, vars: 2, consts: [[1, "categories"], [1, "container"], [4, "ngIf", "ngIfElse"], ["ngx-datatable-header-template", ""], ["modelsTemplate", ""], [1, "categories-cards"], ["class", "categories-card", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "categories-card", 3, "ngClass", "click"], [1, "category-img", 3, "src"], [1, "category-text"], [1, "models-cards"], ["class", "models-card", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "models-card", 3, "ngClass", "click"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DashboardComponent_ng_container_2_Template, 5, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DashboardComponent_ng_template_3_Template, 4, 1, "ng-template", 3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.page === "category")("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: [".categories[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.categories[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 300;\n  margin: 0;\n}\n.categories-cards[_ngcontent-%COMP%], .models-cards[_ngcontent-%COMP%] {\n  gap: 12px;\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  margin: 30px 0;\n}\n.categories-card[_ngcontent-%COMP%], .models-card[_ngcontent-%COMP%] {\n  align-items: center;\n  background: #fff;\n  border-radius: 4px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  padding: 30px;\n}\n.categories-card.selected[_ngcontent-%COMP%], .models-card.selected[_ngcontent-%COMP%] {\n  border-color: #279cff;\n}\n.category-img[_ngcontent-%COMP%] {\n  height: 300px;\n  object-fit: cover;\n  width: 100%;\n}\n.category-text[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.button-container[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  background: #fecf1f;\n  padding: 8px 36px;\n  border-radius: 4px;\n  font-size: 12px;\n  cursor: pointer;\n}\n.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n@media (max-width: 1200px) {\n  .categories-cards[_ngcontent-%COMP%], .models-cards[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 500px) {\n  .categories-cards[_ngcontent-%COMP%], .models-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFDSjtBQUdBOztFQUVFLFNBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxjQUFBO0FBQUY7QUFHQTs7RUFFRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBQUY7QUFFRTs7RUFDRSxxQkFBQTtBQUNKO0FBR0E7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBQUY7QUFHQTtFQUNFLGdCQUFBO0FBQUY7QUFHQTtFQUNFLG1CQUFBO0FBQUY7QUFFRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUFKO0FBRUk7RUFDRSxZQUFBO0FBQU47QUFLQTtFQUNFOztJQUVFLHFDQUFBO0VBRkY7QUFDRjtBQUtBO0VBQ0U7O0lBRUUsMEJBQUE7RUFIRjtBQUNGIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXRlZ29yaWVzIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcblxuICBoNCB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbi5jYXRlZ29yaWVzLWNhcmRzLFxuLm1vZGVscy1jYXJkcyB7XG4gIGdhcDogMTJweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcbiAgbWFyZ2luOiAzMHB4IDA7XG59XG5cbi5jYXRlZ29yaWVzLWNhcmQsXG4ubW9kZWxzLWNhcmQge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDMwcHg7XG5cbiAgJi5zZWxlY3RlZCB7XG4gICAgYm9yZGVyLWNvbG9yOiAjMjc5Y2ZmO1xuICB9XG59XG5cbi5jYXRlZ29yeS1pbWcge1xuICBoZWlnaHQ6IDMwMHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXRlZ29yeS10ZXh0IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gIGJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICNmZWNmMWY7XG4gICAgcGFkZGluZzogOHB4IDM2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuY2F0ZWdvcmllcy1jYXJkcyxcbiAgLm1vZGVscy1jYXJkcyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmNhdGVnb3JpZXMtY2FyZHMsXG4gIC5tb2RlbHMtY2FyZHMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "RWlP":
/*!******************************************************!*\
  !*** ./src/app/file-upload/file-upload.component.ts ***!
  \******************************************************/
/*! exports provided: FileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return FileUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _file_upload_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file-upload.service */ "LBdP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function FileUploadComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Visit Here");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r0.shortLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.shortLink);
} }
function FileUploadComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FileUploadComponent {
    // Inject service
    constructor(fileUploadService) {
        this.fileUploadService = fileUploadService;
        // Variable to store shortLink from api response
        this.shortLink = '';
        this.loading = false; // Flag variable
        this.file = null; // Variable to store file
    }
    ngOnInit() {
    }
    // On file Select
    onChange(event) {
        console.log('event: ', event);
        this.file = event.target.files[0];
    }
    // OnClick of button Upload
    onUpload() {
        this.loading = !this.loading;
        console.log(this.file);
    }
}
FileUploadComponent.ɵfac = function FileUploadComponent_Factory(t) { return new (t || FileUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_file_upload_service__WEBPACK_IMPORTED_MODULE_1__["FileUploadService"])); };
FileUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FileUploadComponent, selectors: [["app-file-upload"]], decls: 6, vars: 2, consts: [[1, "text-center"], ["type", "file", 1, "form-control", 3, "change"], [1, "btn", "btn-success", 3, "click"], ["class", "container text-center jumbotron", 4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "container", "text-center", "jumbotron"], [3, "href"], [1, "container"]], template: function FileUploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FileUploadComponent_Template_input_change_1_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileUploadComponent_Template_button_click_2_listener() { return ctx.onUpload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Upload ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FileUploadComponent_div_4_Template, 5, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FileUploadComponent_div_5_Template, 3, 0, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shortLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWxlLXVwbG9hZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _svg_svg_definitions_svg_definitions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svg/svg-definitions/svg-definitions.component */ "kfsy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'abu-shaqdam';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-svg-definitions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _svg_svg_definitions_svg_definitions_component__WEBPACK_IMPORTED_MODULE_2__["SvgDefinitionsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _category_card_category_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./category-card/category-card.component */ "bwJV");
/* harmony import */ var _controles_controles_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./controles/controles.component */ "5H6s");
/* harmony import */ var app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./editor/editor.component */ "xD4D");
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./file-upload/file-upload.component */ "RWlP");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var app_models_models_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/models/models.component */ "3YiQ");
/* harmony import */ var _editor_modern_modern_model_a_modern_model_a_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./editor/modern/modern-model-a/modern-model-a.component */ "kmHl");
/* harmony import */ var _editor_modern_modern_model_b_modern_model_b_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./editor/modern/modern-model-b/modern-model-b.component */ "orVZ");
/* harmony import */ var _editor_modern_modern_model_e_modern_model_e_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./editor/modern/modern-model-e/modern-model-e.component */ "9M9Z");
/* harmony import */ var _svg_svg_definitions_svg_definitions_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./svg/svg-definitions/svg-definitions.component */ "kfsy");
/* harmony import */ var _svg_svg_icon_svg_icon_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./svg/svg-icon/svg-icon.component */ "IvFE");
/* harmony import */ var _editor_modern_modern_model_c_modern_model_c_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./editor/modern/modern-model-c/modern-model-c.component */ "BAMr");
/* harmony import */ var _editor_modern_modern_model_f_modern_model_f_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./editor/modern/modern-model-f/modern-model-f.component */ "a6G2");
/* harmony import */ var _editor_modern_modern_model_d_modern_model_d_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./editor/modern/modern-model-d/modern-model-d.component */ "HAH0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ "fXoL");
























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _category_card_category_card_component__WEBPACK_IMPORTED_MODULE_8__["CategoryCardComponent"],
        _controles_controles_component__WEBPACK_IMPORTED_MODULE_9__["ControlesComponent"],
        app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
        _editor_editor_component__WEBPACK_IMPORTED_MODULE_11__["EditorComponent"],
        _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_12__["FileUploadComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
        app_models_models_component__WEBPACK_IMPORTED_MODULE_14__["ModelsComponent"],
        _editor_modern_modern_model_a_modern_model_a_component__WEBPACK_IMPORTED_MODULE_15__["ModernModelAComponent"],
        _editor_modern_modern_model_b_modern_model_b_component__WEBPACK_IMPORTED_MODULE_16__["ModernModelBComponent"],
        _editor_modern_modern_model_e_modern_model_e_component__WEBPACK_IMPORTED_MODULE_17__["ModernModelEComponent"],
        _svg_svg_definitions_svg_definitions_component__WEBPACK_IMPORTED_MODULE_18__["SvgDefinitionsComponent"],
        _svg_svg_icon_svg_icon_component__WEBPACK_IMPORTED_MODULE_19__["SvgIconComponent"],
        _editor_modern_modern_model_c_modern_model_c_component__WEBPACK_IMPORTED_MODULE_20__["ModernModelCComponent"],
        _editor_modern_modern_model_f_modern_model_f_component__WEBPACK_IMPORTED_MODULE_21__["ModernModelFComponent"],
        _editor_modern_modern_model_d_modern_model_d_component__WEBPACK_IMPORTED_MODULE_22__["ModernModelDComponent"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"]] }); })();


/***/ }),

/***/ "a6G2":
/*!**************************************************************************!*\
  !*** ./src/app/editor/modern/modern-model-f/modern-model-f.component.ts ***!
  \**************************************************************************/
/*! exports provided: ModernModelFComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModernModelFComponent", function() { return ModernModelFComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_editor_editor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/editor/editor.service */ "IhKX");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = ["shortHandle"];
const _c1 = ["longHandle"];
const _c2 = function (a0) { return { "background-image": a0 }; };
const _c3 = function (a0) { return { "editing": a0 }; };
const _c4 = function (a0) { return { "background-color": a0 }; };
class ModernModelFComponent {
    constructor(editorService) {
        this.editorService = editorService;
    }
    ngOnInit() {
    }
    editItem(directory) {
        if (!this.editorService.isEditing) {
            return;
        }
        const url = `${this.editorService.bucketPath}${this.editorService.door.category.id}-doors/${this.editorService.door.model.id}/${directory}`;
        window.open(url, '_blank');
    }
    onDroped(event) {
        event.container.element.nativeElement.classList.remove('drag-over');
        const dragedElement = event.item.element.nativeElement;
        const dropedElement = event.container.element.nativeElement;
        if (dragedElement.className.includes('frame-item') && dropedElement.className.includes('frame')) {
            dropedElement.style.backgroundImage = dragedElement.style.backgroundImage;
        }
        if (dragedElement.className.includes('board-item') && dropedElement.className.includes('board')) {
            dropedElement.style.backgroundImage = dragedElement.style.backgroundImage;
        }
        if (dragedElement.className.includes('handle-item') && dropedElement.className.includes('handle')) {
            dropedElement.style.backgroundImage = dragedElement.style.backgroundImage;
            console.log('dragedElement.className.includes: ', dragedElement.className);
            if (dragedElement.className.includes('short-handle-item')) {
                dropedElement.classList.add('short-handle');
                dropedElement.classList.remove('long-handle');
            }
            if (dragedElement.className.includes('long-handle-item')) {
                dropedElement.classList.add('long-handle');
                dropedElement.classList.remove('short-handle');
            }
        }
    }
    onEntered(event) {
        event.container.element.nativeElement.innerHTML = '';
        const dragedElement = event.item.element.nativeElement;
        const dropedElement = event.container.element.nativeElement;
        if (dragedElement.className.includes('frame-item') && dropedElement.className.includes('frame')) {
            event.container.element.nativeElement.classList.add('drag-over');
        }
        if (dragedElement.className.includes('board-item') && dropedElement.className.includes('board')) {
            event.container.element.nativeElement.classList.add('drag-over');
        }
        if (dragedElement.className.includes('handle-item') && dropedElement.className.includes('handle')) {
            event.container.element.nativeElement.classList.add('drag-over');
        }
    }
    onExit(event) {
        event.container.element.nativeElement.classList.remove('drag-over');
    }
}
ModernModelFComponent.ɵfac = function ModernModelFComponent_Factory(t) { return new (t || ModernModelFComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_editor_editor_service__WEBPACK_IMPORTED_MODULE_1__["EditorService"])); };
ModernModelFComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModernModelFComponent, selectors: [["app-modern-model-f"]], viewQuery: function ModernModelFComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.shortHandle = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.longHandle = _t.first);
    } }, inputs: { assets: "assets" }, decls: 18, vars: 66, consts: [[1, "door"], ["cdkDropList", "", 1, "area", "frame", 3, "ngStyle", "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited"], [1, "shadow"], ["cdkDropList", "", 1, "area", "board", "small-block", "piece-1", 3, "ngStyle", "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited"], ["cdkDropList", "", 1, "area", "board", "small-block", "piece-2", 3, "ngStyle", "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited"], ["cdkDropList", "", 1, "area", "board", "small-block", "piece-3", 3, "ngStyle", "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited"], ["cdkDropList", "", 1, "area", "board", "small-block", "piece-4", 3, "ngStyle", "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited"], ["cdkDropList", "", 1, "area", "board", "small-block", "piece-5", 3, "ngStyle", "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited"], ["cdkDropList", "", 1, "area", "board", "small-block", "piece-6", 3, "ngStyle", "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited"], ["cdkDropList", "", 1, "area", "board", "piece-7", 3, "ngStyle", "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited"], ["cdkDropList", "", 1, "area", "handle", "short-handle", 3, "ngStyle", "ngClass", "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited"], ["shortHandle", ""], [1, "divider", "divider-0", 3, "ngStyle", "ngClass"], [1, "divider", "small-divider", "divider-1", 3, "ngStyle", "ngClass"], [1, "divider", "small-divider", "divider-2", 3, "ngStyle", "ngClass"], [1, "divider", "small-divider", "divider-3", 3, "ngStyle", "ngClass"], [1, "divider", "small-divider", "divider-4", 3, "ngStyle", "ngClass"], [1, "divider", "small-divider", "divider-5", 3, "ngStyle", "ngClass"]], template: function ModernModelFComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ModernModelFComponent_Template_div_cdkDropListDropped_1_listener($event) { return ctx.onDroped($event); })("cdkDropListEntered", function ModernModelFComponent_Template_div_cdkDropListEntered_1_listener($event) { return ctx.onEntered($event); })("cdkDropListExited", function ModernModelFComponent_Template_div_cdkDropListExited_1_listener($event) { return ctx.onExit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ModernModelFComponent_Template_div_cdkDropListDropped_3_listener($event) { return ctx.onDroped($event); })("cdkDropListEntered", function ModernModelFComponent_Template_div_cdkDropListEntered_3_listener($event) { return ctx.onEntered($event); })("cdkDropListExited", function ModernModelFComponent_Template_div_cdkDropListExited_3_listener($event) { return ctx.onExit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ModernModelFComponent_Template_div_cdkDropListDropped_4_listener($event) { return ctx.onDroped($event); })("cdkDropListEntered", function ModernModelFComponent_Template_div_cdkDropListEntered_4_listener($event) { return ctx.onEntered($event); })("cdkDropListExited", function ModernModelFComponent_Template_div_cdkDropListExited_4_listener($event) { return ctx.onExit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ModernModelFComponent_Template_div_cdkDropListDropped_5_listener($event) { return ctx.onDroped($event); })("cdkDropListEntered", function ModernModelFComponent_Template_div_cdkDropListEntered_5_listener($event) { return ctx.onEntered($event); })("cdkDropListExited", function ModernModelFComponent_Template_div_cdkDropListExited_5_listener($event) { return ctx.onExit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ModernModelFComponent_Template_div_cdkDropListDropped_6_listener($event) { return ctx.onDroped($event); })("cdkDropListEntered", function ModernModelFComponent_Template_div_cdkDropListEntered_6_listener($event) { return ctx.onEntered($event); })("cdkDropListExited", function ModernModelFComponent_Template_div_cdkDropListExited_6_listener($event) { return ctx.onExit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ModernModelFComponent_Template_div_cdkDropListDropped_7_listener($event) { return ctx.onDroped($event); })("cdkDropListEntered", function ModernModelFComponent_Template_div_cdkDropListEntered_7_listener($event) { return ctx.onEntered($event); })("cdkDropListExited", function ModernModelFComponent_Template_div_cdkDropListExited_7_listener($event) { return ctx.onExit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ModernModelFComponent_Template_div_cdkDropListDropped_8_listener($event) { return ctx.onDroped($event); })("cdkDropListEntered", function ModernModelFComponent_Template_div_cdkDropListEntered_8_listener($event) { return ctx.onEntered($event); })("cdkDropListExited", function ModernModelFComponent_Template_div_cdkDropListExited_8_listener($event) { return ctx.onExit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ModernModelFComponent_Template_div_cdkDropListDropped_9_listener($event) { return ctx.onDroped($event); })("cdkDropListEntered", function ModernModelFComponent_Template_div_cdkDropListEntered_9_listener($event) { return ctx.onEntered($event); })("cdkDropListExited", function ModernModelFComponent_Template_div_cdkDropListExited_9_listener($event) { return ctx.onExit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ModernModelFComponent_Template_div_cdkDropListDropped_10_listener($event) { return ctx.onDroped($event); })("cdkDropListEntered", function ModernModelFComponent_Template_div_cdkDropListEntered_10_listener($event) { return ctx.onEntered($event); })("cdkDropListExited", function ModernModelFComponent_Template_div_cdkDropListExited_10_listener($event) { return ctx.onExit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c2, "url(" + ctx.assets.frames[3].url + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c2, "url(" + ctx.assets["45-degree"][1].url + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c2, "url(" + ctx.assets["45-degree"][1].url + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c2, "url(" + ctx.assets["45-degree"][1].url + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c2, "url(" + ctx.assets["45-degree"][1].url + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c2, "url(" + ctx.assets["45-degree"][1].url + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c2, "url(" + ctx.assets["45-degree"][1].url + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c2, "url(" + ctx.assets.lengthwise[3].url + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c2, "url(" + ctx.assets["short-handles"][0].url + ")"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](40, _c3, ctx.editorService.isEditing));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](42, _c4, ctx.editorService.selectedDividers || ctx.assets.dividers[0]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](44, _c3, ctx.editorService.isEditing));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](46, _c4, ctx.editorService.selectedDividers || ctx.assets.dividers[0]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](48, _c3, ctx.editorService.isEditing));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](50, _c4, ctx.editorService.selectedDividers || ctx.assets.dividers[0]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](52, _c3, ctx.editorService.isEditing));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](54, _c4, ctx.editorService.selectedDividers || ctx.assets.dividers[0]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](56, _c3, ctx.editorService.isEditing));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](58, _c4, ctx.editorService.selectedDividers || ctx.assets.dividers[0]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](60, _c3, ctx.editorService.isEditing));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](62, _c4, ctx.editorService.selectedDividers || ctx.assets.dividers[0]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](64, _c3, ctx.editorService.isEditing));
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".door[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 764px;\n  overflow: hidden;\n}\n\n.area[_ngcontent-%COMP%] {\n  background-position: left top;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-size: cover;\n}\n\n.frame[_ngcontent-%COMP%] {\n  height: 800px;\n  width: 393px;\n  z-index: 1;\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0px -1px 4px 2px #0000001f;\n  height: 761px;\n  left: 36px;\n  position: absolute;\n  top: 38px;\n  width: 321px;\n}\n\n.small-block[_ngcontent-%COMP%] {\n  height: 764px;\n  position: absolute;\n  right: 35px;\n  width: 217px;\n}\n\n.small-block[_ngcontent-%COMP%]:nth-child(even) {\n  transform: scale(-1, 1);\n}\n\n.piece-1[_ngcontent-%COMP%] {\n  top: 36px;\n  z-index: 2;\n}\n\n.piece-2[_ngcontent-%COMP%] {\n  top: 163px;\n  z-index: 3;\n}\n\n.piece-3[_ngcontent-%COMP%] {\n  top: 290px;\n  z-index: 4;\n}\n\n.piece-4[_ngcontent-%COMP%] {\n  top: 417px;\n  z-index: 5;\n}\n\n.piece-5[_ngcontent-%COMP%] {\n  top: 544px;\n  z-index: 6;\n}\n\n.piece-6[_ngcontent-%COMP%] {\n  top: 671px;\n  z-index: 7;\n}\n\n.piece-7[_ngcontent-%COMP%] {\n  bottom: 0;\n  height: 764px;\n  left: 35px;\n  position: absolute;\n  width: 214px;\n  z-index: 1;\n}\n\n.divider-0[_ngcontent-%COMP%] {\n  height: 764px;\n  bottom: 0;\n  left: 140px;\n  position: absolute;\n  width: 3px;\n  z-index: 12;\n}\n\n.small-divider[_ngcontent-%COMP%] {\n  height: 3px;\n  position: absolute;\n  right: 36px;\n  top: 161px;\n  width: 217px;\n  z-index: 10;\n}\n\n.divider-1[_ngcontent-%COMP%] {\n  top: 162px;\n}\n\n.divider-2[_ngcontent-%COMP%] {\n  top: 290px;\n}\n\n.divider-3[_ngcontent-%COMP%] {\n  top: 415px;\n}\n\n.divider-4[_ngcontent-%COMP%] {\n  top: 542px;\n}\n\n.divider-5[_ngcontent-%COMP%] {\n  top: 670px;\n}\n\n.handle[_ngcontent-%COMP%] {\n  background-size: cover;\n  left: 46px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(calc(-50% + 45px));\n  z-index: 5;\n}\n\n.short-handle[_ngcontent-%COMP%] {\n  height: 72px;\n  width: 80px;\n}\n\n.long-handle[_ngcontent-%COMP%] {\n  height: 460px;\n  width: 73px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21vZGVybi1tb2RlbC1mLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQ0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFDRTtFQUNFLHVCQUFBO0FBQ0o7O0FBR0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQUFGOztBQUdBO0VBQ0UsVUFBQTtFQUNBLFVBQUE7QUFBRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUNBO0VBQ0UsVUFBQTtFQUNBLFVBQUE7QUFFRjs7QUFDQTtFQUNFLFVBQUE7RUFDQSxVQUFBO0FBRUY7O0FBQ0E7RUFDRSxTQUFBO0VBRUEsYUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSx3Q0FBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFFRSxhQUFBO0VBQ0EsV0FBQTtBQUFGIiwiZmlsZSI6Im1vZGVybi1tb2RlbC1mLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvb3Ige1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDc2NHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYXJlYSB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgdG9wO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uZnJhbWUge1xuICBoZWlnaHQ6IDgwMHB4O1xuICB3aWR0aDogMzkzcHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5zaGFkb3cge1xuICBib3gtc2hhZG93OiAwcHggLTFweCA0cHggMnB4ICMwMDAwMDAxZjtcbiAgaGVpZ2h0OiA3NjFweDtcbiAgbGVmdDogMzZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM4cHg7XG4gIHdpZHRoOiAzMjFweDtcbn1cblxuLnNtYWxsLWJsb2NrIHtcbiAgaGVpZ2h0OiA3NjRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMzVweDtcbiAgd2lkdGg6IDIxN3B4O1xuXG4gICY6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcbiAgfVxufVxuXG4ucGllY2UtMSB7XG4gIHRvcDogMzZweDtcbiAgei1pbmRleDogMjtcbn1cblxuLnBpZWNlLTIge1xuICB0b3A6IDE2M3B4O1xuICB6LWluZGV4OiAzO1xufVxuLnBpZWNlLTMge1xuICB0b3A6IDI5MHB4O1xuICB6LWluZGV4OiA0O1xufVxuXG4ucGllY2UtNCB7XG4gIHRvcDogNDE3cHg7XG4gIHotaW5kZXg6IDU7XG59XG4ucGllY2UtNSB7XG4gIHRvcDogNTQ0cHg7XG4gIHotaW5kZXg6IDY7XG59XG5cbi5waWVjZS02IHtcbiAgdG9wOiA2NzFweDtcbiAgei1pbmRleDogNztcbn1cblxuLnBpZWNlLTcge1xuICBib3R0b206IDA7XG4gIC8vIGJveC1zaGFkb3c6IC0ycHggLTNweCAycHggMHB4IHJnYigwIDAgMCAvIDIwJSk7XG4gIGhlaWdodDogNzY0cHg7XG4gIGxlZnQ6IDM1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIxNHB4O1xuICB6LWluZGV4OiAxO1xufVxuXG4uZGl2aWRlci0wIHtcbiAgaGVpZ2h0OiA3NjRweDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAxNDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogM3B4O1xuICB6LWluZGV4OiAxMjtcbn1cblxuLnNtYWxsLWRpdmlkZXIge1xuICBoZWlnaHQ6IDNweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMzZweDtcbiAgdG9wOiAxNjFweDtcbiAgd2lkdGg6IDIxN3B4O1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmRpdmlkZXItMSB7XG4gIHRvcDogMTYycHg7XG59XG5cbi5kaXZpZGVyLTIge1xuICB0b3A6IDI5MHB4O1xufVxuXG4uZGl2aWRlci0zIHtcbiAgdG9wOiA0MTVweDtcbn1cblxuLmRpdmlkZXItNCB7XG4gIHRvcDogNTQycHg7XG59XG5cbi5kaXZpZGVyLTUge1xuICB0b3A6IDY3MHB4O1xufVxuXG4uaGFuZGxlIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbGVmdDogNDZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKGNhbGMoLTUwJSArIDQ1cHgpKTtcbiAgei1pbmRleDogNTtcbn1cblxuLnNob3J0LWhhbmRsZSB7XG4gIGhlaWdodDogNzJweDtcbiAgd2lkdGg6IDgwcHg7XG59XG5cbi5sb25nLWhhbmRsZSB7XG4gIC8vIGJveC1zaGFkb3c6IDJweCAwcHggMHB4IDBweCByZ2IoMCAwIDAgLyA1MCUpO1xuICBoZWlnaHQ6IDQ2MHB4O1xuICB3aWR0aDogNzNweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "bwJV":
/*!**********************************************************!*\
  !*** ./src/app/category-card/category-card.component.ts ***!
  \**********************************************************/
/*! exports provided: CategoryCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryCardComponent", function() { return CategoryCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CategoryCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
CategoryCardComponent.ɵfac = function CategoryCardComponent_Factory(t) { return new (t || CategoryCardComponent)(); };
CategoryCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoryCardComponent, selectors: [["app-category-card"]], decls: 2, vars: 0, template: function CategoryCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "category-card works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeS1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "esnN":
/*!*****************************************!*\
  !*** ./src/app/util/api/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ApiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    get(url, params = {}, additionalHeaders = {}) {
        const headers = Object.assign({}, additionalHeaders);
        return this.httpClient.get(url, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"](headers),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
                fromObject: params,
            }),
            observe: 'response',
        });
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_editor_editor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/editor/editor.service */ "IhKX");
/* harmony import */ var _svg_svg_icon_svg_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg/svg-icon/svg-icon.component */ "IvFE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





const _c0 = function (a0) { return { "active": a0 }; };
function HeaderComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.editorService.toggelEditing(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-svg-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r0.editorService.isEditing));
} }
function HeaderComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.toggleDiaglog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-svg-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r1.editorService.isEditing));
} }
function HeaderComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "SAVE IMAGE:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeaderComponent_div_7_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.fileName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_7_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.saveImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_7_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.toggleDiaglog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.fileName);
} }
class HeaderComponent {
    constructor(editorService) {
        this.editorService = editorService;
        this.isOpened = false;
        this.fileName = '';
    }
    ngOnInit() {
    }
    toggleDiaglog() {
        this.fileName = '';
        this.isOpened = !this.isOpened;
    }
    saveImage() {
        this.editorService.saveImage(this.fileName);
        this.toggleDiaglog();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_editor_editor_service__WEBPACK_IMPORTED_MODULE_1__["EditorService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 8, vars: 3, consts: [[1, "nav"], ["href", ""], ["name", "svg-door", 1, "nav-icon"], [4, "ngIf"], ["class", "dialog", 4, "ngIf"], [3, "click"], ["name", "svg-edit", 1, "nav-icon", 3, "ngClass"], ["name", "svg-download", 1, "nav-icon", 3, "ngClass"], [1, "dialog"], [1, "dialog-content"], ["type", "text", 1, "file-name", 3, "ngModel", "ngModelChange"], [1, "button-container"], [1, "yellow", 3, "disabled", "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-svg-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_li_5_Template, 3, 3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_li_6_Template, 3, 3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_div_7_Template, 10, 2, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editorService.showControlles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editorService.showControlles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpened);
    } }, directives: [_svg_svg_icon_svg_icon_component__WEBPACK_IMPORTED_MODULE_2__["SvgIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".nav[_ngcontent-%COMP%] {\n  align-items: center;\n  background: #fff;\n  display: flex;\n  height: 100%;\n  left: 0;\n  padding: 20px;\n  position: fixed;\n  top: 0;\n}\n\n.nav-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #C3C7D2;\n  margin: 20px 0;\n}\n\n.nav-icon.active[_ngcontent-%COMP%], .nav-icon[_ngcontent-%COMP%]:hover {\n  color: #279cff;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  height: auto;\n  padding: 0;\n  width: auto;\n}\n\n.dialog[_ngcontent-%COMP%] {\n  background: #00000059;\n  height: 100%;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1000;\n}\n\n.dialog-content[_ngcontent-%COMP%] {\n  background: #fff;\n  left: 50%;\n  padding: 20px;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 300px;\n  z-index: 2000;\n}\n\n.file-name[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 20px 0;\n  padding: 6px;\n  width: 100%;\n}\n\n.button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px solid #a7a7a7;\n  cursor: pointer;\n  font-size: 12px;\n  padding: 8px 36px;\n}\n\n.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n\n.button-container[_ngcontent-%COMP%]   button.yellow[_ngcontent-%COMP%] {\n  background: #fecf1f;\n  border-color: transparent;\n}\n\n@media (max-width: 500px) {\n  .nav[_ngcontent-%COMP%] {\n    border-right: 1px solid #279cff;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNFO0VBRUUsY0FBQTtBQUFKOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBREY7O0FBSUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFERjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBREo7O0FBR0k7RUFDRSxZQUFBO0FBRE47O0FBSUk7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0FBRk47O0FBT0E7RUFDRTtJQUNFLCtCQUFBO0VBSkY7QUFDRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbn1cblxuLm5hdi1pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI0MzQzdEMjtcbiAgbWFyZ2luOiAyMHB4IDA7XG5cbiAgJi5hY3RpdmUsXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAjMjc5Y2ZmO1xuICB9XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogYXV0bztcbn1cblxuLmRpYWxvZyB7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA1OTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi5kaWFsb2ctY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGxlZnQ6IDUwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiAzMDBweDtcbiAgei1pbmRleDogMjAwMDtcbn1cblxuLmZpbGUtbmFtZSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMjBweCAwO1xuICBwYWRkaW5nOiA2cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICBidXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYTdhN2E3O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcGFkZGluZzogOHB4IDM2cHg7XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG5cbiAgICAmLnllbGxvdyB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmVjZjFmO1xuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5uYXYge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMyNzljZmY7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "kfsy":
/*!******************************************************************!*\
  !*** ./src/app/svg/svg-definitions/svg-definitions.component.ts ***!
  \******************************************************************/
/*! exports provided: SvgDefinitionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgDefinitionsComponent", function() { return SvgDefinitionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SvgDefinitionsComponent {
}
SvgDefinitionsComponent.ɵfac = function SvgDefinitionsComponent_Factory(t) { return new (t || SvgDefinitionsComponent)(); };
SvgDefinitionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SvgDefinitionsComponent, selectors: [["app-svg-definitions"]], decls: 10, vars: 0, consts: [["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 2, "display", "block", "height", "0"], ["id", "svg-door", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 640 512"], [1, "fa-group"], ["fill", "currentColor", "d", "M640 464v32a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h608a16 16 0 0 1 16 16z", 1, "fa-secondary"], ["fill", "currentColor", "d", "M464 0H176c-26.47 0-48 22.78-48 50.8V448h384V50.8C512 22.78 490.47 0 464 0zm-48 288a32 32 0 1 1 32-32 32 32 0 0 1-32 32z", 1, "fa-primary"], ["id", "svg-edit", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512"], ["fill", "currentColor", "d", "M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm32 352c0 17.6-14.4 32-32 32H293.3l-8.5 6.4L192 460v-76H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h384c17.6 0 32 14.4 32 32v288zM336 105.4c-12.5-12.5-32.8-12.5-45.2 0l-126.1 126c-2 2-3.4 4.5-4.2 7.3l-16 61.2c-1.4 5.5.1 11.3 4.2 15.4 3 3 7.1 4.7 11.3 4.7 1.3 0 2.7-.2 4-.5l61.2-16c2.8-.7 5.3-2.2 7.3-4.2l126.1-126.1c12.5-12.5 12.5-32.8 0-45.2L336 105.4zM213 273.6l-30.6 8 8-30.6 75-75 22.6 22.6-75 75zm97.6-97.6L288 153.4l25.4-25.4 22.6 22.6-25.4 25.4z", 1, ""], ["id", "svg-download", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512"], ["fill", "currentColor", "d", "M452 432c0 11-9 20-20 20s-20-9-20-20 9-20 20-20 20 9 20 20zm-84-20c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zm144-48v104c0 24.3-19.7 44-44 44H44c-24.3 0-44-19.7-44-44V364c0-24.3 19.7-44 44-44h99.4L87 263.6c-25.2-25.2-7.3-68.3 28.3-68.3H168V40c0-22.1 17.9-40 40-40h96c22.1 0 40 17.9 40 40v155.3h52.7c35.6 0 53.4 43.1 28.3 68.3L368.6 320H468c24.3 0 44 19.7 44 44zm-261.7 17.7c3.1 3.1 8.2 3.1 11.3 0L402.3 241c5-5 1.5-13.7-5.7-13.7H312V40c0-4.4-3.6-8-8-8h-96c-4.4 0-8 3.6-8 8v187.3h-84.7c-7.1 0-10.7 8.6-5.7 13.7l140.7 140.7zM480 364c0-6.6-5.4-12-12-12H336.6l-52.3 52.3c-15.6 15.6-41 15.6-56.6 0L175.4 352H44c-6.6 0-12 5.4-12 12v104c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12V364z", 1, ""]], template: function SvgDefinitionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "symbol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "symbol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "symbol", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "kmHl":
/*!**************************************************************************!*\
  !*** ./src/app/editor/modern/modern-model-a/modern-model-a.component.ts ***!
  \**************************************************************************/
/*! exports provided: ModernModelAComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModernModelAComponent", function() { return ModernModelAComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_editor_editor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/editor/editor.service */ "IhKX");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = ["shortHandle"];
const _c1 = ["longHandle"];
const _c2 = function (a0) { return { "background-image": a0 }; };
const _c3 = function (a0) { return { "editing": a0 }; };
const _c4 = function (a0) { return { "background-color": a0 }; };
class ModernModelAComponent {
    constructor(editorService) {
        this.editorService = editorService;
    }
    ngOnInit() {
    }
    editItem(directory) {
        if (!this.editorService.isEditing) {
            return;
        }
        const url = `${this.editorService.bucketPath}${this.editorService.door.category.id}-doors/${this.editorService.door.model.id}/${directory}`;
        window.open(url, '_blank');
    }
    onDroped(event) {
        event.container.element.nativeElement.classList.remove('drag-over');
        const dragedElement = event.item.element.nativeElement;
        const dropedElement = event.container.element.nativeElement;
        if (dragedElement.className.includes('frame-item') && dropedElement.className.includes('frame')) {
            dropedElement.style.backgroundImage = dragedElement.style.backgroundImage;
        }
        if (dragedElement.className.includes('board-item') && dropedElement.className.includes('board')) {
            dropedElement.style.backgroundImage = dragedElement.style.backgroundImage;
        }
        if (dragedElement.className.includes('handle-item') && dropedElement.className.includes('handle')) {
            dropedElement.style.backgroundImage = dragedElement.style.backgroundImage;
            if (dragedElement.className.includes('short-handle-item')) {
                dropedElement.classList.add('short-handle');
                dropedElement.classList.remove('long-handle');
            }
            if (dragedElement.className.includes('long-handle-item')) {
                dropedElement.classList.add('long-handle');
                dropedElement.classList.remove('short-handle');
            }
        }
    }
    onEntered(event) {
        event.container.element.nativeElement.innerHTML = '';
        const dragedElement = event.item.element.nativeElement;
        const dropedElement = event.container.element.nativeElement;
        if (dragedElement.className.includes('frame-item') && dropedElement.className.includes('frame')) {
            event.container.element.nativeElement.classList.add('drag-over');
        }
        if (dragedElement.className.includes('board-item') && dropedElement.className.includes('board')) {
            event.container.element.nativeElement.classList.add('drag-over');
        }
        if (dragedElement.className.includes('handle-item') && dropedElement.className.includes('handle')) {
            event.container.element.nativeElement.classList.add('drag-over');
        }
    }
    onExit(event) {
        event.container.element.nativeElement.classList.remove('drag-over');
    }
}
ModernModelAComponent.ɵfac = function ModernModelAComponent_Factory(t) { return new (t || ModernModelAComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_editor_editor_service__WEBPACK_IMPORTED_MODULE_1__["EditorService"])); };
ModernModelAComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModernModelAComponent, selectors: [["app-modern-model-a"]], viewQuery: function ModernModelAComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.shortHandle = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.longHandle = _t.first);
    } }, inputs: { assets: "assets" }, decls: 8, vars: 21, consts: [[1, "door"], ["cdkDropList", "", 1, "area", "frame", 3, "ngStyle", "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited"], [1, "shadow"], ["cdkDropList", "", 1, "area", "board", "piece-1", 3, "ngStyle", "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited"], ["cdkDropList", "", 1, "area", "board", "piece-2", 3, "ngStyle", "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited"], ["cdkDropList", "", 1, "area", "handle", "short-handle", 3, "ngStyle", "ngClass", "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited"], ["shortHandle", ""], [1, "divider", "divider-1", 3, "ngStyle", "ngClass"]], template: function ModernModelAComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ModernModelAComponent_Template_div_cdkDropListDropped_1_listener($event) { return ctx.onDroped($event); })("cdkDropListEntered", function ModernModelAComponent_Template_div_cdkDropListEntered_1_listener($event) { return ctx.onEntered($event); })("cdkDropListExited", function ModernModelAComponent_Template_div_cdkDropListExited_1_listener($event) { return ctx.onExit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ModernModelAComponent_Template_div_cdkDropListDropped_3_listener($event) { return ctx.onDroped($event); })("cdkDropListEntered", function ModernModelAComponent_Template_div_cdkDropListEntered_3_listener($event) { return ctx.onEntered($event); })("cdkDropListExited", function ModernModelAComponent_Template_div_cdkDropListExited_3_listener($event) { return ctx.onExit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ModernModelAComponent_Template_div_cdkDropListDropped_4_listener($event) { return ctx.onDroped($event); })("cdkDropListEntered", function ModernModelAComponent_Template_div_cdkDropListEntered_4_listener($event) { return ctx.onEntered($event); })("cdkDropListExited", function ModernModelAComponent_Template_div_cdkDropListExited_4_listener($event) { return ctx.onExit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ModernModelAComponent_Template_div_cdkDropListDropped_5_listener($event) { return ctx.onDroped($event); })("cdkDropListEntered", function ModernModelAComponent_Template_div_cdkDropListEntered_5_listener($event) { return ctx.onEntered($event); })("cdkDropListExited", function ModernModelAComponent_Template_div_cdkDropListExited_5_listener($event) { return ctx.onExit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, "url(" + ctx.editorService.style.frames.url + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c2, "url(" + ctx.assets.lengthwise[0].url + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c2, "url(" + ctx.assets.lengthwise[8].url + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c2, "url(" + ctx.assets["short-handles"][0].url + ")"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c3, ctx.editorService.isEditing));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c4, ctx.editorService.selectedDividers || ctx.assets.dividers[0]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c3, ctx.editorService.isEditing));
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".door[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 764px;\n}\n\n.area[_ngcontent-%COMP%] {\n  background-position: left top;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-size: cover;\n}\n\n.frame[_ngcontent-%COMP%] {\n  height: 800px;\n  width: 393px;\n  z-index: 1;\n  overflow: hidden;\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0px -1px 4px 2px #0000001f;\n  height: 761px;\n  left: 36px;\n  position: absolute;\n  top: 38px;\n  width: 321px;\n}\n\n.piece-1[_ngcontent-%COMP%] {\n  bottom: 0;\n  height: 764px;\n  position: absolute;\n  right: 35px;\n  width: 214px;\n  z-index: 2;\n}\n\n.piece-2[_ngcontent-%COMP%] {\n  bottom: 0;\n  height: 764px;\n  left: 35px;\n  position: absolute;\n  width: 214px;\n  z-index: 1;\n}\n\n.divider-1[_ngcontent-%COMP%] {\n  height: 764px;\n  bottom: 0;\n  left: 143px;\n  position: absolute;\n  width: 3px;\n  z-index: 4;\n}\n\n.handle[_ngcontent-%COMP%] {\n  background-size: cover;\n  left: 46px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(calc(-50% + 45px));\n  z-index: 5;\n}\n\n.short-handle[_ngcontent-%COMP%] {\n  height: 72px;\n  width: 80px;\n}\n\n.long-handle[_ngcontent-%COMP%] {\n  height: 460px;\n  width: 73px;\n}\n\n@media (max-width: 500px) {\n  .door[_ngcontent-%COMP%] {\n    margin: 20px auto;\n    min-height: 400px;\n    width: 200px;\n  }\n\n  .frame[_ngcontent-%COMP%] {\n    height: 400px;\n    width: 200px;\n  }\n\n  .piece-1[_ngcontent-%COMP%] {\n    height: 382px;\n    right: 18px;\n    width: 106px;\n  }\n\n  .piece-2[_ngcontent-%COMP%] {\n    left: 18px;\n    height: 382px;\n    width: 65px;\n  }\n\n  .divider-1[_ngcontent-%COMP%] {\n    left: 83px;\n    height: 382px;\n    width: 2px;\n  }\n\n  .handle[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 44px;\n    left: 28px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21vZGVybi1tb2RlbC1hLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQ0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUVBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUFGOztBQUdBO0VBQ0UsU0FBQTtFQUVBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQURGOztBQUlBO0VBQ0Usc0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0Esd0NBQUE7RUFDQSxVQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUFERjs7QUFJQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7RUFERjs7RUFJQTtJQUNFLGFBQUE7SUFDQSxZQUFBO0VBREY7O0VBSUE7SUFDRSxhQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUFERjs7RUFJQTtJQUNFLFVBQUE7SUFDQSxhQUFBO0lBQ0EsV0FBQTtFQURGOztFQUlBO0lBQ0UsVUFBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0VBREY7O0VBSUE7SUFDRSxZQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7RUFERjtBQUNGIiwiZmlsZSI6Im1vZGVybi1tb2RlbC1hLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvb3Ige1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDc2NHB4O1xufVxuXG4uYXJlYSB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgdG9wO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uZnJhbWUge1xuICBoZWlnaHQ6IDgwMHB4O1xuICB3aWR0aDogMzkzcHg7XG4gIHotaW5kZXg6IDE7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zaGFkb3cge1xuICBib3gtc2hhZG93OiAwcHggLTFweCA0cHggMnB4ICMwMDAwMDAxZjtcbiAgaGVpZ2h0OiA3NjFweDtcbiAgbGVmdDogMzZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM4cHg7XG4gIHdpZHRoOiAzMjFweDtcbn1cblxuLnBpZWNlLTEge1xuICBib3R0b206IDA7XG4gIC8vIGJveC1zaGFkb3c6IDJweCAtMnB4IDJweCAwcHggcmdiKDAgMCAwIC8gMjAlKTtcbiAgaGVpZ2h0OiA3NjRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMzVweDtcbiAgd2lkdGg6IDIxNHB4O1xuICB6LWluZGV4OiAyO1xufVxuXG4ucGllY2UtMiB7XG4gIGJvdHRvbTogMDtcbiAgLy8gYm94LXNoYWRvdzogLTJweCAtM3B4IDJweCAwcHggcmdiKDAgMCAwIC8gMjAlKTtcbiAgaGVpZ2h0OiA3NjRweDtcbiAgbGVmdDogMzVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjE0cHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5kaXZpZGVyLTEge1xuICBoZWlnaHQ6IDc2NHB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDE0M3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzcHg7XG4gIHotaW5kZXg6IDQ7XG59XG5cbi5oYW5kbGUge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBsZWZ0OiA0NnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYygtNTAlICsgNDVweCkpO1xuICB6LWluZGV4OiA1O1xufVxuXG4uc2hvcnQtaGFuZGxlIHtcbiAgaGVpZ2h0OiA3MnB4O1xuICB3aWR0aDogODBweDtcbn1cblxuLmxvbmctaGFuZGxlIHtcbiAgaGVpZ2h0OiA0NjBweDtcbiAgd2lkdGg6IDczcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuZG9vciB7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgbWluLWhlaWdodDogNDAwcHg7XG4gICAgd2lkdGg6IDIwMHB4XG4gIH1cblxuICAuZnJhbWUge1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG5cbiAgLnBpZWNlLTEge1xuICAgIGhlaWdodDogMzgycHg7XG4gICAgcmlnaHQ6IDE4cHg7XG4gICAgd2lkdGg6IDEwNnB4O1xuICB9XG5cbiAgLnBpZWNlLTIge1xuICAgIGxlZnQ6IDE4cHg7XG4gICAgaGVpZ2h0OiAzODJweDtcbiAgICB3aWR0aDogNjVweDtcbiAgfVxuXG4gIC5kaXZpZGVyLTEge1xuICAgIGxlZnQ6IDgzcHg7XG4gICAgaGVpZ2h0OiAzODJweDtcbiAgICB3aWR0aDogMnB4O1xuICB9XG5cbiAgLmhhbmRsZSB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0NHB4O1xuICAgIGxlZnQ6IDI4cHg7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "nsEa":
/*!*****************************************!*\
  !*** ./src/assets/data/categories.json ***!
  \*****************************************/
/*! exports provided: categories, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"categories\":[{\"id\":\"modern\",\"name\":\"Modern\",\"img\":\"https://storage.googleapis.com/modern-doors-models/model-1.jpeg\"},{\"id\":\"classic\",\"name\":\"Classic\",\"img\":\"https://storage.googleapis.com/modern-doors-models/model-1.jpeg\"}]}");

/***/ }),

/***/ "orVZ":
/*!**************************************************************************!*\
  !*** ./src/app/editor/modern/modern-model-b/modern-model-b.component.ts ***!
  \**************************************************************************/
/*! exports provided: ModernModelBComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModernModelBComponent", function() { return ModernModelBComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_editor_editor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/editor/editor.service */ "IhKX");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = ["shortHandle"];
const _c1 = ["longHandle"];
const _c2 = function (a0) { return { "background-image": a0 }; };
const _c3 = function (a0) { return { "editing": a0 }; };
const _c4 = function (a0) { return { "background-color": a0 }; };
class ModernModelBComponent {
    constructor(editorService) {
        this.editorService = editorService;
    }
    ngOnInit() {
    }
    editItem(directory) {
        if (!this.editorService.isEditing) {
            return;
        }
        const url = `${this.editorService.bucketPath}${this.editorService.door.category.id}-doors/${this.editorService.door.model.id}/${directory}`;
        window.open(url, '_blank');
    }
    onDroped(event) {
        event.container.element.nativeElement.classList.remove('drag-over');
        const dragedElement = event.item.element.nativeElement;
        const dropedElement = event.container.element.nativeElement;
        if (dragedElement.className.includes('frame-item') && dropedElement.className.includes('frame')) {
            dropedElement.style.backgroundImage = dragedElement.style.backgroundImage;
        }
        if (dragedElement.className.includes('board-item') && dropedElement.className.includes('board')) {
            dropedElement.style.backgroundImage = dragedElement.style.backgroundImage;
        }
        if (dragedElement.className.includes('handle-item') && dropedElement.className.includes('handle')) {
            dropedElement.style.backgroundImage = dragedElement.style.backgroundImage;
            if (dragedElement.className.includes('short-handle-item')) {
                dropedElement.classList.add('short-handle');
                dropedElement.classList.remove('long-handle');
            }
            if (dragedElement.className.includes('long-handle-item')) {
                dropedElement.classList.add('long-handle');
                dropedElement.classList.remove('short-handle');
            }
        }
    }
    onEntered(event) {
        event.container.element.nativeElement.innerHTML = '';
        const dragedElement = event.item.element.nativeElement;
        const dropedElement = event.container.element.nativeElement;
        if (dragedElement.className.includes('frame-item') && dropedElement.className.includes('frame')) {
            event.container.element.nativeElement.classList.add('drag-over');
        }
        if (dragedElement.className.includes('board-item') && dropedElement.className.includes('board')) {
            event.container.element.nativeElement.classList.add('drag-over');
        }
        if (dragedElement.className.includes('handle-item') && dropedElement.className.includes('handle')) {
            event.container.element.nativeElement.classList.add('drag-over');
        }
    }
    onExit(event) {
        event.container.element.nativeElement.classList.remove('drag-over');
    }
}
ModernModelBComponent.ɵfac = function ModernModelBComponent_Factory(t) { return new (t || ModernModelBComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_editor_editor_service__WEBPACK_IMPORTED_MODULE_1__["EditorService"])); };
ModernModelBComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModernModelBComponent, selectors: [["app-modern-model-b"]], viewQuery: function ModernModelBComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.shortHandle = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.longHandle = _t.first);
    } }, inputs: { assets: "assets" }, decls: 9, vars: 24, consts: [[1, "door"], ["cdkDropList", "", 1, "area", "frame", 3, "ngStyle", "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited"], [1, "shadow"], ["cdkDropList", "", 1, "area", "piece-1", 3, "ngStyle", "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited"], [1, "area", "board", "piece-1", 3, "ngStyle"], ["cdkDropList", "", 1, "area", "board", "piece-2", 3, "ngStyle", "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited"], ["cdkDropList", "", 1, "area", "handle", "short-handle", 3, "ngStyle", "ngClass", "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited"], ["shortHandle", ""], [1, "divider", "divider-1", 3, "ngStyle", "ngClass"]], template: function ModernModelBComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ModernModelBComponent_Template_div_cdkDropListDropped_1_listener($event) { return ctx.onDroped($event); })("cdkDropListEntered", function ModernModelBComponent_Template_div_cdkDropListEntered_1_listener($event) { return ctx.onEntered($event); })("cdkDropListExited", function ModernModelBComponent_Template_div_cdkDropListExited_1_listener($event) { return ctx.onExit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ModernModelBComponent_Template_div_cdkDropListDropped_3_listener($event) { return ctx.onDroped($event); })("cdkDropListEntered", function ModernModelBComponent_Template_div_cdkDropListEntered_3_listener($event) { return ctx.onEntered($event); })("cdkDropListExited", function ModernModelBComponent_Template_div_cdkDropListExited_3_listener($event) { return ctx.onExit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ModernModelBComponent_Template_div_cdkDropListDropped_5_listener($event) { return ctx.onDroped($event); })("cdkDropListEntered", function ModernModelBComponent_Template_div_cdkDropListEntered_5_listener($event) { return ctx.onEntered($event); })("cdkDropListExited", function ModernModelBComponent_Template_div_cdkDropListExited_5_listener($event) { return ctx.onExit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ModernModelBComponent_Template_div_cdkDropListDropped_6_listener($event) { return ctx.onDroped($event); })("cdkDropListEntered", function ModernModelBComponent_Template_div_cdkDropListEntered_6_listener($event) { return ctx.onEntered($event); })("cdkDropListExited", function ModernModelBComponent_Template_div_cdkDropListExited_6_listener($event) { return ctx.onExit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c2, "url(" + ctx.editorService.style.frames.url + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c2, "url(" + ctx.assets.lengthwise[0].url + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c2, "url(" + ctx.assets.edges[0].url + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c2, "url(" + ctx.assets.lengthwise[8].url + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c2, "url(" + ctx.assets["short-handles"][0].url + ")"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c3, ctx.editorService.isEditing));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c4, ctx.editorService.selectedDividers || ctx.assets.dividers[0]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c3, ctx.editorService.isEditing));
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".door[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 764px;\n}\n\n.area[_ngcontent-%COMP%] {\n  background-position: left top;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-size: cover;\n}\n\n.frame[_ngcontent-%COMP%] {\n  height: 800px;\n  width: 393px;\n  z-index: 1;\n  overflow: hidden;\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0px -1px 4px 2px #0000001f;\n  height: 761px;\n  left: 36px;\n  position: absolute;\n  top: 38px;\n  width: 321px;\n}\n\n.piece-1[_ngcontent-%COMP%] {\n  bottom: 0;\n  height: 764px;\n  position: absolute;\n  right: 35px;\n  width: 214px;\n  z-index: 2;\n}\n\n.piece-2[_ngcontent-%COMP%] {\n  bottom: 0;\n  height: 764px;\n  left: 35px;\n  position: absolute;\n  width: 214px;\n  z-index: 1;\n}\n\n.divider-1[_ngcontent-%COMP%] {\n  height: 764px;\n  bottom: 0;\n  left: 143px;\n  position: absolute;\n  width: 3px;\n  z-index: 4;\n}\n\n.handle[_ngcontent-%COMP%] {\n  background-size: cover;\n  left: 46px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(calc(-50% + 45px));\n  z-index: 5;\n}\n\n.short-handle[_ngcontent-%COMP%] {\n  height: 72px;\n  width: 80px;\n}\n\n.long-handle[_ngcontent-%COMP%] {\n  height: 460px;\n  width: 73px;\n}\n\n@media (max-width: 500px) {\n  .door[_ngcontent-%COMP%] {\n    margin: 20px auto;\n    min-height: 400px;\n    width: 200px;\n  }\n\n  .frame[_ngcontent-%COMP%] {\n    height: 400px;\n    width: 200px;\n  }\n\n  .piece-1[_ngcontent-%COMP%] {\n    height: 382px;\n    right: 18px;\n    width: 106px;\n  }\n\n  .piece-2[_ngcontent-%COMP%] {\n    left: 18px;\n    height: 382px;\n    width: 65px;\n  }\n\n  .divider-1[_ngcontent-%COMP%] {\n    left: 83px;\n    height: 382px;\n    width: 2px;\n  }\n\n  .handle[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 44px;\n    left: 28px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21vZGVybi1tb2RlbC1iLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQ0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUVBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUFGOztBQUdBO0VBQ0UsU0FBQTtFQUVBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQURGOztBQUlBO0VBQ0Usc0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0Esd0NBQUE7RUFDQSxVQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUFERjs7QUFJQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7RUFERjs7RUFJQTtJQUNFLGFBQUE7SUFDQSxZQUFBO0VBREY7O0VBSUE7SUFDRSxhQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUFERjs7RUFJQTtJQUNFLFVBQUE7SUFDQSxhQUFBO0lBQ0EsV0FBQTtFQURGOztFQUlBO0lBQ0UsVUFBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0VBREY7O0VBSUE7SUFDRSxZQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7RUFERjtBQUNGIiwiZmlsZSI6Im1vZGVybi1tb2RlbC1iLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvb3Ige1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDc2NHB4O1xufVxuXG4uYXJlYSB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgdG9wO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uZnJhbWUge1xuICBoZWlnaHQ6IDgwMHB4O1xuICB3aWR0aDogMzkzcHg7XG4gIHotaW5kZXg6IDE7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zaGFkb3cge1xuICBib3gtc2hhZG93OiAwcHggLTFweCA0cHggMnB4ICMwMDAwMDAxZjtcbiAgaGVpZ2h0OiA3NjFweDtcbiAgbGVmdDogMzZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM4cHg7XG4gIHdpZHRoOiAzMjFweDtcbn1cblxuLnBpZWNlLTEge1xuICBib3R0b206IDA7XG4gIC8vIGJveC1zaGFkb3c6IDJweCAtMnB4IDJweCAwcHggcmdiKDAgMCAwIC8gMjAlKTtcbiAgaGVpZ2h0OiA3NjRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMzVweDtcbiAgd2lkdGg6IDIxNHB4O1xuICB6LWluZGV4OiAyO1xufVxuXG4ucGllY2UtMiB7XG4gIGJvdHRvbTogMDtcbiAgLy8gYm94LXNoYWRvdzogLTJweCAtM3B4IDJweCAwcHggcmdiKDAgMCAwIC8gMjAlKTtcbiAgaGVpZ2h0OiA3NjRweDtcbiAgbGVmdDogMzVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjE0cHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5kaXZpZGVyLTEge1xuICBoZWlnaHQ6IDc2NHB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDE0M3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzcHg7XG4gIHotaW5kZXg6IDQ7XG59XG5cbi5oYW5kbGUge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBsZWZ0OiA0NnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYygtNTAlICsgNDVweCkpO1xuICB6LWluZGV4OiA1O1xufVxuXG4uc2hvcnQtaGFuZGxlIHtcbiAgaGVpZ2h0OiA3MnB4O1xuICB3aWR0aDogODBweDtcbn1cblxuLmxvbmctaGFuZGxlIHtcbiAgaGVpZ2h0OiA0NjBweDtcbiAgd2lkdGg6IDczcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuZG9vciB7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgbWluLWhlaWdodDogNDAwcHg7XG4gICAgd2lkdGg6IDIwMHB4XG4gIH1cblxuICAuZnJhbWUge1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG5cbiAgLnBpZWNlLTEge1xuICAgIGhlaWdodDogMzgycHg7XG4gICAgcmlnaHQ6IDE4cHg7XG4gICAgd2lkdGg6IDEwNnB4O1xuICB9XG5cbiAgLnBpZWNlLTIge1xuICAgIGxlZnQ6IDE4cHg7XG4gICAgaGVpZ2h0OiAzODJweDtcbiAgICB3aWR0aDogNjVweDtcbiAgfVxuXG4gIC5kaXZpZGVyLTEge1xuICAgIGxlZnQ6IDgzcHg7XG4gICAgaGVpZ2h0OiAzODJweDtcbiAgICB3aWR0aDogMnB4O1xuICB9XG5cbiAgLmhhbmRsZSB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0NHB4O1xuICAgIGxlZnQ6IDI4cHg7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "rNjp":
/*!********************************************!*\
  !*** ./src/assets/data/modern-models.json ***!
  \********************************************/
/*! exports provided: models, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"models\":[{\"id\":\"model-a\",\"name\":\"Model-A\",\"img\":\"https://storage.googleapis.com/modern-doors-models/model-1.jpeg\"},{\"id\":\"model-c\",\"name\":\"Model-C\",\"img\":\"https://storage.googleapis.com/modern-doors-models/model-3.jpeg\"},{\"id\":\"model-d\",\"name\":\"Model-D\",\"img\":\"https://storage.googleapis.com/modern-doors-models/model-4.jpeg\"},{\"id\":\"model-e\",\"name\":\"Model-E\",\"img\":\"https://storage.googleapis.com/modern-doors-models/model-5.jpeg\"},{\"id\":\"model-f\",\"name\":\"Model-F\",\"img\":\"https://storage.googleapis.com/modern-doors-models/model-6.jpeg\"}]}");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/dashboard/dashboard.component */ "QX6l");
/* harmony import */ var app_models_models_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/models/models.component */ "3YiQ");
/* harmony import */ var app_editor_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/editor/editor.component */ "xD4D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '', component: app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"] },
    { path: 'models', component: app_models_models_component__WEBPACK_IMPORTED_MODULE_2__["ModelsComponent"] },
    { path: 'editor', component: app_editor_editor_component__WEBPACK_IMPORTED_MODULE_3__["EditorComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xD4D":
/*!********************************************!*\
  !*** ./src/app/editor/editor.component.ts ***!
  \********************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var html_to_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! html-to-image */ "53SV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_util_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/util/api/api.service */ "esnN");
/* harmony import */ var _editor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.service */ "IhKX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _controles_controles_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../controles/controles.component */ "5H6s");
/* harmony import */ var _modern_modern_model_a_modern_model_a_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modern/modern-model-a/modern-model-a.component */ "kmHl");
/* harmony import */ var _modern_modern_model_b_modern_model_b_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modern/modern-model-b/modern-model-b.component */ "orVZ");
/* harmony import */ var _modern_modern_model_c_modern_model_c_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modern/modern-model-c/modern-model-c.component */ "BAMr");
/* harmony import */ var _modern_modern_model_d_modern_model_d_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modern/modern-model-d/modern-model-d.component */ "HAH0");
/* harmony import */ var _modern_modern_model_e_modern_model_e_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modern/modern-model-e/modern-model-e.component */ "9M9Z");
/* harmony import */ var _modern_modern_model_f_modern_model_f_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modern/modern-model-f/modern-model-f.component */ "a6G2");














const _c0 = ["editor"];
function EditorComponent_div_0_app_modern_model_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-modern-model-a", 10);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("assets", ctx_r4.door);
} }
function EditorComponent_div_0_app_modern_model_b_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-modern-model-b", 10);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("assets", ctx_r5.door);
} }
function EditorComponent_div_0_app_modern_model_c_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-modern-model-c", 10);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("assets", ctx_r6.door);
} }
function EditorComponent_div_0_app_modern_model_d_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-modern-model-d", 10);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("assets", ctx_r7.door);
} }
function EditorComponent_div_0_app_modern_model_e_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-modern-model-e", 10);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("assets", ctx_r8.door);
} }
function EditorComponent_div_0_app_modern_model_f_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-modern-model-f", 10);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("assets", ctx_r9.door);
} }
const _c1 = function (a0) { return { "disabled": a0 }; };
function EditorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, EditorComponent_div_0_app_modern_model_a_5_Template, 1, 1, "app-modern-model-a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, EditorComponent_div_0_app_modern_model_b_6_Template, 1, 1, "app-modern-model-b", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, EditorComponent_div_0_app_modern_model_c_7_Template, 1, 1, "app-modern-model-c", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, EditorComponent_div_0_app_modern_model_d_8_Template, 1, 1, "app-modern-model-d", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, EditorComponent_div_0_app_modern_model_e_9_Template, 1, 1, "app-modern-model-e", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, EditorComponent_div_0_app_modern_model_f_10_Template, 1, 1, "app-modern-model-f", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "app-controles", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx_r0.doorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "modern-model-a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "modern-model-b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "modern-model-c");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "modern-model-d");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "modern-model-e");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "modern-model-f");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c1, ctx_r0.editorService.isEditing));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("door", ctx_r0.door)("doorName", ctx_r0.doorName);
} }
function EditorComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class EditorComponent {
    constructor(apiService, editorService, router) {
        this.apiService = apiService;
        this.editorService = editorService;
        this.router = router;
        this.path = 'https://storage.googleapis.com/door-assets/';
        this.fileName = '';
        this.isLoaded = false;
        this.door = {
            frames: [],
            handle: [],
            crosswise: [],
            lengthwise: [],
            edges: [],
            dividers: ['#ab8949', '#e0e7d5', '#000000'],
            '45-degree': [],
            'short-handles': [],
            'long-handles': [],
        };
    }
    ngOnInit() {
        var _a, _b;
        if (!this.editorService.door) {
            this.router.navigate(['/']);
            return;
        }
        this.editorService.showControlles = true;
        this.doorName = `${(_a = this.editorService.door.category) === null || _a === void 0 ? void 0 : _a.id}-${(_b = this.editorService.door.model) === null || _b === void 0 ? void 0 : _b.id}`;
        console.log('this.doorName: ', this.doorName);
        this.apiService.get('https://storage.googleapis.com/storage/v1/b/door-assets/o/').subscribe((data) => {
            if (!!data.body.items) {
                const items = data.body.items;
                for (let i = 0; i < items.length; i++) {
                    if (['image/png', 'image/jpeg'].includes(items[i].contentType)) {
                        const firstIndex = items[i].name.indexOf('/') + 1;
                        const lastIndex = items[i].name.lastIndexOf('.');
                        if (items[i].name.includes('frames/')) {
                            this.door.frames.push({
                                name: items[i].name.substring(firstIndex, lastIndex),
                                url: this.path + items[i].name
                            });
                        }
                        else if (items[i].name.includes('crosswise/')) {
                            this.door.crosswise.push({
                                name: items[i].name.substring(firstIndex, lastIndex),
                                url: this.path + items[i].name
                            });
                        }
                        else if (items[i].name.includes('lengthwise/')) {
                            this.door.lengthwise.push({
                                name: items[i].name.substring(firstIndex, lastIndex),
                                url: this.path + items[i].name
                            });
                        }
                        else if (items[i].name.includes('45-degree/')) {
                            this.door['45-degree'].push({
                                name: items[i].name.substring(firstIndex, lastIndex),
                                url: this.path + items[i].name
                            });
                        }
                        else if (items[i].name.includes('short-handles/')) {
                            this.door['short-handles'].push({
                                name: items[i].name.substring(firstIndex, lastIndex),
                                url: this.path + items[i].name
                            });
                        }
                        else if (items[i].name.includes('long-handles/')) {
                            this.door['long-handles'].push({
                                name: items[i].name.substring(firstIndex, lastIndex),
                                url: this.path + items[i].name
                            });
                        }
                        else if (items[i].name.includes('edges/')) {
                            this.door.edges.push({
                                name: items[i].name.substring(firstIndex, lastIndex),
                                url: this.path + items[i].name
                            });
                        }
                    }
                }
                // default style
                for (const key in this.door) {
                    // this.door[key].reverse();
                    this.editorService.style[key] = this.door[key][0];
                }
            }
            this.isLoaded = true;
        });
    }
    handelStyle(key, value) {
        this.editorService.style[key] = value;
    }
    saveImage() {
        html_to_image__WEBPACK_IMPORTED_MODULE_0__["toPng"](this.editor.nativeElement)
            .then((dataUrl) => {
            const img = new Image();
            img.src = dataUrl;
            const a = document.createElement('a'); // Create <a>
            a.href = dataUrl; // Image Base64 Goes here
            a.download = `${this.fileName}.png`; // File name Here
            a.click(); // Downloaded file
            this.fileName = '';
        })
            .catch((error) => {
            alert('oops, something went wrong!');
        });
    }
    ngOnDestroy() {
        this.editorService.showControlles = false;
    }
}
EditorComponent.ɵfac = function EditorComponent_Factory(t) { return new (t || EditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_util_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_editor_service__WEBPACK_IMPORTED_MODULE_3__["EditorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
EditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditorComponent, selectors: [["app-editor"]], viewQuery: function EditorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.editor = _t.first);
    } }, decls: 3, vars: 2, consts: [["class", "editor", "cdkDropListGroup", "", 4, "ngIf", "ngIfElse"], ["spinner", ""], ["cdkDropListGroup", "", 1, "editor"], [1, "playground"], ["editor", ""], [1, "main-door"], [3, "ngSwitch"], [3, "assets", 4, "ngSwitchCase"], [1, "controles", 3, "ngClass"], [3, "door", "doorName"], [3, "assets"], [1, "spinner"]], template: function EditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, EditorComponent_div_0_Template, 13, 12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditorComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDropListGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _controles_controles_component__WEBPACK_IMPORTED_MODULE_7__["ControlesComponent"], _modern_modern_model_a_modern_model_a_component__WEBPACK_IMPORTED_MODULE_8__["ModernModelAComponent"], _modern_modern_model_b_modern_model_b_component__WEBPACK_IMPORTED_MODULE_9__["ModernModelBComponent"], _modern_modern_model_c_modern_model_c_component__WEBPACK_IMPORTED_MODULE_10__["ModernModelCComponent"], _modern_modern_model_d_modern_model_d_component__WEBPACK_IMPORTED_MODULE_11__["ModernModelDComponent"], _modern_modern_model_e_modern_model_e_component__WEBPACK_IMPORTED_MODULE_12__["ModernModelEComponent"], _modern_modern_model_f_modern_model_f_component__WEBPACK_IMPORTED_MODULE_13__["ModernModelFComponent"]], styles: [".editor[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: 70px;\n  width: calc(100% - 70px);\n  height: 100%;\n}\n\n.playground[_ngcontent-%COMP%] {\n  background: #f7f8fa;\n  position: relative;\n  width: 70%;\n  z-index: 0;\n}\n\n.controles[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.main-door[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 393px;\n}\n\n.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  background: #fecf1f;\n  padding: 8px 36px;\n  border-radius: 4px;\n  font-size: 12px;\n  cursor: pointer;\n  width: 100%;\n}\n\n.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n\n.file-name[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 6px;\n  display: inline-block;\n  box-sizing: border-box;\n  margin-bottom: 6px;\n  border: 1px solid #c9c9c9;\n  border-radius: 4px;\n}\n\n.save-img[_ngcontent-%COMP%] {\n  height: 130px;\n  padding-top: 12px;\n  border-top: 1px solid #dbdbdb;\n}\n\n.save-img[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\n@media (max-width: 1200px) {\n  .playground[_ngcontent-%COMP%], .controles[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n\n@media (max-width: 500px) {\n  .editor[_ngcontent-%COMP%] {\n    flex-direction: column;\n    position: relative;\n  }\n\n  .playground[_ngcontent-%COMP%], .controles[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .controles[_ngcontent-%COMP%] {\n    border-left: none;\n    border-top: 1px solid #279cff;\n    height: calc(100vh - 440px);\n  }\n\n  .main-door[_ngcontent-%COMP%] {\n    width: 100%;\n    left: unset;\n    position: relative;\n    top: unset;\n    transform: unset;\n  }\n\n  .preview-items[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  .preview-item[_ngcontent-%COMP%] {\n    height: 150px;\n  }\n}\n\n.spinner[_ngcontent-%COMP%] {\n  font-size: 18px;\n  left: 50%;\n  position: fixed;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBR0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBQUo7O0FBRUk7RUFDRSxZQUFBO0FBQU47O0FBS0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FBRkY7O0FBSUU7RUFDRSxrQkFBQTtBQUZKOztBQU1BO0VBQ0U7O0lBRUUsVUFBQTtFQUhGO0FBQ0Y7O0FBTUE7RUFDRTtJQUNFLHNCQUFBO0lBQ0Esa0JBQUE7RUFKRjs7RUFPQTs7SUFFRSxXQUFBO0VBSkY7O0VBT0E7SUFDRSxpQkFBQTtJQUNBLDZCQUFBO0lBQ0EsMkJBQUE7RUFKRjs7RUFPQTtJQUNFLFdBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0lBQ0EsZ0JBQUE7RUFKRjs7RUFPQTtJQUNFLHFDQUFBO0VBSkY7O0VBT0E7SUFDRSxhQUFBO0VBSkY7QUFDRjs7QUFPQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtBQUxGIiwiZmlsZSI6ImVkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0b3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tbGVmdDogNzBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDcwcHgpO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wbGF5Z3JvdW5kIHtcbiAgYmFja2dyb3VuZDogI2Y3ZjhmYTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNzAlO1xuICB6LWluZGV4OiAwO1xufVxuXG4uY29udHJvbGVzIHtcbiAgd2lkdGg6IDMwJTtcbn1cblxuLm1haW4tZG9vciB7XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiAzOTNweDtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICBidXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjZmVjZjFmO1xuICAgIHBhZGRpbmc6IDhweCAzNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuICB9XG59XG5cbi5maWxlLW5hbWUge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M5YzljOTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uc2F2ZS1pbWcge1xuICBoZWlnaHQ6IDEzMHB4O1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkYmRiZGI7XG5cbiAgLmxhYmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAucGxheWdyb3VuZCxcbiAgLmNvbnRyb2xlcyB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmVkaXRvciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAucGxheWdyb3VuZCxcbiAgLmNvbnRyb2xlcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuY29udHJvbGVzIHtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzI3OWNmZjtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0NDBweCk7XG4gIH1cblxuICAubWFpbi1kb29yIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsZWZ0OiB1bnNldDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiB1bnNldDtcbiAgICB0cmFuc2Zvcm06IHVuc2V0O1xuICB9XG5cbiAgLnByZXZpZXctaXRlbXMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIH1cblxuICAucHJldmlldy1pdGVtIHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICB9XG59XG5cbi5zcGlubmVyIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsZWZ0OiA1MCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuIl19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map