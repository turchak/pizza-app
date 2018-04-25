import { AUTH_HTTP_SERVICE } from './auth.http';
import { WS_TICKET, WS_PATH } from './constants';
import { EventEmitter } from './event.emitter';

class Ws {
	constructor() {
		this.ws = null;
		this._emitter = new EventEmitter();
	}

	getTicket() {
		return AUTH_HTTP_SERVICE.get(WS_TICKET).then(res => res);
	}

	subscribe(eventName, callback) {
		return this._emitter.subscribe(eventName, callback);
	}

	_onmessage(data) {
		const event = JSON.parse(data);
		this._emitter.emit(event.event_name, event.data);
	}

	_onclose(e) {
		if (e.code === 4001) {
			console.log('Login plz');
		} else {
			console.log('Lost connection ... reconnect');
			setTimeout(this._establish, 2000);
		}
	}

	establish() {
		this.getTicket().then(data => {
			this.ws = new WebSocket(`${WS_PATH}?key=${data.token}`);
			this.ws.onopen = console.log;
			this.ws.onmessage = e => this._onmessage(e.data);
			this.ws.onclose = e => this._onclose(e);
		});
	}
}

export const WS = new Ws();
