const app = new Vue({
    data() {
      return {
        counterMonsterHelth: 100,
        counterPlayerHelth: 100,
        actionsList: [],
        width_healthbarMonster: 100,
        width_healthbarPlayer: 100,
        resultOfGame : '',
        roundCounter : 0,
        disabled: true,
      }
    },

    watch: {
      counterMonsterHelth(value) {
        if(value <= 0 ) {
          this.counterMonsterHelth = 0
          this.resultOfGame = 'You won'
        }
      },
      counterPlayerHelth(value) {
        if(value <= 0 ) {
          this.counterPlayerHelth = 0
          this.resultOfGame = 'You lost'
        }
        if(value >= 100) {
          this.counterPlayerHelth = 100
        }
      }, 
      roundCounter(value) {
        if(value % 3 === 0) {
          this.disabled = false
        } else {
          this.disabled = true
        }
      }
    },
    computed:{
      disabled(){
        if(this.roundCounter >= 3 ){
          this.disabled = false
          return false
        } 
      }
    },
   
    methods: {
      attack(){
        this.counterMonsterHelth -= 10;
        this.width_healthbarMonster -= 10;
        this.actionsList.push('Your attackPlayer attacks and deals 10%');

        this.counterPlayerHelth -= 15;
        this.actionsList.push('Monster attacks and deal 15%');
        this.width_healthbarPlayer -= 15;

        this.roundCounter = this.roundCounter +1;
        console.log(this.roundCounter)
      },
      specialAttack(){
        this.counterMonsterHelth -= 25
        this.width_healthbarMonster -= 25;
        this.actionsList.push('Your SpecialattackPlayer attacks and deals 25%');

        this.counterPlayerHelth -= 8;
        this.width_healthbarPlayer -= 8;
        this.actionsList.push('Monster attacks and deal 8%');
        
        this.roundCounter++
      },
      heal(){
        this.counterPlayerHelth += 20;
        this.width_healthbarPlayer += 20;
        this.counterPlayerHelth -= 8;
        this.width_healthbarPlayer -= 8;

        this.actionsList.push('Player heals himself for 20%');
        this.actionsList.push('Monster attacks and deal 8%');

        this.roundCounter++
      },
      surrender(){
        this.counterPlayerHelth = 0;
        this.width_healthbarPlayer = 0;

        this.roundCounter++
      },
      startNewGame(){
        this.counterMonsterHelth = 100;
        this.counterPlayerHelth = 100;
        this.width_healthbarMonster = 100;
        this.width_healthbarPlayer = 100;
      },
      
}});
  
  app.$mount('#game');