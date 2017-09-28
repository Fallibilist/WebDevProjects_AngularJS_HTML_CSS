angular.module('clickerApp').service('persistenceService', ['trackingService', function (trackingService) {

    this.retrieveCookies = () => {
        if(Cookies.get("total")) {
            trackingService.winner = (Cookies.get("winner") == 'true')
            trackingService.total = parseFloat(Cookies.get("total"))
            trackingService.incrementer = parseFloat(Cookies.get("incrementer"))
            trackingService.incrementerCount = parseInt(Cookies.get("incrementerCount"))
            trackingService.multiplierCount = parseInt(Cookies.get("multiplierCount"))
            trackingService.autoclickerCount = parseInt(Cookies.get("autoclickerCount"))
            trackingService.multiplier = parseFloat(Cookies.get("multiplier"))
            trackingService.autoclickerInterval = parseInt(Cookies.get("autoclickerInterval"))
            trackingService.multiplierCost = parseFloat(Cookies.get("multiplierCost"))
            trackingService.autoclickerCost = parseFloat(Cookies.get("autoclickerCost"))

            trackingService.stateChanged = ((trackingService.total === 0 && trackingService.incrementerCount === 0) ? false : true)
            trackingService.refreshButtons()
        } else {
            this.updateCookies()
        }
    }

    this.updateCookies = () => {
        Cookies.set("winner", trackingService.winner, { expires : trackingService.expirationDate, path : './cookies' })
        Cookies.set("total", trackingService.total, { expires : trackingService.expirationDate, path : './cookies' })
        Cookies.set("incrementer", trackingService.incrementer, { expires : trackingService.expirationDate, path : './cookies' })
        Cookies.set("incrementerCount", trackingService.incrementerCount, { expires : trackingService.expirationDate, path : './cookies' })
        Cookies.set("multiplierCount", trackingService.multiplierCount, { expires :trackingService. expirationDate, path : './cookies' })
        Cookies.set("autoclickerCount", trackingService.autoclickerCount, { expires : trackingService.expirationDate, path : './cookies' })
        Cookies.set("multiplier", trackingService.multiplier, { expires : trackingService.expirationDate, path : './cookies' })
        Cookies.set("autoclickerInterval", trackingService.autoclickerInterval, { expires : trackingService.expirationDate, path : './cookies' })
        Cookies.set("multiplierCost", trackingService.multiplierCost, { expires : trackingService.expirationDate, path : './cookies' })
        Cookies.set("autoclickerCost", trackingService.autoclickerCost, { expires : trackingService.expirationDate, path : './cookies' })
        trackingService.stateChanged = true
    }
    
}])