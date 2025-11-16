import { useState } from "react";
import { motion } from "motion/react";
import { PotteryIcon } from "./components/PotteryIcon";
import { HomePage } from "./components/HomePage";
import { ProductGallery } from "./components/ProductGallery";
import { Impressum } from "./components/Impressum";
import { Datenschutz } from "./components/Datenschutz";
import { Toaster } from "./components/ui/sonner";
import logoImage from "figma:asset/692949100fd07d216343b6c26fef181a8c0bf481.png";

type Page = "home" | "gallery" | "impressum" | "datenschutz";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToGallery = () => {
    setCurrentPage("gallery");
    scrollToTop();
  };

  const navigateToHome = () => {
    setCurrentPage("home");
    scrollToTop();
  };

  const navigateToImpressum = () => {
    setCurrentPage("impressum");
    scrollToTop();
  };

  const navigateToDatenschutz = () => {
    setCurrentPage("datenschutz");
    scrollToTop();
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white text-[var(--color-primary-green)] sticky top-0 z-30 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div 
            className="flex items-center gap-2 sm:gap-3 cursor-pointer"
            onClick={navigateToHome}
          >
            <PotteryIcon className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--color-medium-green)]" />
            <div>
              <img src={logoImage} alt="einzigArtig" className="h-24 sm:h-32 md:h-40" />
              <p className="text-[var(--color-medium-green)] mt-1 text-sm sm:text-base">Handgefertigte Unikate</p>
            </div>
          </div>
        </div>
      </header>

      {/* Page Content */}
      {currentPage === "home" ? (
        <HomePage onNavigateToGallery={navigateToGallery} />
      ) : currentPage === "gallery" ? (
        <ProductGallery onNavigateToHome={navigateToHome} />
      ) : currentPage === "impressum" ? (
        <Impressum onNavigateToHome={navigateToHome} />
      ) : (
        <Datenschutz onNavigateToHome={navigateToHome} />
      )}

      {/* Footer */}
      <footer className="bg-[var(--color-primary-green)] text-white py-12 mt-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <PotteryIcon className="w-6 h-6 text-white" />
              <p className="text-[var(--color-accent-green)]">© 2025 einzigArtig Keramik & Töpferei</p>
            </div>
            <div className="flex gap-6 text-[var(--color-accent-green)]">
              <button 
                onClick={navigateToImpressum}
                className="hover:text-white transition-colors"
              >
                Impressum
              </button>
              <button 
                onClick={navigateToDatenschutz}
                className="hover:text-white transition-colors"
              >
                Datenschutz
              </button>
            </div>
            <p className="text-[var(--color-accent-green)] text-center md:text-right">
              Alle Produkte handgefertigt mit Liebe zum Detail
            </p>
          </div>
        </div>
      </footer>

      {/* Toast Notifications */}
      <Toaster position="bottom-right" />
    </div>
  );
}