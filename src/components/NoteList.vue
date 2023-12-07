<script setup>
import { ref } from 'vue'
import { getNotes } from '@/requests' 
import NewNote from './NewNote.vue';

const notes = ref([])
getNotes().then((data) =>{
notes.value = data
})

const addNewNote = (note) => {
    notes.value = [...notes.value, note]
    
}


</script>

<template>
<NewNote @noteCreated="addNewNote" />
<div v-for="note in notes" :key="note.id">
{{ note.title }}
<br>
{{ note.body }}
<!-- <br>
{{ note.updatedAt }} -->
</div>

</template>


