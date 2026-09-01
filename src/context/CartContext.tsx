'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Dish, CartItem, LocationInfo } from '@/types';
import { LOCATIONS_DATA } from '@/data/restaurantData';

interface CartContextType {
  cart: CartItem[];
  addToCart: (dish: Dish, quantity?: number, instructions?: string) => void;
  removeFromCart: (dishId: string) => void;
  updateQuantity: (dishId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isReservationOpen: boolean;
  setIsReservationOpen: (open: boolean) => void;
  selectedDishModal: Dish | null;
  setSelectedDishModal: (dish: Dish | null) => void;
  currentLocation: LocationInfo;
  setCurrentLocation: (loc: LocationInfo) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [selectedDishModal, setSelectedDishModal] = useState<Dish | null>(null);
  const [currentLocation, setCurrentLocation] = useState<LocationInfo>(LOCATIONS_DATA[0]);

  // Load cart from localStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem('delicia_cart');
      if (saved) {
        setCart(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('delicia_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  const addToCart = (dish: Dish, quantity = 1, instructions = '') => {
    setCart((prev) => {
      const existing = prev.find((item) => item.dish.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.dish.id === dish.id
            ? { ...item, quantity: item.quantity + quantity, specialInstructions: instructions || item.specialInstructions }
            : item
        );
      }
      return [...prev, { dish, quantity, specialInstructions: instructions }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (dishId: string) => {
    setCart((prev) => prev.filter((item) => item.dish.id !== dishId));
  };

  const updateQuantity = (dishId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(dishId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.dish.id === dishId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((total, item) => total + item.dish.price * item.quantity, 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
        isCartOpen,
        setIsCartOpen,
        isReservationOpen,
        setIsReservationOpen,
        selectedDishModal,
        setSelectedDishModal,
        currentLocation,
        setCurrentLocation,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
