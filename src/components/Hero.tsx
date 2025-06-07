import { Button } from "@/components/ui/button";
import { scrollTo } from "@/utils/lenis";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    scrollTo(`#${sectionId}`, {
      offset: 50,
      duration: 1.5,
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-200 via-blue-200 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-300/30 to-blue-300/30" />
      <div className="absolute top-20 right-20 w-32 h-32 bg-green-400/40 rounded-full blur-xl" />
      <div className="absolute bottom-40 left-20 w-40 h-40 bg-blue-400/40 rounded-full blur-xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl sm:text-5xl md:text-7xl font-bold font-heading text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              ShareWays
            </span>
            <br />
            <span className="text-gray-700 text-2xl sm:text-3xl md:text-5xl">
              Smarter Rides for Delhi NCR
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            Reduce travel costs, beat traffic, and connect with your community.
            <br className="hidden md:block" />
            Share rides, save money, and help the environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 w-full sm:w-auto"
              onClick={() => scrollToSection("cta-section")}
            >
              Join Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:shadow-lg w-full sm:w-auto"
              onClick={() => scrollToSection("how-it-works")}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
