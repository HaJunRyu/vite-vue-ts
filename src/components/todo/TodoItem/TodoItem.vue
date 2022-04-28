<template>
  <div>{{ todo.title }}</div>
  <div>{{ todo.done }}</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Todo } from 'pages/Todo/Todo.vue';

defineProps<{ todo: Todo }>();
</script>

<style scoped></style>
