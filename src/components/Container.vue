<script setup>
defineProps({
    class: {
        type: String,
        default: '',
    },
});
</script>

<template>
    <div class="max-w-[550px] mx-auto px-2" :class="class">
        <slot />
    </div>
</template>