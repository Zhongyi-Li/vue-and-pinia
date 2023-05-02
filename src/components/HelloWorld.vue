<script setup>
import { ref, onMounted } from "vue";
import { useUserStore } from "../store";

const store = useUserStore();

const handleChangeCounter = () => {
  store.increment();
};

onMounted(() => {
  store.fetchProductCategory();
});
</script>

<template>
  <div>
    <p>{{ store.counter }}</p>
    <p>
      ProductList: <span>{{ JSON.stringify(store.producTree) }}</span>
    </p>
    <button @click="handleChangeCounter">++</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
