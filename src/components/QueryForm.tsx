
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Phone } from "lucide-react";
import { useState } from "react";

const QueryForm = () => {
  const [queryForm, setQueryForm] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'iOS Development',
    location: '',
    experience: '',
    query: ''
  });

  const handleQuerySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Query form submitted:', queryForm);
    // Handle form submission
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
          <Phone className="w-4 h-4 mr-2" />
          Call Now
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">Get Free Counseling</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleQuerySubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="query-name">Name *</Label>
            <Input
              id="query-name"
              type="text"
              placeholder="Your name"
              value={queryForm.name}
              onChange={(e) => setQueryForm({...queryForm, name: e.target.value})}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="query-phone">Phone Number *</Label>
            <Input
              id="query-phone"
              type="tel"
              placeholder="Your phone number"
              value={queryForm.phone}
              onChange={(e) => setQueryForm({...queryForm, phone: e.target.value})}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="query-email">Email Address</Label>
            <Input
              id="query-email"
              type="email"
              placeholder="Your email address"
              value={queryForm.email}
              onChange={(e) => setQueryForm({...queryForm, email: e.target.value})}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="query-course">Course Interest</Label>
            <Select value={queryForm.course} onValueChange={(value) => setQueryForm({...queryForm, course: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Select course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="iOS Development">iOS Development</SelectItem>
                <SelectItem value="Android Development">Android Development</SelectItem>
                <SelectItem value="Flutter Development">Flutter Development</SelectItem>
                <SelectItem value="React Native">React Native</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="query-location">Preferred Location</Label>
            <Select value={queryForm.location} onValueChange={(value) => setQueryForm({...queryForm, location: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Select location" />
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
            <Label htmlFor="query-message">Your Query</Label>
            <Textarea
              id="query-message"
              placeholder="Tell us about your requirements..."
              value={queryForm.query}
              onChange={(e) => setQueryForm({...queryForm, query: e.target.value})}
              rows={3}
            />
          </div>
          
          <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
            Submit Query
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QueryForm;
