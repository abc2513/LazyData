<template>
	<div class="menu">
        <ul>
            <li v-for="(p,index) of li_text" :key="index" >
                <a href={{li_href[index]}}></a>
            </li>
        </ul>
	</div>
</template>

<script>
	 export default {
        name:"left_menu",
		data(){
			return {
                li_text:['智能交通系统','2','3'],
                li_href:['baidu.com','baidu.com','baidu.com'],
			}
		}
	}
</script>

<style>
	.menu{
		background-color: orange;
	}
</style>