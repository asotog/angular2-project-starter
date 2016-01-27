System.register([], function(exports_1) {
    var Logger;
    return {
        setters:[],
        execute: function() {
            Logger = (function () {
                function Logger() {
                }
                Logger.prototype.log = function (msg) { console.log(msg); };
                Logger.prototype.error = function (msg) { console.error(msg); };
                Logger.prototype.warn = function (msg) { console.warn(msg); };
                return Logger;
            })();
            exports_1("Logger", Logger);
        }
    }
});
//# sourceMappingURL=logger.service.js.map