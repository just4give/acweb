(function(){
	require.config({
		 priority:'angular',
		  paths:{
			'jquery':'ext-lib/jquery/dist/jquery.min',
			'bootstrap':'ext-lib/bootstrap/dist/js/bootstrap.min',
		    'angular':'ext-lib/angular/angular.min',
		    'domReady':'ext-lib/requirejs-domready/domReady',
		    'angular-route':'ext-lib/angular-ui-router/release/angular-ui-router.min',
		    'appModule':'modules/app/AppModule',
		    'translate':'ext-lib/angular-translate/angular-translate.min',
		    'filmSlider':'modules/commons/FilmSliderModule',
		    'angularStrap':'ext-lib/angular-strap/dist/angular-strap.min',
		    'angularStrapTpl':'ext-lib/angular-strap/dist/angular-strap.tpl.min',
		    'angularAnimate':'ext-lib/angular-animate/angular-animate.min'
		    
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
			},
			'filmSlider':{
				deps: ['angular']
			},
			'angularStrap':{
				deps: ['angular']
			},
			'angularStrapTpl':{
				deps: ['angular']
			},
			'angularAnimate':{
				deps: ['angular']
			}
		   
		  }
		});
	

	
	
		var dependencies = ['domReady!','angular','appModule','jquery','translate','angular-route','filmSlider','angularStrap','angularStrapTpl','angularAnimate'];
		var modules =['pascalprecht.translate','ui.router','film-slider','ngAnimate','mgcrea.ngStrap'];
		var appName = 'acweb';
		
		require(dependencies, function(document,angular,AppModule){
			
			angular.element(document).ready(function(){
				modules.push(AppModule);
				console.log(modules);
				angular.module(appName,modules);
				angular.bootstrap(document,[appName]);
			});
			
			
		});
	
	
	
	
	
}());