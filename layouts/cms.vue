<template>
  <div class="flex h-screen overflow-hidden">
    <CmsSidebar />
    <div
      class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden"
    >
      <CmsHeader />
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>