/**
 * Created by krisPro on 16/3/4.
 */


function TodoConstants(FluxUtil) {
    return FluxUtil.defineConstants([
        'ADD_ITEM', 'REMOVE_ITEM'
    ]);
}

function demoAction(TodoConstants,TodoDispatcher) {
    return {
        addItem: function addItem(item) {
            TodoDispatcher.handleViewAction({
                actionType: TodoConstants.ADD_ITEM,
                item: item
            });
        },
        removeItem: function removeItem(item) {
            TodoDispatcher.handleViewAction({
                actionType: TodoConstants.REMOVE_ITEM,
                item: item
            });
        }
    };
}
/**
 * Created by krisPro on 16/3/4.
 */
function cartCtrl($scope,cartActions,TodoStore){
    $scope.resetItems=function(){
        $scope.cartItems = TodoStore.getItems();
    }
    $scope.resetItems();
    $scope.removeItem=function(item){
        cartActions.removeItem(item);
    }
    TodoStore.bindState($scope, function updateTodosFromStore() {
        $scope.cartItems = TodoStore.getItems();
    });
};
/**
 * Created by krisPro on 16/3/4.
 */
function ListCtrl($scope,cartActions,TodoStore){
    $scope.addToCart=function(item){
        cartActions.addItem(item);
    }
    TodoStore.bindState($scope, function updateTodosFromStore() {
        $scope.cartItems = TodoStore.getCatItems();
    });
};

/**
 * Created by krisPro on 16/3/4.
 */
function TodoDispatcher(FluxUtil) {
    return FluxUtil.createDispatcher();
}
/**
 * Created by krisPro on 16/3/4.
 */

function TodoStore(TodoDispatcher, TodoConstants, FluxUtil) {
    var _cartItems = [],_catItems=[{ id: 1, title: 'Widget #1', cost: 1 }, { id: 2, title: 'Widget #2', cost: 2 },
            { id: 3, title: 'Widget #3', cost: 3 }],
        _id = 0;

    function _addItem(catalogItem) {
        console.log("--")
        var items = _cartItems.filter(function (i) {
            return i.catalogItem == catalogItem;
        });
        if (items.length == 0) {
            _cartItems.push({ qty: 1, catalogItem: catalogItem });
        } else {
            items[0].qty += 1;
        }
    }

    function _removeItem(catalogItem) {
        var index = _cartItems.indexOf(catalogItem);
        _cartItems.splice(index, 1);
    }


    var store = FluxUtil.createStore({
        getItems: function() {
            return _cartItems;
        },
        getCatItems:function(){
            return _catItems;
        },
        dispatcherIndex: TodoDispatcher.register(function(payload) {
            var action = payload.action;

            switch(action.actionType) {
                case TodoConstants.ADD_ITEM:
                    _addItem(action.item);
                    break;

                case TodoConstants.REMOVE_ITEM:
                    _removeItem(action.item);
                    break;
            }

            store.emitChange(action);

            return true;
        })
    });

    return store;
}




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
