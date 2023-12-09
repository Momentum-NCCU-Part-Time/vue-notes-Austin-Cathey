<script setup>
import { ref } from "vue";
import NoteList from "./NoteList.vue";
const header = ref("New Note");
const newNoteTitle = ref("");
const newNoteBody = ref("");

const createNote = () => {
  fetch("http://localhost:3000/notes/", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body:JSON.stringify({ title: newNoteTitle.value, body: newNoteBody.value }),
  }).then((res) => res.json())
  .then((data) => console.log());
  resetNote()
};

const resetNote = () => {
  newNoteTitle.value = "";
  newNoteBody.value = "";
};
</script>

<template>
  <div>
    <h1>Vue Notes</h1>
    <h3>{{ header }}</h3>
    <form @submit.prevent="createNote">
      <!-- style later -->
      <div class="newTitle">
        <input v-model="newNoteTitle" type="text" placeholder="Title" />
      </div>
      <br />
      <div class="newBody">
        <textarea v-model="newNoteBody" type="text" placeholder="Body">
        </textarea>
      </div>
      <button type="submit">New note</button>
    </form>
  </div>
</template>
