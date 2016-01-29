function PhoneDetailCtrl($scope, $http, $routeParams){

    $http.get('phones/' + $routeParams.phoneId + '.json')
        .then(function successCallback(response){
            $scope.mainImageUrl = response.data.images[0];
            $scope.phone = response.data;
        }, function errorCallback(response){
            console.log(response.data);
        });
    $scope.setImage = function(imageUrl){
        $scope.mainImageUrl = imageUrl;
    }
}
angular.module('phonecatApp').controller('PhoneDetailCtrl', ['$scope', '$http' ,'$routeParams', PhoneDetailCtrl]);