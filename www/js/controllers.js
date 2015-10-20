angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

/* .controller('MapController', function($scope, $cordovaGeolocation, $ionicloading){
  document.addEventListener("deviceready", onDeviceReady, false);
   function onDeviceReady() {
     //code goes here
     $ionicLoading.show({
       template: '<ion-spinner icon="bubbles"></ion-spinner><br/>Finding your body in space!'
     });

     var posOption = {
       enableHighAccuracy: true,
       timeout: 20000,
       maximumAge: 0
     };
     $cordovaGeolocation,getCurrentPosition(posOptions).then(function (position) {
       var lat = position.coords.latitude;
       var long = position.coords.longitude;

       var myLatlng = new google.maps.LatLng(lat, long);

       var myOptions = {
         center: myLanlng,
         zoom: 16,
         mapTypeId: google.maps.MapTypeId.ROADMAP
       };
       var map=new google.maps.Map(document.getElementById("map"), mapOptions);
       $scope.map = map;
       $ionicLoading.hide();
     }, function(err) {
       $ionicLoading.hide();
       console.log(err);
     });
     }
 });
*/
.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

  .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('HomeCtrl',
		["$sce", function ($sce) {
			this.config = {
				sources: [
					{src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"), type: "video/mp4"},
					{src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"), type: "video/webm"},
					{src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg"}
				],
				theme: "lib/videogular-themes-default/videogular.css",
				plugins: {
					poster: "http://www.videogular.com/assets/images/videogular.png"
				}
			};
		}]
	)

  .controller('AccountCtrl', function($scope) {
  });
