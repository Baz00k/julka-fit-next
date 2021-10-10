import { createContext, useContext, useReducer, useEffect } from 'react'
import { getStorageItem, setStorageItem } from './storage'

const defaultCart = {
    products: [],
    fromStorage: true
}

export const CartContext = createContext();

export function useCartState() {

    const [cart, dispatch] = useReducer(cartReducer, defaultCart);

    useEffect(() => {
        dispatch({ type: 'getFromStorage' });
    }, []);

    function addToCart(id) {
        dispatch({ type: 'add', payload: id });
    }

    function removeFromCart(id) {
        dispatch({ type: 'remove', payload: id });
    }

    return {
        cart,
        addToCart,
        removeFromCart
    }

}

function cartReducer(state, action) {
    let newCart = { ...state };
    newCart.fromStorage = false;
    switch (action.type) {
        case 'add':
            if (newCart.products.includes(action.payload)) {
                return newCart;
            }
            newCart.products.push(action.payload);
            setStorageItem('cart', newCart);
            return newCart;
        case 'remove':
            let index = newCart.products.indexOf(action.payload);
            if (index != -1) {
                newCart.products.splice(index, 1);
                setStorageItem('cart', newCart);
            }
            return newCart;
        case 'getFromStorage':
            let storageCart = getStorageItem('cart');
            if (storageCart && storageCart.products) {
                storageCart.fromStorage = true;
                return storageCart;
            }
            setStorageItem('cart', defaultCart);
            return defaultCart;
        default:
            throw new Error('Forbidden action for useCart reducer');
    }
}

export function useCart() {
    const cart = useContext(CartContext);
    return cart;
}