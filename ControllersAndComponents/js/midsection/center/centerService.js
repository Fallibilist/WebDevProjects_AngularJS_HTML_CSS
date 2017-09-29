angular.module('clickerApp').service('centerService', ['trackingService', 'persistenceService', 
                                        function (trackingService, persistenceService) {

    this.increment = () => {
        trackingService.total += trackingService.incrementer
        trackingService.incrementerCount++

        trackingService.stateChanged = true
        trackingService.refreshButtons()
        persistenceService.updateCookies()
    }

}])