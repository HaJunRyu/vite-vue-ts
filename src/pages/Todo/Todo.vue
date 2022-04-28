<template>
  <div class="todoLayout">
    <Filter></Filter>
    <ul>
      <TodoItem
        v-for="todo in todos"
        :todo="todo"
        :key="todo.id"
        @handle-create-todo="handleCreateTodo"
      />
    </ul>
    <TodoCreator />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { Filter, TodoItem, TodoCreator } from 'components/index';

export interface Todo {
  id: number;
  title: string;
  done: boolean;
}

const todos = reactive<Todo[]>([]);

const handleCreateTodo = (todoValue: string) => {
  console.log(todoValue);
};
</script>

<style src="./todo.scss" scoped />
