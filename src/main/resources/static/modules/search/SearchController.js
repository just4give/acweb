(function(){
	'use strict';
 var dependencies = []	;
 
define(dependencies, function(){
   
   var SearchController = function($scope, $rootScope, $log){
	   $log.debug('loading search controller');
	   
	   $scope.stores=[{
		   name:"Riya's home kitchen",
		   address:"Jadavpur, Kolkata",
		   phone:"860-679-9909",
		   hour:"3PM-10PM",
		   desc:"Biriyani, Chicken Cutlet, Fish Chop, Mutton Curry",
		   photos:[{url:"bg1.jpg"},{url:"bg2.jpg"},{url:"bg3.jpg"},{url:"bg4.jpg"},{url:"bg1.jpg"},{url:"bg2.jpg"}]
	   },
	   {name:"Just Food",
		   address:"Golpark, Kolkata",
		   phone:"860-679-9909",
		   hour:"3PM-10PM",
		   photos:[]
	   
	   },
	   {name:"Bengali House",
		   address:"Jadavpur, Kolkata",
		   phone:"860-679-9909",
		   hour:"3PM-10PM",
		   photos:[{url:"bg1.jpg"},{url:"bg3.jpg"},{url:"bg4.jpg"},{url:"bg2.jpg"}]
	   
	   }];
	   
	   $scope.gallery = [
	                     {
	                    	 url:"bg1.jpg"
	                     },
	                     {
	                    	 url:"bg2.jpg"
	                     },
	                     {
	                    	 url:"bg3.jpg"
	                     },
	                     {
	                    	 url:"bg4.jpg"
	                     }
	                     ,
	                     {
	                    	 url:"bg1.jpg"
	                     }
	                     ,
	                     {
	                    	 url:"bg2.jpg"
	                     }
	                     ];
	   
	   $scope.scrollLeft = function($event){
		   $log.debug("slide left...");
		   
		   var div = $($event.currentTarget).parent().parent().find(".inner-container")[0];
		   var pos = $(div).css("left");
		   $(div).css("left", 100)
		   $log.debug(pos);
	   }
	   
	   $scope.scrollRight = function(){
		   $log.debug("slide right...");
	   }
	   
	   $scope.trends = ["abc","adsad","asdasd","ewrrw","asdad"];
   };
    
   return ["$scope","$rootScope","$log", SearchController];
});

}());