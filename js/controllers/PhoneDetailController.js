function PhoneDetailCtrl($scope, $http, $routeParams, Phone){
    $scope.phone = Phone.get({phoneId:$routeParams.phoneId}, function(phone){
       $scope.mainImageUrl = phone.images[0];
    });
    $scope.setImage = function(imageUrl){
        $scope.mainImageUrl = imageUrl;
    }
}
angular.module('phonecatApp').controller('PhoneDetailCtrl', ['$scope', '$http' ,'$routeParams', 'Phone', PhoneDetailCtrl]);