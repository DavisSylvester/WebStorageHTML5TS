import { WebStorageType } from "./index";

export class WebStorage {

    private _tempStorage: Storage;

    set tempStorage(value: Storage) {
        this._tempStorage = value;
    }


    get tempStorage() {
        return this.tempStorage;
    }

    constructor(webStorageType: WebStorageType) {
        this.GetStorageInstance(webStorageType);

    }

    public Add(key: string, value: string): void {
        this.tempStorage.setItem(key, value);
    }

    public Get(key: string): string {
        return this.tempStorage.getItem(key);
    }

    public Remove(key: string): void {
        this.tempStorage.removeItem(key);
    }

    public Clear(): void {
        this.tempStorage.clear();
    }

    public ShowAll(): Array<

    public GetAllKeys(): Array<string> {
        if (this.tempStorage.length === 0) {
            return null;
        }

        let result = new Array<string>();

        for (let i = 0; i < this.tempStorage.length; i++) {
            console.log(this.tempStorage.key(i));
            result.push(this.tempStorage.key(i));
        }
        return result;
    }

    protected GetStorageInstance(webStorageType: WebStorageType): void {
        this.GetInstance(webStorageType);
    }

    protected hasWebStorage(): boolean {
        if (window.sessionStorage === undefined ||
            window.localStorage === undefined) {
            return false;
        }
        return true;
    }

    protected GetInstance(webStorageType: WebStorageType): void {
        if (this.hasWebStorage() === false) {
            return null;
        }

        switch (webStorageType) {
            case WebStorageType.Session:
                this.tempStorage = window.sessionStorage;
                break;

            case WebStorageType.Local:
                this.tempStorage = window.localStorage;
                break;
        }
    }


}
