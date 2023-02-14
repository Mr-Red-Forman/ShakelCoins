export const trackmouse = {
    mounted(el, binding){
        const { dir } = binding
        dir._handler = (ev) => onMouseMove(ev, binding)
        window.addEventListener('mousemove', dir._handler)
    },
    unmounted(el, binding){
        const { dir } = binding
        window.removeEventListener('mousemove', dir._handler)
        delete dir._handler
    },
}
function onMouseMove(ev, binding){
    const { value: handler, arg, instance } = binding
    if(arg && !instance.$data[arg]) return
    // console.log('var: ', instance.$data[arg])
    const { clientX, clientY } = ev
    handler(clientX, clientY)
}