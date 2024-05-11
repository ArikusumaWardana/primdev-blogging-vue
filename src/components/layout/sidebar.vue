<script setup>
 import { ref } from 'vue';
  const routeItems = ref([
    {name: 'Dashboard', route: '/dashboard'},
    {name: 'Blog', route: '/dashboard/blogs'},
  ])
</script>

<template>
  <div class="px-10 border-r h-full flex flex-col items-center w-full">
    <img src="/public/logo.png" width="130" />
      <div class="mt-6 w-full flex flex-col gap-1">
        <div v-for="(item, index) in routeItems" :key="index" class="w-full">
        <router-link :to="item.route" active-class="active">
          <div class="w-full hover:bg-blue-600 hover:text-white rounded duration-100 px-2 py-2 text-center font-bold">
            <p>{{ item.name }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
