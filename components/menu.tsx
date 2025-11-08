"use client"

import { useEffect, useState } from "react"
import ProductDetailModal from "./product-detail-modal"

const menuItems = [
  {
    id: 1,
    name: "Classic Brown Sugar Milk Tea",
    price: "$5.50",
    description: "Rich milk tea with chewy brown sugar boba",
    image: "/1.png",
    images: [
      "/1.png",
      "/brown-sugar-bubble-tea-alternative-view.jpg",
      "/brown-sugar-boba-pearls-close-up.jpg",
    ],
    details:
      "Our signature brown sugar milk tea is made with premium Assam black tea, fresh milk, and our house-made brown sugar syrup. The chewy boba pearls are cooked fresh daily to ensure perfect texture.",
  },
  {
    id: 2,
    name: "Taro Bubble Tea",
    price: "$5.95",
    description: "Creamy taro flavor with premium boba",
    image: "/2.png",
    images: ["/2.png", "/taro-bubble-tea-side-view.jpg", "/taro-bubble-tea-top-view.jpg"],
    details:
      "Indulge in our creamy taro bubble tea, made with real taro root and smooth condensed milk. The beautiful purple color and rich, nutty flavor make this a customer favorite.",
  },
  {
    id: 3,
    name: "Mango Smoothie",
    price: "$6.50",
    description: "Fresh mango with tapioca pearls",
    image: "6.png",
    images: ["/6.png", "/mango-smoothie-fresh-fruit.jpg", "/mango-tapioca-pearls.jpg"],
    details:
      "Experience tropical bliss with our fresh mango smoothie, blended with real mango puree and topped with silky tapioca pearls. Perfect for a refreshing summer drink.",
  },
  {
    id: 4,
    name: "Matcha Latte",
    price: "$6.00",
    description: "Traditional matcha with creamy milk foam",
    image: "/4.png",
    images: ["/4.png", "/matcha-latte-foam-art.jpg", "/matcha-powder-whisking.jpg"],
    details:
      "Enjoy the authentic Japanese tradition with our ceremonial-grade matcha latte. Expertly whisked and topped with velvety milk foam for the perfect balance of earthy and creamy.",
  },
  {
    id: 5,
    name: "Strawberry Banana",
    price: "$5.75",
    description: "Sweet strawberry and banana blend",
    image: "/5.png",
    images: ["/5.png", "/strawberry-banana-smoothie-blend.jpg", "/fresh-strawberries-and-bananas.jpg"],
    details:
      "A delightful combination of fresh strawberries and ripe bananas blended into a smooth, creamy drink. This fruity favorite is packed with natural sweetness and nutrition.",
  },
  {
    id: 6,
    name: "Coffee Boba",
    price: "$5.95",
    description: "Light and refreshing honeydew flavor",
    image: "/3.png",
    images: ["/3.png", "/honeydew-melon-bubble-tea.jpg", "/honeydew-fresh-juice.jpg"],
    details:
      "Light, refreshing, and deliciously sweet, our honeydew bubble tea is made with real honeydew juice and premium boba. The perfect choice when you want something cool and crisp.",
  },
]

export default function Menu() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<(typeof menuItems)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleImageClick = (item: (typeof menuItems)[0]) => {
    setSelectedProduct(item)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  return (
    <section
      id="menu"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-accent/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`${isVisible ? "animate-fade-in" : "opacity-0"} text-center mb-16`}>
          <p className="text-accent text-lg font-medium mb-2">Our Selection</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Popular Bubble Tea Drinks
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Crafted with care using the finest ingredients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              className={`${isVisible ? "animate-fade-in" : "opacity-0"} group`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-full flex flex-col">
              <div
  className="relative cursor-pointer overflow-hidden h-100 rounded-2xl"
  onClick={() => handleImageClick(item)}
>
  <img
    src={item.image || "/placeholder.svg"}
    alt={item.name}
    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
  />
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
    <h3 className="text-xl font-bold text-white">{item.name}</h3>
    <p className="text-sm text-white/90">{item.description}</p>
    <div className="flex items-center justify-between mt-2">
      <span className="text-2xl font-bold text-white">{item.price}</span>
      <button className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
        Add to Cart
      </button>
    </div>
  </div>
</div>


                
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProductDetailModal isOpen={isModalOpen} product={selectedProduct} onClose={handleCloseModal} />
    </section>
  )
}
