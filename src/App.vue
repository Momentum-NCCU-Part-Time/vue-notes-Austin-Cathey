<script setup>
import { ref } from 'vue';
import NoteList from './components/NoteList.vue'

// write getRequest to get notes from url, push to array

/* generateNotes //generates notes from userNotes

editNotes //show then PATCH edited note to api

deleteNote // DELETE note

confirmDelete //button to confirm delete*/


const userNotes = ([//delete this once get works
    {
      id: 1, "title": "Sample note", "body": "This is the body of my note",
      }
  ])
const header = ref('New Note')
const newNoteTitle = ref("")
const newNoteBody = ref("")
</script>

<template>
  <div>
    <h1>Vue Notes</h1>
    <h3> {{ header }}</h3>
    <form id="NoteForm"> <!-- style later -->
    <div class="createNoteForm">
    <input v-model="newNoteTitle" type="text" placeholder="Title"> 
    <input v-model="newNoteBody" type="text" placeholder="Body">
    <button @submit.prevent="saveNote">Save</button>
    </div>
    </form>
  </div>
  <div v-for="notess in userNotes" :key="id">
  {{ notess.title }}
    <br>
    {{ notess.body }}
</div>
  
</template>

<style scoped>
</style>
