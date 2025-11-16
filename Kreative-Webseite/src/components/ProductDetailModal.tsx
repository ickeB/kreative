import { useState } from "react";
import { X, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { toast } from "sonner@2.0.3";

interface Product {
  id: number;
  title: string;
  price: string;
  description: string;
  image: string;
  dimensions: string;
  materials: string;
}

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductDetailModal({ product, isOpen, onClose }: ProductDetailModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [inquiry, setInquiry] = useState("");

  if (!product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock inquiry submission
    console.log("Inquiry submitted:", { name, email, inquiry, productId: product.id });
    
    toast.success("Anfrage gesendet!", {
      description: "Wir melden uns bald bei Ihnen.",
    });
    
    // Reset form
    setName("");
    setEmail("");
    setInquiry("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-end sm:items-center justify-center p-0 sm:p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <button
                    onClick={onClose}
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-5 h-5 text-[var(--color-primary-green)]" />
                  </button>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className="aspect-square sm:aspect-auto bg-gray-100">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="p-6 sm:p-8 flex flex-col">
                      <div className="flex-1">
                        <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl">{product.title}</h2>
                        <p className="mb-4 sm:mb-6 text-lg sm:text-xl text-[var(--color-medium-green)]">{product.price}</p>
                        
                        <div className="mb-6">
                          <p className="text-gray-700 mb-4 text-sm sm:text-base">{product.description}</p>
                          
                          <div className="space-y-2 bg-[var(--color-off-white)] p-3 sm:p-4 rounded-xl text-sm sm:text-base">
                            <div>
                              <span className="text-[var(--color-primary-green)]">Maße: </span>
                              <span className="text-gray-700">{product.dimensions}</span>
                            </div>
                            <div>
                              <span className="text-[var(--color-primary-green)]">Material: </span>
                              <span className="text-gray-700">{product.materials}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Inquiry Form */}
                      <div className="border-t border-gray-200 pt-4 sm:pt-6">
                        <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl">Anfrage stellen</h3>
                        <p className="text-sm text-gray-600 mb-4 bg-[var(--color-off-white)] p-3 rounded-lg">
                          💡 Nach Fertigstellung können Sie Ihr individuelles Objekt im Schränkchen in Tecklenburg abholen.
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                          <Input
                            type="text"
                            placeholder="Ihr Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="border-[var(--color-light-green)] focus:border-[var(--color-medium-green)] text-base"
                          />
                          <Input
                            type="email"
                            placeholder="Ihre E-Mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="border-[var(--color-light-green)] focus:border-[var(--color-medium-green)] text-base"
                          />
                          <Textarea
                            placeholder="Ihre Anfrage (z.B. 'Ich hätte das gerne in einer anderen Farbe')"
                            value={inquiry}
                            onChange={(e) => setInquiry(e.target.value)}
                            required
                            rows={3}
                            className="border-[var(--color-light-green)] focus:border-[var(--color-medium-green)] text-base resize-none"
                          />
                          <Button
                            type="submit"
                            className="w-full bg-[var(--color-medium-green)] hover:bg-[var(--color-primary-green)] text-white text-base sm:text-lg py-5 sm:py-6"
                          >
                            <Send className="w-4 h-4 mr-2" />
                            Anfrage senden
                          </Button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}