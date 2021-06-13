import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class GUiService {
    constructor() { }
}
GUiService.ɵfac = function GUiService_Factory(t) { return new (t || GUiService)(); };
GUiService.ɵprov = i0.ɵɵdefineInjectable({ token: GUiService, factory: GUiService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GUiService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class GUiComponent {
    constructor() { }
    ngOnInit() {
    }
}
GUiComponent.ɵfac = function GUiComponent_Factory(t) { return new (t || GUiComponent)(); };
GUiComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GUiComponent, selectors: [["lib-g-ui"]], decls: 2, vars: 0, template: function GUiComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, " g-ui works! ");
        i0.ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GUiComponent, [{
        type: Component,
        args: [{
                selector: 'lib-g-ui',
                template: `
    <p>
      g-ui works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class GUiModule {
}
GUiModule.ɵmod = i0.ɵɵdefineNgModule({ type: GUiModule });
GUiModule.ɵinj = i0.ɵɵdefineInjector({ factory: function GUiModule_Factory(t) { return new (t || GUiModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(GUiModule, { declarations: [GUiComponent], exports: [GUiComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GUiModule, [{
        type: NgModule,
        args: [{
                declarations: [GUiComponent],
                imports: [],
                exports: [GUiComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of g-ui
 */

/**
 * Generated bundle index. Do not edit.
 */

export { GUiComponent, GUiModule, GUiService };
//# sourceMappingURL=g-ui.js.map
