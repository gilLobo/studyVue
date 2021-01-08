new Vue({
    el: '#desafio',
    data: {
        nome: 'Gilberto Lobo',
        idade: 26,
        linkImg:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png'
    },
    methods: {
        numRandomico: function() {
            return Math.random()
        }
    }
})
