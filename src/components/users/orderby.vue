<template>
  <div class="space-x-2">
    <label>Order by</label>
    <select id="sort-direction" v-model="userStore.sortDirection">
      <option value="asc">ASC</option>
      <option value="desc">DESC</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { useUsersStore } from '@/stores/users'
import { watch } from 'vue'
const userStore = useUsersStore()

watch(() => userStore.sortDirection, () => {
      userStore.filterUsers()
})
    
</script>

<style scoped>

</style>