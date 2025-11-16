import { motion } from "motion/react";
import { ArrowRight, Flame, Clock, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { PotteryIcon } from "./PotteryIcon";

interface HomePageProps {
  onNavigateToGallery: () => void;
}

export function HomePage({ onNavigateToGallery }: HomePageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-medium-green)] to-[var(--color-primary-green)] text-white py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block mb-6">
              <PotteryIcon className="w-16 h-16 sm:w-20 sm:h-20 text-white" />
            </div>
            <h1 className="text-white mb-6">Willkommen bei einzigArtig</h1>
            <p className="text-xl sm:text-2xl text-[var(--color-accent-green)] leading-relaxed mb-8">
              Handgefertigte Keramikkunst aus Leidenschaft
            </p>
            <Button
              onClick={onNavigateToGallery}
              className="bg-white text-[var(--color-primary-green)] hover:bg-[var(--color-accent-green)] hover:text-white text-lg px-8 py-6"
            >
              Zur Galerie
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-[var(--color-primary-green)] mb-8 text-center">Über die Töpferei</h2>
              
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Die Töpferei wird hobbymäßig mit viel Liebe zum Detail betrieben. 
                  Jedes Stück durchläuft mehrere Brände und wird sorgfältig von Hand gefertigt – 
                  ein Prozess, der Zeit und Geduld erfordert.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Von der ersten Formgebung bis zum finalen Glasurbrand kann es eine Weile dauern, 
                  bis ein Objekt fertiggestellt ist. Doch gerade diese handwerkliche Sorgfalt macht 
                  jedes Stück zu einem echten Unikat.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-3 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-[var(--color-off-white)] p-6 rounded-2xl text-center"
                >
                  <Flame className="w-12 h-12 text-[var(--color-medium-green)] mx-auto mb-4" />
                  <h3 className="text-[var(--color-primary-green)] mb-2">Mehrere Brände</h3>
                  <p className="text-gray-600">
                    Jedes Objekt durchläuft mehrere Brennvorgänge für höchste Qualität
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-[var(--color-off-white)] p-6 rounded-2xl text-center"
                >
                  <Clock className="w-12 h-12 text-[var(--color-medium-green)] mx-auto mb-4" />
                  <h3 className="text-[var(--color-primary-green)] mb-2">Mit Zeit & Liebe</h3>
                  <p className="text-gray-600">
                    Hobbymäßig betrieben mit viel Sorgfalt und Aufmerksamkeit
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-[var(--color-off-white)] p-6 rounded-2xl text-center"
                >
                  <MapPin className="w-12 h-12 text-[var(--color-medium-green)] mx-auto mb-4" />
                  <h3 className="text-[var(--color-primary-green)] mb-2">In Tecklenburg</h3>
                  <p className="text-gray-600">
                    Objekte können vor Ort besichtigt werden
                  </p>
                </motion.div>
              </div>

              {/* Location Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-gradient-to-br from-[var(--color-medium-green)] to-[var(--color-primary-green)] text-white p-8 sm:p-12 rounded-3xl text-center"
              >
                <MapPin className="w-16 h-16 mx-auto mb-6" />
                <h3 className="text-white mb-4">Besichtigung & Abholung</h3>
                <p className="text-[var(--color-accent-green)] text-lg leading-relaxed max-w-2xl mx-auto">
                  Die fertigen Objekte können in Tecklenburg in einem kleinen Hobby-Schränkchen 
                  angeschaut werden. Auch die Abholung Ihrer individuellen Anfragen erfolgt dort. 
                  Schauen Sie gerne vorbei und lassen Sie sich von den handgefertigten Unikaten inspirieren!
                </p>
              </motion.div>

              {/* CTA */}
              <div className="text-center mt-12">
                <Button
                  onClick={onNavigateToGallery}
                  className="bg-[var(--color-medium-green)] hover:bg-[var(--color-primary-green)] text-white text-lg px-8 py-6"
                >
                  Jetzt Galerie entdecken
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}