import { renderHook, act } from '@testing-library/react-hooks';

import { useCartCount } from './useCartCount';

jest.mock('cart/cart', () => ({
    cart: {
        cartItems: [],
        subscribe: (cb) => {
            callback = cb;
        }
    },
}));

let callback = () => {};

it('should return the number of items in the cart', () => {
    const { result } = renderHook(() => useCartCount());
    expect(result.current).toBe(0);
})