<script setup>

import { ref } from 'vue'
import { createNote} from '@/requests'
const header = ref('New Note')
const newNoteTitle = ref("")
const newNoteBody = ref("")

const emit = defineEmits(['noteCreated'])

const addNote = () => {
    if (!newNoteTitle.value) return
    createNote({ title: newNoteTitle.value, body: newNoteBody.value})
    .then((createdNote) => {
        emit('noteCreated', createdNote)
        resetNote()
    })
}

const resetNote = () => {
newNoteTitle.value = ""
newNoteBody.value = ""
}
</script>


<template>

<div>
<h1>Vue Notes</h1>
<h3> {{ header }}</h3>
    <form  @submit.prevent="addNote" class="addNote"> <!-- style later -->
     <div class="newTitle">
     <input v-model="newNoteTitle" type="text" placeholder="Title"> 
     </div>
     <br>
     <div class="newBody">
     <textarea v-model="newNoteBody" type="text" placeholder="Body">
     </textarea>
     </div>
     <button type="submit" :disabled="!newNoteTitle">New note</button>
    </form>
</div>

</template>
