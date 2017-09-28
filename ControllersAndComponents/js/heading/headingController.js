angular.module('clickerApp').controller('headingController', ['trackingService', 'headingService', function (trackingService, headingService) {

    this.trackingService = trackingService
    this.headingService = headingService

    this.reset = () => headingService.reset()

    this.cheat = () => headingService.cheat()

}])
