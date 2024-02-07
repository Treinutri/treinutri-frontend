<template>
  <div class="background">
    <v-container fluid class="py-0 height-100 d-flex align-center justify-center">
      <div class="d-flex align-center justify-center flex-grow-1">
        <div class="form-container px-5 px-md-8 d-flex">
          <div class="container">
            <slot name="content"></slot>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.height-100 {
  height: 100vh !important;
}

.background {
  width: 100%;
  background-color: rgb(var(--v-theme-background)) !important;
}

.form-container {
  max-height: 100%;
  box-sizing: border-box;
  background-color: rgb(var(--v-theme-white));

  height: 100%;
  max-width: 650px;
  width: 100%;
  border-radius: 1.25rem;
  box-shadow: -3px 20px 20px 0px rgba(0, 0, 0, 0.05);
}

.container {
  padding: 4.5rem 0 2rem 0;

  height: 100%;
  width: 100%;
  max-width: 670px;
  margin: 0 auto;

  & > * {
    width: 100%;
  }
}
</style>
