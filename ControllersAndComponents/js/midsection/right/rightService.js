angular.module('clickerApp').service('rightService', ['trackingService', 'persistenceService', 'centerService', '$interval', function (trackingService, persistenceService, centerService, $interval) {

    this.autoclick = () => {
        if(trackingService.total >= trackingService.autoclickerCost) {
            trackingService.total -= trackingService.autoclickerCost
            trackingService.autoclickerCount++
            trackingService.autoclickerCost *= 2
            
            trackingService.autoclickerPromises.push($interval(centerService.increment, trackingService.autoclickerInterval))

            trackingService.stateChanged = true
            trackingService.refreshButtons()
            persistenceService.updateCookies()
        }
    }

    this.initAutoclickers = () => {
        trackingService.autoclickerPromises = []
        for(let i = 0; i < trackingService.autoclickerCount; i++) {
            setTimeout(() => {
                trackingService.autoclickerPromises.push($interval(centerService.increment, trackingService.autoclickerInterval))
            }, 2);
        }
    }

}])