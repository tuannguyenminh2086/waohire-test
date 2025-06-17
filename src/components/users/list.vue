<template>
  <div>
    <TransitionGroup name="list" tag="ul" class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 items-stretch">
      <li v-for="user in users" :key="user.id" class="transition-all duration-500">
        <UsersCard :user="user" />
      </li>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { User } from '@/models'
interface Props {
  users: User[]
}
import UsersCard from './card.vue'

defineProps<Props>()
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>