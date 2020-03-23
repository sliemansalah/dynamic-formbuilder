<template>
  <div>
    <h1>Create Custom Template Form Builder</h1>
    <!-- <el-button @click="loadTemplate()">Load Template</el-button> -->
    <el-input
      v-if="field.type=='' && !tempStart"
      v-model="tempName"
      class="w-200"
      placeholder="Enter template name "
    ></el-input>
    <el-button
      v-if="field.type=='' && tempName && !tempStart"
      @click="tempStart=true;"
      type="primary"
      class="w-200"
    >create new template</el-button>
    <el-select v-if="tempStart" class="w-200" v-model="field.type" placeholder="Select">
      <el-option v-for="item in types" :key="item" :label="item" :value="item"></el-option>
    </el-select>
    <el-input v-if="field.type" placeholder="Enter name" v-model="field.name" class="w-200"></el-input>

    <el-input v-if="field.name" placeholder="Enter label" v-model="field.label" class="w-200"></el-input>
    <br />
    <br />
    <el-input
      v-if="field.name"
      placeholder="Enter placeholder"
      v-model="field.placeholder"
      class="w-200"
    ></el-input>
    <el-input v-if="field.name" placeholder="Enter icon" v-model="field.icon" class="w-200"></el-input>
    <el-input v-if="field.name" placeholder="Enter width" v-model="field.width" class="w-200"></el-input>
    <el-input v-if="field.name" placeholder="Enter size" v-model="field.size" class="w-200"></el-input>
    <br />
    <br />
    <el-input
      v-if="field.type=='ESwitch'"
      placeholder="Enter Active Color"
      v-model="field.activeColor"
      class="w-200"
    ></el-input>
    <el-input
      v-if="field.type=='ESwitch'"
      placeholder="Enter Inactive Color"
      v-model="field.inActiveColor"
      class="w-200"
    ></el-input>
    <el-checkbox v-if="field.name" v-model="field.clearable">Clearable</el-checkbox>
    <el-checkbox v-if="field.name" v-model="field.isDisabled">Disabled</el-checkbox>
    <el-checkbox v-if="field.name" v-model="field.inline">Inline</el-checkbox>
    <el-checkbox v-if="field.name" v-model="field.multiple">Multiple</el-checkbox>
    <el-checkbox v-if="field.name" v-model="field.search">Search</el-checkbox>

    <br />
    <br />

    <div v-if="field.type=='ESelect'">
      <el-card>
        <h3>Select Options</h3>
        <i @click="addNewSelectOption()" class="fa fa-plus"></i>
        <br />
        <br />
        <div class="mt-15" v-for="(item1,key) in selectOptions" :key="key">
          <el-input
            placeholder="Enter Option Value"
            v-model="selectOptions[key].value"
            class="w-200"
          ></el-input>
          <el-input
            placeholder="Enter Label Value"
            v-model="selectOptions[key].label"
            class="w-200"
          ></el-input>
          <i @click="selectOptions.splice(key,1)" class="fa fa-trash"></i>
        </div>
      </el-card>
    </div>
    <br />
    <br />
    <el-button @click="add()" v-if="field.name" type="success">Create</el-button>
    <el-button @click="clear()" v-if="field.name" type="danger">Update and Clear</el-button>
    <br />
    <br />
    <h3 v-if="fields.length>0">This is your template</h3>
    <form-builder :config="fields"></form-builder>
    <div>
      <el-button v-if="fields.length>0" @click="saveTemplate()" type="primary">Save Template</el-button>
    </div>
  </div>
</template>

<script>
// import Config from '../../components/config/form.json';

export default {
  name: "DynamicForm",
  data() {
    return {
      tempName: "",
      tempStart: false,
      selectOptions:[],
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
        inline: false,
        multiple:false,
        search:false,
        width: "",
        activeColor: "",
        inActiveColor: "",
        params: { options: []},
        delete: true,
        update: true,
        options: [],
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
        "EAddMore"
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
      this.field.params.options =  this.selectOptions;
      this.fields.push(this.field);
      this.clear();
    },
    async saveTemplate() {
      await this.filterTemplate();
      localStorage.setItem(this.tempName, JSON.stringify(this.fields));
    },
    loadTemplate() {
      this.fields = JSON.parse(localStorage.getItem(this.tempName));
      this.fields.forEach(d => {
        d.delete = true;
        d.update = true;
      });
    },
    filterTemplate() {
      this.fields.forEach(d => {
        delete d.delete;
        delete d.update;
      });
    },
    clear() {
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
        inline: false,
        multiple:false,
        search:false,
        width: "",
        activeColor: "",
        inActiveColor: "",
        params: { options: []},
        delete: true,
        update: true,
        options: []
      };
    },
    addNewSelectOption(){
       this.selectOptions.push(
      {value:'',label:''}
    )
    }
  },
  mounted(){
    this.addNewSelectOption();
  }
};
</script>

<style>
.w-200 {
  width: 200px;
}
.mt-15 {
  margin-top: 15px;
}
</style>