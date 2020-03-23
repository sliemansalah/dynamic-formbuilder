<template>
  <div>
    <el-form-item :prop="valid">
      <el-select
        :style="inputStyle"
        :filterable="search"
        :size="size"
        :multiple="multiple"
        v-model="selected"
        :clearable="clearable"
        :label="name"
        :placeholder="placeholder"
        @change="$emit('input',selected)"
      >
        <el-option
          v-for="(option,key) in options"
          :key="key"
          :label="option.label"
          :value="option.value"
        ></el-option>
      </el-select>
    </el-form-item>
  </div>
</template>

<script>
export default {
  props: [
    "name",
    "params",
    "valid",
    "placeholder",
    "clearable",
    "multiple",
    "size",
    "search",
    "width",
    "inline"
  ],
  data() {
    return {
      selected: ""
    };
  },
  computed: {
    options() {
      return this.params.options;
    },
    inputStyle() {
      return {
        width: this.width
      };
    }
  }
};
</script>

<style>
</style>