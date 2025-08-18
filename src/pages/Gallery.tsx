import PixelCard from "@/components/ui/PixelCard";
import { ImageIcon } from "lucide-react";
import { Footer } from "@/components/sections/Footer";

const Gallery = () => {
  const variants = ["default", "blue", "yellow", "pink"];
  
  // Create 15 gallery items
  const galleryItems = Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    variant: variants[index % variants.length],
    title: `Gallery Image ${index + 1}`,
  }));

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Gallery
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our vibrant campus life, academic excellence, and memorable moments at Government Polytechnic College Chennai.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {galleryItems.map((item) => (
            <PixelCard
              key={item.id}
              variant={item.variant}
              className="hover:scale-105 transition-transform duration-300"
            >
              <div className="flex flex-col items-center justify-center text-center p-6">
                <ImageIcon className="w-16 h-16 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Image placeholder - Replace with actual photo
                </p>
              </div>
            </PixelCard>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Image Management</h2>
            <p className="text-muted-foreground">
              These are placeholder cards for the gallery. Each card can be replaced with actual images 
              by updating the image sources. The pixel animation effects will continue to work with any images added.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;