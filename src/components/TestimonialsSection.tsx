
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
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

  return (
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
  );
};

export default TestimonialsSection;
