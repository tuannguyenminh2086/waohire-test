<template>
  <div class="space-x-2">
    <label>Filter</label>
    <input 
      id="search"
      type="text" 
      v-model="userStore.searchQuery" 
      placeholder="Search by name, email, or company..."
      class="border border-gray-200 rounded-lg px-2 py-1 w-full max-w-[250px]"
    />
  </div>
</template>

<script setup lang="ts">
import { useUsersStore } from '@/stores/users'
import { watch } from 'vue'
import { debounce } from '@/utils'

const userStore = useUsersStore()

watch(() => userStore.searchQuery, () => {
   debounce(userStore.filterUsers(), 300)
})
    
</script>

<style scoped>

</style>  