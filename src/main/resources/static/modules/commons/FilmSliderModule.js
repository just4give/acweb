(function(){
	'use strict';
 var dependencies = []	;
 
define(dependencies, function(){
	

	var moduleName = 'film-slider';
    var module = angular.module(moduleName,[]);
    
   var FilmSliderDirective = function($log){
	  
	   $log.debug('slider directive');
	   return {
		    restrict: 'E',
		    controller: FilmSliderController,
		    scope: {
		      images: '='
		    },
		    link: function(scope, elem, attrs) {
		    	$log.debug('slider directive link');
		    	$log.debug(elem);
		    },
		    templateUrl: 'modules/commons/tmpl/film-slider.html'
		  };
	   
   };
   
   var FilmSliderController = function($scope, $rootScope,$window, $log){
	   $log.debug('loading FilmSliderController '+$scope.images.length );
	   
	   $scope.currentIndex = 0;
	   
	   var width = $(".inner-container:first").width();
	   var sliderSize= width/100;
	   $log.debug("slider size "+sliderSize); 
	   
	   var w = angular.element($window);
	   w.bind('resize', function(){
		  sliderSize = $(".inner-container:first").width()/100; 
		  $(".inner-container").css("left", 0);
		  $log.debug("slider resized..." +sliderSize ); 
	   });
	   
	   
	   
	   
	   $scope.scrollLeft = function($event){
		   $log.debug("slide left...");
		   if( $scope.currentIndex < 0){
			   $scope.currentIndex += 1;
			   var div = $($event.currentTarget).parent().parent().find(".inner-container")[0];
			  
			   $(div).css("left", 100*$scope.currentIndex);
		   }
		   
		  
	   }
	   
	   $scope.scrollRight = function($event){
		   $log.debug("slide right...");
		   
		   if(  $scope.currentIndex > ($scope.images.length -sliderSize)*-1 ){
			   $scope.currentIndex -= 1;
				  
			   var div = $($event.currentTarget).parent().parent().find(".inner-container")[0];
			  
			   $(div).css("left", 100*$scope.currentIndex);  
		   }
		   
	   }
	   
	   
   }; 
   
   
   module.directive('filmslider',["$log",FilmSliderDirective]);

});

}());