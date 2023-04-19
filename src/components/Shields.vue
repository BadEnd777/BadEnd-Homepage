<script setup>
defineProps({
    props: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <img :src="`https://img.shields.io/badge/-${props}`" :alt="props.replace(/-/g, ' ')" class="mr-2 mb-2" />
</template>