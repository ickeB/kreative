import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { ProductDetailModal } from "./ProductDetailModal";
import { Button } from "./ui/button";

interface Product {
  id: number;
  title: string;
  price: string;
  description: string;
  image: string;
  dimensions: string;
  materials: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Keramik Vase 'Morgengrün'",
    price: "€ 45,00",
    description: "Eine elegante handgetöpferte Vase mit organischen Formen und einer sanften grünen Glasur. Perfekt für frische Blumen oder als dekoratives Element.",
    image: "https://images.unsplash.com/photo-1723779233145-7205e0f06c7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMHZhc2V8ZW58MXx8fHwxNjMzMjE2NjE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    dimensions: "25 cm × 15 cm",
    materials: "Ton, glasiert",
  },
  {
    id: 2,
    title: "Schale 'Waldgrün'",
    price: "€ 35,00",
    description: "Handgeformte Schale mit rustikaler Oberfläche. Ideal für Obst, Salate oder als Serviergeschirr.",
    image: "https://images.unsplash.com/photo-1678791673777-57274271e434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHBvdHRlcnklMjBib3dsfGVufDF8fHx8MTYzMzIyNDE5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    dimensions: "20 cm × 20 cm × 8 cm",
    materials: "Steinzeug, matt glasiert",
  },
  {
    id: 3,
    title: "Kaffeetasse 'Blattwerk'",
    price: "€ 28,00",
    description: "Gemütliche Tasse mit individueller Form und natürlicher Haptik. Jedes Stück ist ein Unikat.",
    image: "https://images.unsplash.com/photo-1666447606111-33167792af81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwY3VwJTIwbXVnfGVufDF8fHx8MTYzMzMwMTIwNXww&ixlib=rb-4.1.0&q=80&w=1080",
    dimensions: "12 cm × 9 cm",
    materials: "Ton, innen glasiert",
  },
  {
    id: 4,
    title: "Teller-Set 'Naturell'",
    price: "€ 120,00",
    description: "Set aus 4 handgetöpferten Tellern mit organischer Formgebung. Perfekt für besondere Anlässe.",
    image: "https://images.unsplash.com/photo-1760124056943-eb64936d3d2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwcGxhdGUlMjBkaXNofGVufDF8fHx8MTYzMzMwMTIwNXww&ixlib=rb-4.1.0&q=80&w=1080",
    dimensions: "26 cm Durchmesser",
    materials: "Steinzeug, spülmaschinenfest",
  },
  {
    id: 5,
    title: "Pflanztopf 'Wachstum'",
    price: "€ 38,00",
    description: "Stilvoller Übertopf für Zimmerpflanzen mit Drainageloch. Bringt natürliche Schönheit in Ihr Zuhause.",
    image: "https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcGxhbnRlciUyMHBvdHxlbnwxfHx8fDE2MzMzMDEyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    dimensions: "18 cm × 18 cm × 16 cm",
    materials: "Ton, wetterfest glasiert",
  },
  {
    id: 6,
    title: "Skulptur 'Harmonie'",
    price: "€ 85,00",
    description: "Dekorative Keramikskulptur mit fließenden Linien. Ein einzigartiges Kunstwerk für Ihr Interieur.",
    image: "https://images.unsplash.com/photo-1762553395050-ec394919a6ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWNvcmF0aXZlJTIwcG90dGVyeSUyMHNjdWxwdHVyZXxlbnwxfHx8fDE2MzMyNDI3MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    dimensions: "30 cm × 12 cm × 20 cm",
    materials: "Ton, teilweise glasiert",
  },
];

interface ProductGalleryProps {
  onNavigateToHome: () => void;
}

export function ProductGallery({ onNavigateToHome }: ProductGalleryProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  return (
    <div className="min-h-screen">
      {/* Back Button & Title */}
      <section className="bg-gradient-to-br from-[var(--color-medium-green)] to-[var(--color-primary-green)] text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <Button
            onClick={onNavigateToHome}
            variant="ghost"
            className="text-white hover:bg-white/20 mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Zurück zur Startseite
          </Button>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-white mb-4">Unsere Galerie</h2>
            <p className="text-lg sm:text-xl text-[var(--color-accent-green)] leading-relaxed">
              Entdecken Sie handgefertigte Keramikkunst. Jedes Stück ist ein Unikat und kann 
              individuell nach Ihren Wünschen angepasst werden.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard
                  {...product}
                  onClick={() => handleProductClick(product)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
