
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users, Award, Play, BookOpen } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100">
          🏆 India's #1 iOS Training Institute
        </Badge>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Master iOS Development
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
          Learn iOS app development with Swift programming language. Build professional iOS applications and get placed in top IT companies. 100% practical training with live projects.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-4">
            <Play className="w-5 h-5 mr-2" />
            Start Free Demo Class
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-blue-200 text-blue-600 hover:bg-blue-50">
            <BookOpen className="w-5 h-5 mr-2" />
            Download Syllabus
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>3 Months Duration</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>10,000+ Students Trained</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>4.8/5 Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4" />
            <span>100% Job Assistance</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
