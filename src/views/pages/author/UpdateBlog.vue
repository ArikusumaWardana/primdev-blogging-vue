<script setup>
    import BaseTextArea from '@/components/BaseTextArea.vue';
    import BaseInput from '@/components/BaseInput.vue';
</script>

<template>
    <div class="h-screen p-10">
      <div class="mb-5 flex justify-between items-center">
        <h1 class="font-bold uppercase text-3xl tracking-[5px] ">Update Blogs</h1>
        <router-link to="" class="bg-yellow-500 text-white px-3 py-2 rounded hover:bg-yellow-600 duration-150">Update</router-link>
      </div>

    <form action="" class="mt-5 grid grid-cols-1">
        <BaseInput inputType="text" inputPlaceholder="enter blog title" inputTitle="Blog Title" inputName="blogTitle" class="mb-3"/>   
        <BaseTextArea inputType="text" inputPlaceholder="enter blog content" inputTitle="Blog Content" inputName="blogContent" class="mb-3"/>
    </form>
   </div>
</template>