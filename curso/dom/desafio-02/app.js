new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta() {
            alert('Alerta !!')
        },
        getValue(event) {
            this.valor = event.target.value
        }
    }
})