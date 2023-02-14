import { createVNode, render, getCurrentInstance } from 'vue'
import ParentInspector from '@/components/ParentInspector.vue'

export const test = {
    mounted(el, binding) {
        let vnode = createVNode(ParentInspector)
        const appContext = getCurrentInstance()
        // vnode.appContext = { ...appContext }
        render(vnode, el)
        console.log(vnode)
    },
}
// import { createApp, getCurrentInstance } from 'vue'

// export default function renderComponent({ el, component, props, appContext }) {
//   let app = createApp(component, props)
//   Object.assign(app._context, appContext) // must use Object.assign on _context
//   app.mount(el)

//   return () => {
//     // destroy app/component
//     app?.unmount()
//     app = undefined
//   }
// }
// export const test = {
//     mounted(el, binding) {
//         const appContext = getCurrentInstance()
//         let app = createApp(ParentInspector)
//         Object.assign(app._context, appContext) // must use Object.assign on _context
//         app.mount(el)
//         console.log('Hi')
//         return () => {
//             // destroy app/component
//             app?.unmount()
//             app = undefined
//         }
//     },
// }
