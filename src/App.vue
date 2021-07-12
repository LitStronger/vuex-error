<template>
  <div>
    <Button type="primary">{{ name.aa.bb }}</Button>
    <Rate v-model:value="score" allow-half />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import { Button, Layout, Rate } from "ant-design-vue";
import { errorStore } from "./store/errorTest";

export default defineComponent({
  name: "App",
  components: { Button, Layout, Rate },
  setup() {
    const name = ref("lyq");
    const score = ref(3.4);
    console.log("aa");

    return {
      name,
      score,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
