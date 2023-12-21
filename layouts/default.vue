<template>
  <v-layout>
    <!-- <AppBar /> -->
    <!-- <Nav /> -->

    <v-main style="min-height: 100vh;">
      <slot />
    </v-main>

    <ErrorSnackbar />
  </v-layout>
</template>
