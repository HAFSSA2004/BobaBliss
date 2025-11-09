"use client"

import { createContext, useContext, useState, useEffect } from "react"

export interface CartItem {
  id: string | number
  name: string
  description: string
  price: number
  category: string
  image: string
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  favorites: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string | number) => void
  updateQuantity: (id: string | number, quantity: number) => void
  toggleFavorite: (item: CartItem) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [favorites, setFavorites] = useState<CartItem[]>([])
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    const savedItems = localStorage.getItem("cartItems")
    const savedFavorites = localStorage.getItem("cartFavorites")

    if (savedItems) setItems(JSON.parse(savedItems))
    if (savedFavorites) setFavorites(JSON.parse(savedFavorites))
    setIsHydrated(true)
  }, [])

  useEffect(() => {
    if (isHydrated) localStorage.setItem("cartItems", JSON.stringify(items))
  }, [items, isHydrated])

  useEffect(() => {
    if (isHydrated) localStorage.setItem("cartFavorites", JSON.stringify(favorites))
  }, [favorites, isHydrated])

  const addItem = (item: CartItem) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id)
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        )
      }
      return [...prevItems, item]
    })
  }

  const removeItem = (id: string | number) =>
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))

  const updateQuantity = (id: string | number, quantity: number) =>
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    )

  const toggleFavorite = (item: CartItem) => {
    setFavorites((prevFavorites) => {
      const existingIndex = prevFavorites.findIndex((f) => f.id === item.id)
      if (existingIndex > -1) return prevFavorites.filter((_, i) => i !== existingIndex)
      return [...prevFavorites, item]
    })
  }

  const clearCart = () => setItems([])

  return (
    <CartContext.Provider
      value={{ items, favorites, addItem, removeItem, updateQuantity, toggleFavorite, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart must be used within CartProvider")
  return context
}
