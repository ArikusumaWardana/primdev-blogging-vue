<script setup>
  import Sidebar from '@/components/layout/sidebar.vue';
  import Header from '@/components/layout/header.vue';
</script>

<template>
  <div class="min-h-screen h-full bg-[#F5F6FB]">
    <div class="grid grid-cols-12 h-full">
      <div class="col-span-2">
        <Sidebar class="bg-white h-screen" />
      </div>
      <div class="col-span-10">
        <div class="">
          <Header class="border-b py-2" />
          <RouterView class="section p-10" />
        </div>
      </div>
    </div>
  </div>
</template>


