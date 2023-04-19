<script setup>
import Container from './Container.vue';
defineProps({
    title: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <Container>
        <h1 class="text-xl border-b-4 font-bold border-purple-500 w-max">
            {{ title }}
        </h1>
        <div class="mt-4">
            <slot />
        </div>
    </Container>
</template>