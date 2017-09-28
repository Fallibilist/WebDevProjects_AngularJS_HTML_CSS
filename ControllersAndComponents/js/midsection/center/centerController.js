angular.module('clickerApp').controller('centerController', ['trackingService', 'centerService', function (trackingService, centerService) {

    this.trackingService = trackingService
    this.centerService = centerService

    this.increment = () => centerService.increment()

}])
