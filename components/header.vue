<template>
    <!-- kedepannya ga pakai link login karena sifatnya secret access -->
  <div class="flex items-center gap-5 text-primary mx-auto">
    <NuxtLink to="/auth/signin">Login</NuxtLink>
    <NuxtLink to="/auth/signup">Register</NuxtLink>
    <NuxtLink to="/cms">CMS</NuxtLink>
  </div>
</template>