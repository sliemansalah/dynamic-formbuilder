<template>
  <div>
    <h3 class="m-subheader__title">{{$t('users')}}</h3>
       <vue-good-table
      :columns="columns"
      :rows="rows"
      styleClass="vgt-table striped bordered condensed"
      :search-options="search"
      :pagination-options="page"
       @on-cell-click="onCellClick"
    >
    
      <div @click="add" slot="table-actions">
        <v-header addbtn="Add User"></v-header>
      </div>

       <template slot="table-row" slot-scope="props">
        <component v-if="props.column.component" 
                   :is="tableRowComponent(props.column)"
                   :vprops="props"
                   @details="details"
                    >
                   </component>
        </template>
    </vue-good-table>
    
    <image-preview 
    :displayModal="displayModal"
    :imgLoading="imgLoading"
    @close="displayModal=false;"
    ></image-preview>
  </div>
</template>
<script>
import axios from "axios";
var _ = require("lodash");
export default {
  computed : {
  
  },
  data() {
    
    return {
      displayModal:false,
      imgLoading:'',
      filterShown:false,
      search: {
        enabled: true,
        trigger: "enter",
        skipDiacritics: true,
        placeholder: "Search this table"
      },
      page: {
        enabled: true,
        mode: "pages",
        perPage: 4,
        position: "down",
        perPageDropdown: [2, 4, 6],
        dropdownAllowAll: false,
        setCurrentPage: 1,
        nextLabel: "Next",
        prevLabel: "Prev",
        rowsPerPageLabel: "Rows per page",
        ofLabel: "Of",
        pageLabel: "Page", // for 'pages' mode
        allLabel: "All"
      },
      customerFormStatus: "add",
      customers: [],
      customerID: null,
      local: false,
      searchQuery: "",
      columns: [
        {
          label: "ID",
          field: "id",
          type: "number",
        },
          {
          label: "Image",
          html: true,
          field:this.retrieveImage,
        },
        {
          label: "Email",
          field: "email",
        },
        {
          label: "First Name",
          field: "first_name",
        },
        {
          label: "Last Name",
          field: "last_name",
        },
        {
          label: "Actions",
          field: "actions",
          component : "v-action2"
        }
      ],
      rows: [],
       search: {
        enabled: true,
        trigger: "enter",
        skipDiacritics: true,
        placeholder: "Search this table"
      },
      sort: {
        enabled: true,
        initialSortBy: [
          { field: "name", type: "asc" },
          { field: "age", type: "desc" }
        ]
      },
    };
  },
  methods: {
    getUsers() {
      axios.get("https://reqres.in/api/users").then(res=>{
        this.rows = res.data.data;
      })
    },
     tableRowComponent (column){
      return column.component
    },
    open(data) {
      this.imgLoading = data.avatar;
      this.displayModal = true;
    },
    onCellClick(params){
      if(params.column.label == 'Image') {
      this.open(params.row)
      }
    },
    retrieveImage(){
      return `<a>
              <img width="40px;"
              src="/images/eye.png">  
              </img>
              </a>`;
    },
    add(){
      alert('No api for add user')
    },
    details(row){
      this.$router.push('/users/'+row.id+'/details');
    },
  },
  mounted() {
    this.getUsers();    
  },
};
</script>

<style>
.custom-btn {
  padding: 7px 22px;
}
.w-200{
  width: 250px !important;
}
</style>
