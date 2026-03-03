
export class Mutex {
    private _locked = false;
    private _queue: Array<() => void> = [];
    private _waiters: Array<() => void> = [];

    
    acquire(): Promise<void> {
        if (!this._locked) {
            this._locked = true;
            return Promise.resolve();
        }

        return new Promise<void>((resolve) => {
            this._queue.push(resolve);
        });
    }

    
    release(): void {
        const next = this._queue.shift();
        if (next) {
            
            next();
        } else {
            this._locked = false;
            
            this._waiters.forEach((resolve) => resolve());
            this._waiters = [];
        }
    }

    
    get isLocked(): boolean {
        return this._locked;
    }

    
    waitForUnlock(): Promise<void> {
        if (!this._locked) {
            return Promise.resolve();
        }
        return new Promise<void>((resolve) => {
            this._waiters.push(resolve);
        });
    }
}
