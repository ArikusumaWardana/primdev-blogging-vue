<script setup>
import BaseInput from '@/components/BaseInput.vue';
import { reactive, ref } from 'vue';
import axios from 'axios'
import router from '@/router/routes'

const inputData = reactive({
    email: '',
    password: '',
})

const logInputData = () => {
    console.log(inputData)
}

const isLoading = ref(false)

const login = async () => {
    isLoading.value = true
    try {
      const response = await axios.post('https://primdev.alwaysdata.net/api/login', inputData);
      if (response.status == 200) {
        localStorage.setItem('token', response.data.token)
        router.push('/')
        console.log(response)
      }
    } catch (error) {
      console.log(error)
    } finally {
        isLoading.value = false
    }
}
</script>

<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
        <form @submit.prevent="login" class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 class="text-2xl font-bold mb-6 text-center text-gray-700">Login</h2>
            <div class="flex flex-col gap-4">
                <BaseInput
                    v-model="inputData.email"
                    input-name="Email"
                    input-title="Email"
                    input-placeholder="Enter your email..."
                    input-type="text"
                    class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <BaseInput
                    v-model="inputData.password"
                    input-name="Password"
                    input-title="Password"
                    input-placeholder="Enter your password..."
                    input-type="password"
                    class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <button type="submit" class="mt-6 w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-center items-center">
                <div v-if="isLoading" role="status">
                    <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-white-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                </div>
                <span v-else>Login</span>
            </button>
            <p class="text-sm mt-4 text-center">
              Don't have an Account? <router-link to="register" class="text-primary">Register Here</router-link>
            </p>
        </form>
    </div>
</template>