'use strict';

angular.module('poeGuildMate')
  .controller('MainCtrl', function($scope, $firebase) {
    var ref = new Firebase("https://poeguildmate.firebaseio.com/" + "users");
    var sync = $firebase(ref);

    $scope.users = $firebase(ref).$asObject();
  });