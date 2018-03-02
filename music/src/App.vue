<template>
  <div id="app">
    <headerComponent></headerComponent>
    <div class="top-nav">
      <router-link tag="div" to="/recommend">推荐</router-link>
      <router-link tag="div" to="/singer">歌手</router-link>
      <router-link tag="div" to="/sort">排序</router-link>
      <router-link tag="div" to="/search">搜索</router-link>      
    </div>
    <router-view></router-view>
  </div>
</template>


<style lang ="scss" scoped>
  @import url(./style/common.scss);
  .top-nav{
    height: 44px;
    display: flex;
    div{
      flex: 1;
      text-align: center;
      line-height: 44px;
    }
  }

  body{
    margin:0;
  }
</style>



<script type="text/javascript">
  import headerComponent from './components/header.vue'

export default{
  name: 'mine',
  data(){
    return{
      message:"w ddd"
    }
  },
  components:{
    headerComponent
  },
  beforeCreate(){
    console.log(1)
  },
  methods:{
    chang(){
      alert(1)
    }
  }
}

</script>