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

/* function pushNote() {
notes.value =
}; */

</script>

<template> 
  <NewNote />
  <div id="noteCards">
    <!-- <Note v-for="note in notes" /> -->
    <div class="noteCard" v-for="note in notes" :key="note.id">
      {{ note.title }}
      <br />
      {{ note.body }}
      <EditDelete :note="note" />
      </div>
    </div>
  


  
</template>
