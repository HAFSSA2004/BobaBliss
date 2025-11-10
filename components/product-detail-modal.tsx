"use client"

import { X } from "lucide-react"
import { useState } from "react"
import { useCart } from "@/hooks/use-cart" // import your cart hook

interface ProductDetailModalProps {
  isOpen: boolean
  product: {
    id: number
    name: string
    price: string
    description: string
    image: string
    images?: string[]
    details?: string
  } | null
  onClose: () => void
}

export default function ProductDetailModal({ isOpen, product, onClose }: ProductDetailModalProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const { addItem } = useCart() // get addItem from the cart

  if (!isOpen || !product) return null

  const images = product.images || [product.image]
  const currentImage = images[selectedImageIndex]

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: parseFloat(product.price.replace("$", "")),
      image: product.image,
      description: product.description,
      quantity: 1,
      category: product.details || "" // optional, can store category or details
    })
    onClose() // close modal after adding to cart
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div
        className="bg-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <div className="sticky top-0 bg-card border-b border-border flex justify-end p-4 z-10">
          <button onClick={onClose} className="p-2 hover:bg-muted rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Images Section */}
            <div className="flex flex-col gap-4">
              <div className="rounded-xl overflow-hidden flex items-center justify-center min-h-96">
                <img
                  src={currentImage || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image Thumbnails */}
              {images.length > 1 && (
                <div className="flex gap-2">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImageIndex === index
                          ? "border-accent"
                          : "border-border hover:border-muted-foreground"
                      }`}
                    >
                      <img
                        src={img || "/placeholder.svg"}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details Section */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">{product.name}</h2>
                <p className="text-3xl font-bold text-primary mb-6">{product.price}</p>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">DESCRIPTION</h3>
                  <p className="text-foreground">{product.description}</p>
                </div>

                {product.details && (
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-muted-foreground mb-2">DETAILS</h3>
                    <p className="text-foreground text-sm leading-relaxed">{product.details}</p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-8">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
                >
                  Add to Cart
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-3 border border-border rounded-full font-semibold hover:bg-muted transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
