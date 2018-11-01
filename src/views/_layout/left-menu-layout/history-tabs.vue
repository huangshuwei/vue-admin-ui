<template>
	<div>
		<el-tag 
			v-for="(item,index) in historyTabs" 
			:key="index"
			:type="item.colorType"
			size="small"
			closable 
			@click.native.self="openTabs(item.path)" 
			@close="handleTabClose(item)">
			{{ item.name }}
		</el-tag>
	</div>
</template>

<script>

	/*
	* 组件销毁后历史记录消失
	* */
    export default{
        name:'HistoryTabs',

        data(){

            return {

                historyTabs:[]
            }
        },

        watch : {

            $route(to){

                this.addHistoryTab(to);
            }
        },

        methods:{

            // open tabs
            openTabs(path){

                this.$router.replace({path : path});
            },


            handleTabClose(item){

                this.deleteHistoryTab(item);
            },

            addHistoryTab(route){

                if (route){

                    if(route.matched.length > 0){

                        let crumb = route.matched[route.matched.length - 1];
                        // 设置历史记录
                        if (crumb.name && crumb.name.length > 0){

                            this.setHistoryTab(crumb)
                        }
                    }
                }
            },

            setHistoryTab(payload){

                let isExitTab = false;

                let tempTabs = this.historyTabs.map(item =>{

                    if(item.path === payload.path){

                        isExitTab = true;
                        return {name : item.name, path : item.path, colorType : ''};

                    } else {

                        return {name : item.name, path : item.path, colorType : 'info'};
                    }
                })

                // 如果不存在相同的历史记录则添加
                if(!isExitTab){

                    tempTabs.push({name : payload.name, path : payload.path, colorType : ''});
                }

                this.historyTabs = tempTabs;
            },

            deleteHistoryTab(payload){

                let index = this.historyTabs.findIndex(x=>x.path === payload.path);

                if (index > -1){

                    this.historyTabs.splice(index,1);
                }
            }
        },

        created(){

            this.addHistoryTab(this.$route);
        },
    }
</script>