<script setup>
import { ref } from 'vue'
import { getNotes } from '@/requests' 

const notes = ref([])
getNotes().then((data) =>{
notes.value = data
})
</script>

<template>

<div v-for="note in notes" :key="note.id">
{{ note.title }}
<br>
{{ note.body }}
</div>

</template>


