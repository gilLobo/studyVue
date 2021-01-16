new Vue({
    el: '#app',
    data: {
        // Controle execução do jogo
        running: false,
        // Controle HP dos personagens
        playerLife: 100,
        monsterLife: 100,
        // Controle de ataque e cura dos personagens
        attackMinMonster: 7,
        attackMaxMonster: 12,
        attackMinPlayer: 5,
        attackMaxPlayer: 10,
        healMin: 10,
        healMax: 15,
        logs: []
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
            this.logs = []
        },
        attack(especial) {
            this.hurt('monsterLife', this.attackMinPlayer, this.attackMaxPlayer, especial, 'Jogador', 'Monstro', 'player')
            if (this.monsterLife > 0) {
                this.hurt('playerLife', this.attackMinMonster, this.attackMaxMonster, false, 'Monstro', 'Jogador', 'monster')
            }
        },
        hurt(atr, min, max, especial, source, target, cls){
            const plus = especial ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[atr] = Math.max(this[atr] - hurt, 0)
            this.registerLog(`${source} atigiu ${target} com ${hurt}.`, cls)
        },
        healAndHurt(){
            this.heal(this.healMin, this.healMax)
            this.hurt('playerLife', this.attackMinMonster, this.attackMaxMonster, false, 'Monstro', 'Jogador', 'monster')
        },
        heal(min, max) {
            const heal = this.getRandom(min, max)
            this.playerLife = Math.min(this.playerLife + heal, 100)
            this.registerLog(`Jogador ganhou força de ${heal}.`, 'player')
        },
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        registerLog(text, cls) {
            this.logs.unshift({ text, cls })
        },
    },
    watch: {
        hasResult(value) {
            if (value) this.running = false
        }
    }
})