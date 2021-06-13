(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('g-ui', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['g-ui'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var GUiService = /** @class */ (function () {
        function GUiService() {
        }
        return GUiService;
    }());
    GUiService.ɵfac = function GUiService_Factory(t) { return new (t || GUiService)(); };
    GUiService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: GUiService, factory: GUiService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(GUiService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var GUiComponent = /** @class */ (function () {
        function GUiComponent() {
        }
        GUiComponent.prototype.ngOnInit = function () {
        };
        return GUiComponent;
    }());
    GUiComponent.ɵfac = function GUiComponent_Factory(t) { return new (t || GUiComponent)(); };
    GUiComponent.ɵcmp = i0__namespace.ɵɵdefineComponent({ type: GUiComponent, selectors: [["lib-g-ui"]], decls: 2, vars: 0, template: function GUiComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "p");
                i0__namespace.ɵɵtext(1, " g-ui works! ");
                i0__namespace.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(GUiComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-g-ui',
                        template: "\n    <p>\n      g-ui works!\n    </p>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var GUiModule = /** @class */ (function () {
        function GUiModule() {
        }
        return GUiModule;
    }());
    GUiModule.ɵmod = i0__namespace.ɵɵdefineNgModule({ type: GUiModule });
    GUiModule.ɵinj = i0__namespace.ɵɵdefineInjector({ factory: function GUiModule_Factory(t) { return new (t || GUiModule)(); }, imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(GUiModule, { declarations: [GUiComponent], exports: [GUiComponent] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(GUiModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [GUiComponent],
                        imports: [],
                        exports: [GUiComponent]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of g-ui
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.GUiComponent = GUiComponent;
    exports.GUiModule = GUiModule;
    exports.GUiService = GUiService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=g-ui.umd.js.map
