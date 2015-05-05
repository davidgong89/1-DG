// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

//CONFIGURATION+ROUTE
app.config(function($stateProvider, $urlRouterProvider) {
$urlRouterProvider.otherwise('/profile')
	 $stateProvider
	.state('profile', {
			url:"/profile",
			templateUrl:"templates/profile.html",
			controller:"profileCtrl"
	})
})


app.controller('profileCtrl', function($scope, $state) {
	$scope.share = function(){
		var msg = "Make your mark in the app revolution, join us at App Legacy 88!"
		window.plugins.socialsharing.share(msg, null, null,'http://www.applegacy88.com/');
	};
	
	$scope.loadHomePage = function(){
			window.open('http://www.applegacy88.com', '_system', 'location=yes');
	};
	
	$scope.loadFb = function(){
			window.open('http://www.facebook.com', '_system', 'location=yes');
	};
	
	$scope.loadTwitter = function(){
			window.open('http://www.twitter.com', '_system', 'location=yes');
	};
	
	$scope.loadGooglePlus = function(){
			window.open('https://plus.google.com/', '_system', 'location=yes');
	};
})