<script setup>
import { ref } from 'vue';
import NoteList from './components/NoteList.vue'

// write getRequest to get notes from url, push to array

/* generateNotes //generates notes from userNotes

editNotes //show then PATCH edited note to api

deleteNote // DELETE note

confirmDelete //button to confirm delete*/



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
  
  <NoteList />
</template>

<style scoped>
</style>
