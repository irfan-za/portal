export const useAuth = defineStore('auth', {
    state: () => ({
        name: '',
        email: '',
        password: '',
        passwordRepeat: '',
    }),
    getters: {
        getState(state) {
            const {
                name, email, password, passwordRepeat
            } = state;

            return {
                name, email, password,  passwordRepeat
            };
        },
    },
    actions: {
        changeState(nameState, value){
            this[nameState] = value;
        }
    },
})