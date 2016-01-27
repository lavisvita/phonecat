function PhoneListCtrl($scope, $http){
    $scope.phones = '';
    $http.get('phones/phones.json')
        .then(function successCallback(response){
            $scope.phones = response.data;
        },
        function errorCallback(response){
            console.log(response.data);
        });
    $scope.orderProp = 'age';
}

angular.module('phonecatApp').controller('PhoneListCtrl', ['$scope', '$http', PhoneListCtrl]);