(function(){
	'use strict';
 var dependencies = []	;
 
define(dependencies, function(){
	

	var moduleName = 'photo-gallery';
    var module = angular.module(moduleName,[]);
    
   var PhotoGalleryDirective = function($log){
	  
	   $log.debug('PhotoGalleryDirective directive');
	   return {
		    restrict: 'E',
		    controller: PhotoGalleryController,
		    scope: {
		      images: '='
		    },
		    link: function(scope, elem, attrs) {
		    	$log.debug('PhotoGalleryDirective link');
		    	$log.debug(elem);
		    },
		    templateUrl: 'modules/commons/tmpl/photo-gallery.html'
		  };
	   
   };
   
   var PhotoGalleryController = function($scope, $rootScope,$window, $modal, $log){
	   $log.debug('loading PhotoGalleryDirective '+$scope.images.length );
	   
	   var maxwidth = $("#res-gallery").width();
	   $scope.maximage= Math.floor(maxwidth/110);
	   $log.debug("gallery max size "+ $scope.maximage); 
	   var w = angular.element($window);
	   
	   w.bind('resize', function(){
		   maxwidth = $("#res-gallery").width();
		   $scope.maximage= Math.floor(maxwidth/110);
		  $log.debug("gallery max resized..." +$scope.maximage ); 
	   });
	   
	   $scope.openGallery = function(index){
	    	
	    	var myModal = $modal({templateUrl: 'modules/commons/tmpl/modal-photo-gallery.html', show: true});
	    }
	   
	  
   }; 
   
   
   module.directive('gallery',["$log",PhotoGalleryDirective]);

});

}());