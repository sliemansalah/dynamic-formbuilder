<template>
  <div>
    <h1>Create Custom Template Form Builder</h1>
    <el-select style="width:200px;" v-model="field.type" placeholder="Select">
      <el-option v-for="item in types" :key="item" :label="item" :value="item"></el-option>
    </el-select>
    <el-input v-if="field.type" placeholder="Enter name" v-model="field.name" style="width:200px;"></el-input>

    <el-input
      v-if="field.name"
      placeholder="Enter label"
      v-model="field.label"
      style="width:200px;"
    ></el-input>
    <br />
    <br />
    <el-input
      v-if="field.name"
      placeholder="Enter placeholder"
      v-model="field.placeholder"
      style="width:200px;"
    ></el-input>
    <el-input v-if="field.name" placeholder="Enter icon" v-model="field.icon" style="width:200px;"></el-input>
    <el-input
      v-if="field.name"
      placeholder="Enter width"
      v-model="field.width"
      style="width:200px;"
    ></el-input>
    <el-input v-if="field.name" placeholder="Enter size" v-model="field.size" style="width:200px;"></el-input>
    <el-checkbox v-if="field.name" v-model="field.clearable">Clearable</el-checkbox>
    <el-checkbox v-if="field.name" v-model="field.isDisabled">Disabled</el-checkbox>
    <el-checkbox v-if="field.name" v-model="field.inline">Inline</el-checkbox>
    <br><br>
    <el-button @click="add()" v-if="field.name" type="success">Create</el-button>
    <form-builder :config="fields"></form-builder>
  </div>
</template>

<script>
// import Config from '../../components/config/form.json';

export default {
  name: "DynamicForm",
  data() {
    return {
      field: {
        type: "",
        name: "",
        label: "",
        valid: "",
        placeholder: "",
        icon: "",
        size: "",
        isDisabled: false,
        clearable: false,
        inline:false,
        width: "",
        options: []
      },
      types: [
        "EInput",
        "EInputNum",
        "EDate",
        "ETime",
        "ETextarea",
        "ESwitch",
        "ECheckbox",
        "ERadio",
        "ESelect",
        "EUpload",
        "EAddMore",
      ],
      fields: [
        // {
        //     "type": "EInput",
        //     "label": "First Name",
        //     "name" :"firstname",
        //     "valid":"firstname",
        //     "placeholder":"Enter First Name",
        //     "icon":"el-icon-user-solid",
        //     "isDisabled":false,
        //     "size":"small"
        // },
        // {
        //     "type": "EInput",
        //     "label": "Last Name",
        //     "name" :"lastname",
        //     "valid" :"lastname",
        //     "placeholder":"Enter Last Name",
        //     "clearable":true,
        //     "size":"small"
        // },
        // {
        //     "type": "EInputNum",
        //     "label": "Age",
        //     "name" :"age",
        //     "valid":"age",
        //     "placeholder":"Enter Age",
        //     "clearable":true,
        //     "size":"small"
        // },
        // {
        //     "type": "EInput",
        //     "label": "Email",
        //     "name" :"email",
        //     "valid" :"email",
        //     "placeholder":"Enter Email",
        //     "clearable":false,
        //     "icon":"el-icon-message",
        //     "isDisabled":false,
        //     "size":"small"
        // },
        // {
        //     "type": "EInput",
        //     "label": "Password",
        //     "name" :"password",
        //     "valid":"password",
        //     "placeholder":"Enter Password",
        //     "clearable":true,
        //     "icon":"el-icon-key",
        //     "isPassword": true,
        //     "size":"small"
        // },
        // {
        //     "type": "EDate",
        //     "label": "Date",
        //     "name" :"date",
        //     "valid":"date",
        //     "placeholder":"Enter Date",
        //     "clearable":true,
        //     "icon":"el-icon-date"
        // },
        // {
        //     "type": "ETime",
        //     "label": "Time",
        //     "name" :"time",
        //     "valid":"time",
        //     "placeholder":"Enter Time",
        //     "clearable":true,
        //     "icon":"el-icon-time"
        // },
        // {
        //     "type": "ETextarea",
        //     "label": "Details",
        //     "name" :"details",
        //     "valid":"details",
        //     "size":"small",
        //     "placeholder":"Enter your details"
        // },
        // {
        //     "type": "ECheckbox",
        //     "label": "Do you like Vuejs?",
        //     "name" :"likeVue",
        //     "valid":"likeVue"
        // },
        // {
        //     "type": "ESwitch",
        //     "label": "Do you like AngularJs?",
        //     "name" :"likeAngular",
        //     "valid":"likeAngular",
        //     "activeColor":"#13ce66",
        //     "inActiveColor":"gray"
        // },
        // {
        //     "type": "ERadio",
        //     "label": "Best Framework",
        //     "name" :"bestframework",
        //     "valid":"bestframework",
        //     "params": {
        //         "options": [
        //             {
        //                 "value": "1",
        //                 "label": "VueJS"
        //             },
        //             {
        //                 "value": "2",
        //                 "label": "ReactJS"
        //             },
        //             {
        //                 "value": "3",
        //                 "label": "AngularJS"
        //             }
        //         ]
        //     }
        // },
        // {
        //     "type": "ESelect",
        //     "label": "Best Channels",
        //     "name" :"bestchannels",
        //     "valid":"bestchannels",
        //     "placeholder":"Select best channels",
        //     "clearable":true,
        //     "multiple":true,
        //     "search":true,
        //     "size":"small",
        //     "params": {
        //         "options": [
        //             {
        //                 "value": "1",
        //                 "label": "Maxiumeliano"
        //             },
        //             {
        //                 "value": "2",
        //                 "label": "ElzeroSchool"
        //             },
        //             {
        //                 "value": "3",
        //                 "label": "KhaledElsadani"
        //             }
        //         ]
        //     }
        // },
        // {
        //     "type": "EUpload",
        //     "label": "Upload file",
        //     "name" :"upload",
        //     "drag":true,
        //     "multiple":true,
        //     "autoUpload":false,
        //     "action":"post action here.."
        // },
        // {
        //     "type": "EAddMore",
        //     "label": "Add More",
        //     "name" :"addmore",
        //     "size":"small",
        //     "width":"300px",
        //     "placeholder":"Enter Name",
        //     "placeholder2":"Enter Age"
        // }
      ]
    };
  },
  methods: {
    add() {
      this.fields.push(this.field);
      this.field = {
        type: "",
        name: "",
        label: "",
        valid: "",
        placeholder: "",
        icon: "",
        size: "",
        isDisabled: false,
        clearable: false,
        inline:false,
        width: "",
        options: []
      };
    }
  },
  mounted() {
    this.fields
      .push
      //   {
      //     "type": "EInput",
      //     "label": "First Name",
      //     "name" :"firstname",
      //     "valid":"firstname",
      //     "placeholder":"Enter First Name",
      //     "icon":"el-icon-user-solid",
      //     "isDisabled":false,
      //     "size":"small"
      // },
      ();
  }
  // computed:{
  //     formConfig(){
  //         return Config;
  //     }
  // },
};
</script>

<style>
</style>