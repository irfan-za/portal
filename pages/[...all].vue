<template>
  <div class="flex items-center justify-center w-full h-screen">
    <div class="w-96 text-left flex flex-col gap-5">
      <h1 class="text-9xl font-extrabold">404</h1>
      <h2 class="text-xl ">Oops ! This page Could Not Be Found</h2>
      <button @click="router.back()" class="bg-primary btn">Back To PAGE BEFORE</button>
      <button @click="router.push('/')" class="bg-neutral btn">Back To HOMEPAGE</button>
    </div>
  </div>
</template>

<script setup>
const router = useRouter()
</script>