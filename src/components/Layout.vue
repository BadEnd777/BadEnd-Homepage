<script setup>
import { useDark, useToggle } from "@vueuse/core";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Container from "./Container.vue";

useDark(false);

defineProps({
    header: {
        type: Boolean,
        default: true,
    },
    footer: {
        type: Boolean,
        default: true,
    },
});
</script>

<template>
    <div class="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Header v-if="header" />
        <Container class="py-8 min-h-screen">
            <slot />
        </Container>
        <Footer v-if="footer" />
    </div>
</template>