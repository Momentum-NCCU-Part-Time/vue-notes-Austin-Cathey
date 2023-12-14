<script setup>
import { ref } from "vue";
import NoteList from "./NoteList.vue";
const header = ref("New Note");
const newNoteTitle = ref("");
const newNoteBody = ref("");
const emit = defineEmits(["noteCreated"]);

const createNote = () => {
  fetch("http://localhost:3000/notes/", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body:JSON.stringify({ title: newNoteTitle.value, body: newNoteBody.value }),
  })
  .then((res) => res.json())
  .then((note) => {
    emit("noteCreated", note)
    resetNote()
  });
};


function resetNote() {
  newNoteTitle.value = "";
  newNoteBody.value = "";
getNotes();
};
</script>

<template>
  <div class="newNotePad">
    <h2 class="newHeader">{{ header }}</h2>
    <form @submit.prevent="createNote">
      
      <div class="newTitle">
        <input v-model="newNoteTitle" type="text" placeholder="Title" />
      </div>
      <br />
      <div class="newBody">
        <textarea v-model="newNoteBody" type="text" placeholder="Body">
        </textarea>
      </div>
      <button type="submit">Save note</button>
    </form>
  </div>
</template>
