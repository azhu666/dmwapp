<template>
  <div>
    <div>
      <label>用户名:</label>
      <input type="text"/>
    </div>
    <div>
      <label>密码：</label>
      <input type="password"/>
    </div>
    <div>
      <input type="submit" value="提交" @click=""/>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{

      }
    },
    methods:{
      submits(){
        this.$http.getHelloWorld("/api/user/login")
          .then(function(rel){
            console.log(rel);
          })
      }
    }
  }
</script>

<style>

</style>
