import { Card } from "@/components/ui/card";
import { DollarSign, Clock, Users, Car } from "lucide-react";
const Problem = () => {
  const problems = [{
    icon: DollarSign,
    title: "High Travel Costs",
    description: "Daily commuting expenses eating into your budget",
    color: "text-red-500 bg-red-50"
  }, {
    icon: Clock,
    title: "Heavy Traffic",
    description: "Hours wasted in Delhi NCR's congested roads",
    color: "text-orange-500 bg-orange-50"
  }, {
    icon: Users,
    title: "Limited Options",
    description: "Few affordable and reliable ride-sharing choices",
    color: "text-yellow-500 bg-yellow-50"
  }, {
    icon: Car,
    title: "Wasted Empty Seats",
    description: "Cars with empty seats while others struggle to find rides",
    color: "text-purple-500 bg-purple-50"
  }];
  return <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Daily Commute
            <span className="block text-red-500">Struggle</span>
          </h2>
          <p className="text-xl text-gray-600">
            Millions of Delhi NCR commuters face the same challenges every day
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => <Card key={index} className="p-6 text-center hover:shadow-none transition-all duration-300 hover:-translate-y-2 border border-black bg-white">
              <div className={`inline-flex p-4 rounded-2xl ${problem.color} mb-4`}>
                <problem.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Problem;