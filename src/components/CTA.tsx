import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";

const CTA = () => {
  const features = [
    "Free to join and use",
    "Smart ride matching",
    "You pay directly",
    "24/7 customer support",
  ];

  return (
    <section
      id="cta-section"
      className="py-20 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 sm:p-8 md:p-12 bg-white/95 backdrop-blur-sm border border-gray-200 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-4 leading-snug">
              Ready to Start
              <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent leading-relaxed pb-1">
                Saving Money?
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto px-4">
              Join thousands of smart commuters in Delhi NCR who are already
              saving money, making friends, and helping the environment.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8 max-w-md mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-gray-700"
                >
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:shadow-none hover:scale-105 group w-full sm:w-auto"
                
              >
                Join ShareWay Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="mt-6 py-2 px-4 bg-gradient-to-r from-green-50 to-blue-50 border border-green-100 rounded-lg inline-block">
              <p className="text-sm font-medium bg-gradient-to-r from-green-700 to-blue-700 bg-clip-text text-transparent">
                Join today to get early access and free 3 months trial when we launch • No credit card Required
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTA;
