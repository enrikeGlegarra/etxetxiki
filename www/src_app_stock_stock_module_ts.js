"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_stock_stock_module_ts"],{

/***/ 1549:
/*!***********************************************!*\
  !*** ./src/app/stock/stock-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StockPageRoutingModule: () => (/* binding */ StockPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _stock_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stock.page */ 1482);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




const routes = [{
  path: '',
  component: _stock_page__WEBPACK_IMPORTED_MODULE_0__.StockPage
}];
class StockPageRoutingModule {}
_class = StockPageRoutingModule;
_class.ɵfac = function StockPageRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StockPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6323:
/*!***************************************!*\
  !*** ./src/app/stock/stock.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StockPageModule: () => (/* binding */ StockPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 4210);
/* harmony import */ var _stock_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stock-routing.module */ 1549);
/* harmony import */ var _stock_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stock.page */ 1482);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;






class StockPageModule {}
_class = StockPageModule;
_class.ɵfac = function StockPageModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _stock_routing_module__WEBPACK_IMPORTED_MODULE_0__.StockPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](StockPageModule, {
    declarations: [_stock_page__WEBPACK_IMPORTED_MODULE_1__.StockPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _stock_routing_module__WEBPACK_IMPORTED_MODULE_0__.StockPageRoutingModule]
  });
})();

/***/ }),

/***/ 1482:
/*!*************************************!*\
  !*** ./src/app/stock/stock.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StockPage: () => (/* binding */ StockPage)
/* harmony export */ });
/* harmony import */ var _Users_enrique_gonzalo_Desktop_etxetxiki_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 4210);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);

var _class;



function StockPage_ion_item_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item")(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-buttons", 11)(8, "ion-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StockPage_ion_item_29_Template_ion_button_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.abrirMenu(item_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ion-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.amount);
  }
}
class StockPage {
  constructor(actionSheetCtrl) {
    this.actionSheetCtrl = actionSheetCtrl;
    this.dataOriginal = [{
      name: 'lechuga',
      amount: 10,
      price: 1.5
    }, {
      name: 'tomate',
      amount: 5,
      price: 1.5
    }, {
      name: 'acelga',
      amount: 5,
      price: 1.5
    }, {
      name: 'aguacate',
      amount: 1,
      price: 1.5
    }];
    this.data = [...this.dataOriginal];
  }
  ngOnInit() {
    this.generateItems();
  }
  filtrarLista(event) {
    const textoBusqueda = event.target.value.toLowerCase();
    this.data = this.dataOriginal.filter(item => {
      return item.name.toLowerCase().includes(textoBusqueda);
    });
  }
  generateItems() {
    const count = this.data.length + 1;
    for (let i = 0; i < 50; i++) {
      this.data.push({
        name: `lechuga + ${i}`,
        amount: count + i,
        price: 1.5
      });
    }
  }
  onIonInfinite(ev) {
    this.generateItems();
    setTimeout(() => {
      ev.target.complete();
    }, 500);
  }
  abrirMenu(item) {
    var _this = this;
    return (0,_Users_enrique_gonzalo_Desktop_etxetxiki_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this.actionSheetCtrl.create({
        header: 'Acciones para ' + item.name,
        buttons: [{
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            // Lógica para eliminar el elemento
          }
        }, {
          text: 'Editar',
          handler: () => {
            // Lógica para editar el elemento
          }
        }, {
          text: 'Cancelar',
          role: 'cancel'
        }]
      });
      yield actionSheet.present();
    })();
  }
}
_class = StockPage;
_class.ɵfac = function StockPage_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ActionSheetController));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-stock"]],
  decls: 32,
  vars: 3,
  consts: [[3, "translucent"], [3, "fullscreen"], ["collapse", "condense"], ["size", "large"], ["id", "container"], [1, "boton-container"], ["id", "open-action-sheet"], ["animated", "true", "placeholder", "Billatu", 3, "ionInput"], [1, "ion-text-end", 2, "flex", "1"], [4, "ngFor", "ngForOf"], [3, "ionInfinite"], ["slot", "end"], [3, "click"], ["name", "ellipsis-vertical"]],
  template: function StockPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "stock");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-content", 1)(5, "ion-header", 2)(6, "ion-toolbar")(7, "ion-title", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "STOCK");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4)(10, "div", 5)(11, "ion-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "A\u00F1adir stock");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-searchbar", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionInput", function StockPage_Template_ion_searchbar_ionInput_13_listener($event) {
        return ctx.filtrarLista($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-content")(15, "ion-list")(16, "ion-item")(17, "ion-label")(18, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Producto");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-label")(21, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Precio");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-label")(24, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Cantidad");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-label", 8)(27, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Acciones");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, StockPage_ion_item_29_Template, 10, 3, "ion-item", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ion-infinite-scroll", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionInfinite", function StockPage_Template_ion_infinite_scroll_ionInfinite_30_listener($event) {
        return ctx.onIonInfinite($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "ion-infinite-scroll-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonInfiniteScroll, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonInfiniteScrollContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.TextValueAccessor],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_stock_stock_module_ts.js.map