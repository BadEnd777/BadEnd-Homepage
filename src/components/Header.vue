<script setup>
import { useDark, useToggle } from "@vueuse/core";
import { useRouter } from "vue-router";
import { ref } from "vue";
import Container from './Container.vue'
import Button from './Button.vue'
import Menu from './Menu.vue'
import MenuItems from './MenuItems.vue'
import Link from './Link.vue'

const isDark = useDark(false);
const toggleDark = useToggle(isDark);

const router = useRouter();
const isOpen = ref(false);
const toggleOpen = () => isOpen.value = !isOpen.value;
</script>

<template>
    <header class="
        bg-gray-100/30 dark:bg-gray-900/30 text-gray-900 dark:text-gray-100 backdrop-blur-md
        border-b border-gray-300 dark:border-gray-700
        sticky top-0 z-10
        px-2 py-2 md:py-4
    ">
        <Container>
            <div class="flex flex-row justify-between items-center">
                <RouterLink to="/" class="flex flex-row items-center">
                    <img src="/profile.webp" alt="Logo" class="hidden md:block lg:block w-12 h-12 rounded-full mr-2" />
                    <div class="flex flex-col justify-center">
                        <h1 class="text-xl font-bold">BadEnd</h1>
                        <p class="text-sm lg:text-base text-gray-500">Full-Stack Developer</p>
                    </div>
                </RouterLink>
                <div class="flex flex-row items-center space-x-2">
                    <a href="https://github.com/BadEnd777/BadEnd-Homepage" target="_blank">
                        <div class="flex items-center justify-center">
                            <font-awesome-icon icon="fa-brands fa-github" class="w-6 h-6" />
                        </div>
                    </a>
                    <Button @click="toggleDark()" class="rounded-full h-9 w-9">
                        <div class="flex items-center justify-center">
                            <font-awesome-icon :icon="isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon'" class="w-4 h-4" />
                        </div>
                    </Button>
                    <div class="hidden md:block space-x-4">
                        <Link to="/" class="font-medium">Home</Link>
                        <Link to="/work" class="font-medium">Work</Link>
                    </div>
                    <div class="md:hidden relative">
                        <Button @click="toggleOpen()" class="rounded-md text-sm font-medium h-9">
                            Menu
                        </Button>
                        <Menu v-model:isOpen="isOpen">
                            <MenuItems to="/"
                                :class="router.currentRoute.value.path === '/' ? 'bg-gray-300 dark:bg-gray-700' : ''">
                                Home
                            </MenuItems>
                            <MenuItems to="/work"
                                :class="router.currentRoute.value.path === '/work' ? 'bg-gray-300 dark:bg-gray-700' : ''">
                                Work
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </div>
        </Container>
    </header>
</template>