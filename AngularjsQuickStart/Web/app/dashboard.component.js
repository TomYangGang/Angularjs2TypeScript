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
var core_1 = require("@angular/core");
var hero_service_1 = require("./hero.service");
var DashboardComponent = (function () {
    function DashboardComponent(heroService) {
        this.heroService = heroService;
        this.heroes = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeroesByHttp().then(function (h) { return _this.getHeroSplice(h); });
    };
    DashboardComponent.prototype.getHeroSplice = function (h) {
        //todo:
        //let oldHeroBackup=Object.assign([], h); 
        //console.log({old:"old",oldHero:oldHeroBackup});
        if (h) {
            this.heroes = h.splice(1, 5);
        }
        //console.log({new:"new",newHero:this.heroes});
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-dashboard',
        templateUrl: 'dashboard.component.html',
        styleUrls: ['dashboard.component.css']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof hero_service_1.HeroService !== "undefined" && hero_service_1.HeroService) === "function" && _a || Object])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
var _a;
//# sourceMappingURL=dashboard.component.js.map