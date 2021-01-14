new Vue({
    el: '#app',
    data: {
        running: false,
        playerLife: 0,
        monsterLife: 14,
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    methods: {
        startGame(){
            this.playerLife = 100
            this.monsterLife = 100
            this.running = true
        }
    },
    watch: {

    }
})