/*

    Track Event Directive

        This will track the specified event on the window:
        v-trackevent:eventname="handler" 

        This will track event for elements carrying the 'track' attribut
        v-trackevent:eventname.trackers="handler" like this:

        <div track> Some Stuff in here... </div>

        Both the event name argument and the handler value can be 
        dynamicaly binded like this:
        v-trackevent:[eventname].trackers="handler"
*/

export const trackevent = {
    mounted(el, binding){
        _setHandler(binding)
    },
    updated(el, binding){
        _removeHandler(binding)
        _setHandler(binding)
    },
    unmounted(el, binding){
        _removeHandler(binding)
    },
}
function _setHandler({ value: handler, arg, modifiers, dir }){
    
    if(!handler) return 

    dir._handler = (ev) => handler(ev)
    dir._trackedEvent = arg

    if(modifiers.trackers){
        const els = document.querySelectorAll(`[track]`)
        els.forEach(el => el.addEventListener(arg, dir._handler))
    } else {
        window.addEventListener(arg, dir._handler)
    }
}
function _removeHandler({ modifiers, dir }){
    if(modifiers.trackers){
        const els = document.querySelectorAll(`[track]`)
        els.forEach(el => el.removeEventListener(dir._trackedEvent, dir._handler))
    } else {
        window.removeEventListener(dir._trackedEvent, dir._handler)
    }

    delete dir._handler
    delete dir._trackedEvent
}