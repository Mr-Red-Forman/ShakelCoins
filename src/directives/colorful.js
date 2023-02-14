export const colorful = {
    mounted(el, binding) {
        const { dir, arg } = binding
        const event = arg ? arg : 'input'

        dir._handler = () => setRandomColor(el)
        dir._event = event
        
        el.addEventListener(event, dir._handler)
    },
    unmounted(el, binding) {
        const { dir } = binding
        el.removeEventListener(dir._event, dir._handler)
        
        delete dir._handler
        delete dir._event
    },
}
function setRandomColor(el) {
    el.style.backgroundColor = getRandomColor()
}
function getRandomColor() {
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}
