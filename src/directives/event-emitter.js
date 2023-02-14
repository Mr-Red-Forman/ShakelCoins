'use strict'

export function createEventEmitter(defaultHandler = null){
    const listenersMap = {}
    const defHandler = defaultHandler

    return {
        on(evName, listener){
            listenersMap[evName] = listenersMap[evName] ? [ ...listenersMap[evName], listener ] : [ listener ]
            return () => listenersMap[evName] = listenersMap[evName].filter(func => func !== listener)
        },
        emit(evName, payload){
            if(listenersMap[evName]) listenersMap[evName].forEach(listener => listener(payload))
            else if(defaultHandler) defaultHandler()
        }
    }
}

export class EventEmitter {
    
    listenersMap = {}
    defHandler = null
    
    constructor(defaultHandler = null){
        this.defHandler = defaultHandler
    }

    on = (evName, listener) => {
        this.listenersMap[evName] = this.listenersMap[evName] ? [ ...this.listenersMap[evName], listener ] : [ listener ]
        return () => this.listenersMap[evName] = this.listenersMap[evName].filter(func => func !== listener)
    }
    
    emit = (evName, payload) => {
        if(this.listenersMap[evName]) this.listenersMap[evName].forEach(listener => listener(payload))
        else if(this.defHandler) this.defHandler()
    }
}