<template>
    <div class="custom-tree-container">
        <div class="block">
            <button @click="addNewData" class="btn btn-success">
                New data
            </button>
            <i @click="append" class="fa fa-plus"></i>
            <i @click="remove" class="fa fa-trash"></i>
            <br /><br />
            <form v-if="addNew">
                <el-input
                    style="width:200px;"
                    v-model="node.label"
                    placeholder="Enter Label"
                ></el-input>
                <el-input
                    style="width:200px;"
                    v-model="node.details.author"
                    placeholder="Enter author name"
                ></el-input>
                <el-input-number
                    style="width:200px;"
                    v-model="node.details.age"
                    placeholder="Enter your age"
                ></el-input-number>
                <el-button @click="saveData" type="primary">
                    <span v-if="!selectedData">Save</span>
                    <span v-else>Update</span>
                </el-button>
            </form>
            <br /><br />

            <el-tree
                :data="data"
                node-key="id"
                :expand-on-click-node="false"
                @node-click="handleNodeClick"
                :empty-text="'No data found ... '"
                ref="tree"
            >
            </el-tree>
        </div>
    </div>
</template>

<script>
let id = 0;

export default {
    data() {
        return {
            selectedData: null,
            selectedNode: "",
            data: [],
            addNew: true,
            node: {
                id: id,
                label: null,
                children: [],
                details: {
                    author: null,
                    age: null
                }
            }
        };
    },

    methods: {
        append() {
            let data = this.selectedData;
            ++id;
            this.node.id = id;
            const newChild = this.node;
            if (!data.children) {
                this.$set(data, "children", []);
            }
            data.children.push(newChild);
            this.clearData();
        },

        remove() {
            let node = this.selectedNode;
            let data = this.selectedData;
            const parent = node.parent;
            const children = parent.data.children || parent.data;
            const index = children.findIndex(d => d.id === data.id);
            children.splice(index, 1);
        },
        handleNodeClick(data, node) {
            this.selectedData = data;
            this.selectedNode = node;
        },
        addNewData() {
            this.selectedData = null;
            this.addNew = true;
        },
        saveData() {
            if (this.selectedData == null) {
                ++id;
                this.node.id = id;
                this.data.push(this.node);
                this.clearData();
            } else {
                // update me
                // eslint-disable-next-line no-console
                // console.log(this.$refs.tree);
            }
        },
        clearData() {
            this.node = {
                id: id,
                label: null,
                children: [],
                details: {
                    author: null,
                    age: null
                }
            };
        }
    }
};
</script>
<style></style>
