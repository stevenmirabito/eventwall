System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Wall, WallService, IMAGES, wallPromise;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Wall = (function () {
                function Wall(id, images) {
                    this.id = id;
                    this.images = images;
                }
                return Wall;
            }());
            exports_1("Wall", Wall);
            WallService = (function () {
                function WallService() {
                }
                WallService.prototype.getImages = function (wall_id) {
                    return wallPromise;
                };
                WallService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], WallService);
                return WallService;
            }());
            exports_1("WallService", WallService);
            IMAGES = ["https://eventwall.blob.core.windows.net/ya57kr5d/1457278887_CcAzVBFWAAAbqF0.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278908_Cc3XOtJUkAIw7E7.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278916_Cc1CP9UVIAAdKNg.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278921_Cc0pLzHUMAA4LTU.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278927_Cc05ZdKVAAE8hNB.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278933_Cc1zALHW8AE2JVn.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278938_CczPi5fUkAANe6.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278943_CcznCuLWEAE2yOM.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278947_Cczq2Y-XEAAMkVs.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278951_Cc0uLeXXEAAuhRp.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278955_Cc3zB1DWEAA8N8z.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278960_Ccy1HlwXIAElCkb.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278964_Cc0S5HJW4AAUmRJ.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278969_Cc0jLMDXIAEyXNV.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278973_Ccz90hLUUAECnZg.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278977_Cc1UFceW4AACEP9.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278982_Cc0W8PcW8AEWkOi.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278986_Cc1BbljUYAAgab.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278989_CczzBY1VIAEAjW.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278994_CczzBY1VIAEAjW.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457278997_CczX2kPUEAAiStV.jpg", "https://eventwall.blob.core.windows.net/ya57kr5d/1457279001_CczYVBbW0AALWEX.jpg"];
            wallPromise = Promise.resolve(IMAGES);
        }
    }
});
//# sourceMappingURL=wall.service.js.map