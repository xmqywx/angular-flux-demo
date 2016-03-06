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



