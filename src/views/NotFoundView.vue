<script setup>
import Layout from '../components/Layout.vue';
</script>

<template>
    <Layout :header="false" :footer="false">
        <div class="flex flex-col justify-center items-center min-h-screen">
            <h1 class="text-7xl md:text-9xl font-bold">404</h1>
            <p class="text-xl md:text-2xl font-medium uppercase">Page not found</p>
            <p class="text-base md:text-xl font-medium">The page you are looking for does not exist.</p>
            <div class="
                flex flex-row items-center justify-center
                h-12 px-4 mt-4
                bg-purple-500 rounded-full
                hover:bg-purple-600
                focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50
                transition duration-300 ease-in-out
            ">
                <router-link to="/" class="text-white font-medium">Go to home</router-link>
            </div>
        </div>
    </Layout>
</template>