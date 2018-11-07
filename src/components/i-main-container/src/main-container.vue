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
            paddingAll: {
                type: Number,
                default: 0
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

                const height = this.height > 0 ? this.height : (vh() - this.rootState.topBarHeight - this.rootState.headerOperationHeight - this.rootState.contentPadding * 2 - this.paddingAll * 2 - 1) + 'px';

                let style = {
                    'background': this.background,
                    'overflow-y': this.allowScrollY ? 'auto' : '',
                    'overflow-x': this.allowScrollX ? 'auto' : '',
                    'padding': this.paddingAll + 'px'
                }

                // 如果需要出纵向滚动条（局部滚动），则是 max-height
                if (this.allowScrollY) {

                    style["height"] = height

                } else { // 内容多了整页滚动


                    style["min-height"] = height
                }

                return style
            }
        }
    }
</script>