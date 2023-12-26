<template>
  <div class="text-center">
    <div class="d-flex justify-center gap-20 mt-5">
      <a target="_blank" href="https://www.instagram.com/treinutri/">
        <img :src="InstagramIcon" alt="Instagram icone" />
      </a>
      <a target="_blank" href="https://www.facebook.com/treinutri/">
        <img :src="FacebookIcon" alt="Facebook icone" />
      </a>
      <a target="_blank" href="https://www.youtube.com/c/treinutri">
        <img :src="YoutubeIcon" alt="Youtube icone" />
      </a>
    </div>
  </div>
</template>

<script setup>
import FacebookIcon from '@/assets/icons/auth/facebook.svg'
import InstagramIcon from '@/assets/icons/auth/instagram.svg'
import YoutubeIcon from '@/assets/icons/auth/youtube.svg'
</script>

<style lang="scss" scoped>
.gap-20 {
  gap: 20px;
}

.line {
  max-width: 300px;
  margin: 0 auto;
  height: 1px;
  background: radial-gradient(50% 50% at 50% 50%, #afd0f4 0%, rgba(175, 208, 244, 0.1) 100%);
}
</style>
