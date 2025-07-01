
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, User, Clock, MapPin } from "lucide-react";
import { useState } from "react";

interface EnrollmentDialogProps {
  mode: 'online' | 'classroom';
  fee: number;
  children: React.ReactNode;
}

const EnrollmentDialog = ({ mode, fee, children }: EnrollmentDialogProps) => {
  const [enrollmentForm, setEnrollmentForm] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    location: '',
    paymentMode: 'full',
    specialRequests: ''
  });

  const handleEnrollmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Enrollment form:', enrollmentForm, mode, fee);
    // Handle enrollment submission
  };

  const installmentAmount = Math.ceil(fee / 3);

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">
            Enroll in iOS Development Course
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Course Summary */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <User className="w-5 h-5" />
                Course Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Training Mode:</span>
                <Badge variant={mode === 'online' ? 'default' : 'secondary'}>
                  {mode === 'online' ? 'Online Training' : 'Classroom Training'}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Duration:</span>
                <span className="font-medium">3 Months</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Course Fee:</span>
                <span className="text-2xl font-bold text-green-600">₹{fee.toLocaleString()}</span>
              </div>
              <div className="text-sm text-gray-600">
                <p>✓ 100% Job Placement Assistance</p>
                <p>✓ Live Project Training</p>
                <p>✓ Industry Expert Mentors</p>
                <p>✓ Certificate of Completion</p>
              </div>
            </CardContent>
          </Card>

          {/* Enrollment Form */}
          <form onSubmit={handleEnrollmentSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="enroll-name">Full Name *</Label>
                <Input
                  id="enroll-name"
                  type="text"
                  placeholder="Enter your full name"
                  value={enrollmentForm.name}
                  onChange={(e) => setEnrollmentForm({...enrollmentForm, name: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="enroll-phone">Phone Number *</Label>
                <Input
                  id="enroll-phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={enrollmentForm.phone}
                  onChange={(e) => setEnrollmentForm({...enrollmentForm, phone: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="enroll-email">Email Address *</Label>
              <Input
                id="enroll-email"
                type="email"
                placeholder="Enter your email address"
                value={enrollmentForm.email}
                onChange={(e) => setEnrollmentForm({...enrollmentForm, email: e.target.value})}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="enroll-experience">Experience Level *</Label>
              <Select value={enrollmentForm.experience} onValueChange={(value) => setEnrollmentForm({...enrollmentForm, experience: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {mode === 'classroom' && (
              <div className="space-y-2">
                <Label htmlFor="enroll-location">Training Location *</Label>
                <Select value={enrollmentForm.location} onValueChange={(value) => setEnrollmentForm({...enrollmentForm, location: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select training location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pune">Pune</SelectItem>
                    <SelectItem value="bangalore">Bangalore</SelectItem>
                    <SelectItem value="hyderabad">Hyderabad</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            <div className="space-y-2">
              <Label>Payment Option *</Label>
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  type="button"
                  variant={enrollmentForm.paymentMode === 'full' ? 'default' : 'outline'}
                  onClick={() => setEnrollmentForm({...enrollmentForm, paymentMode: 'full'})}
                  className="h-auto p-4 flex-col"
                >
                  <span className="font-semibold">Pay Full Amount</span>
                  <span className="text-sm">₹{fee.toLocaleString()}</span>
                </Button>
                <Button 
                  type="button"
                  variant={enrollmentForm.paymentMode === 'installment' ? 'default' : 'outline'}
                  onClick={() => setEnrollmentForm({...enrollmentForm, paymentMode: 'installment'})}
                  className="h-auto p-4 flex-col"
                >
                  <span className="font-semibold">3 Installments</span>
                  <span className="text-sm">₹{installmentAmount.toLocaleString()}/month</span>
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="enroll-requests">Special Requests</Label>
              <Textarea
                id="enroll-requests"
                placeholder="Any specific requirements or questions?"
                value={enrollmentForm.specialRequests}
                onChange={(e) => setEnrollmentForm({...enrollmentForm, specialRequests: e.target.value})}
                rows={3}
              />
            </div>

            <Button type="submit" className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-lg py-3">
              Proceed to Payment - ₹{enrollmentForm.paymentMode === 'full' ? fee.toLocaleString() : installmentAmount.toLocaleString()}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EnrollmentDialog;
