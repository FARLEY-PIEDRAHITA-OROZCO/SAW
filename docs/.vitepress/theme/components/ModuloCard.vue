<script setup lang="ts">
import { withBase } from 'vitepress'

defineProps<{
  href: string
  icon: string
  titulo: string
  desc: string
}>()
</script>

<template>
  <a class="modulo-card" :href="withBase(href)">
    <span class="modulo-card__icon">{{ icon }}</span>
    <span class="modulo-card__titulo">{{ titulo }}</span>
    <span class="modulo-card__desc">{{ desc }}</span>
    <span class="modulo-card__link">Explorar →</span>
  </a>
</template>
