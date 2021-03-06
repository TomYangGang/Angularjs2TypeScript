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
var ng2_bootstrap_1 = require("ng2-bootstrap");
var hero_service_1 = require("./hero.service");
var HeroesComponent = (function () {
    function HeroesComponent(heroService, route, router) {
        this.heroService = heroService;
        this.route = route;
        this.router = router;
        this.heroes = [];
        this.hero = { Id: 0, Name: "" };
        this.heroDelete = { Id: 0, Name: "" };
    }
    HeroesComponent.prototype.onSelect = function (hero) {
        this.hero = Object.assign({}, hero);
        this.addOrEditHeroModal.show();
    };
    HeroesComponent.prototype.cleanHeroValue = function () {
        this.hero = { Id: 0, Name: "" };
    };
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
        if (this.hero.Id === 0) {
            this.heroService.create(this.hero)
                .then(function (hero) {
                _this.getHeroes();
                _this.cleanHeroValue();
                _this.addOrEditHeroModal.hide();
            });
        }
        else {
            this.heroService.update(this.hero)
                .then(function (hero) {
                _this.getHeroes();
                _this.cleanHeroValue();
                _this.addOrEditHeroModal.hide();
            });
        }
    };
    // delete(hero:Hero):void{
    //     this.deleteModal.show();        
    //     this.heroService.delete(hero.Id)
    //                     .then(()=>{
    //                         this.heroes=this.heroes.filter(h=>h!==hero);                            
    //                     })
    // }
    HeroesComponent.prototype.delete = function (hero) {
        this.heroDelete = hero;
        this.commonDeleteModal.show();
        // this.heroService.delete(hero.Id)
        //                 .then(()=>{
        //                     this.heroes=this.heroes.filter(h=>h!==hero);                            
        //                 })
    };
    HeroesComponent.prototype.deleteHero = function () {
        var _this = this;
        this.heroService.delete(this.heroDelete.Id)
            .then(function () {
            _this.getHeroes();
            _this.commonDeleteModal.hide();
        });
    };
    HeroesComponent.prototype.initHeros = function (heros) {
        this.heroes = heros;
    };
    HeroesComponent.prototype.search = function (term) {
        var _this = this;
        if (term === "") {
            this.getHeroes();
        }
        else {
            this.heroService.searchHero(term)
                .then(function (h) { return _this.initHeros(h); });
        }
    };
    return HeroesComponent;
}());
__decorate([
    core_1.ViewChild('lgModal'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], HeroesComponent.prototype, "addOrEditHeroModal", void 0);
__decorate([
    core_1.ViewChild('deleteModal'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], HeroesComponent.prototype, "commonDeleteModal", void 0);
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