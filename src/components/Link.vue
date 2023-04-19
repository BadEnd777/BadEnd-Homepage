<script setup>
defineProps({
    to: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: false
    }
})
</script>

<template>
    <router-link
        :to="to"
        class="
            text-xs md:text-sm lg:text-base
            decoration-purple-500 underline-offset-2 decoration-2
            hover:underline
        "
        :class="class"
    >
        <slot />
    </router-link>
</template>