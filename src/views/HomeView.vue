<script setup>
import VueTypewriterEffect from "vue-typewriter-effect";
import Layout from "../components/Layout.vue";
import Section from "../components/Section.vue";
import BioItem from "../components/BioItem.vue";
import Shields from "../components/Shields.vue";
</script>

<template>
    <Layout>
        <div class="flex flex-col justify-center items-center">
            <img src="/profile.webp" alt="Logo" class="w-[200px] h-[200px] rounded-full" />
            <h1 class="text-2xl md:text-3xl font-bold mt-4">
                Ayo, I'm <span class="text-purple-500">BadEnd</span>
            </h1>
            <p class="text-lg text-gray-500 mt-2">
                I'm a <VueTypewriterEffect
                    :strings="[
                        'full-stack developer',
                        'web developer',
                        'software engineer',
                        'programmer',
                        'freelancer',
                    ]
                " />
            </p>
        </div>
        <Section title="About Me">
            <div class="bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4 w-full">
                <p class="text-gray-800 dark:text-gray-300 text-md md:text-lg">
                    I'm a Freelancer with {{ new Date().getFullYear() - 2021 }} years of experience in Website development,
                    software development tools and chatbots. with a strong focus on creating the user experience easier and faster.
                </p>
            </div>
            <div class="mt-4 flex flex-col">
                <BioItem year="2003" text="Born in Samut Sakhon, Thailand" />
                <BioItem year="2019" text="Learnt business computer at Phichit Technical College" />
                <BioItem year="2021" text="Started working as a Freelancer" />
            </div>
        </Section>
        <Section title="Skills">
            <h3 class="text-md text-gray-500 font-bold">Languages:</h3>
            <div class="flex flex-wrap mt-2">
                <Shields props="JavaScript-yellow?style=flat-square&logo=javascript&logoColor=white" />
                <Shields props="C%23-purple?style=flat-square&logo=csharp&logoColor=white" />
                <Shields props="Go-00ADD8?style=flat-square&logo=go&logoColor=white" />
                <Shields props="HTML-orange?style=flat-square&logo=html5&logoColor=white" />
                <Shields props="CSS-blue?style=flat-square&logo=css3&logoColor=white" />
            </div>
            <h3 class="text-md text-gray-500 font-bold mt-4">Frameworks & Libraries:</h3>
            <div class="flex flex-wrap mt-2">
                <Shields props="React-61DAFB?style=flat-square&logo=react&logoColor=white" />
                <Shields props="Next.js-000000?style=flat-square&logo=next.js&logoColor=white" />
                <Shields props="Vue%203-4FC08D?style=flat-square&logo=vue.js&logoColor=white" />
                <Shields props="Nuxt.js-00C58E?style=flat-square&logo=nuxt.js&logoColor=white" />
                <Shields props="Svelte-FF3E00?style=flat-square&logo=svelte&logoColor=white" />
                <Shields props="Tailwind%20CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" />
                <Shields props="Chakra%20UI-319795?style=flat-square&logo=chakra-ui&logoColor=white" />
                <Shields props="Express-000000?style=flat-square&logo=express&logoColor=white" />
                <Shields props="Fastify-000000?style=flat-square&logo=fastify&logoColor=white" />
                <Shields props="Go%20Fiber-00ADD8?style=flat-square&logo=go&logoColor=white" />
                <Shields props="Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white" />
            </div>
            <h3 class="text-md text-gray-500 font-bold mt-4">Databases:</h3>
            <div class="flex flex-wrap mt-2">
                <Shields props="MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" />
                <Shields props="Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=white" />
                <Shields props="Google%20Sheets-34A853?style=flat-square&logo=google-sheets&logoColor=white" />
            </div>
            <h3 class="text-md text-gray-500 font-bold mt-4">Tools:</h3>
            <div class="flex flex-wrap mt-2">
                <Shields props="Git-F05032?style=flat-square&logo=git&logoColor=white" />
                <Shields props="GitHub-181717?style=flat-square&logo=github&logoColor=white" />
                <Shields props="Visual%20Studio%20Code-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white" />
                <Shields props="Visual%20Studio-5C2D91?style=flat-square&logo=visual-studio&logoColor=white" />
            </div>
            <h3 class="text-md text-gray-500 font-bold mt-4">Services:</h3>
            <div class="flex flex-wrap mt-2">
                <Shields props="Cloudflare-F38020?style=flat-square&logo=cloudflare&logoColor=white" />
                <Shields props="Google%20Cloud-4285F4?style=flat-square&logo=google-cloud&logoColor=white" />
                <Shields props="Render-000000?style=flat-square&logo=render&logoColor=white" />
            </div>
        </Section>
        <Section title="Work Experience">
            <h3 class="text-md text-gray-500 font-bold">Freelance</h3>
            <h2 class="text-lg text-gray-500 font-bold mt-2">
                2023 - Present | <span class="text-purple-500">Fastwork</span>
            </h2>
            <p class="text-md mt-2">
                I am a freelance developer on Fastwork. I have worked on many projects and have a 5 star rating.
            </p>
            <h3 class="text-md text-gray-500 font-bold mt-4">Freelance</h3>
            <h2 class="text-lg text-gray-500 font-bold mt-2">
                2021 - 2023 | <span class="text-purple-500">Vacant</span>
            </h2>
            <p class="text-md mt-2">
                I was a software engineer at a company that is currently vacant. Developed a SDK and Software for a game called VRChat.
            </p>
            <h3 class="text-md text-gray-500 font-bold mt-4">Client</h3>
            <h2 class="text-lg text-gray-500 font-bold mt-2">
                This is a list of clients I have worked with:
            </h2>
            <div class="flex flex-wrap mt-2">
                <img src="/clients/ais.webp" class="m-2 rounded-full h-24" />
                <img src="/clients/the-pizza-company.webp" class="m-2 rounded-full h-24" />
                <img src="/clients/vacant.webp" class="m-2 rounded-full h-24" />
                <img src="/clients/friday.webp" class="m-2 rounded-full h-24" />
            </div>
        </Section>
        <Section title="Contact Infomation">
            <p class="text-gray-500">
                <span class="font-bold">Email:</span>
                <a href="mailto:badend23@hotmail.com" class="text-purple-500 hover:underline">
                    badend23@hotmail.com
                </a>
            </p>
            <p class="text-gray-500 mt-2">
                <span class="font-bold">Phone:</span>
                <a href="tel:0953351342" class="text-purple-500 hover:underline">
                    0953351342
                </a>
            </p>
            <p class="text-gray-500 mt-2">
                <span class="font-bold">Discord:</span>
                <a href="https://discord.com/users/1079117717090611260" class="text-purple-500 hover:underline">
                    BadEnd#6269
                </a>
            </p>
        </Section>
    </Layout>
</template>
