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