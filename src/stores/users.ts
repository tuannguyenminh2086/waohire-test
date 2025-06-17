import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUsersStore = defineStore('users-store', () => {
    const users = ref([])
    const filteredUsers = ref([])
    const loading = ref(false)
    const error = ref<string | null>(null)
    const sortBy = ref('name')
    const sortDirection = ref('asc')
    const searchQuery = ref('')

    const isLoading = computed(() => loading.value)
    const isError = computed(() => error.value !== null)

    async function fetchUsers() {
      try {
        loading.value = true
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        if (data && data.length > 0) {
          users.value = data
          filteredUsers.value = data
        }

      } catch (error) {
        error.value = error instanceof Error ? error.message : 'Unknown error'
      } finally {
        loading.value = false
      }
    } 

    function filterUsers() {
      let filtered = [...users.value]

      if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase();
        filtered = filtered.filter(user => {
          return user.name.toLowerCase().includes(query) ||
                 user.email.toLowerCase().includes(query) ||
                 user.company.name.toLowerCase().includes(query)
        })
      } 

      filtered.sort((a, b) => {
        let aValue, bValue;

        switch (sortBy.value) {
            case 'name':
                aValue = a.name.toLowerCase();
                bValue = b.name.toLowerCase();
                break;
            case 'email':
                aValue = a.email.toLowerCase();
                bValue = b.email.toLowerCase();
                break;
            // case 'company':
            //     aValue = a.company.name.toLowerCase();
            //     bValue = b.company.name.toLowerCase();
            //     break;
            // case 'city':
            //     aValue = a.address.city.toLowerCase();
            //     bValue = b.address.city.toLowerCase();
            //     break;
            // case 'phone':
            //     aValue = a.phone;
            //     bValue = b.phone;
            //     break;
            default:
                aValue = a.name.toLowerCase();
                bValue = b.name.toLowerCase();
        }

        if (aValue < bValue) {
            return sortDirection.value === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
            return sortDirection.value === 'asc' ? 1 : -1;
        }
        return 0;
      });

      filteredUsers.value = filtered
    }

    return {
      users,
      loading,
      error,
      isLoading,
      isError,
      fetchUsers,
      sortBy,
      sortDirection,
      searchQuery,
      filterUsers,
      filteredUsers
    }
  })  