<template>
  <div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane :label="$t('overview')" name="1">
        <p style="color:#333;font-weight:bold;" class="fs-16 mt-30">
           {{$t('overviewData')}}
        </p>
    </el-tab-pane>
    <el-tab-pane :label="$t('featuresAndAdvantages')" name="2">
        <el-input class="mt-30" :placeholder="$t('red')" v-model="color">
    <template slot="prepend">{{$t('color')}} : </template>
  </el-input>
  <el-input :placeholder="$t('large')" v-model="size">
    <template slot="prepend">{{$t('size')}} :</template>
  </el-input>
    </el-tab-pane>
    <el-tab-pane :label="getRateTitle" name="3">
        <div class="container mt-30">
            <div class="row">
                <div class="col-7">
                    <el-card class="box-card">
          <div class="containter">
               <div class="row">
                <h5 :class="lang=='arabic'? 'mr-15' : 'ml-15'">{{$t('sendRate')}}</h5>
                <p-rating class="ml-15" v-model="rate_val" :cancel="false" :stars="5"/>
           </div>
          </div>
                <br>
                <el-input type="textarea" rows="5" v-model="rate_details"></el-input>
                <br><br>
                <el-button @click="sendRate" style="backgroundColor:#409Eff;color:#fff;"> {{$t('sendRate')}} </el-button>
        </el-card>
                </div>
                <div class="col-5">
                     <div class="containter">
                    <h1 :class="lang=='arabic'? 'mr-15' : 'ml-15'" style="color:green;">{{getRateValue}}</h1>
                    <p-rating :class="lang=='arabic'? '' : 'ml-15'" readonly v-model="getRateValue" :cancel="false" :stars="5"/>
           <div :class="lang=='arabic'? 'row fs-16' : 'row ml-20 fs-16'">
               <span class="starSpan">{{$t('stars5')}}</span>
                <el-slider disabled :class="lang=='arabic'? 'mr-15 w-200' : 'ml-15 w-200'" :value="getRatePercent(5)"></el-slider>
                <span :class="lang=='arabic'? 'mr-15' : 'ml-15'">{{getRatePercent(5)}}%</span>
           </div>

            <div :class="lang=='arabic'? 'row fs-16' : 'row ml-20 fs-16'">
               <span class="starSpan">{{$t('stars4')}}</span>
                <el-slider disabled :class="lang=='arabic'? 'mr-15 w-200' : 'ml-15 w-200'" :value="getRatePercent(4)"></el-slider>
                 <span :class="lang=='arabic'? 'mr-15' : 'ml-15'">{{getRatePercent(4)}}%</span>

           </div>

            <div :class="lang=='arabic'? 'row fs-16' : 'row ml-20 fs-16'">
               <span class="starSpan">{{$t('stars3')}}</span>
                <el-slider disabled :class="lang=='arabic'? 'mr-15 w-200' : 'ml-15 w-200'" :value="getRatePercent(3)"></el-slider>
                 <span :class="lang=='arabic'? 'mr-15' : 'ml-15'">{{getRatePercent(3)}}%</span>

           </div>

            <div :class="lang=='arabic'? 'row fs-16' : 'row ml-20 fs-16'">
               <span class="starSpan">{{$t('stars2')}}</span>
                <el-slider disabled :class="lang=='arabic'? 'mr-15 w-200' : 'ml-15 w-200'" :value="getRatePercent(2)"></el-slider>
                <span :class="lang=='arabic'? 'mr-15' : 'ml-15'">{{getRatePercent(2)}}%</span>

           </div>

            <div :class="lang=='arabic'? 'row fs-16' : 'row ml-20 fs-16'">
               <span class="starSpan">{{$t('stars5')}} </span>
                <el-slider disabled :class="lang=='arabic'? 'mr-15 w-200' : 'ml-15 w-200'" :value="getRatePercent(1)"></el-slider>
                <span :class="lang=='arabic'? 'mr-15' : 'ml-15'">{{getRatePercent(1)}}%</span>

           </div>

          </div>
                </div>
            </div>
        </div>
    </el-tab-pane>
    <el-tab-pane :label="$t('comments')" name="4">

         <div class="col-7 mt-30">
                    <el-card class="box-card">
          <div class="containter">
               <div class="row">
                <h5 :class="lang=='arabic'? 'mr-15' : 'ml-15'">{{ $t('sendComments') }}</h5>
           </div>
          </div>
                <br>
                <el-input type="textarea" rows="5" v-model="comment_details"></el-input>
                <br><br>
                <el-button style="backgroundColor:#409Eff;color:#fff;"> {{ $t('sendComment')}}</el-button>
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
        lang:'',
        rates:[],
        activeName: 'first',
        selectedTab:1,
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
            return this.$t('rate') + ' ('+rate_val+')';
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
        this.selectedTab = parseInt(tab.name);
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
            if(this.rates.length > 0) {
                return parseInt(rate_val*100/rate_all);
            } else {
                return 0;
            }
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
      },
      clear(y){
        y[0].classList.remove('pr1');
        y[0].classList.remove('pr2');
        y[0].classList.remove('pr3');
        y[0].classList.remove('pr4');
      }
    },
    mounted(){
    this.lang = localStorage.getItem('lang');
    this.rates = JSON.parse(localStorage.getItem('rates')) || [];
    if(this.lang == 'arabic') {
      let x = document.getElementsByClassName('el-tabs__nav');
      for (var i = 0; i < x.length; i++) {
         x[i].classList.add('fr');
        }
        let y =  document.getElementsByClassName('el-tabs__active-bar is-top');
        this.clear(y);
        y[0].classList.add('pr'+this.selectedTab);
    }else {
      let x = document.getElementsByClassName('el-tabs__nav');
      for (var i = 0; i < x.length; i++) {
         x[i].classList.remove('fr');
        }
    }
    },
    updated(){
    this.lang = localStorage.getItem('lang');
     if(this.lang == 'arabic') {
      let x = document.getElementsByClassName('el-tabs__nav');
      for (var i = 0; i < x.length; i++) {
         x[i].classList.add('fr');
        }
          let y =  document.getElementsByClassName('el-tabs__active-bar is-top');
          this.clear(y);
        y[0].classList.add('pr'+this.selectedTab);
    }else {
      let x = document.getElementsByClassName('el-tabs__nav');
      for (var i = 0; i < x.length; i++) {
         x[i].classList.remove('fr');
        }
    }
    }
  };
</script>

<style scope>
.el-input-group__prepend{
    width: 90px !important;
}
.ml-15 {
    margin-left: 15px;
}
.ml-20 {
    margin-left: 20px;
}

.mr-15 {
    margin-right: 15px;
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
.fr{float:right !important}
.w-200{width: 200px;}

.pr1{right: 18px;}
.pr2{right: 170px;}
.pr3{right: 430px;}
.pr4{right: 585px;}

</style>