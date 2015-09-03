(function(){
	'use strict';
 var dependencies = []	;
 
define(dependencies, function(){
   
   var AppController = function($scope, $rootScope, $log,$modal){
	   $log.debug('loading controller');
	   
	   $scope.login = function(){
		   $log.debug("login clicked");
		   var myModal = $modal({title: 'My Title', content: 'My Content', show: true});
	   }
   };
    
   return ["$scope","$rootScope","$log","$modal", AppController];
});

}());