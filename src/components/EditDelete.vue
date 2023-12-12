<script setup>
import { ref } from "vue";
/* import NoteList from "./NoteList.vue"; */
let editedNoteTitle = ref("");
let editedNoteBody = ref("");
const editing = ref(false);
const deleting = ref(false);

const props = 
defineProps
({note: Object});

function deleteNote() {
  fetch("http://localhost:3000/notes/" + props.note.id, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

function confirmDelete(e) {
    deleting.value = e
};

function editNote() {
  fetch("http://localhost:3000/notes/" + props.note.id, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: editedNoteTitle.value,
      body: editedNoteBody.value,
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
  editedNoteTitle.value = props.note.title;
  editedNoteBody.value = props.note.body;
};
</script>

<template>
    <!-- <div id="note">
        {{ props.title }}
        {{ props.body }}
        {{ props.id }}
    </div> -->
  <div class="editDelete">
    <button v-if="editing" class="btn" @click="doEdit(false)">Cancel</button>
    <button v-else class="btn btn-primary" @click="doEdit(true)">Edit</button>
    <form class="editNote" v-if="editing" @submit.prevent="editNote">
      <div class="editTitle">
        <input v-model="editedNoteTitle" type="text" placeholder="Title" />
      </div>
      <br />
      <div class="editBody">
        <textarea v-model="editedNoteBody" type="text" >
        </textarea>
      </div>
      <button type="submit">Save</button>
    </form>
    <button v-if="deleting" class="btn" @click="confirmDelete(false)">Keep Note</button>
    <button v-else class="confirmDeleteBtn" @click="confirmDelete(true)">Delete</button>
    <form class="deleteButton" v-if="deleting" @click.prevent="deleteNote()">
        <button type="submit">No really, delete</button>
    </form>
  </div>
</template>
