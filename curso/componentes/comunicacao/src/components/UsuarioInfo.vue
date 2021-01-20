<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuario: <strong>{{ inverterNome() }}</strong></p>
        <p>Idade do usuário: {{ idade }}</p>
        <button @click="reiniciarNome()">Reiniciar Nome</button>
        <button @click="reiniciarFn()">Reiniciar (Callback)</button>
    </div>
</template>

<script>
export default {
    props: {
        nome: {
            type: String,
            // required: true
            // default: function() {
                //     return Array(10).fill(0).join(',')
            // }
            default: 'Anonimo',
        },
        idade: {
            type: Number,
            default: 20
        },
        reiniciarFn: Function
    },
    methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome() {
            const antigo = this.nome
            this.nome = 'Pedro'
            // this.$emit('nomeMudou', this.nome) 
            this.$emit('nomeMudou', {
                novo: this.nome,
                antigo: antigo
            }) 
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
