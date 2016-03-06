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