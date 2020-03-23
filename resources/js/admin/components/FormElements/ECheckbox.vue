<template>
  <div>
      <el-checkbox 
      v-model="model"
      @input="$emit('input',model)"
      >{{ model }}</el-checkbox>
  </div>
</template>

<script>
export default {
  props:["inline"],
data(){
  return {
    model:false
  }
}
}
</script>

<style>

</style>