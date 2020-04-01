<template>

  <p-carousel :value="products" 
  :numVisible="3" 
  :numScroll="1" 
  :responsiveOptions="responsiveOptions">
	<template #header>
		<h2>Our Carousel</h2>
	</template>

	<template #item="slotProps">
	<item-card :slotProps="slotProps"></item-card>
	</template>

</p-carousel>

</template>

<script>
import ItemCard from './ItemCard';
export default {
data() {
		return {
			products: [{id:1,img:'pizza',rate:3,price:20,cost:10,fav:false,items:1},
				{id:2,img:'pork',rate:3,price:15,cost:7,fav:false,items:1},
				{id:3,img:'botatos',rate:2,price:5,cost:2,fav:false,items:1},
				{id:4,img:'khyar',rate:1,price:4,cost:2,fav:false,items:1},
				{id:5,img:'tomatos',rate:5,price:4,cost:2,fav:false,items:1},
				{id:6,img:'dora',rate:3,price:8,cost:5,fav:false,items:1}],
				cart:[],
			responsiveOptions: [
				{
					breakpoint: '1024px',
					numVisible: 3,
					numScroll: 3
				},
				{
					breakpoint: '600px',
					numVisible: 2,
					numScroll: 2
				},
				{
					breakpoint: '480px',
					numVisible: 1,
					numScroll: 1
				}
			]
		}
    },
    components:{
        ItemCard,
	},
	mounted() {
		let prods =  [{id:1,img:'pizza',rate:3,price:20,cost:10,fav:false,items:1},
				{id:2,img:'pork',rate:3,price:15,cost:7,fav:false,items:1},
				{id:3,img:'botatos',rate:2,price:5,cost:2,fav:false,items:1},
				{id:4,img:'khyar',rate:1,price:4,cost:2,fav:false,items:1},
				{id:5,img:'tomatos',rate:5,price:4,cost:2,fav:false,items:1},
				{id:6,img:'dora',rate:3,price:8,cost:5,fav:false,items:1}]
		let prodJSON= JSON.parse(localStorage.getItem('products'))|| [];
		let cartJSON =  JSON.parse(localStorage.getItem('cart'))|| [];
		if(prodJSON.length==0) {
			localStorage.setItem('products',JSON.stringify(prods));
		}else {
		this.products = prodJSON;
		}

cartJSON.length==0?this.cart=[]:this.cart=cartJSON;

	}
}
</script>

<style lang="scss">
.p-carousel {
	.p-carousel-content {
		.p-carousel-item {
			.car-details {
				> .p-grid {
					border: 1px solid #b3c2ca;
					border-radius: 3px;
					margin: .3em;
					text-align: center;
					padding: 2em 0 2.25em 0;
				}
			}

			.car-data {
				.car-title {
					font-weight: 700;
					font-size: 20px;
					margin-top: 24px;
				}

				.car-subtitle {
					margin: .25em 0 2em 0;
				}

				button {
					margin-left: .5em;

					&:first-child {
						margin-left: 0;
					}
				}
			}
		}
	}

	&.custom-carousel {
		.p-carousel-dot-icon  {
			width: 16px !important;
			height: 16px !important;
			border-radius: 50%;
		}
	}

	&.p-carousel-horizontal {
		.p-carousel-content {
			.p-carousel-item {
				&.p-carousel-item-start {
					.car-details {
						> .p-grid {
							margin-left: .6em;
						}
					}
				}

				&.p-carousel-item-end {
					.car-details {
						> .p-grid {
							margin-right: .6em;
						}
					}
				}
			}
		}
	}
}

/* Dark Theme such as luna-amber, luna-blue, luna-green and luna-pink */
.dark-theme {
	.p-carousel {
		.p-carousel-content {
			.p-carousel-item {
				.car-details {
					> .p-grid {
						border: 1px solid #191919;
						background-color: #323232;
					}
				}
			}
		}
	}
}
</style>