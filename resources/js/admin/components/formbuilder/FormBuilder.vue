<template>
  <div>
    <el-form ref="ruleForm" :model="formValues" :rules="runValid?rules:null">
      <div v-for="(field, key) in config"
       :key="key"
       :class="field.inline?'inline ml-15':'ml-15'">
        <i v-if="field.delete"
          class="fa fa-trash inline"
          @click="config.splice(key,1)"></i>
          <i v-if="field.update"
          class="fa fa-pen inline"
          @click="update(field)"></i>
        <label>{{ field.label }}</label>
        <component
           v-bind="field"
          :is="field.type"
          @input="updateField(field.name, $event)"
        ></component>
        </div>
      <div>
      </div>
    </el-form>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  props: ["config"],
  data() {
    return {
      runValid:false,
      formValues: {},
      rules: {
        firstname: [
          {
            required: true,
            message: "Please input First Name",
            trigger: "blur"
          },
          { min: 3, message: "Length should be at least 3", trigger: "blur" }
        ],
        lastname: [
          {
            required: true,
            message: "Please input Last Name",
            trigger: "blur"
          },
          { max: 10, message: "Length should be at most 10", trigger: "blur" }
        ],
        email: [
          {
            required: true,
            message: "Please Input email",
            trigger: "blur"
          },
          {
            type: "email",
            message: "Please input correct email address",
            trigger: ["blur", "change"]
          }
        ],
        password: [
          {
            required: true,
            pattern:
              "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})",
            message:
              "password must be characters and numbers with length 6 at least",
            trigger: "blur"
          }
        ],
        date: [
          {
            type: "date",
            required: true,
            message: "Please pick a date",
            trigger: "change"
          }
        ],
        time: [
          {
            type: "date",
            required: true,
            message: "Please pick a time",
            trigger: "change"
          }
        ],
        bestframework: [
          {
            required: true,
            message: "Please select best framework",
            trigger: "blur"
          }
        ],
        bestchannels: [
          {
            required: true,
            message: "Please select best channels",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    updateField(field, value) {
      this.formValues[field] = value;
    },
    update(data){
      this.$parent.field = data;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
          console.log(this.formValues);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  created() {
    this.config.map(f => {
      Vue.set(this.formValues, f.name, null);
    });
  }
};
</script>

<style>
.inline{
  display:inline-block;
}
.ml-15{
    margin-left:15px;
}
</style>