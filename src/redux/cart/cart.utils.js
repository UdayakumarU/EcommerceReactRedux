export const addItemToCart = (existingItems, newItem) => {
    const isItemAlreadyExist = existingItems.find( item => item.id === newItem.id);
    if(isItemAlreadyExist){
        return existingItems.map( item =>(
            item.id === newItem.id ?  {...item, quantity: item.quantity + 1}:item
        ));
    }
    return [ ...existingItems,{...newItem,quantity:1}];
};  

export const removeItemFromCart = (existingItems, removeItem) => {
    const isItemAlreadyExist = existingItems.find( item => item.id === removeItem.id);
    if(isItemAlreadyExist.quantity > 1){
        return existingItems.map( item => (item.id === removeItem.id? {...item, quantity: item.quantity - 1 }:item));
    }
    return existingItems.filter(item => item.id !== removeItem.id);
}