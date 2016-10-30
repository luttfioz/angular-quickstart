"use strict";
var HeroService = (function () {
    function HeroService() {
        this.heroes = [];
    }
    //constructor(
    //private backend: BackendService,
    //private logger: Logger) { }
    HeroService.prototype.getHeroes = function () {
        //this.logger.log(`Fetched ${heroes.length} heroes.`);
        //this.backend.getAll(Hero).then( (heroes: Hero[]) => {
        //this.logger.log(`Fetched ${heroes.length} heroes.`);
        //this.heroes.push(...heroes); // fill cache
        //});
        //return this.heroes;
    };
    return HeroService;
}());
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map