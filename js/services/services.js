var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
    function($resource){
        return $resource('phones/:phoneId.json', {}, {
            query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
        });
    }]);

//angular.module('phonecatApp').service('TagService', [ function(){
//    this.tagName = '';
//    this.getTagName = function (tagName){
//        console.log('we got tagName: ' + tagName);
//        if(tagName == undefined){
//            return 'rrrrr';
//        }else{
//            return tagName;
//        }
//    };
//
//}]);