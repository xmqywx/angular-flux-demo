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