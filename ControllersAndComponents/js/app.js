angular.module('clickerApp', []).run(['trackingService', 'persistenceService', 'rightService', 
                                        function (trackingService, persistenceService, rightService) {

    persistenceService.retrieveCookies()
    rightService.initAutoclickers()
    trackingService.refreshButtons()

}])
