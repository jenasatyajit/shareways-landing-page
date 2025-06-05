import { Card } from "@/components/ui/card";
import { DollarSign, Users, Leaf, Shield } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Save Money",
      description:
        "Reduce your monthly travel expenses by up to 60% compared to solo rides or taxis.",
      stat: "₹500+",
      statLabel: "Monthly Savings",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Users,
      title: "Build Community",
      description:
        "Meet like-minded commuters, make new friends, and strengthen your local community.",
      stat: "100+",
      statLabel: "New Connections",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Leaf,
      title: "Go Green",
      description:
        "Reduce your carbon footprint and contribute to a cleaner, greener Delhi NCR.",
      stat: "50%",
      statLabel: "Less CO₂",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description:
        "Verified profiles, real-time tracking, and community ratings ensure your safety.",
      stat: "99.9%",
      statLabel: "Safety Rating",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6 leading-[1.1]">
            Why Choose
            <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mt-2">
              ShareWay?
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 px-4">
            Join thousands of smart commuters who are already saving money and
            making a difference
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className={`p-6 text-center hover:shadow-none transition-all duration-300 hover:-translate-y-2 border border-gray-200 ${benefit.bgColor} group`}
            >
              <div
                className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${benefit.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <benefit.icon className="h-8 w-8" />
              </div>

              <div className="mb-4">
                <div
                  className={`text-3xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}
                >
                  {benefit.stat}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {benefit.statLabel}
                </div>
              </div>

              <h3 className="text-xl font-semibold font-heading text-gray-900 mb-3">
                {benefit.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
