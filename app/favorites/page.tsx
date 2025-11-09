"use client"

import { useCart } from "@/hooks/use-cart"
import Header from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Trash2, ArrowLeft, Heart, ShoppingCart } from "lucide-react"
import { useState } from "react"

export default function FavoritesPage() {
  const { favorites, toggleFavorite, addItem } = useCart()
  const [addedItems, setAddedItems] = useState<string[]>([])

  const handleAddToCart = (product: any) => {
    addItem({ ...product, quantity: 1 })
    setAddedItems([...addedItems, product.id])
    setTimeout(() => {
      setAddedItems(addedItems.filter((id) => id !== product.id))
    }, 2000)
  }

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 px-4 max-w-4xl mx-auto py-12">
          <div className="text-center">
            <Heart size={48} className="mx-auto mb-4 text-muted-foreground" />
            <h1 className="text-3xl font-bold mb-4">Your Favorites</h1>
            <p className="text-muted-foreground mb-8">You haven't liked any items yet. Start exploring our menu!</p>
            <Link href="/">
              <Button className="bg-primary text-primary-foreground">
                <ArrowLeft size={18} className="mr-2" />
                Back to Menu
              </Button>
            </Link>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 px-4 max-w-6xl mx-auto py-12">
        <div className="mb-8">
          <Link href="/" className="flex items-center gap-2 text-primary hover:underline">
            <ArrowLeft size={18} />
            Back to Menu
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-2">Your Favorite Items</h1>
        <p className="text-muted-foreground mb-8">{favorites.length} item(s) saved</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle className="text-lg">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</span>
                  <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">{product.category}</span>
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 bg-primary text-primary-foreground"
                  >
                    <ShoppingCart size={18} className="mr-2" />
                    {addedItems.includes(product.id) ? "Added!" : "Add to Cart"}
                  </Button>
                  <Button
                    onClick={() => toggleFavorite(product)}
                    variant="outline"
                    size="sm"
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 size={18} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
