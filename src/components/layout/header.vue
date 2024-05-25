<script setup>
import { ref } from 'vue';
 const routerItems = ref ([
  {name: 'Home', route: '/'},
  {name: 'About', route: '/about'},
  {name: 'Dashboard', route: '/dashboard'},
  
 ]);
</script>

<template>
  <div class="w-full bg-slate-700">
    <div class="flex mx-auto px-8 py-4 justify-between w-[1080px]">
      <router-link to="/" class="font-bold text-white flex gap-3 items-center uppercase"><img src="/public/logo.png" width="30"> Vue Blogging</router-link>
      <nav class="flex gap-4">
        <router-link v-for="(item, index) in routerItems" :key="index" :to="item.route" class="text-white font-bold px-3 py-2 hover:bg-blue-600 duration-150 rounded">
          {{ item.name }}
        </router-link>
      </nav>
    </div>
  </div>
</template>
