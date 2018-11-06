<template>
	<div
		:style="mainStyle"
		:class="(allowScrollY||allowScrollX) ? 'scroll' :''">
		<slot/>
	</div>
</template>

<script>
    import {mapState} from 'vuex'
    import vh from '@/utils/dom/viewport-height'

    export default {
        name: 'IMainContainer',
        props: {
            height: {
                type: Number,
                default: 0
            },
            background: {
                type: String,
                default: '#fff'
            },
            // 纵向滚动条
            allowScrollY: {
                type: Boolean,
                default: false
            },
            allowScrollX: {
                type: Boolean,
                default: false
            }
        },
        computed: {

            ...mapState({
                rootState: state => state.root
            }),

            mainStyle() {

                return {
                    'height': this.height > 0 ? this.height : (vh() - this.rootState.topBarHeight - this.rootState.headerOperationHeight - this.rootState.contentPadding * 2 - 1) + 'px',
                    /*'height': this.height > 0 ? this.height : (vh() - 120) + 'px',*/
                    'background': this.background,
                    'overflow-y':this.allowScrollY ? 'auto' :'',
                    'overflow-x':this.allowScrollX ? 'auto' :'',
                }
            }
        }
    }
</script>