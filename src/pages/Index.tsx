import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users, Award, CheckCircle, Play, BookOpen, Code, Smartphone, MapPin, Calendar, GraduationCap } from "lucide-react";

const Index = () => {
  const curriculum = [
    {
      module: "Introduction to iOS Development",
      duration: "Week 1-2",
      topics: ["Xcode Setup", "Swift Fundamentals", "iOS Architecture", "Interface Builder"]
    },
    {
      module: "Swift Programming",
      duration: "Week 3-4", 
      topics: ["Variables & Constants", "Functions", "Classes & Structures", "Protocols"]
    },
    {
      module: "UIKit Framework",
      duration: "Week 5-7",
      topics: ["View Controllers", "Auto Layout", "Table Views", "Navigation"]
    },
    {
      module: "Core Data & Networking",
      duration: "Week 8-9",
      topics: ["Data Persistence", "REST APIs", "JSON Parsing", "Core Data"]
    },
    {
      module: "Advanced Topics",
      duration: "Week 10-12",
      topics: ["Core Animation", "Push Notifications", "App Store Deployment", "Testing"]
    }
  ];

  const features = [
    { icon: Code, title: "Hands-on Coding", description: "Build real iOS apps from scratch" },
    { icon: Users, title: "Expert Instructors", description: "Learn from industry professionals" },
    { icon: Award, title: "Certificate", description: "Get certified upon completion" },
    { icon: Smartphone, title: "Latest iOS", description: "Learn the newest iOS technologies" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "iOS Developer at Apple",
      content: "This course transformed my career. The hands-on approach and expert guidance helped me land my dream job.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Freelance App Developer", 
      content: "Comprehensive curriculum covering everything from basics to advanced topics. Highly recommended!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Software Engineer",
      content: "The instructors are amazing and the projects are industry-relevant. Worth every penny!",
      rating: 5
    }
  ];

  const courseOfferings = [
    {
      title: "iOS Training in Pune",
      location: "Pune",
      duration: "3-4 Months",
      mode: "Classroom & Online",
      description: "Complete iOS development training with Swift programming",
      highlights: [
        "Swift Programming Language",
        "Xcode Development Environment", 
        "UI/UX Design Principles",
        "App Store Deployment",
        "Live Project Work",
        "100% Job Assistance"
      ],
      features: [
        "Expert Trainers with 8+ Years Experience",
        "Small Batch Size (Max 15 Students)",
        "Flexible Timings - Weekend & Weekday Batches",
        "Industry-Relevant Curriculum",
        "Hands-on Practice Sessions"
      ]
    },
    {
      title: "iOS Training in Bangalore",
      location: "Bangalore", 
      duration: "3-4 Months",
      mode: "Classroom & Online",
      description: "Comprehensive iOS app development course in India's Silicon Valley",
      highlights: [
        "Advanced Swift Concepts",
        "Core Data & CloudKit",
        "iOS Frameworks Integration",
        "Performance Optimization",
        "Real-time App Development",
        "Interview Preparation"
      ],
      features: [
        "Industry Expert Mentors",
        "State-of-the-art Infrastructure", 
        "Mock Interviews & Resume Building",
        "Placement Support",
        "24/7 Lab Access"
      ]
    },
    {
      title: "iOS Training in Hyderabad",
      location: "Hyderabad",
      duration: "3-4 Months", 
      mode: "Classroom & Online",
      description: "Master iOS development with practical training approach",
      highlights: [
        "Foundation to Advanced Level",
        "ARKit & Machine Learning",
        "App Security & Testing",
        "Version Control with Git",
        "Agile Development Practices",
        "Portfolio Development"
      ],
      features: [
        "Certified iOS Developers as Trainers",
        "Individual Attention to Each Student",
        "Regular Assessments & Feedback",
        "Industry Networking Events",
        "Lifetime Course Access"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              JustAcademy
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#course" className="text-gray-700 hover:text-blue-600 transition-colors">Course</a>
            <a href="#curriculum" className="text-gray-700 hover:text-blue-600 transition-colors">Curriculum</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Reviews</a>
            <a href="#locations" className="text-gray-700 hover:text-blue-600 transition-colors">Locations</a>
          </nav>
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
            Enroll Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100">
            🚀 Most Popular Course
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Master iOS Development
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Build stunning iOS apps with Swift and Xcode. From beginner to professional in 12 weeks with our comprehensive hands-on course.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-4">
              <Play className="w-5 h-5 mr-2" />
              Start Learning Today
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-blue-200 text-blue-600 hover:bg-blue-50">
              View Demo
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>12 Weeks Duration</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>5000+ Students</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Certificate Included</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="course" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Why Choose Our iOS Course?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get the skills and knowledge you need to become a successful iOS developer
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

      {/* Curriculum Section */}
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">What Our Students Say</h2>
            <p className="text-xl text-gray-600">Join thousands of successful iOS developers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-blue-100">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-gray-700 italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Locations Section */}
      <section id="locations" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">iOS Training Locations</h2>
            <p className="text-xl text-gray-600">Choose your preferred training location and mode</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {courseOfferings.map((course, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-blue-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-bl-full flex items-start justify-end p-2">
                  <Badge className="bg-white text-blue-600 text-xs px-1 py-0">
                    {course.mode}
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
                      <span>Certificate</span>
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
                  
                  <div className="pt-4">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                      Enroll in {course.location}
                    </Button>
                    <p className="text-center text-sm text-gray-500 mt-2">
                      Call for batch timings & fees
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Can't find your city?</h3>
              <p className="text-gray-600 mb-6">
                We also offer online iOS training with live instructor-led sessions. Join from anywhere in India!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  Explore Online Training
                </Button>
                <Button variant="outline" size="lg" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                  Contact for New Location
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your iOS Journey?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of students who have successfully launched their iOS development careers with our comprehensive course.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-gray-100">
              <BookOpen className="w-5 h-5 mr-2" />
              Enroll Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-600">
              Download Syllabus
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">JustAcademy</span>
              </div>
              <p className="text-gray-400">Empowering the next generation of iOS developers with world-class education.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Courses</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">iOS Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Swift Programming</a></li>
                <li><a href="#" className="hover:text-white transition-colors">UI/UX Design</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 JustAcademy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
