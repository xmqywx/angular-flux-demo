/**
 * Created by krisPro on 16/3/4.
 */
var app = angular.module('cart', ['ngFlux']).
factory('TodoActions', demoAction).
controller('ListCtrl',['$scope','TodoActions','TodoStore', ListCtrl]).
controller('CartCtrl',['$scope','TodoActions','TodoStore', cartCtrl]).
factory('TodoDispatcher', TodoDispatcher).
factory('TodoConstants', TodoConstants).
factory('TodoStore', TodoStore)
