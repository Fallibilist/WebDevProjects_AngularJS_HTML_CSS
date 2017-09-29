angular.module('clickerApp').service('leftService', ['trackingService', 'persistenceService', 
                                        function (trackingService, persistenceService) {

    this.multiply = () => {
        if (trackingService.total >= trackingService.multiplierCost) {
            trackingService.incrementer *= trackingService.multiplier
            trackingService.total -= trackingService.multiplierCost
            trackingService.multiplierCount++
            trackingService.multiplier += .1
            trackingService.multiplierCost *= 2

            trackingService.stateChanged = true
            trackingService.refreshButtons()
            persistenceService.updateCookies()
        }
    }

}])