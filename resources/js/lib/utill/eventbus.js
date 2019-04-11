const WARNING_BINDING = 100;
const DELAY_BETWEEN_WARNING = 20*1000;
class EventBus {
	constructor() {
		this.listeners = [];		
	}

	checkWarning(){
		if(this.listeners.length >= WARNING_BINDING){
			if(!this._lastWarning || Date.now() - this._lastWarning >= DELAY_BETWEEN_WARNING){
				this._lastWarning = Date.now();
			}			
		}
	}

	subscribe(listener) {
		if(!listener || listener.constructor !== Function){
			return;
		}				
		this.unsubscribe(listener);		
		this.listeners.push(listener);

		this.checkWarning();
	}

	unsubscribe(listener) {
		for (let i = 0; i < this.listeners.length; i ++) {
			if (this.listeners[i] === listener) {
				this.listeners.splice(i, 1);
				return;
			}
		}
	}

	send(tag, payload) {
		let temp = [...this.listeners]; //re-create the list to avoid what happened earlier, one of the listener remove itself from the list, mess up the index
		const _beforeLen = this.listeners.length;
		const _before = Date.now();		
		for (let i = 0; i < temp.length ; i ++) {			
			try{
				temp[i](tag, payload);
			}catch(e){
				console.log(e);
			}
		}
		if(Date.now() - _before > 1*1000){
			console.log(`[eventbus] len: ${_beforeLen}=>${this.listeners.length} cost: ${Date.now() - _before} tag: ${tag}`)
		}
	}
}
const _bus = new EventBus();
export default _bus;