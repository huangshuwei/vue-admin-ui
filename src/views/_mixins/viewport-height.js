import vh from '@/utils/dom/viewport-height'
import bindEvents from '@/utils/dom/bind-events'
import {mapState} from 'vuex'

export default {

    data() {
        return {
            viewportHeight_Mixin: 0
        }
    },

    computed:{

        ...mapState({
            __rootState: state => state.root,
        }),
    },

    methods:{

        __resetViewportHeight(){

            let viewportHeight = vh()

            this.viewportHeight_Mixin = this.__rootState.pageMinHeight > viewportHeight ? this.__rootState.pageMinHeight : viewportHeight
        }
    },
    mounted() {

        this.viewportHeight_Mixin = vh()
        bindEvents.bind(window, 'resize', this.__resetViewportHeight);
    },
    beforeDestroy() {

        bindEvents.unbind(window, 'resize', this.__resetViewportHeight);
    }
}