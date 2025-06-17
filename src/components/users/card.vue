<template>
  <div :data-userid="user.id" :data-user-name="user.name" class="p-4 border border-gray-200 rounded-lg text-sm hyphens-auto h-full space-y-2">

    <h2 class="text-xl font-bold">{{ user.name }}</h2>

    <div v-if="user.email || user.phone || user.website">
      <p><strong>Email:</strong> <a href="mailto:{{ user.email }}" target="_blank" class="text-blue-500">{{ user.email || 'n/a' }}</a></p>
      <p><strong>Phone:</strong> {{ user.phone || 'n/a' }}</p>
    </div>
    <div v-if="user.address">
      <p><strong>Address:</strong> {{ address }}</p>
    </div>
    <div v-if="user.company">
      <p><strong>Company:</strong> {{ user.company.name }}</p>
    </div>
    <div v-if="user.website">
      <p><strong>Website:</strong> <a :href="user.website" target="_blank" class="text-blue-500">{{ user.website }}</a></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { User } from '@/models' 
import { computed } from 'vue'
interface Props {
  user: User
}

const props = defineProps<Props>()

const address = computed(() => {
  return `${props.user.address.street}, ${props.user.address.city}, ${props.user.address.zipcode}`
})


</script>

<style scoped>

</style>