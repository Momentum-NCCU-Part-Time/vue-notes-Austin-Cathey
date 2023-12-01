<script setup>
import { ref } from 'vue';
const url = 'http://localhost:3000/notes/'


const notes = [
    {
      id: 1,
      "title": "Sample note",
      "body": "This is the body of my note",
      
    }
  ]
const header = ref('New Note')
const newNoteTitle = ref("")
const newNoteBody = ref("")
</script>

<template>
  <div>
    <h1>Vue Notes</h1>
    <h3> {{ header }}</h3>
    <form>
    <div class="createNoteForm">
    <input v-model="newNoteTitle" type="text" placeholder="Title"> 
    <input v-model="newNoteBody" type="text" placeholder="Body">
    <button @submit.prevent="saveNote">Save</button>
    </div>
    </form>
  </div>
  <div>
    <div v-for="note of notes" :key="id">
    {{ note.title }}
    <br>
    {{ note.body }}
    </div>
  </div>
</template>

<style scoped>
</style>
