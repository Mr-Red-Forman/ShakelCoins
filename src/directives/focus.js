export const focus = {
    mounted(el, binding){
        el.addEventListener('focus', () => binding.value(el))
    },
    unmounted(el, binding){
        el.removeEventListener('focus', () => binding.value(el))
    }
}