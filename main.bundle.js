webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test_test_component__ = __webpack_require__("./src/app/test/test.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: 'app', pathMatch: 'full' },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_2__test_test_component__["a" /* TestComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_api_service__ = __webpack_require__("./src/app/shared/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__test_test_component__ = __webpack_require__("./src/app/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__test_test_component__["a" /* TestComponent */],
                __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__["a" /* NavbarComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__shared_api_service__["a" /* ApiService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".titlebar {\n    background-color: darkblue !important;\n    height: 100px !important;\n}\n\n.pagetitle {\n    font-family: 'Anton', sans-serif;\n    font-size: 48px;\n    color: white;\n}\n\n.players {\n    font-family: 'Permanent Marker', cursive;\n    font-size: large;\n}\n\n.play {\n  text-align: center;\n  color: white;\n  margin-top: 20px;\n}\n\n.justwomen {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    height: 100% !important;\n    width: 100%;\n    margin-top: 35%;\n}\n\n.namestitle {\n    color: white !important;\n    font-size: 14px !important;\n    text-align: center;\n    margin-top: 5px;\n    font-weight: bold;\n    font-family: 'Permanent Marker', cursive;\n    margin-top: -300px;\n}\n\n.img-fluid {\n    -webkit-box-shadow: 10px 5px 5px black;\n            box-shadow: 10px 5px 5px black;\n    width: 130px !important;\n    position: relative;\n    margin-top: -700px;\n}\n\n.selectedLeft {\n    /* position: fixed !important; */\n    top: calc(5% - 120px);\n    right: calc(25% - 80px);\n    width: auto !important;\n    z-index: 20;\n    margin-top: -350px;\n    font-size: 0px !important;\n}\n\n.selectedRight {\n    /*position: fixed !important; */\n    top: calc(5% - 120px);\n    left: calc(25% - 80px);\n    width: auto !important;\n    z-index: 20;\n    margin-top: -350px;\n    font-size: 0px !important;\n}\n\n/*\n.swear {\n    position: absolute;\n    top: 25%;\n    margin-top: 60px;\n    display: flex;\n    flex-direction: column;\n    margin-left: 1030px;\n}\n\n.swear2 {\n    position: absolute;\n    top: 25%;\n    margin-top: 60px;\n    display: flex;\n    flex-direction: column;\n}*/\n\n/*\n.grosmots {\n    margin-bottom: 35px;\n}\n\n.grosmotss {\n    margin-bottom: 35px;\n}*/\n\n/*\n.lifebars {\n    margin-top: 100px;\n}\n\n.bars {\n    position: relative;\n    margin-top: 55%;\n    z-index: 0;\n} */\n\n.barsmen {\n    position: relative;\n    margin-right: 0px;\n    margin-top: 290%;\n    z-index: 0;\n}\n\n.onlybutton {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark titlebar\">\n  <a class=\"navbar-brand pagetitle\" href=\"#\">THE SUPER BATTLE OF THE SEXES</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n</nav>\n\n<div class=\"container players\">\n  <div class=\"row\">\n    <div class=\"col-5 players\">\n      <h1 class=\"play\">Player 1 -\n        <i class=\"fas fa-venus\"></i>\n      </h1>\n    </div>\n    <div class=\"col-2 players\">\n      <h1 class=\"play\">vs.</h1>\n    </div>\n    <div class=\"col-5 players\">\n      <h1 class=\"play\">\n        <i class=\"fas fa-mars\"></i> - Player 2</h1>\n    </div>\n  </div>\n</div>\n\n<!-- swear buttons-->\n<!--\n\n<div class=\"container swearfour\">\n  <div class=\"row swear\">\n    <div class=\"col-1 pops\">\n      <button type=\"button\" class=\"btn btn-secondary grosmots\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"right\"\n        data-content=\"W.T.F.\">\n        Swear\n      </button>\n\n      <button type=\"button\" class=\"btn btn-secondary grosmots\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"right\"\n        data-content=\"You, redneck!\">\n        Swear\n      </button>\n      <button type=\"button\" class=\"btn btn-secondary grosmots\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"right\"\n        data-content=\"Get lost!\">\n        Swear\n      </button>\n      <button type=\"button\" class=\"btn btn-secondary grosmots\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"right\"\n        data-content=\"Mother flower!\">\n        Swear\n      </button>\n    </div>\n  </div>\n\n\n  <div class=\"row swear2\">\n    <div class=\"col-1 pops\">\n      <button type=\"button\" class=\"btn btn-secondary grosmotss\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"left\"\n        data-content=\"Fuck off, you Cow!\">\n        Swear\n      </button>\n      <button type=\"button\" class=\"btn btn-secondary grosmotss\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"left\"\n        data-content=\"What the hell ?\">\n        Swear\n      </button>\n      <button type=\"button\" class=\"btn btn-secondary grosmotss\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"left\"\n        data-content=\"\">\n        Swear\n      </button>\n      <button type=\"button\" class=\"btn btn-secondary grosmotss\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"left\"\n        data-content=\"\">\n        Swear\n      </button>\n      <button type=\"button\" class=\"btn btn-secondary grosmotss\" (click)=\"openModal()\">\n        Swear\n      </button>\n    </div>\n\n  </div> -->\n\n<!-- the players battling-->\n<!--<ng-template #content1 let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Modal title</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>One fine body&hellip;</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template> -->\n\n<!-- life force bar -->\n <!--<div class=\"container-fluid\">\n    <div class=\"row lifebars\">\n      <div class=\"col-5 offset-1\">\n        <input class='bars' id='healthBar' type='text' value='100' disabled />\n      </div>\n      <div class=\"col-5\">\n        <input class='barsmen' id='healthBar' type='text' value='100' disabled />\n      </div>\n    </div>\n  </div>-->\n\n<div class=\"container womenchoices\">\n  <div class=\"row justwomen\">\n    <div class=\"col-1\" *ngFor=\"let hero of selectedHero; let i = index\">\n      <!-- <div *ngIf=\"hero && !isWomanSelected() || hero.selected\"> -->\n      <img class=\"img-fluid\" class=\"selectedLeft\" src=\"{{hero.images.sm}}\">\n      <p class=\"namestitle\">{{hero.name}} </p>\n      <input class='barsmen' id='healthBar' type='text' [value]='hero.life' disabled />\n      <div class=\"row\">\n        <div class=\"col-1 pops\">\n\n          <!-- <button type=\"button\" class=\"btn btn-secondary grosmotss\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"left\"\n            data-content=\"\">\n            Swear\n          </button> -->\n          <!-- <button type=\"button\" class=\"btn btn-secondary grosmotss\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"left\"\n            data-content=\"\">\n            Swear\n          </button> -->\n          <button type=\"button\" class=\"btn btn-secondary onlybutton\" (click)=\"attack(i)\">\n            Attack\n          </button>\n          <button type=\"button\" class=\"btn btn-secondary onlybutton\" (click)=\"superAttack(i)\">\n              super attack\n            </button>\n\n          <!--<button type=\"button\" class=\"btn btn-secondary grosmotss\" (click)=\"openModal()\">\n            Swear\n          </button> -->\n        </div>\n\n      </div>\n      <!-- </div> -->\n    </div>\n\n\n    <!-- choose an avatar-->\n    <div class=\"container womenchoices\">\n      <div class=\"row justwomen\">\n        <div class=\"col-1\" *ngFor=\"let hero of womenHeroes\">\n          <!-- <div *ngIf=\"hero && !hero.selected && !sWomanSelected()\"> -->\n\n          <div *ngIf=\"hero && !isWomanSelected() && !selectedHero[0]\">\n            <img class=\"img-fluid\" src=\"{{hero.images.sm}}\" alt=\"{{hero.name}}\" (click)=\"selectHero(hero)\">\n            <!-- <img class=\"img-fluid\" [ngClass]=\"{'selectedLeft': hero.selected}\" src=\"{{hero.images.sm}}\" alt=\"{{hero.name}}\" (click)=\"selectHero(hero)\"> -->\n            <p class=\"namestitle\">{{hero.name}} </p>\n            <!-- <input class='barsmen' id='healthBar' type='text' value='100' disabled /> -->\n          </div>\n        </div>\n\n\n        <div class=\"col-1\" *ngFor=\"let hero of menHeroes\">\n          <!-- <div *ngIf=\"hero && !hero.selected && !isManSelected()\"> -->\n          <div *ngIf=\"hero && !isManSelected() && !selectedHero[1]\">\n            <img class=\"img-fluid\" src=\"{{hero.images.sm}}\" alt=\"{{hero.name}}\" (click)=\"selectHero(hero)\">\n            <!-- <img class=\"img-fluid\" [ngClass]=\"{'selectedRight': hero.selected}\" src=\"{{hero.images.sm}}\" alt=\"{{hero.name}}\" (click)=\"selectHero(hero)\"> -->\n            <p class=\"namestitle\">{{hero.name}} </p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_api_service__ = __webpack_require__("./src/app/shared/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(apiService, modalService) {
        this.apiService = apiService;
        this.modalService = modalService;
        this.womenHeroes = Array(4); // hero par rapport a son id
        this.menHeroes = Array(4); // hero par rapport a son id
        this.selectedHero = [];
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        var womenIds = [42, 52, 98, 104];
        var menIds = [3, 17, 30, 40];
        var i = 0;
        var _loop_1 = function (id) {
            var tmpI = i;
            this_1.apiService.getHeroesId(id).subscribe(function (hero) {
                console.log(tmpI, hero);
                _this.womenHeroes[tmpI] = hero;
            });
            i++;
        };
        var this_1 = this;
        for (var _i = 0, womenIds_1 = womenIds; _i < womenIds_1.length; _i++) {
            var id = womenIds_1[_i];
            _loop_1(id);
        }
        i = 0;
        var _loop_2 = function (id) {
            var tmpI = i;
            this_2.apiService.getHeroesId(id).subscribe(function (hero) {
                console.log(tmpI, hero);
                _this.menHeroes[tmpI] = hero;
            });
            i++;
        };
        var this_2 = this;
        for (var _a = 0, menIds_1 = menIds; _a < menIds_1.length; _a++) {
            var id = menIds_1[_a];
            _loop_2(id);
        }
    };
    NavbarComponent.prototype.selectHero = function (hero) {
        hero.selected = true;
        hero.life = 100;
        this.selectedHero.push(hero);
    };
    NavbarComponent.prototype.attack = function (i) {
        this.selectedHero[i - 1].life -= 10;
        //this.selectedHero[i+1].life -=10;
        console.log('attack');
    };
    NavbarComponent.prototype.superAttack = function (i) {
        this.selectedHero[i - 1].life -= 30;
        //this.selectedHero[i+1].life +=5;
        console.log('attack');
    };
    NavbarComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    NavbarComponent.prototype.openModal = function () {
        this.open(this.content);
    };
    NavbarComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NavbarComponent.prototype.isWomanSelected = function (hero) {
        for (var _i = 0, _a = this.womenHeroes; _i < _a.length; _i++) {
            var woman = _a[_i];
            if (woman.selected) {
                return true;
            }
        }
        return false;
    };
    NavbarComponent.prototype.isManSelected = function (hero) {
        for (var _i = 0, _a = this.menHeroes; _i < _a.length; _i++) {
            var man = _a[_i];
            if (man.selected) {
                return true;
            }
        }
        return false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('content1'),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "content", void 0);
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.BASE_URL = 'https://akabab.github.io/superhero-api/api/';
    }
    ApiService.prototype.getHeroes = function () {
        return this.http.get(this.BASE_URL + 'all.json');
    };
    ApiService.prototype.getHeroesId = function (id) {
        return this.http.get(this.BASE_URL + 'id/' + id + '.json');
    };
    ApiService.prototype.getHeroesPower = function (id) {
        return this.http.get(this.BASE_URL + 'powerstats/' + id + '.json');
    };
    ApiService.prototype.getHeroesAppearance = function (id) {
        return this.http.get(this.BASE_URL + 'appearance/' + id + '.json');
    };
    ApiService.prototype.getHeroesBiography = function (id) {
        return this.http.get(this.BASE_URL + 'biography/' + id + '.json');
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/test/test.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n  <div class=\"col-xs-1 col-md-2\" *ngFor=\"let hero of heroes\">\n  <img class=\"img-fluid\" src=\"{{hero.images.sm}}\" alt=\"{{hero.name}}\">\n  {{hero.name}}\n  </div>\n  </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_api_service__ = __webpack_require__("./src/app/shared/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = /** @class */ (function () {
    function TestComponent(apiService) {
        this.apiService = apiService;
    }
    TestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getHeroes().subscribe(function (heroes) {
            // console.log(heroes);
            _this.heroes = heroes;
        });
        this.apiService.getHeroesId(12).subscribe(function (hero) {
            console.log(hero);
        });
        this.apiService.getHeroesPower(13).subscribe(function (hero) {
            console.log(hero);
        });
        this.apiService.getHeroesAppearance(14).subscribe(function (hero) {
            console.log(hero);
        });
        this.apiService.getHeroesBiography(14).subscribe(function (hero) {
            console.log(hero);
        });
        // this.apiService.getHeroesImageXs(this.heroes.slug).subscribe(hero => {
        // console.log(hero);
        // });
    };
    TestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-test',
            template: __webpack_require__("./src/app/test/test.component.html"),
            styles: [__webpack_require__("./src/app/test/test.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_api_service__["a" /* ApiService */]])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map