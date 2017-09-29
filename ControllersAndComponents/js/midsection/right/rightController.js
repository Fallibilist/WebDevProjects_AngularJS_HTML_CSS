angular.module('clickerApp').controller('rightController', ['trackingService', 'rightService', 
                                            function (trackingService, rightService) {

    this.trackingService = trackingService
    this.rightService = rightService
    
    this.autoclick = () => rightService.autoclick()

}])