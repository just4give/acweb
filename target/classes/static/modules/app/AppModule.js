(function(){
	'use strict';
 var dependencies = [
               'angular',
               'modules/app/AppConfig',
               'modules/app/AppController',
               'modules/search/SearchController'
     ]	;
 
define(dependencies, function(angular, config, AppController,SearchController){
    var moduleName = 'module.app';
    var app = angular.module(moduleName, []);
    app.config(config);
    app.controller('appController', AppController);
    app.controller('searchController', SearchController);
    
    return moduleName;
    
});

}());