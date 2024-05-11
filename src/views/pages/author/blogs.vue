<script setup>
import Card from '@/components/card.vue';
import { ref } from 'vue';
const blogs = ref ([
    {title: 'Blog Pertama', content: 'Halo, ini adalah blog pertama'},
    {title: 'Blog Kedua', content: 'Halo, ini adalah blog kedua'},
    {title: 'Blog Ketiga', content: 'Halo, ini adalah blog ketiga '}
  ]);
</script>

<template>

    <div class="h-screen p-10">
      <div class="mb-5 flex justify-between items-center">
        <h1 class="font-bold uppercase text-3xl tracking-[5px] ">Blogs List</h1>
        <router-link class="bg-blue-500 rounded px-3 py-2 text-white hover:bg-blue-600 duration-150" to="/dashboard/blogs/create">Buat Blog</router-link>
      </div>

    <Card 
    v-for="(blog, index) in blogs"
    :key="index"
    :title="blog.title"
    :content="blog.content"
    />

   </div>
</template>