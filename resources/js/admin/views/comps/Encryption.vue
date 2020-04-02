<template>
  <div>
      <el-input placeholder="Enter your value" v-model="val"></el-input>
      <br><br>
      <el-button type="primary" @click="encrypt()">Encrypt</el-button>
            <br><br>
      <p>Encrypt val is: </p> <br>
      <p>{{valEnc}}</p>
        <hr>
       <el-input placeholder="Enter your value" v-model="val2"></el-input>
            <br><br>
      <el-button type="success" @click="decrypt()">Decrypt</el-button>
            <br><br>
       <p>Encrypt val is: </p> <br>
      <p>{{valDec}}</p>
  </div>
</template>

<script>
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
 
export default {
    data() {
        return {
            val:'',
            valEnc:'',
            val2:'',
            valDec:''
        }
    },
    methods:{
        encrypt(){
const encryptedString = cryptr.encrypt(this.val);
 this.valEnc = encryptedString;
        },
        decrypt(){
const decryptedString = cryptr.decrypt(this.val2);
 this.valDec = decryptedString;
        }
    }
    }
</script>

<style>

</style>