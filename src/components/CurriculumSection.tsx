
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const CurriculumSection = () => {
  const curriculum = [
    {
      module: "iOS Fundamentals & Swift Programming",
      duration: "Week 1-3",
      topics: ["Introduction to iOS Development", "Xcode IDE & Interface Builder", "Swift Programming Language", "Variables, Constants & Data Types", "Control Flow & Functions", "Object-Oriented Programming in Swift"]
    },
    {
      module: "UIKit & Interface Development",
      duration: "Week 4-6", 
      topics: ["UIKit Framework Basics", "View Controllers & Navigation", "Auto Layout & Constraints", "Table Views & Collection Views", "Custom UI Components", "Storyboards & Segues"]
    },
    {
      module: "Core Data & Networking",
      duration: "Week 7-9",
      topics: ["Core Data Framework", "Data Persistence & Storage", "REST API Integration", "JSON Parsing & Serialization", "URLSession & Network Calls", "Error Handling"]
    },
    {
      module: "Advanced iOS Development",
      duration: "Week 10-12",
      topics: ["Core Animation & Graphics", "Push Notifications", "Location Services & MapKit", "Camera & Photo Library", "App Store Guidelines", "App Deployment & Distribution"]
    }
  ];

  return (
    <section id="curriculum" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Course Curriculum</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive 12-week program designed to take you from beginner to professional iOS developer
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {curriculum.map((module, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-blue-100">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-gray-800 mb-2">{module.module}</CardTitle>
                    <Badge variant="outline" className="text-blue-600 border-blue-200">
                      {module.duration}
                    </Badge>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-2">
                  {module.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-600">{topic}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
