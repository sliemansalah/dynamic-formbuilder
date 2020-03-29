<template>
    <div class="custom-tree-container">
        <div class="block">
            <button @click="addNewData" class="btn btn-success">
                New data
            </button>
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
                <template v-if="selectedData">
                    <el-button @click="append" type="success"
                        >Save As a Child</el-button
                    >
                    <el-button @click="remove" type="danger">Remove</el-button>
                </template>
            </form>
            <br /><br />

            <el-input placeholder="Filter keyword" v-model="filterText">
            </el-input>
            <br /><br />
            <el-tree
                :data="data"
                node-key="id"
                :expand-on-click-node="false"
                @node-click="handleNodeClick"
                :empty-text="'No data found ... '"
                :draggable="true"
                :accordion="false"
                :props="defaultProps"
                :default-expand-all="true"
                :filter-node-method="filterNode"
                ref="tree"
            >
            </el-tree>
        </div>
    </div>
</template>

<script>
let id = 0;

export default {
    watch: {
        filterText(val) {
            this.$refs.tree.filter(val);
        }
    },
    data() {
        return {
            selectedData: null,
            selectedNode: "",
            filterText: "",

            data: [],
            addNew: true,
            defaultProps: {
                children: "children",
                label: "label"
            },
            node: {
                id: id,
                label: null,
                children: [],
                parent: null,
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
            this.node.id = id++;
            this.node.parent = this.selectedNode.parent.id;
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
            this.node.label = this.selectedData.label;
            this.node.details.author = this.selectedData.details.author;
            this.node.details.age = this.selectedData.details.age;
        },
        addNewData() {
            this.selectedData = null;
            this.addNew = true;
            this.clearData();
        },
        saveData() {
            if (this.selectedData == null) {
                this.node.id = id++;
                this.data.push(this.node);
            } else {
                this.selectedData.label = this.node.label;
                this.selectedData.details.author = this.node.details.author;
                this.selectedData.details.age = this.node.details.age;
            }
            this.clearData();
        },
        filterNode(value, data) {
            if (!value) return true;
            return data.label.toString().toLowerCase().indexOf(value.toString().toLowerCase()) !== -1;
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
    },
    mounted() {
        this.data = [
            {
                id: 0,
                label: "Library",
                children: [
                    {
                        id: 1,
                        label: "Private Books",
                        children: [
                            {
                                id: 5,
                                label: "Vue JS",
                                children: [],
                                details: { author: "slieman", age: 26 },
                                parent: 1
                            },
                            {
                                id: 6,
                                label: "Angular JS",
                                children: [],
                                details: { author: "slieman", age: 26 },
                                parent: 1
                            },
                            {
                                id: 7,
                                label: "React JS",
                                children: [],
                                details: { author: "slieman", age: 26 },
                                parent: 1
                            }
                        ],
                        details: { author: "slieman", age: 26 },
                        parent: 0
                    },
                    {
                        id: 2,
                        label: "Public Books",
                        children: [
                            {
                                id: 3,
                                label: "Arabic",
                                children: [],
                                details: { author: "slieman", age: 26 },
                                parent: 1
                            },
                            {
                                id: 4,
                                label: "English",
                                children: [],
                                details: { author: "slieman", age: 26 },
                                parent: 1
                            }
                        ],
                        details: { author: "slieman", age: 26 },
                        parent: 0
                    }
                ],
                parent: null,
                details: { author: "slieman", age: 26 }
            }
        ];
    }
};
</script>
<style></style>
