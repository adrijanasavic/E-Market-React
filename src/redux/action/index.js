// For Add Item to Cart
export const addCart = (product) => {
    return {
        type: "ADD_ITEM",
        payload : product
    }
}

// For elete Item from Cart
export const deleteCart = (product) => {
    return {
        type: "DELETE_ITEM",
        payload: product
    }
}