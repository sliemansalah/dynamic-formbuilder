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
    <el-tab-pane :label="getRateTitle" name="third">
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
                <el-button @click="sendRate" style="backgroundColor:#409Eff;color:#fff;"> Send Rate</el-button>
        </el-card>
                </div>
                <div class="col-5">
                     <div class="containter">
                    <h1 class="ml-15" style="color:green;">{{getRateValue}}</h1>
                    <p-rating class="ml-15" readonly v-model="getRateValue" :cancel="false" :stars="5"/>
           <div class="row ml-20 fs-16">
               <span class="starSpan">5 Stars</span>
                <el-slider disabled class="ml-15" style="width:200px;" :v-model="getRatePercent(5)"></el-slider>
                <span class="ml-15">{{getRatePercent(5)}}%</span>
           </div>

            <div class="row ml-20 fs-16">
               <span class="starSpan">4 Stars</span>
                <el-slider disabled class="ml-15" style="width:200px;" :v-model="getRatePercent(4)"></el-slider>
                 <span class="ml-15">{{getRatePercent(4)}}%</span>

           </div>

            <div class="row ml-20 fs-16">
               <span class="starSpan">3 Stars</span>
                <el-slider disabled class="ml-15" style="width:200px;" :v-model="getRatePercent(3)"></el-slider>
                 <span class="ml-15">{{getRatePercent(3)}}%</span>

           </div>

            <div class="row ml-20 fs-16">
               <span class="starSpan">2 Stars</span>
                <el-slider disabled class="ml-15" style="width:200px;" :v-model="getRatePercent(2)"></el-slider>
                <span class="ml-15">{{getRatePercent(2)}}%</span>

           </div>

            <div class="row ml-20 fs-16">
               <span class="starSpan">1 Star </span>
                <el-slider disabled class="ml-15" style="width:200px;" :v-model="getRatePercent(1)"></el-slider>
                <span class="ml-15">{{getRatePercent(1)}}%</span>

           </div>

          </div>
                </div>
            </div>
        </div>
    </el-tab-pane>
    <el-tab-pane label="Comments" name="fourth">

         <div class="col-7 mt-30">
                    <el-card class="box-card">
          <div class="containter">
               <div class="row">
                <h5 class="ml-15">Send Comment</h5>
           </div>
          </div>
                <br>
                <el-input type="textarea" rows="5" v-model="comment_details"></el-input>
                <br><br>
                <el-button style="backgroundColor:#409Eff;color:#fff;"> Send Comment</el-button>
        </el-card>
                </div>
    </el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
export default {
    data() {
      return {
        rates:[],
        activeName: 'first',
        color:'',
        size:'',
        rate_details:'',
        rate_val:0,
        sliderVal:{
            five:0,
            four:0,
            three:0,
            two:0,
            one:0
        },
        comment_details:'',
        
      };
    },
    computed:{
        getRateTitle(){
            let rate_val = 0;
            this.rates.forEach(r => {
                rate_val+=r.val;
            });
            if(this.rates.length >0) {
            rate_val = parseInt(rate_val/this.rates.length)
            }
            return 'Rate ' + '('+rate_val+')';
        },
         getRateValue(){
            let rate_val = 0;
            this.rates.forEach(r => {
                rate_val+=r.val;
            });
              if(this.rates.length >0) {
            rate_val = parseInt(rate_val/this.rates.length)
            }
            return rate_val;
        },
       
           },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
       getRatePercent(id){
             let rate_val = 0;
            let rate_all=0;
            this.rates.forEach(r => {
                if(r.val == id) {
                    rate_val++;
                    rate_all++;
                }else {
                    rate_all++;
                }
                
            });
            return parseInt(rate_val*100/rate_all);
        },
      sendRate() {
          let rate = {
              val:this.rate_val,
              det:this.rate_details
          }
          this.rates.push(rate);
          localStorage.setItem('rates',JSON.stringify(this.rates));
           this.$notify({
          title: 'Add Rate',
          message: 'Rate addedd successfully',
          type: 'success'
        });
        this.clearRate();
      },
      clearRate(){
          this.rate_val = 0;
          this.rate_details = ''
      }
    },
    mounted(){
        this.rates = JSON.parse(localStorage.getItem('rates')) || [];
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