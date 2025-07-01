
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, GraduationCap, CheckCircle, Star } from "lucide-react";

const CourseOfferingsSection = () => {
  const courseOfferings = [
    {
      title: "iOS Training in Pune",
      location: "Pune",
      duration: "3 Months",
      mode: "Classroom & Online",
      fee: "₹35,000",
      description: "Comprehensive iOS app development training with Swift programming in Pune",
      highlights: [
        "Swift 5.9 Programming Language",
        "Xcode 15 Development Environment", 
        "UIKit & SwiftUI Frameworks",
        "Core Data & CloudKit",
        "App Store Deployment",
        "5+ Live Projects"
      ],
      features: [
        "Weekend & Weekday Batches Available",
        "Small Batch Size (Max 12 Students)",
        "100% Job Placement Assistance",
        "Industry-Relevant Curriculum",
        "Lifetime Course Material Access"
      ]
    },
    {
      title: "iOS Training in Bangalore",
      location: "Bangalore", 
      duration: "3 Months",
      mode: "Classroom & Online",
      fee: "₹40,000",
      description: "Advanced iOS development course in India's Silicon Valley with placement support",
      highlights: [
        "Advanced Swift Concepts",
        "SwiftUI & Combine Framework",
        "Core ML & Machine Learning",
        "ARKit & Augmented Reality",
        "Performance Optimization",
        "Enterprise iOS Development"
      ],
      features: [
        "Industry Expert Mentors from Apple/Google",
        "State-of-the-art Lab Infrastructure", 
        "Mock Interviews & Resume Building",
        "Direct Company Referrals",
        "24/7 Lab Access"
      ]
    },
    {
      title: "iOS Training in Hyderabad",
      location: "Hyderabad",
      duration: "3 Months", 
      mode: "Classroom & Online",
      fee: "₹32,000",
      description: "Complete iOS app development training from beginner to advanced level",
      highlights: [
        "Foundation to Advanced iOS",
        "App Security & Testing",
        "Version Control with Git",
        "Agile Development Practices",
        "Portfolio Development",
        "Interview Preparation"
      ],
      features: [
        "Flexible Timing Options",
        "Individual Project Mentoring",
        "Regular Assessments & Feedback",
        "Industry Networking Events",
        "Free Workshop Sessions"
      ]
    }
  ];

  return (
    <section id="locations" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">iOS Training Centers & Course Fees</h2>
          <p className="text-xl text-gray-600">Choose your preferred training location with transparent pricing</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {courseOfferings.map((course, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-blue-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-bl-full flex items-start justify-end p-2">
                <Badge className="bg-white text-blue-600 text-xs px-2 py-1">
                  {course.fee}
                </Badge>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-600 font-semibold">{course.location}</span>
                </div>
                <CardTitle className="text-2xl text-gray-800 mb-2">{course.title}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GraduationCap className="w-4 h-4" />
                    <span>{course.mode}</span>
                  </div>
                </div>
                <CardDescription className="text-gray-700 mt-2">
                  {course.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Course Highlights</h4>
                  <div className="space-y-2">
                    {course.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Training Features</h4>
                  <div className="space-y-2">
                    {course.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 space-y-2">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    Enroll Now - {course.fee}
                  </Button>
                  <Button variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50">
                    Get Free Demo Class
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseOfferingsSection;
