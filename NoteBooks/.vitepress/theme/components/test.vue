<!--
 * @Author: CPS
 * @email: 373704015@qq.com
 * @Date: 2022-08-31 09:02:38.813844
 * @Last Modified by: CPS
 * @Last Modified time: 2022-08-31 09:02:38.813844
 * @Filename test.vue
 * @Description: 功能描述
-->

<template>
  <div class="cps-test">test {{ val }}</div>
  <button @click="t">测试按钮</button>
</template>

<script lang="ts" setup>
import { ref, defineComponent, onMounted } from "vue";

onMounted(() => {
  console.log("test: onMounted");
});

const val = ref("ccvb");

function t() {
  val.value += 1;
}
</script>

<style scoped>
.cps-test {
  color: #ee24dc;
}
</style>
