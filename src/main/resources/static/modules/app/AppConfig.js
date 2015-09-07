(function(){
	'use strict';
 var dependencies = []	;
 
define(dependencies, function(){
   
   var AppConfig = function($translateProvider, $stateProvider, $urlRouterProvider,uiGmapGoogleMapApiProvider){
	  
	 
	   
	    
	    $stateProvider
	    	.state('/', {
	            url: '/',
	            templateUrl: 'modules/app/tmpl/welcome.html',
	            controller: 'appController'
	        })
	        .state('search', {
	            url: '/search',
	            templateUrl: 'modules/search/tmpl/search.html',
	            controller: 'searchController'
	        })
	        .state('restaurant', {
	            url: '/restaurant/:name',
	            templateUrl: 'modules/restaurant/tmpl/restaurant.html',
	            controller: 'restaurantController'
	        });
	    
	    $urlRouterProvider.otherwise('/');
	    
	    
	    $translateProvider.translations('en', {
            TITLE: 'Hello',
            FOO: 'This is a paragraph.',
            BUTTON_LANG_EN: 'english',
            BUTTON_LANG_DE: 'german'
          });
        $translateProvider.translations('de', {
            TITLE: 'Hallo',
            FOO: 'Dies ist ein Paragraph.',
            BUTTON_LANG_EN: 'englisch',
            BUTTON_LANG_DE: 'deutsch'
          });
       
       $translateProvider.preferredLanguage('en');
       
      
      

   };
    
   return ["$translateProvider","$stateProvider", "$urlRouterProvider",AppConfig];
});

}());