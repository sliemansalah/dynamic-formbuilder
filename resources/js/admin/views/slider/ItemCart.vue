<template>
  <div>
      cart
  </div>
</template>

<script>
export default {
    data(){
        return {
            cart:[]
        }
    },
mounted() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
}
}
</script>

<style>

</style>