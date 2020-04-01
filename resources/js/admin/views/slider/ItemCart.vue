<template>
  <div>
      <h3>Cart</h3>
        <ul>
            <li v-for="c in cart" :key="c.id">
                <br>
                <img style="width:200px;" :src="'/images/products/' + c.img + '.png'" alt="">
                <span class="calc"> {{c.count}} Item × {{ c.price}} ₪ = {{(c.count * c.price)}} ₪</span>
            </li>
            <li>
                <br>
                <span class="calc blue-clr  ml-230">Result = {{ allCount }} ₪</span>
            </li>
        </ul>
  </div>
</template>

<script>
export default {
    data(){
        return {
            cart:[],
            allCount:0
        }
    },
mounted() {
    let cart = JSON.parse(localStorage.getItem('cart'));
       this.allCount = 0;
    cart.forEach(c => {
        this.allCount += (c.count * c.price);
    });
    this.cart = cart;
}
}
</script>

<style>
ul li {
    list-style: none;
}
.calc {
    font-size: 18px;
    margin-left: 25px;
}
.ml-230 {
    margin-left: 230px;
}
</style>