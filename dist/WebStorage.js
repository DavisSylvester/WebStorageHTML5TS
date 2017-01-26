System.register(["./index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, WebStorage;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            WebStorage = class WebStorage {
                set tempStorage(value) {
                    this._tempStorage = value;
                }
                get tempStorage() {
                    return this.tempStorage;
                }
                constructor(webStorageType) {
                    this.GetStorageInstance(webStorageType);
                }
                Add(key, value) {
                    this.tempStorage.setItem(key, value);
                }
                Get(key) {
                    return this.tempStorage.getItem(key);
                }
                Remove(key) {
                    this.tempStorage.removeItem(key);
                }
                Clear() {
                    this.tempStorage.clear();
                }
                GetAllKeys() {
                    if (this.tempStorage.length === 0) {
                        return null;
                    }
                    let result = new Array();
                    for (let i = 0; i < this.tempStorage.length; i++) {
                        console.log(this.tempStorage.key(i));
                        result.push(this.tempStorage.key(i));
                    }
                    return result;
                }
                GetStorageInstance(webStorageType) {
                    this.GetInstance(webStorageType);
                }
                hasWebStorage() {
                    if (window.sessionStorage === undefined ||
                        window.localStorage === undefined) {
                        return false;
                    }
                    return true;
                }
                GetInstance(webStorageType) {
                    if (this.hasWebStorage() === false) {
                        return null;
                    }
                    switch (webStorageType) {
                        case index_1.WebStorageType.Session:
                            this.tempStorage = window.sessionStorage;
                            break;
                        case index_1.WebStorageType.Local:
                            this.tempStorage = window.localStorage;
                            break;
                    }
                }
            };
            exports_1("WebStorage", WebStorage);
        }
    };
});
//# sourceMappingURL=WebStorage.js.map