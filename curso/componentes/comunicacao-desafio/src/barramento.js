import Vue from 'vue'
export default new Vue({
    methods: {
        setSelecUser(user) {
            this.$emit('selectUse', user)
        },
        onSelecUser(callback) {
            this.$on('selectUse', callback)
        }
    }
})