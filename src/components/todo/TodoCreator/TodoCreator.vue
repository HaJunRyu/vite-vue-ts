<template>
  <input :value="todoInputValue" type="text" @input="handleChangeTodoInput" />
  <button type="button" @click="$emit.handleCreateTodo">추가</button>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const todoInputValue = ref('');

const handleChangeTodoInput = (event: InputEvent) => {
  todoInputValue.value = (event.target as HTMLInputElement).value;
};

defineEmits<{
  (e: 'handleCreateTodo', todoValue: string): void;
}>();
</script>

<style scoped></style>
