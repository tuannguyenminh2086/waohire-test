<template>
  <div class="space-x-2">
    <label>Sort by</label>
    <select id="sort-by" v-model="userStore.sortBy">
        <option value="name">Name</option>
        <option value="email">Email</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { useUsersStore } from '@/stores/users'
import { watch } from 'vue'
const userStore = useUsersStore()

watch(() => userStore.sortBy, () => {
  userStore.filterUsers()
})
    
</script>

<style scoped>

</style>