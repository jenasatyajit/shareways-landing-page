import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CarFront, Users, MapPin, Shield } from "lucide-react";
const Solution = () => {
  return <section id="solution-section" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6 leading-tight">
              A Smarter Way to
              <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Commute
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              ShareWay connects drivers with empty seats and passengers traveling similar routes. 
              If no driver is available, passengers can share a cab and split the fare.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <Card className="p-6 bg-white border border-gray-300 hover:border-black transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <CarFront className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-heading text-gray-900 mb-2">
                      Driver? Share Your Ride
                    </h3>
                    <p className="text-gray-600">Save money by offering rides to fellow commuters traveling your route. Fill empty seats and reduce your travel costs.</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-white border border-gray-300 hover:border-black transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-heading text-gray-900 mb-2">
                      Need a Ride? Find or Share
                    </h3>
                    <p className="text-gray-600">
                      Join drivers going your way or team up with other passengers 
                      to share a cab and split the fare equally.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-white border border-gray-300 hover:border-black transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <Shield className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-heading text-gray-900 mb-2">
                      Safe & Verified
                    </h3>
                    <p className="text-gray-600">All users are verified with ratings and reviews. Secure payment options.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Solution;