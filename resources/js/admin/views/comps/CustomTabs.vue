<template>
  <div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="Overview" name="first">
        <p>
            Handcrafted pen in rose wood,
             comes with a handcrafted box of Maronite leather and German-made inks
        </p>

        <!-- <p>
            قلم مصنوع يدويًا من خشب الورد،
             يأتي مع صندوق مصنع يدويًا من الجلد الماروني وأحبار ألمانية الصنع
        </p> -->
    </el-tab-pane>
    <el-tab-pane label="Features and advantages" name="second">
        <el-input placeholder="red" v-model="color">
    <template slot="prepend">Color: </template>
  </el-input>
  <el-input placeholder="large" v-model="size">
    <template slot="prepend">Size:</template>
  </el-input>
    </el-tab-pane>
    <el-tab-pane :label="'Rate (0)'" name="third">
        <div class="container mt-30">
            <div class="row">
                <div class="col-7">
                    <el-card class="box-card">
          <div class="containter">
               <div class="row">
                <h5 class="ml-15">Send Rate</h5>
                <p-rating class="ml-15" v-model="rate_val" :cancel="false" :stars="5"/>
           </div>
          </div>
                <br>
                <el-input type="textarea" rows="5" v-model="rate_details"></el-input>
                <br><br>
                <el-button style="backgroundColor:#409Eff;color:#fff;"> Send Rate</el-button>
        </el-card>
                </div>
                <div class="col-5">
                     <div class="containter">
                    <h1 class="ml-15" style="color:green;">0</h1>
                    <p-rating class="ml-15" readonly v-model="getRateVal" :cancel="false" :stars="5"/>
           <div class="row ml-20 fs-16">
               <span class="starSpan">5 Stars</span>
                <el-slider disabled class="ml-15" style="width:200px;" v-model="sliderVal.five"></el-slider>
                <span class="ml-15">{{sliderVal.five}}%</span>
           </div>

            <div class="row ml-20 fs-16">
               <span class="starSpan">4 Stars</span>
                <el-slider disabled class="ml-15" style="width:200px;" v-model="sliderVal.four"></el-slider>
                 <span class="ml-15">{{sliderVal.four}}%</span>

           </div>

            <div class="row ml-20 fs-16">
               <span class="starSpan">3 Stars</span>
                <el-slider disabled class="ml-15" style="width:200px;" v-model="sliderVal.three"></el-slider>
                 <span class="ml-15">{{sliderVal.three}}%</span>

           </div>

            <div class="row ml-20 fs-16">
               <span class="starSpan">2 Stars</span>
                <el-slider disabled class="ml-15" style="width:200px;" v-model="sliderVal.two"></el-slider>
                <span class="ml-15">{{sliderVal.two}}%</span>

           </div>

            <div class="row ml-20 fs-16">
               <span class="starSpan">1 Star </span>
                <el-slider disabled class="ml-15" style="width:200px;" v-model="sliderVal.one"></el-slider>
                <span class="ml-15">{{sliderVal.one}}%</span>

           </div>

          </div>
                </div>
            </div>
        </div>
    </el-tab-pane>
    <el-tab-pane label="Comments" name="fourth">Task</el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
export default {
    data() {
      return {
        activeName: 'first',
        color:'',
        size:'',
        rate_details:'',
        rate_val:0,
        getRateVal:0,
        sliderVal:{
            five:0,
            four:0,
            three:0,
            two:0,
            one:0
        }
        
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style scope>
.el-input-group__prepend{
    width: 80px !important;
}
.ml-15 {
    margin-left: 15px;
}
.ml-20 {
    margin-left: 20px;
}
.fs-16 {
    font-size: 16px;
}
.mt-30{margin-top: 30px;}
.p-rating-icon {
    color: #409EFF !important;
}
.starSpan {
    padding-top: 7px;
    width:60px
}
</style>