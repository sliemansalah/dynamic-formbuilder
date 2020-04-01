<template>
  <div>
      <input v-validate="'required|email'" name="email" type="text">
      <span>{{ errors.first('email') }}</span>
  </div>
</template>

<script>
import ar from 'vee-validate/dist/locale/ar';
import en from 'vee-validate/dist/locale/en';
import VeeValidate, { Validator } from 'vee-validate';

export default {
mounted(){
    let lang = localStorage.getItem('lang');
    if(lang == 'arabic') {
     Validator.localize('ar', ar);
    } else {
     Validator.localize('en', en);
    }
}
}
</script>

<style>

</style>