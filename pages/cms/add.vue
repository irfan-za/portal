<template>
  <div class="p-4 flex flex-col justify-center items-center min-h-screen bg-green-100 space-y-2">
    <div class="flex justify-between w-xs">
      <label for="title">Title</label>
      <input
      v-model="title"
      class=" w-52 border border-slate-700 rounded-sm" 
      type="text" 
      name="title">
    </div>
    <div class="flex justify-between w-xs">
      <label for="category">Kategori</label>
      <input 
      v-model="category"
      class=" w-52 border border-slate-700 rounded-sm" 
      type="text" 
      name="category">
    </div>
    <div class="flex justify-between w-xs">
      <label for="content">Konten</label>
      <textarea 
      v-model="content"
      class=" w-52 border border-slate-700 rounded-sm" 
      type="text" 
      name="content"></textarea>
    </div>

    <button @click="addBlog()" class="px-2 py-1 bg-green-500 text-white font-medium rounded-md">tambah</button>
    <NuxtLink to="/cms" class="px-2 py-1 bg-slate-100 text-slate-700 font-medium rounded-md">kembali</NuxtLink>
  </div>
</template>

<script setup>
const title= ref()
const content= ref()
const category= ref()
const supabase= useSupabaseClient();

async function addBlog(){
  if(title.value && content.value && category.value){
    const {data, error} = await supabase.from("blogs")
    .insert({
      title: title.value, 
      category: category.value,
      content: content.value
    }).select();
      console.log('✅✅',data);
    if(error) {console.log(error)};
    return
  }
  alert("Masukkan semua data");
}
</script>