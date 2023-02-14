export const clickout = {

    mounted(el, binding){
        const { dir } = binding
        dir._clickout = (ev) => clickOutside(ev, el, binding)
        
        window.addEventListener('click', dir._clickout)
    },
    unmounted(el, binding){
        const { dir } = binding
        window.removeEventListener('click', dir._clickout)
        delete dir._clickout
    },
}
function clickOutside(ev, el, binding){

    const { value: handler } = binding
    const { clientX, clientY } = ev
    const { left, top, width, height } = el.getBoundingClientRect()

    if (!(clientX > left && clientX < left + width && clientY > top && clientY < top + height)) {
        handler()
    }

}