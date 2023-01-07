import { createContext, ReactNode, useContext } from "react";


export function useShoppingCart() {
    return useContext(ShoppingCartContext);
}

type ShoppingCartProviderProps = {
    children: ReactNode;
};

type ShoppingCartContextType = {
    getItemQuantity: (id: number) => number;
    increaseCartQuantity: (id: number) => void;
    decreaseCartQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
};

const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  return (
    <ShoppingCartContext.Provider>{children}</ShoppingCartContext.Provider>
  );
}
