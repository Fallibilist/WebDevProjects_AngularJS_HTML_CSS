angular.module('clickerApp').service('headingService', ['trackingService', 'persistenceService', '$interval', function (trackingService, persistenceService, $interval) {


    this.reset = () => {
        if(trackingService.stateChanged) {
            
            for(autoclickerPromise of trackingService.autoclickerPromises) {
                if(angular.isDefined(autoclickerPromise)) {
                    $interval.cancel(autoclickerPromise)
                    autoclickerPromise = undefined
                }
            }

            trackingService.winner = false

            trackingService.multiplierCost = 10
            trackingService.autoclickerCost = 100

            trackingService.multiplier = 1.2
            trackingService.autoclickerInterval = 1000

            trackingService.total = 0.0
            trackingService.incrementer = 1
            
            trackingService.incrementerCount = 0
            trackingService.multiplierCount = 0
            trackingService.autoclickerCount = 0
            trackingService.autoclickerIds = []

            persistenceService.updateCookies()
            trackingService.stateChanged = false
            trackingService.refreshButtons()
        }
    }

    this.cheat = () => {
        trackingService.total += 100
        trackingService.multiplier *= 10
        trackingService.autoclickerInterval = 100

        persistenceService.updateCookies()
        trackingService.refreshButtons()
    }
}])