(function(){
	'use strict';
 var dependencies = [
               'angular',
               'modules/app/AppConfig',
               'modules/app/AppController',
               'modules/search/SearchController',
               'modules/restaurant/RestaurantController'
     ]	;
 
define(dependencies, function(angular, config, AppController,SearchController,RestaurantController){
    var moduleName = 'module.app';
    var app = angular.module(moduleName, []);
    app.config(config);
    app.controller('appController', AppController);
    app.controller('searchController', SearchController);
    app.controller('restaurantController',RestaurantController);
    
    return moduleName;
    
});

}());