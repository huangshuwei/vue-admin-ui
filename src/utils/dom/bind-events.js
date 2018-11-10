export default {

    /*
     * 事件绑定
     *
     * @method bind
     * @param  {dom||window}   elem        需要绑定的dom节点或window对象
     * @param  {String}        event       绑定的事件名称
     * @param  {Function}      handler     事件处理方法
     */
    bind(elem, event, handler){
        if (elem && elem !== 'undefined' && event && handler) {

            event = event === 'mousewheel' ? (document.onmousewheel !== undefined ? "mousewheel" : "DOMMouseScroll") : event;

            if (document.attachEvent) { //if IE (and Opera depending on user setting)

                elem.attachEvent("on" + event, handler);
            }
            else { //WC3 browsers

                elem.addEventListener(event, handler, false);
            }
        }
    },

    /*
     * 移除事件绑定
     *
     * @method unbind
     * @param  {dom||window}   elem         需要移除绑定的dom节点或window对象
     * @param  {String}        event        绑定的事件名称
     * @param  {Function||Array<Function>}  handler    事件处理方法，可以为数组
     */
    unbind(elem, event, handler){
        if (elem && elem !== 'undefined' && event && handler) {

            event = event === 'mousewheel' ? (document.onmousewheel !== undefined ? "mousewheel" : "DOMMouseScroll") : event;

            var handlers = [];
            if (Array.isArray(handler) && handler.length > 0) {
                handlers = handler;
            } else {
                handlers.push(handler);
            }

            if (document.removeEventListener) {

                handlers.forEach(e => {
                    elem.removeEventListener(event, e, false);
                })
            }
            else {

                handlers.forEach(e => {
                    elem.removeEventListener('on' + event, e);
                })
            }
        }
    }
}