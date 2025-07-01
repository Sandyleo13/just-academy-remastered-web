import { Smartphone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-6 justify-between">
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
              <li><a href="https://www.justacademy.co/course-detail/ios-training" className="hover:text-white transition-colors">iOS Development</a></li>
              <li><a href="https://www.justacademy.co/course-detail/ios-training" className="hover:text-white transition-colors">Swift Programming</a></li>
              <li><a href="https://www.justacademy.co/course-detail/android-app-development" className="hover:text-white transition-colors">Mobile App Development</a></li>
              <li><a href="https://www.justacademy.co/course-detail/figma-training" className="hover:text-white transition-colors">UI/UX Design</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://www.justacademy.co/" className="hover:text-white transition-colors">Career Guidance</a></li>
              <li><a href="https://www.justacademy.co/student-placed" className="hover:text-white transition-colors">Placement Support</a></li>
              <li><a href="https://www.justacademy.co/success" className="hover:text-white transition-colors">Student Portal</a></li>
              <li><a href="https://www.justacademy.co/register-for-course-demo" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 JustAcademy. All rights reserved. | Privacy Policy | Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
