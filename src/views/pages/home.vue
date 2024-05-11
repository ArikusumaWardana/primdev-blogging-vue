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
    <Card 
    v-for="(blog, index) in blogs"
    :key="index"
    :title="blog.title"
    :content="blog.content"
    />

   </div>
  </template>