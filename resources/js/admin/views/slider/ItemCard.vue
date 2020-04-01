<template >
		<div class="car-details">
			<div class="p-grid p-nogutter">
				<div class="p-col-12">
					<img style="width: 220px;height:200px;" :src="'/images/products/' + slotProps.data.img + '.png'" :alt="slotProps.data.brand" />
				</div>
				<div class="p-col-12 car-data">
					<div class="car-title">{{slotProps.data.img}}</div>
					<div class="car-subtitle">{{slotProps.data.price}} ₪</div>
                    <div>
                          <el-rate  v-model="slotProps.data.rate"></el-rate>
                    </div>
					<div>
						<br>
						<el-button v-if="!slotProps.data.fav"
						@click="saveFav(slotProps)"
						 type="success">Add to favourite</el-button>
						 <el-button v-else
						@click="saveFav(slotProps)"
						 type="danger">Remove from favourite</el-button>
						 <br><br>
						 <el-input-number style="width:140px;" :min="1" type="text" v-model="slotProps.data.items"></el-input-number>
						<el-button @click="addToCart" type="primary">Add to cart</el-button>
					</div>
				</div>
			</div>
		</div>
</template>
    
<script>
export default {
props:["slotProps"],
methods:{
	saveFav(props) {
		props.data.fav=!props.data.fav;
		localStorage.setItem('products',JSON.stringify(this.$parent.$parent.products))
},
addToCart(){
	let itemExisit = false;
	this.$parent.$parent.cart.forEach(data => {
		if(data.id ==this.slotProps.data.id) {
			itemExisit = true;
		}
	});
	if(itemExisit == false) {
this.$parent.$parent.cart.push({
	id: this.slotProps.data.id,
	count:this.slotProps.data.items,
})
	}else {
		this.$parent.$parent.cart.forEach(data => {
			if(data.id == this.slotProps.data.id) {
				data.count += this.slotProps.data.items;
			}
		});
	}
localStorage.setItem('cart',JSON.stringify(this.$parent.$parent.cart))

}
}
}
</script>

<style>

</style>