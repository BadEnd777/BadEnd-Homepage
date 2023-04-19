<script setup>
import Link from './Link.vue';

defineProps({
    to: {
        type: String,
        default: '/'
    },
    class: {
        type: String,
        default: ''
    },
})
</script>

<template>
    <Link
        :to="to"
        :class="class"
        class="
            block px-4 py-2 mb-1
            text-md text-gray-900 dark:text-gray-100
            hover:bg-gray-300 dark:hover:bg-gray-700
            rounded-md
            transition duration-300 ease-in-out
            decoration-transparent
        "
    >
        <slot />
    </Link>
</template>