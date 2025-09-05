import { Footer } from "@/components/sections/Footer";
import { Card } from "@/components/ui/card";

const Gallery = () => {
  // Create 15 gallery items
  const galleryItems = Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
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

        {/* Info Section */}
        <div className="mb-16 text-center">
          <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">College Gallery</h2>
            <p className="text-muted-foreground">
              Explore our vibrant campus life through these memorable moments captured at Government Polytechnic College Chromepet.
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {galleryItems.map((item) => (
            <Card key={item.id} className="overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="relative w-full h-80 overflow-hidden">
                <img
                  src={`/images/gallery/image-${item.id}.${item.id <= 8 ? 'png' : 'jpg'}`}
                  alt={`Gallery Image ${item.id} - Campus Life at GPTC Chromepet`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = `data:image/svg+xml;base64,${btoa(`
                      <svg width="300" height="400" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" fill="#f3f4f6"/>
                        <text x="50%" y="45%" text-anchor="middle" fill="#6b7280" font-family="Arial" font-size="14">
                          Gallery Image ${item.id}
                        </text>
                        <text x="50%" y="55%" text-anchor="middle" fill="#9ca3af" font-family="Arial" font-size="12">
                          Image Loading...
                        </text>
                      </svg>
                    `)}`;
                  }}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-lg font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;