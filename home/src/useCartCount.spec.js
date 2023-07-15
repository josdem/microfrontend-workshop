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

descibe('useCartCount', () => {
    it('should return the number of items in the cart', () => {
        const { result } = renderHook(() => useCartCount());
        expect(result.current).toBe(0);
    })

    it("should return cart count", () => {
        const { result } = renderHook(() => useCartCount());
        act(() => {
            callback({cartIntems: [{sku:100}] });
        });
        expect(result.current).toBe(1);
    })
});
