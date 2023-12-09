<script setup>
import {ref} from "vue"
import NoteList from "./NoteList.vue";

const deleteNote = (noteId) => {
    fetch("http://localhost:3000/notes/", {
    method: 'DELETE',
    headers: { "Content-Type": "application/json"},
})
.then((res) => res.json())
.then((data) => console.log(data)); 
};

/* const confirmDelete = ref(false) */

/* const removeNote = (noteId) => {
    deleteNote(noteId).then(() => ) */


</script>

<template>
<div> 
<button>Edit</button>
<button @click="deleteNote">Delete</button>
</div>

</template>