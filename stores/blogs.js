export const useBlogs = defineStore({
  id: 'blogs',
  state: () => ({
    blogs: [],
  }),
  getters: {
    getData: (state) => state.blogs,
  },
  actions: {
    setData(value) {
      this.blogs = value;
    },
  },
});
