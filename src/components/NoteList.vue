<script setup>
import { ref } from 'vue';

const header = ref('New Note')
const newNoteTitle = ref('')
const newNoteBody = ref('')
</script>

<template>
    <h1> {{ header }}</h1>
    <input v-model="newNoteTitle" type="text" placeholder="Title">
    <input v-model="newNoteBody" type="text" placeholder="Body">
< NoteListItem
    v-for="note in notes"
    :key="note.id"

    <!-- const addNote = () => {
        fetch('url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: newNoteTitle.value, body: newNoteBody.value })
            }).then(res.json())
            then.(data => //do stuff)
        } -->
    
    

</template>


