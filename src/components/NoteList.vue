<script setup>
import { ref } from "vue";
import NewNote from "./NewNote.vue";
import EditDelete from "./EditDelete.vue";


const notes = ref([]);
//GET
fetch("http://localhost:3000/notes/", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
})
.then((res) => res.json())
.then((data) => (notes.value = data));


/* const addNewNote = (note) => {
  notes.value = [...notes.value, note];
}; */

/* const removeDeletedNote = (noteId) => {
  notes.value = notes.value.filter((note) => note.id !== noteId);
}; */
</script>

<template>
  <NewNote />
  <div id="noteCards">
    <!-- <Note v-for="note in notes" /> -->
    <div v-for="note in notes" :key="note.id">
      {{ note.title }}
      <br />
      {{ note.body }}
      <EditDelete />
    </div>
  </div>
</template>
