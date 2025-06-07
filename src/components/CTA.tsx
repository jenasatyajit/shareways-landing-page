import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowRight, X } from "lucide-react";
import { useState, useEffect } from "react";

const CTA = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const features = [
    "Free to join and use",
    "Smart ride matching",
    "You pay directly",
    "24/7 customer support",
  ];

  useEffect(() => {
    // Load ConvertKit script when component mounts
    const script = document.createElement("script");
    script.src = "https://f.convertkit.com/ckjs/ck.5.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

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
                onClick={toggleFormVisibility}
              >
                Join ShareWays Today
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

      {/* ConvertKit Form Modal */}
      {isFormVisible && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl max-w-md sm:max-w-lg w-full overflow-hidden animate-fadeIn">
            {/* Image Section (Top for both mobile and desktop) */}
            <div className="relative w-full h-40 sm:h-48">
              <img 
                src="/modal.jpg" 
                alt="Colorful abstract gradient" 
                className="w-full h-full object-cover"
              />
              
              {/* Close button on image */}
              <button 
                onClick={toggleFormVisibility}
                className="absolute top-3 right-3 text-white bg-black/20 hover:bg-black/30 transition-colors p-2 rounded-full"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Form content */}
            <div className="p-6 pb-4">
              <div className="text-center mb-4">
                <p className="text-gray-700 text-base">
                  We will notify you with an early access
                </p>
              </div>
              
              <div id="convertkit-form" className="w-full">
                <form 
                  action="https://app.kit.com/forms/8147031/subscriptions" 
                  className="seva-form formkit-form space-y-5" 
                  method="post"
                >
                  <div className="space-y-4">
                    <ul className="formkit-alert formkit-alert-error text-red-500 text-sm" data-element="errors" data-group="alert"></ul>
                    
                    <div>
                      <input 
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        name="email_address" 
                        aria-label="Email Address" 
                        placeholder="Your Email Address" 
                        required 
                        type="email"
                      />
                    </div>
                    
                    <div className="text-center">
                      <p className="text-xs text-gray-500 mb-4">
                        We respect your privacy and will not share your email with any third party. <span className="font-semibold">Don't forget to check your spam folder</span>
                      </p>
                    </div>
                    
                    <button 
                      type="submit"
                      className="w-full py-3 px-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg flex justify-center items-center"
                    >
                      <div className="formkit-spinner mr-2 hidden">
                        <div className="h-2 w-2 bg-white rounded-full"></div>
                        <div className="h-2 w-2 bg-white rounded-full"></div>
                        <div className="h-2 w-2 bg-white rounded-full"></div>
                      </div>
                      <span>Join Now</span>
                    </button>
                    
                    <div className="text-center pt-2">
                      <a 
                        href="https://kit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic" 
                        className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
                        target="_blank" 
                        rel="nofollow"
                      >
                        Built with Kit
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CTA;
