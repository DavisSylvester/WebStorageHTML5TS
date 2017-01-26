System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var WebStorageType;
    return {
        setters: [],
        execute: function () {
            (function (WebStorageType) {
                WebStorageType[WebStorageType["Session"] = 1] = "Session";
                WebStorageType[WebStorageType["Local"] = 2] = "Local";
            })(WebStorageType || (WebStorageType = {}));
            exports_1("WebStorageType", WebStorageType);
        }
    };
});
//# sourceMappingURL=WebStorageType.js.map