<template>
    <div>
        <el-input
            style="width:200px;"
            placeholder="Filter keyword"
            v-model="filterText"
        >
        </el-input>
        <br /><br />
        <div class="row">
            <div class="col-lg-4">
                <el-tree
                    style="width:200px;"
                    class="filter-tree"
                    :data="data"
                    :props="defaultProps"
                    :show-checkbox="false"
                    :default-expand-all="true"
                    :expand-on-click-node="false"
                    :filter-node-method="filterNode"
                    draggable
                    @node-click="handleNodeClick"
                    ref="tree"
                >
                </el-tree>
            </div>
            <div slot-scope="{ node, data }" class="col-lg-8">
                <el-input
                    style="width:200px;"
                    v-model="tree.node"
                    placeholder="Add Tree Node"
                ></el-input>
                <i @click="addRoot" class="fa fa-plus"></i>
                <i @click="remove(node, data)" class="fa fa-trash"></i>
                <i @click="addChild" class="fa fa-plus"></i>
                <i @click="update" class="fa fa-pen"></i>
            </div>
        </div>
    </div>
</template>

<script>
  let id =0;
export default {
   watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      }
   },
  props: [],
  data() {
    return {
     filterText: '',
     tree:{
       node:'',
     },
      selectedData : null,
     defaultProps: {
          children: 'children',
          label: 'label'
        },
        data:[]
    };
  },
  methods: {
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
      handleNodeClick(data) {
        this.selectedData = data;
        // eslint-disable-next-line no-console
        console.log(this.selectedData);
        this.tree.node = data.label;
      },
      addRoot(){
        let root = {
          id:id++,
          label:this.tree.node
        }
        this.data.push(root);
      },
      append(data) {
        const newChild = { id: id++, label: this.tree.node, children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },
      // remove(){
      //   // eslint-disable-next-line no-console
      //   // console.log(this.data);
      //   // // eslint-disable-next-line no-console
      //   // console.log(this.selectedData);
      //   // this.selectedData.children = [];
      //   let i = this.data.findIndex(e=>e.id == this.selectedData.id);
      //   // eslint-disable-next-line no-console
      //   console.log(i);
      //   // eslint-disable-next-line no-console
      //   console.log(this.data);
      //   if(i!== -1) this.data.splice(i,1);
      // },
       remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },
      addChild() {
        let data = this.selectedData;
      const newChild = { id: id++, label: this.tree.node, children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },
      update() {
        
      }
    },

    mounted() {
      // let parentNode = {
      //   id:1,
      //   label:'Root'
      // }
      // this.data.push(parentNode)
      //       this.data.push(parentNode)

    }
};
</script>

<style></style>
