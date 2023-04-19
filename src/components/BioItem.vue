<script setup>
defineProps({
    year: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div class="flex flex-row items-center">
        <div class="flex flex-col items-center justify-center w-full max-w-[40px] relative">
            <div class="bg-purple-500 rounded-sm absolute top-0 left-0 w-full h-full opacity-20" />
            <p class="text-xs font-bold text-purple-800 dark:text-purple-200">
                {{ year }}
            </p>
        </div>
        <p class="text-md ml-2">
            {{ text }}
        </p>
    </div>
</template>