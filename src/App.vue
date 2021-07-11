<template>
  <div>
    <Button type="primary">aa</Button>
    <Rate v-model:value="score" allow-half />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import { Button, Layout, Rate } from "ant-design-vue";

export default defineComponent({
  name: "App",
  components: { Button, Layout, Rate },
  setup() {
    const name = ref("lyq");
    const score = ref(3.4);
    const data = reactive({
      sku: [
        {
          period: "1day",
          price: "10",
        },
        {
          period: "2day",
          price: "15",
        },
      ],
    });
    return {
      name,
      data,
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
