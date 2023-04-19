<script setup>
defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <div
        class="
            absolute top-14 right-0 w-56
            bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700
            rounded-md shadow-lg py-2 px-1
            transition duration-300 ease-in-out
        "
        :class="{
            'opacity-0 pointer-events-none': !isOpen, 'opacity-100 pointer-events-auto': isOpen
        }"
    >
        <slot />
    </div>
</template>