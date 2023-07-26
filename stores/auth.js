export const useCounterStore = defineStore('counter', {
  state: () => ({ 
    name: '',
    email: '',
    password: '',
    passwordRepeat: '',
   }),
  getters: {
    getState: (state)=>{

    },
  },
  actions: {

  },
})