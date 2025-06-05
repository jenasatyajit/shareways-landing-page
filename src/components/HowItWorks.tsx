import { Card } from "@/components/ui/card";
import { MapPin, Users, Shield } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: MapPin,
      title: "Enter Your Route",
      description:
        "Simply input your starting point and destination. Our Google Maps integration ensures accurate route matching.",
      color: "from-green-500 to-green-600",
    },
    {
      step: "02",
      icon: Users,
      title: "Get Matched",
      description:
        "Our smart algorithm connects you with drivers or fellow passengers traveling similar routes.",
      color: "from-blue-500 to-blue-600",
    },
    {
      step: "03",
      icon: Shield,
      title: "Ride Safely & Save",
      description:
        "Enjoy secure rides with verified profiles, transparent ratings, and real-time tracking. Save money every trip!",
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6 leading-[1.1]">
            How ShareWay
            <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mt-2">
              Works
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 px-4">
            Getting started is simple. Three easy steps to smarter commuting.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-gray-300 to-transparent z-0" />
                )}

                <Card className="relative p-6 sm:p-8 text-center bg-white border border-black hover:shadow-none transition-all duration-300 hover:-translate-y-2 z-10">
                  <div className="flex flex-col items-center mb-4">
                    {" "}
                    {/* Added this wrapper div */}
                    <div
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${step.color} text-white`}
                    >
                      {" "}
                      {/* Removed mb-4 */}
                      <step.icon className="h-8 w-8" />
                    </div>
                    <div
                      className={`mt-2 inline-block px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-white text-sm font-bold`}
                    >
                      {" "}
                      {/* Removed mb-6, added mt-2 */}
                      STEP {step.step}
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-gray-900 mb-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
