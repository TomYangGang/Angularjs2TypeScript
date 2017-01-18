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
var router_1 = require("@angular/router");
var hero_service_1 = require("./hero.service");
var HeroesComponent = (function () {
    // selectedHero:Hero;
    // onSelect(hero:Hero):void{
    //     this.selectedHero=hero;
    // }
    function HeroesComponent(heroService, route, router) {
        this.heroService = heroService;
        this.route = route;
        this.router = router;
        this.heroes = [];
        this.hero = { Id: 0, Name: "" };
        this.heroForm = { Id: 0, Name: "" };
    }
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroesByHttp().then(function (h) { return _this.initHeros(h); });
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    // gotoDetail():void{
    //     this.router.navigate(['/detail',this.selectedHero.Id]);
    // }
    // add(name:string):void{
    //     name=name.trim();
    //     if(!name){return;}
    //     this.heroService.create(name)
    //                     .then(hero=>{
    //                         this.heroes.push(hero);
    //                         this.selectedHero=null;
    //                     });
    // }
    HeroesComponent.prototype.save = function () {
        var _this = this;
        this.hero = {
            Id: this.heroForm.Id,
            Name: this.heroForm.Name
        };
        //Name:string;
        this.heroService.create(Name)
            .subscribe(function (success) { return _this.getHeroes(); }, function (error) { return console.log(error); });
    };
    HeroesComponent.prototype.delete = function (hero) {
        var _this = this;
        this.heroService.delete(hero.Id)
            .then(function () {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
        });
    };
    HeroesComponent.prototype.initHeros = function (heros) {
        this.heroes = heros;
    };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-heroes',
        templateUrl: 'heroes.component.html',
        styleUrls: ['heroes.component.css']
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService,
        router_1.ActivatedRoute,
        router_1.Router])
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map