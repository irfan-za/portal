<template>
    <NuxtLayout name="cms">
        <CmsTable/>
        <NuxtLink to="/cms/add" class="px-2 py-1 bg-green-500 text-white font-medium rounded-md">add data</NuxtLink>
    </NuxtLayout>
</template>

<script setup>
definePageMeta({
    middleware: "auth"
})

const supabase = useSupabaseClient();
const blogs = useBlogs();
const { data, error } = await supabase
  .from('blogs')
  .select()
  if(data){blogs.setData(data)}
  if(error) {alert(error.message)};
console.log(data);

</script>