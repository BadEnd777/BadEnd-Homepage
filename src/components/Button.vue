<script setup>
defineProps({
    onClick: {
        type: Function,
        default: () => {}
    },
    class: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <button
        @click="onClick()"
        class="
            flex flex-row items-center justify-center
            h-12 px-4
            text-gray-900 dark:text-gray-100
            bg-gray-200 dark:bg-gray-800
            hover:bg-gray-300 dark:hover:bg-gray-700
            focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700
            transition duration-300 ease-in-out
        "
        :class="class"
    >
        <slot />
    </button>
</template>