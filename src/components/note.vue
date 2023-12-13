<script setup>
import { ref } from "vue";
</script>

<template>
    <div class="noteCard" v-for="note in notes" :key="note.id">
      <h4>{{ note.title }}</h4>
      <br />
      {{ note.body }}
      </div>
</template>