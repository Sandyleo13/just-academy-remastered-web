
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Users, Award, Smartphone } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    { icon: Code, title: "100% Practical Training", description: "Hands-on coding with real iOS projects" },
    { icon: Users, title: "Industry Expert Trainers", description: "8+ years experienced iOS developers" },
    { icon: Award, title: "Certification & Job Support", description: "Course completion certificate with placement assistance" },
    { icon: Smartphone, title: "Latest iOS Technologies", description: "iOS 17, Xcode 15, Swift 5.9" }
  ];

  return (
    <section id="course" className="py-20 px-4 bg-white/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Why Choose JustAcademy for iOS Training?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            India's leading iOS training institute with proven track record of successful placements in top IT companies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-blue-100">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-800">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
