angular.module('clickerApp').service('trackingService', [function () {

    this.stateChanged = false;
    this.winner = false

    this.multiplierCost = 10
    this.autoclickerCost = 100
    this.expirationDate = 100000000

    this.autoclickerInterval = 1000
    this.multiplier = 1.2

    this.total = 0.0
    this.incrementer = 1
    
    this.incrementerCount = 0
    this.multiplierCount = 0
    this.autoclickerCount = 0

    this.autoclickerPromises = []
    
    this.resetColor = '#B8B0B0'
    this.resetCursor = 'not-allowed'
    
    this.cheatColor = '#B8B0B0'
    this.cheatCursor = 'not-allowed'
    
    this.autoclickerCursor = 'not-allowed'
    this.autoclickerColor = 'gray'

    this.multiplierColor = 'gray'
    this.multiplierCursor = 'not-allowed'
    
    this.buttonSize = '150px'

    this.refreshButtons = () => {
        if(this.stateChanged) {
            this.resetColor = '#D3A886'
            this.resetCursor = 'pointer'
        } else {
            this.resetColor = '#B8B0B0'
            this.resetCursor = 'not-allowed'
        }

        if(this.total >= this.multiplierCost) {
            this.multiplierColor = 'white'
            this.multiplierCursor = 'cell'
        } else {
            this.multiplierColor = 'gray'
            this.multiplierCursor = 'not-allowed'
        }

        if(this.total >= this.autoclickerCost) {
            this.autoclickerColor = 'white'
            this.autoclickerCursor = 'cell'
        } else {
            this.autoclickerColor = 'gray'
            this.autoclickerCursor = 'not-allowed'
        }

        this.numSizeOverflowCheck()
        this.winConditionCheck()
    }

    this.numSizeOverflowCheck = () => {
        if(this.incrementer > 999999999999999 || this.multiplier > 999999999999999) {
            this.buttonSize = '210px'
        } else {
            this.buttonSize = '150px'
        }
    }

    this.winConditionCheck = () => {
        if(!Number.isFinite(this.total) && !this.winner) {
            alert('You Win!')
            this.winner = true
        }
    }
    
}])
