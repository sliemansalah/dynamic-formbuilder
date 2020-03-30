<template>
  <p-carousel :value="cars" 
  :numVisible="3" 
  :numScroll="1" 
  :circular="true" 
  :responsiveOptions="responsiveOptions">
	<template #header>
		<h2>Our Carousel</h2>
	</template>
    <!-- start item card -->
	<template #item="slotProps">
		<div class="car-details">
			<div class="p-grid p-nogutter">
				<div class="p-col-12">
					<img :src="'/images/car/' + slotProps.data.brand + '.png'" :alt="slotProps.data.brand" />
				</div>
				<div class="p-col-12 car-data">
					<div class="car-title">{{slotProps.data.brand}}</div>
					<div class="car-subtitle">{{slotProps.data.year}} | {{slotProps.data.color}}</div>
                    <div>
                          <el-rate  v-model="slotProps.data.rate"></el-rate>
                    </div>
                    <div>
                            <el-slider v-model="slotProps.data.slider"></el-slider>
                    </div>
				</div>
			</div>
		</div>
	</template>

</p-carousel>

</template>

<script>
export default {
data() {
		return {
			cars: [
                {brand:'audi',year:'2008',color:'blue',rate:3,slider:50},
                 {brand:'fiat',year:'2009',color:'red',rate:5,slider:70},
                 {brand:'renault',year:'2010',color:'yellow',rate:2,slider:20},
                  {brand:'bmw',year:'2006',color:'brown',rate:1,slider:12},
                   {brand:'volvo',year:'2005',color:'black',rate:2,slider:23},
                   {brand:'honda',year:'2009',color:'white',rate:4,slider:47}
            ],
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