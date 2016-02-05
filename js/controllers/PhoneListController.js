function PhoneListCtrl($scope, $http, Phone){
    $scope.nameOfTag = '';
    $scope.tegs = [{
        tegname: ''
    }];
    $scope.sendTagName = function(x){
        $scope.tegs.push({tegname: x});
    }
    $scope.deleteTeg = function(index){
        $scope.tegs.splice(index, 1);
    }
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
}

angular.module('phonecatApp').controller('PhoneListCtrl', ['$scope', '$http', 'Phone', PhoneListCtrl]);