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

function getNotes() {
fetch("http://localhost:3000/notes/", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
})
.then((res) => res.json())
.then((data) => (notes.value = data));
};

const addNote = (note) => {
  notes.value = [...notes.value, note];
};

 const updateNote = (editedNote) => {
  getNotes()
/*    notes.value = notes.value.map((note) => {
    if (note.id === editedNote.id) {
      return editedNote
    }
    return note
   }) */
};


const removeNote = (deletedNote) => {
  /* notes.value = notes.value.filter((note) => note.id === deletedNote.id) */
  getNotes()
  };

</script>

<template> 
<div id="notesApp">
<h1 class="vueNotes">Vue Notes</h1>
  <NewNote @noteCreated="addNote"/>
  <div id="noteCards">
    <!-- <Note v-for="note in notes" /> -->
    <div class="noteCard" v-for="note in notes" :key="note.id">
      <h4>{{ note.title }}</h4>
      <br />
      {{ note.body }}
      <EditDelete 
      :note="note" 
      @noteEdited="updateNote" 
      @noteDeleted="removeNote"/>
      </div>
    </div>
  </div>
  


  
</template>
