
import { Button } from "@/components/ui/button";
import { User, Phone } from "lucide-react";
import EnrollmentDialog from "./EnrollmentDialog";
import QueryForm from "./QueryForm";

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Start Your iOS Development Career?</h2>
        <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
          Join 10,000+ successful students who have launched their iOS development careers with JustAcademy. Get industry-ready skills with 100% job placement assistance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <EnrollmentDialog mode="online" fee={29750}>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-gray-100">
              <User className="w-5 h-5 mr-2" />
              Enroll Now - Online (₹29,750)
            </Button>
          </EnrollmentDialog>
          <EnrollmentDialog mode="classroom" fee={35000}>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-600">
              <User className="w-5 h-5 mr-2" />
              Enroll Now - Classroom (₹35,000)
            </Button>
          </EnrollmentDialog>
        </div>
        <div className="mt-6">
          <QueryForm />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
