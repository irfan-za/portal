export const useNavbar = defineStore({
  id: "navbar",
  state: () => ({
    toggleNav: false,
    darkMode: false,
  }),
  getters: {
    getToggleNav: (state) => state.toggleNav,
    getDarkMode: (state) => state.darkMode,
  },
  actions: {
    setToggleNav(value) {
      this.toggleNav = value;
    },
    setDarkMode(value) {
      this.darkMode = value;
    },
  },
});
