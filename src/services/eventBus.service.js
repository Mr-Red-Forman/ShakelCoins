'use strict'
export const SHOW_MSG = 'show-msg'

function createEventEmitter(defaultHandler = null){
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
export const eventBus = createEventEmitter(() => console.log('No handler found...'))

export function showUserMsg(msg) {
    eventBus.emit(SHOW_MSG, msg)
}

export function showSuccessMsg(txt) {
    showUserMsg({txt, type: 'success'})
    // showUserMsg(txt)
}
export function showErrorMsg(txt) {
    showUserMsg({txt, type: 'error'})
}

window.showUserMsg = showUserMsg
