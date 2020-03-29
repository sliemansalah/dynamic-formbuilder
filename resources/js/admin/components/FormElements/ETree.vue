<template>
  <div>
    <el-input
  placeholder="Filter keyword"
  v-model="filterText">
</el-input>
<br><br>
<div class="row">
  <div class="col-lg-4">
<el-tree
style="width:200px;"
  class="filter-tree"
  :data="data"
  :props="defaultProps"
  show-checkbox
  default-expand-all
   :expand-on-click-node="false"
  :filter-node-method="filterNode"
   draggable
  :allow-drop="allowDrop"
  :allow-drag="allowDrag"
  ref="tree">
   <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
         <span>
          <i @click="append(data)" class="fa fa-plus"></i>
        </span>
        <span>
          <i @click="remove(node,data)" class="fa fa-trash"></i>
        </span>
      </span>
</el-tree>
  </div>
  <div class="col-lg-8">
<el-input style="width:200px;" v-model="tree.node" placeholder="Add Tree Node"></el-input>
<i @click="addRoot" class="fa fa-plus"></i>
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
     
     defaultProps: {
          children: 'children',
          label: 'label'
        },
        data:[]
        // data: [{
        //   id: 1,
        //   label: 'Level one 1',
        //   children: [{
        //     id: 4,
        //     label: 'Level two 1-1',
        //   }]
        // }]
    };
  },
  methods: {
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
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
      remove(node, data){
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },
      allowDrop(draggingNode, dropNode, type) {
        if (dropNode.data.label === 'Level two 3-1') {
          return type !== 'inner';
        } else {
          return true;
        }
      },
      allowDrag(draggingNode) {
        return draggingNode.data.label.indexOf('Level three 3-1-1') === -1;
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

<style>
</style>