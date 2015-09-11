(function(){
	'use strict';
 var dependencies = []	;
 
define(dependencies, function(){
   
   var RestaurantController = function($scope, $rootScope, $log,$modal,$window){
	   $log.debug('loading restaurant controller');
	   
	   /* image gallery setup */
	  
//	   var maxwidth = $("#res-gallery").width();
//	   $scope.maximage= Math.floor(maxwidth/110);
//	   $log.debug("gallery max size "+ $scope.maximage); 
//	   var w = angular.element($window);
//	   
//	   w.bind('resize', function(){
//		   maxwidth = $("#res-gallery").width();
//		   $scope.maximage= Math.floor(maxwidth/110);
//		  $log.debug("gallery max resized..." +$scope.maximage ); 
//	   });
	   
	   
	   
	   
	   $scope.map = { center: { latitude: 42.3583333, longitude: -71.0602778 }, zoom: 16 };
	   $scope.options = {mapMaker: true, backgroundColor: 'black'};
	   
	    $scope.marker = {
	    	      id: 0,
	    	      coords: {
	    	        latitude: 42.3583333,
	    	        longitude: -71.0602778
	    	      },
	    	      options: { draggable: false },
	    	      icon: 'images/marker-red.png'

	    	    };
	    
	    
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
		                    	 url:"bg1.jpg"
		                     }
		                     ];
	    
	    $scope.imageindex = 0;
	    $scope.getImage = function(){
	    	$log.debug('get image called');
	    	return $scope.gallery[ $scope.imageindex].url;
	    }
	    
	   
	    
	    $scope.scrollLeft = function($event){
	    	if($scope.imageindex > 0){
	    		$scope.imageindex -= 1;
	    	}
	    	 
	    }
	    $scope.scrollRight = function($event){
	    	
	    	if($scope.imageindex < $scope.gallery.length-1){
	    		$scope.imageindex += 1;
	    	}
	    }
	    
	    $scope.reviews = ["abc","adsad","asdasd","ewrrw"];
	    $scope.similarStores = ["abc","adsad","asdasd","ewrrw","asdad"];
	    
	    $scope.writeReview = function(){
	    	var reviewModal = $modal({templateUrl: 'modules/restaurant/tmpl/modal-res-review.html', show: true});
	    }
   };
    
   return ["$scope","$rootScope","$log","$modal","$window", RestaurantController];
});

}());