<template>
    <!-- kedepannya ga pakai link login karena sifatnya secret access -->
  <div class="flex items-center gap-5 text-primary mx-auto">
    <NuxtLink to="/auth/signin">Login</NuxtLink>
    <NuxtLink to="/auth/signup">Register</NuxtLink>
    <NuxtLink to="/cms">CMS</NuxtLink>
    <p>-</p>
    <NuxtLink to="/">Artikel</NuxtLink>
    <NuxtLink to="/app">Habitz App</NuxtLink>
    <NuxtLink to="/community">Komunitas</NuxtLink>
    <NuxtLink to="/store">Marketplace</NuxtLink>
    <NuxtLink to="/cms">Parenting</NuxtLink>
  </div>
</template>