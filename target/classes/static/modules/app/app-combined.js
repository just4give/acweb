(function(){
	require.config({
		 priority:'angular',
		  paths:{
			'bootstrap':'ext-lib/bootstrap/dist/js/bootstrap.min',
		    'angular':'ext-lib/angular/angular.min',
		    'domReady':'ext-lib/requirejs-domready/domReady',
		    'angular-route':'ext-lib/angular-route/angular-route.min',
		    'appModule':'modules/app/AppModule',
		    'translate':'ext-lib/angular-translate/angular-translate.min'
		  },
		  shim:{
			'bootstrap':{
				deps: ['angular']
			},
		    'angular':{
		    	exports:'angular'
		    },
		    'angular-route':{
		    	deps: ['angular']
		    },
			'translate':{
				deps: ['angular']
			}
		   
		  }
		});
	

	
	
		var dependencies = ['domReady!','angular','appModule','translate','angular-route'];
		var modules =['pascalprecht.translate','ngRoute'];
		var appName = 'acweb';
		
		require(dependencies, function(document,angular,AppModule){
			
			angular.element(document).ready(function(){
				modules.push(AppModule);
				console.log('bootstraping app '+modules);
				angular.module(appName,modules);
				angular.bootstrap(document,[appName]);
			});
			
			
		});
	
	
	
	
	
}());
define("config", function(){});

