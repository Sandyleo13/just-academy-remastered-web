import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Star, Clock, Users, Award, CheckCircle, Play, BookOpen, Code, Smartphone, MapPin, Calendar, GraduationCap, Phone, Mail, User } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [enrollmentForm, setEnrollmentForm] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'iOS Training',
    location: '',
    message: ''
  });

  const handleEnrollmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Enrollment form submitted:', enrollmentForm);
    // Handle form submission
  };

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

  const features = [
    { icon: Code, title: "100% Practical Training", description: "Hands-on coding with real iOS projects" },
    { icon: Users, title: "Industry Expert Trainers", description: "8+ years experienced iOS developers" },
    { icon: Award, title: "Certification & Job Support", description: "Course completion certificate with placement assistance" },
    { icon: Smartphone, title: "Latest iOS Technologies", description: "iOS 17, Xcode 15, Swift 5.9" }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "iOS Developer at TCS",
      content: "JustAcademy's iOS course helped me transition from web development to mobile app development. The practical approach and job assistance were excellent.",
      rating: 5
    },
    {
      name: "Rahul Verma",
      role: "Freelance iOS Developer", 
      content: "The trainers are highly experienced and the curriculum covers everything from basics to advanced concepts. Highly recommended for beginners.",
      rating: 5
    },
    {
      name: "Anjali Patel",
      role: "Mobile App Developer at Infosys",
      content: "Great learning experience with small batch sizes and individual attention. The live projects helped me build a strong portfolio.",
      rating: 5
    }
  ];

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
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </nav>
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
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

      {/* Quick Enrollment Form */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto">
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-800">Get Free Demo Class</CardTitle>
              <CardDescription>Fill the form below to book your free iOS development demo class</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleEnrollmentSubmit} className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={enrollmentForm.name}
                    onChange={(e) => setEnrollmentForm({...enrollmentForm, name: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={enrollmentForm.phone}
                    onChange={(e) => setEnrollmentForm({...enrollmentForm, phone: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={enrollmentForm.email}
                    onChange={(e) => setEnrollmentForm({...enrollmentForm, email: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Preferred Location</Label>
                  <Input
                    id="location"
                    type="text"
                    placeholder="Pune, Bangalore, Hyderabad"
                    value={enrollmentForm.location}
                    onChange={(e) => setEnrollmentForm({...enrollmentForm, location: e.target.value})}
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Any specific questions or requirements?"
                    value={enrollmentForm.message}
                    onChange={(e) => setEnrollmentForm({...enrollmentForm, message: e.target.value})}
                  />
                </div>
                <div className="md:col-span-2">
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    Book Free Demo Class
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Get In Touch</h2>
            <p className="text-xl text-gray-600">Have questions? Our iOS training experts are here to help</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Call Us</p>
                      <p className="text-gray-600">+91 9876543210</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Email Us</p>
                      <p className="text-gray-600">info@justacademy.co</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Visit Us</p>
                      <p className="text-gray-600">Available in Pune, Bangalore & Hyderabad</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-blue-100">
                <h4 className="font-bold text-gray-800 mb-4">Quick Facts</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 10,000+ Students Successfully Trained</li>
                  <li>• 95% Placement Success Rate</li>
                  <li>• Average Salary: ₹4-8 LPA</li>
                  <li>• 50+ Hiring Partner Companies</li>
                  <li>• Flexible Batch Timings</li>
                </ul>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">Send us a Message</CardTitle>
                <CardDescription>Fill out the form and we'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Name *</Label>
                      <Input id="contact-name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-phone">Phone *</Label>
                      <Input id="contact-phone" type="tel" placeholder="Your phone" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email *</Label>
                    <Input id="contact-email" type="email" placeholder="Your email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-subject">Subject</Label>
                    <Input id="contact-subject" placeholder="Subject" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-message">Message *</Label>
                    <Textarea id="contact-message" placeholder="Your message" rows={5} required />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your iOS Development Career?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join 10,000+ successful students who have launched their iOS development careers with JustAcademy. Get industry-ready skills with 100% job placement assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-gray-100">
              <User className="w-5 h-5 mr-2" />
              Enroll Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-600">
              <Phone className="w-5 h-5 mr-2" />
              Call for Free Counseling
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
              <p className="text-gray-400 mb-4">India's leading iOS training institute with 100% job placement assistance.</p>
              <div className="text-sm text-gray-400">
                <p>📞 +91 9876543210</p>
                <p>✉️ info@justacademy.co</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Courses</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">iOS Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Swift Programming</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile App Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">UI/UX Design</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Training Centers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Pune Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bangalore Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Hyderabad Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Online Training</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Career Guidance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Placement Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Student Portal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 JustAcademy. All rights reserved. | Privacy Policy | Terms & Conditions</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
