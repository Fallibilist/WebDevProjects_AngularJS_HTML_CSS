angular.module('clickerApp').controller('leftController', ['trackingService', 'leftService', function (trackingService, leftService) {

    this.trackingService = trackingService
    this.leftService = leftService
    
    this.multiply = () => leftService.multiply()

}])