<script setup>
    import { useRoute } from 'vue-router';

    const props = defineProps({
        title: String, 
        content: String
    });

    const router = useRoute().name 
</script>

<template>
     <div class="p-10 border-2 my-1">
        <h2 class="text-lg font-semibold">{{ props.title }}</h2>
        <p class="text-slate-600">{{ props.content }}</p>
        <div class="flex gap-3 mt-3" v-show="router == 'dashboard-blogs'">
            <router-link to="/dashboard/blogs/update" class="bg-yellow-600 text-white px-3 py-1 rounded hover:bg-yellow-700 duration-150">Update</router-link>
            <router-link to="blog/delete" class="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 duration-150">Delete</router-link>
        </div>
    </div>
</template>