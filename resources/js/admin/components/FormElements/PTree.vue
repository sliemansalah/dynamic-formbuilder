9<template>
    <div>
        <div class="row">
            <div class="col-md-4">
                <div v-if="nodes.length > 0">
                    <Tree
                        :value="nodes"
                        :filter="true"
                        :selectionKeys.sync="selectedKey"
                        selectionMode="single"
                        :metaKeySelection="true"
                        @node-select="onNodeSelect"
                    >
                        <template #default="slotProps">
                            <b>{{ slotProps.node.label }}</b>
                        </template>
                        <template #url="slotProps">
                            <a :href="slotProps.node.data">{{
                                slotProps.node.label
                            }}</a>
                        </template>
                    </Tree>
                </div>
                <div v-else>
                    <span class="text-danger">No data of tree found</span>
                </div>
            </div>
            <div class="col-md-8">
                <el-input
                    style="width:200px;"
                    v-model="node.label"
                    placeholder="name of node"
                ></el-input>
                <el-input
                    style="width:200px;"
                    v-model="node.details.name"
                    placeholder="Enter your name"
                ></el-input>
                <el-input
                    style="width:200px;"
                    v-model="node.details.age"
                    placeholder="Enter Age"
                ></el-input>
                <i @click="addRoot()" class="fa fa-plus"></i>
                <i v-if="!isSelected" class="fa fa-trash"></i>
            </div>
        </div>
    </div>
</template>

<script>
let key = 0;
export default {
    data() {
        return {
            isSelected: true,
            selectedKey: null,
            node: {
                key: key,
                label: null,
                details: {
                    name: null,
                    age: null
                }
            },
            nodes: []
        };
    },
    methods: {
        addRoot() {
            this.nodes.push(this.node);
            key++;
            this.node = {
                key: key,
                label: null,
                details: {
                    name: null,
                    age: null
                }
            };
        },
        onNodeSelect(node) {
            this.isSelected = false;
            // eslint-disable-next-line no-console
            console.log(node);
            this.node = node;
        }
    }
};
</script>

<style></style>
