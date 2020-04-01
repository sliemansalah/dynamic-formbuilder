<template>
    <form @submit.prevent="validateBeforeSubmit">
        <div class="column is-12">
            <label class="text-black fs-16">{{$t('email')}}</label>
            <p class="control has-icon has-icon-right">
                <el-input :style="errors.has('email')?'border:1px solid #DF0D1F;border-radius:5px;width:300px;':'width:300px;'" name="email" v-model="email" v-validate="'required|email'" :class="{'input': true,'text-black': errors.has('email') }" type="text" :placeholder="$t('email')"></el-input>
                <i v-show="errors.has('email')" class="fa fa-exclamation-triangle"></i>
                <span v-show="errors.has('email')" class="help text-danger">{{ errors.first('email') }}</span>
            </p>
        </div>
        <div class="column is-12">
            <label class="text-black fs-16">{{$t('name')}}</label>
            <p class="control has-icon has-icon-right">
                 <el-input :style="errors.has('name')?'border:1px solid #DF0D1F;border-radius:5px;width:300px;':'width:300px;'" name="name" v-model="name" v-validate="'required|alpha'" :class="{'input': true, 'text-black': errors.has('name') }" type="text" :placeholder="$t('name')"></el-input>
                <i v-show="errors.has('name')" class="fa fa-exclamation-triangle"></i>
                <span v-show="errors.has('name')" class="help text-danger">{{ errors.first('name') }}</span>
            </p>
        </div>
        <div class="column is-12">
            <label class="text-black fs-16">{{$t('phone')}}</label>
            <p class="control has-icon has-icon-right">
                 <el-input :style="errors.has('phone')?'border:1px solid #DF0D1F;border-radius:5px;width:300px;':'width:300px;'" name="phone" v-model="phone" v-validate="'required|numeric'" :class="{'input': true, 'text-black': errors.has('phone') }" type="text" :placeholder="$t('phone')"></el-input>
                <i v-show="errors.has('phone')" class="fa fa-exclamation-triangle"></i>
                <span v-show="errors.has('phone')" class="help text-danger">{{ errors.first('phone') }}</span>
            </p>
        </div>
        <div class="column is-12">
            <label class="text-black fs-16">{{$t('website')}}</label>
            <p class="control has-icon has-icon-right">
                 <el-input :style="errors.has('url')?'border:1px solid #DF0D1F;border-radius:5px;width:300px;':'width:300px;'" name="url" v-model="url" v-validate="'required|url'" :class="{'input': true, 'text-black': errors.has('url') }" type="text" :placeholder="$t('website')"></el-input>
                <i v-show="errors.has('url')" class="fa fa-exclamation-triangle"></i>
                <span v-show="errors.has('url')" class="help text-danger">{{ errors.first('url') }}</span>
            </p>
        </div>

        <div class="column is-12">
            <p class="control">
                <button class="button btn btn-primary" type="submit">{{$t('submit')}}</button>
            </p>
        </div>
    </form>
</template>

<script>
export default {
  name: 'form-example',
  data: () => ({
    email: '',
    name: '',
    phone: '',
    url: ''
  }),
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line
          alert(this.$t('formSubmitted'));
          return;
        }

        alert(this.$t('correctErrors'));
      });
    }
  }
};
</script>

<style>
.fs-16 {
    font-size: 16px;
}
.fa-exclamation-triangle{
    color:#DF0D1F;
}
.text-black{
    color:#333;
}
</style>