import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProductCardProps {
  id: number;
  title: string;
  price: string;
  image: string;
  onClick: () => void;
}

export function ProductCard({ title, price, image, onClick }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="cursor-pointer group"
      onClick={onClick}
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="aspect-square overflow-hidden bg-gray-100">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-4 sm:p-6">
          <h3 className="mb-2 text-base sm:text-lg">{title}</h3>
          <p className="text-[var(--color-medium-green)] text-base sm:text-lg">{price}</p>
        </div>
      </div>
    </motion.div>
  );
}