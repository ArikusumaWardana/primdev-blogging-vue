<script setup>
 import { ref } from 'vue';
  const routeItems = ref([
    {name: 'Dashboard', route: '/dashboard'},
    {name: 'Blog', route: '/dashboard/blogs'},
  ])

  const logout = ()  => {
    localStorage.removeItem('token')
    location.reload()
  }
</script>

<template>
  <div class="px-10 border-r h-full flex flex-col items-center w-full">
    <img src="/public/logo.png" width="130" />
      <div class="mt-6 w-full flex flex-col gap-1">
        <div v-for="(item, index) in routeItems" :key="index" class="w-full">
        <router-link :to="item.route" active-class="active">
          <div class="w-full hover:bg-blue-600 hover:text-white rounded duration-100 px-2 py-2 text-start font-bold uppercase text-sm">
            <p>{{ item.name }}</p>
          </div>
        </router-link>
      </div>
       <button class="bg-red-600 text-white rounded py-1 font-bold" @click="logout">Log Out</button>
    </div>
  </div>
</template>
