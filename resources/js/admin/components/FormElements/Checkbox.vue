<template>
  <div>
      <input 
      type="checkbox" 
      v-model="model" 
      @input="$emit('input',!model)">
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