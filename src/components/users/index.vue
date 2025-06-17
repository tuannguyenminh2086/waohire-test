<template>
  <div class="wrapper container mx-auto space-y-8">
    <!-- filters -->
     <div class="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4">
        <div class="col-span-full md:col-span-3 lg:col-span-6">
          <UsersFilter />
        </div>
        <div class="col-span-full md:col-span-2 lg:col-span-6 gap-4 flex justify-between">
          <div>
            <UsersSort /> 
          </div>
          <div>
            <UsersOrderBy />
          </div>
        </div>
     </div>
    <!-- list -->
    <UsersList :users="filteredUsers" v-if="!loading" />
    <div v-if="filteredUsers.length === 0">No users found</div>
    <div v-if="loading">Loading...</div>
    <div v-if="error" class="text-red-500">
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useUsersStore } from '@/stores/users'
import { storeToRefs } from 'pinia'
import UsersList from './list.vue'
import UsersOrderBy from './orderby.vue'
import UsersFilter from './filter.vue'
import UsersSort from './sort.vue'

const usersStore = useUsersStore()
const { filteredUsers, loading, error } = storeToRefs(usersStore);
usersStore.fetchUsers()


</script>

<style scoped>

</style>