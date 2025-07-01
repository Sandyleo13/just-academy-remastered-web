import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const EnrollmentForm = () => {
  const [enrollmentForm, setEnrollmentForm] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    course: 'iOS Development',
    location: '',
    mode: 'online',
    message: ''
  });
  
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const handleEnrollmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare data to send (including selectedDate)
    const data = {
      ...enrollmentForm,
      demoDate: selectedDate, // you can format this if needed
    };

    try {
      const response = await fetch("http://localhost:5000/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Registration successful!");
        // Optionally reset form here
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEnrollmentForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuerySubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Replace with your actual EmailJS IDs
    const SERVICE_ID = 'service_7fdd6ha';
    const TEMPLATE_ID = 'template_jpugaan';
    const PUBLIC_KEY = 'mVMRe6ue0z_B5je6mS';

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: enrollmentForm.name,
          email: enrollmentForm.email,
          phone: enrollmentForm.phone,
          course: enrollmentForm.course,
          location: enrollmentForm.location,
          experience: enrollmentForm.experience,
          query: enrollmentForm.message,
        },
        PUBLIC_KEY
      );
      alert("Query submitted and email sent!");
      setEnrollmentForm({
        name: '',
        email: '',
        phone: '',
        experience: '',
        course: 'iOS Development',
        location: '',
        mode: 'online',
        message: ''
      });
    } catch (error) {
      alert("Failed to send email.");
    }
  };

  const onlineFee = 29750;
  const classroomFee = 35000;

  return (
    <section className="py-12 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="container mx-auto">
        <Card className="max-w-6xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-gray-800">Register for Free Demo Class</CardTitle>
            <CardDescription className="text-lg">Experience our iOS Development course with a free demo session</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Form Section */}
              <div>
                <form onSubmit={handleEnrollmentSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={enrollmentForm.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={enrollmentForm.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={enrollmentForm.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="experience">Experience Level *</Label>
                    <Select value={enrollmentForm.experience} onValueChange={(value) => setEnrollmentForm({...enrollmentForm, experience: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                        <SelectItem value="professional">Professional</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location">Preferred Location</Label>
                    <Select value={enrollmentForm.location} onValueChange={(value) => setEnrollmentForm({...enrollmentForm, location: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select preferred location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pune">Pune</SelectItem>
                        <SelectItem value="bangalore">Bangalore</SelectItem>
                        <SelectItem value="hyderabad">Hyderabad</SelectItem>
                        <SelectItem value="online">Online</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Training Mode *</Label>
                    <div className="flex gap-4">
                      <Button 
                        type="button"
                        variant={enrollmentForm.mode === 'online' ? 'default' : 'outline'}
                        onClick={() => setEnrollmentForm({...enrollmentForm, mode: 'online'})}
                        className="flex-1"
                      >
                        Online Class - ₹{onlineFee.toLocaleString()}
                      </Button>
                      <Button 
                        type="button"
                        variant={enrollmentForm.mode === 'classroom' ? 'default' : 'outline'}
                        onClick={() => setEnrollmentForm({...enrollmentForm, mode: 'classroom'})}
                        className="flex-1"
                      >
                        Classroom - ₹{classroomFee.toLocaleString()}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Comments</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Any specific questions or requirements?"
                      value={enrollmentForm.message}
                      onChange={handleChange}
                      rows={3}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg py-3">
                    Register for Free Demo Class
                  </Button>
                </form>
              </div>
              
              {/* Calendar Section */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Select Demo Class Date</h3>
                  <div className="bg-white rounded-lg p-4 border">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date()}
                      className="rounded-md"
                    />
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border">
                  <h4 className="font-semibold text-gray-800 mb-3">Course Pricing</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="font-medium">Online Training</span>
                      <span className="text-lg font-bold text-green-600">₹{onlineFee.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="font-medium">Classroom Training</span>
                      <span className="text-lg font-bold text-blue-600">₹{classroomFee.toLocaleString()}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    * Demo class is completely free. No hidden charges.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EnrollmentForm;
