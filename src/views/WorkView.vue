<script setup>
import Layout from "../components/Layout.vue";
const works = [
    {
        title: "Himeko Mains",
        description: "Guides content for Honkai Star Rail by Himeko Mains.",
        image: "/works/himeko-mains.png",
        link: "https://himekomains.pages.dev/",
    },
    {
        title: "Vacant - Modify VRCSDK",
        description: "Vacant is a modifed version of the VRCSDK by VRChat.",
        image: "/works/vacant.png",
        link: "https://vacant-sdk.pages.dev/",
    },
    {
        title: "Chat Bridge",
        description: "Chat Bridge is a library that help you to create chatbots for Facebook Messenger.",
        image: "/works/chatbridge.png",
        link: "https://www.npmjs.com/package/@badend/chatbridge",
    },
];
</script>

<template>
    <Layout>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="work in works" :key="work.title" class="
                    bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700
                    rounded-lg shadow-lg group hover:shadow-xl hover:scale-105 transition duration-500 ease-in-out
                ">
                <a :href="work.link" target="_blank" rel="noopener noreferrer">
                    <img :src="work.image"
                        class="w-full h-32 rounded-t-lg object-cover filter grayscale group-hover:grayscale-0 transition duration-500 ease-in-out">
                    <div class="p-4 text-gray-800 dark:text-gray-300">
                        <h3 class="text-md font-semibold">{{ work.title }}</h3>
                        <p class="mt-2 text-sm text-gray-500">{{ work.description }}</p>
                    </div>
                </a>
            </div>
        </div>
    </Layout>
</template>