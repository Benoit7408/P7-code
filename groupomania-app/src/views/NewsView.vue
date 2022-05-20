<template>
  <div class="news">
    <div :key="index" v-for="(news,index) in news.resultData">
    
    
    <h1>This is an news page</h1>
    <h2>{{news.id}}</h2>
    <h2>{{news.content}}</h2>
    <img :src= "news.imageUrl">
    </div>
  </div>
</template>


<script>
import axios from "axios"


export default {
  name : 'news-page',
  data(){
    return{
      news : " ",
    }
  },
  mounted(){
  axios
  .get("http://localhost:3000/api/news")
  .then((response) => {
    this.news = response.data;
    console.log(response.data.resultData[0].id);
    
  })
 
  }
  
}

</script>


<style scoped>



</style>
