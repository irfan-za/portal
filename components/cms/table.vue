<template>
  <div class="flex flex-col">
    <div class="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-6">
      <div class="p-2.5 xl:p-5">
        <h5 class="text-sm font-medium uppercase xsm:text-base">Id</h5>
      </div>
      <div class="p-2.5 text-center xl:p-5">
        <h5 class="text-sm font-medium uppercase xsm:text-base">Created At:</h5>
      </div>
      <div class="p-2.5 text-center xl:p-5">
        <h5 class="text-sm font-medium uppercase xsm:text-base">Title</h5>
      </div>
      <div class="hidden p-2.5 text-center sm:block xl:p-5">
        <h5 class="text-sm font-medium uppercase xsm:text-base">Category</h5>
      </div>
      <div class="hidden p-2.5 text-center sm:block xl:p-5">
        <h5 class="text-sm font-medium uppercase xsm:text-base">Content</h5>
      </div>
      <div class="hidden p-2.5 text-center sm:block xl:p-5">
        <h5 class="text-sm font-medium uppercase xsm:text-base sr-only">Action</h5>
      </div>
    </div>

    <div v-for="blog in blogs" class="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-6">
      <div class="flex items-center p-2.5 xl:p-5 col-auto">
        <p class="hidden font-medium text-black dark:text-white sm:block">
          {{ blog.id }}
        </p>
      </div>

      <div class="flex items-center justify-center p-2.5 xl:p-5">
        <p class="font-medium dark:text-white">{{ dateFormater(blog.created_at) }}</p>
      </div>

      <div class="flex items-center justify-center p-2.5 xl:p-5">
        <p class="font-medium text-meta-3">{{ blog.title }}</p>
      </div>

      <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
        <p class="font-medium dark:text-white">{{ blog.category }}</p>
      </div>

      <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
        <p class="font-medium text-meta-5 truncate">{{blog.content}}</p>
      </div>
      <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5 space-x-2">
        <NuxtLink :to="`/cms/edit/${blog.id}`" class="px-2 py-1 bg-orange-500 text-white font-medium rounded-md">Edit</NuxtLink>
        <button @click="deleteBlog(blog.id)" class="px-2 py-1 bg-red-500 text-white font-medium rounded-md">Delete</button>
      </div>
    </div>

  </div>
</template>


<script setup>
const {blogs}= useBlogs()
const supabase= useSupabaseClient();

const deleteBlog = async(id) => {
  const { error } = await supabase
  .from('blogs')
  .delete()
  .eq('id', id)
  if(error){alert(error.message)};
  alert('Success delete blog')
}
</script>