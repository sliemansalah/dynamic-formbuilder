<template >
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
    
<script>
export default {
props:["slotProps"]
}
</script>

<style>

</style>