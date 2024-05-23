<!--
<template></template>：模版部分，生成HTML代码。模版部分需要一对根标签，一般是div。
<script></script>：控制模版的数据来源和行为
<style></style>：控制CSS样式
-->
<template>
  <div>
    <element-view></element-view>
  </div>
</template>

<script>
import ElementView from "./views/element/ElementView.vue";

export default {
  components: {
    ElementView
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style>

</style>