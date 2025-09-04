import PixelCard from "@/components/ui/PixelCard";
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
              <div className="relative w-full h-full overflow-hidden rounded-[25px]">
                <img
                  src={`/images/gallery/image-${item.id}.${item.id <= 8 ? 'png' : 'jpg'}`}
                  alt={`Gallery Image ${item.id}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-lg font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            </PixelCard>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">College Gallery</h2>
            <p className="text-muted-foreground">
              Explore our vibrant campus life through these memorable moments captured at Government Polytechnic College Chromepet.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;