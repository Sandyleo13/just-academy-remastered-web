
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EnrollmentForm from "@/components/EnrollmentForm";
import FeaturesSection from "@/components/FeaturesSection";
import CurriculumSection from "@/components/CurriculumSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CourseOfferingsSection from "@/components/CourseOfferingsSection";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      <HeroSection />
      <EnrollmentForm />
      <FeaturesSection />
      <CurriculumSection />
      <TestimonialsSection />
      <CourseOfferingsSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
