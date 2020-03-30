<template>
  <div>
      <Dialog header="Image Preview" 
      :visible.sync="displayModal" 
      :style="{width: '30vw'}" 
      :modal="true"
      :closable="false">
      <div class="text-center">
              <img width="250px" :src="imgLoading" alt="">
      </div>
    <template #footer>
        <el-button type="danger" @click="closeModal">Close</el-button>
    </template>
</Dialog>
  </div>
</template>

<script>
export default {
props:["displayModal","imgLoading"],
methods:{
  closeModal(){
    this.$emit('close');
  }
}
}
</script>

<style>

</style>