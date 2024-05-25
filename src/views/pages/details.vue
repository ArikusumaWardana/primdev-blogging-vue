<script setup>
    import {ref, onMounted} from 'vue'
    import axios from 'axios';
    import { useRoute } from 'vue-router';

    const slug = useRoute().params.slug
    const blogDetail = ref(null)

    const isLoading = ref(false)

    const getBlogDetail = async () => {
        isLoading.value = true
        try {
            const response = await axios.get('https://primdev.alwaysdata.net/api/blog/' + slug)
            if(response.status == 200) {
                blogDetail.value = response.data
            }
        } catch(error) {
            console.log(error)
        } finally {
            isLoading.value = false
        }
    }

    onMounted(() => {
        getBlogDetail()
    })
</script>

<template>
    <div> 
        <div v-if="isLoading" class="">Loading....</div>
        <div v-else-if="blogDetail">
            <h1>{{ blogDetail.title }}</h1>
            <img :src="blogDetail.image" alt="">
        </div>
    </div>
</template>