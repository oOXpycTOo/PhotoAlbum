class Event {
    constructor(sender) {
        this._sender = sender;
        this._listeners = [];
    }

    attach(listener) {
        this._listeners.push(listener);
    }

    notify(args) {
        this._listeners.forEach(listener => {
            this._sender.listener(args);
        });
    }
}