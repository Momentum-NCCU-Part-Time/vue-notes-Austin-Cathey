<script setup>
import { ref } from "vue";
/* import NoteList from "./NoteList.vue"; */
const editedNoteTitle = ref("");
const editedNoteBody = ref("");
const editing = ref(false);
/* const props = defineProps({
note: Object
}); */

function deleteNote(noteId) {
  fetch("http://localhost:3000/notes/" + noteId, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function editNote(noteId) {
  fetch("http://localhost:3000/notes/" + noteId, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      Title: editedNoteTitle.value,
      Body: editedNoteBody.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

const saveNote = () => {
  notes.value.push({
    id: items.value.length + 1,
    Title: editedNoteTitle.value,
    Body: editedNoteBody.value,
  });
};

function doEdit(e) {
  editing.value = e;
  editedNoteTitle.value = note.title.value;
  editedNoteBody.value = note.body.value;
};
</script>

<template>
  <div class="editDelete">
    <button v-if="editing" class="btn" @click="doEdit(false)">Cancel</button>
    <button v-else class="btn btn-primary" @click="doEdit(true)">Edit</button>
    <form class="editNote" v-if="editing" @submit.prevent="saveNote">
      <div class="editTitle">
        <input v-model="editedNoteTitle" type="text" placeholder="Title" />
      </div>
      <br />
      <div class="editBody">
        <textarea v-model="editedNoteBody" type="text" placeholder="Body">
        </textarea>
      </div>
      <button type="submit">New note</button>
    </form>
    <button type="submit" @click="deleteNote()">Delete</button>
  </div>
</template>
