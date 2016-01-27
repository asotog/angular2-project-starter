System.register([], function(exports_1) {
    var Hero;
    return {
        setters:[],
        execute: function() {
            Hero = (function () {
                function Hero(id, name, power, strength, alterEgo) {
                    this.id = id;
                    this.name = name;
                    this.power = power;
                    this.strength = strength;
                    this.alterEgo = alterEgo;
                }
                return Hero;
            })();
            exports_1("Hero", Hero);
        }
    }
});
//# sourceMappingURL=hero.js.map