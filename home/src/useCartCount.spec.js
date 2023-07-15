import { renderHook, act } from '@testing-library/react-hooks';

import { useCartCount } from './useCartCount';

jest.mock('cart/cart', () => ({
    cart: {
        cartItems: [],
        subscribe: jest.fn(),
    },
}));

descibe('useCartCount', () => {
    it('should return the number of items in the cart', () => {
        const { result } = renderHook(() => useCartCount());
        expect(result.current).toBe(0);
    }
});
