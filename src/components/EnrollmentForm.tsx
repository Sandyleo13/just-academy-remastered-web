
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const EnrollmentForm = () => {
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

  return (
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
  );
};

export default EnrollmentForm;
