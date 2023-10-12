<script setup lang="ts">
interface IProps {
    fallback: {
        src: string
        alt: string
    }
}

const { fallback } = defineProps<IProps>()
const isDev = import.meta.env.DEV
</script>

<template>
    <img :src="fallback.src" :alt="fallback.alt" v-if="!isDev">
    <iframe src="http://127.0.0.1:4211/projects/all" class="w-full h-1/2" v-else />
</template>