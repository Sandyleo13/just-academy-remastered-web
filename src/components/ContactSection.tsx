
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;
