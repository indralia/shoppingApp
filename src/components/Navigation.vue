<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <nav>
    <div class="logo">Logo</div>
    <div>
      <ul class="optionList">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/display">Display</router-link></li>
        <li><router-link to="/dataEntry">Data Entry</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.optionList{
  list-style-type: none;
  display: flex;
  gap : 15px;
}
nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
</style>
