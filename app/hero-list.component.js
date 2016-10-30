"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var HeroListComponent = (function () {
    function HeroListComponent(service) {
        this.service = service;
    }
    HeroListComponent.prototype.ngOnInit = function () {
        this.heroes = this.service.getHeroes();
    };
    HeroListComponent.prototype.selectHero = function (hero) { this.selectedHero = hero; };
    HeroListComponent = __decorate([
        Component({
            moduleId: module.id,
            selector: 'hero-list',
            templateUrl: 'hero-list.component.html',
            providers: [HeroService]
        }), 
        __metadata('design:paramtypes', [Object])
    ], HeroListComponent);
    return HeroListComponent;
}());
exports.HeroListComponent = HeroListComponent;
//# sourceMappingURL=hero-list.component.js.map