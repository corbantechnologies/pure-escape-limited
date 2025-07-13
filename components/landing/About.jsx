"use client"

import { Target, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    {
      number: "15+",
      label: "Years Experience",
      icon: <Award className="w-6 h-6" />,
    },
    {
      number: "1000+",
      label: "Happy Clients",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "5000+",
      label: "Projects Delivered",
      icon: <Target className="w-6 h-6" />,
    },
    {
      number: "99.9%",
      label: "Client Satisfaction",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                About Pure Escape Limited
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded with a vision to simplify IT procurement and support,
                Pure Escape Limited has grown to become a trusted partner for
                businesses seeking reliable, efficient, and cost-effective IT
                solutions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  To empower businesses with cutting-edge technology solutions
                  that drive growth, efficiency, and innovation while providing
                  exceptional customer service.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  Why Choose Us
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Competitive pricing with no hidden fees</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Expert technical consultation and support</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Fast delivery and installation services</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Long-term partnerships with leading brands</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
              <h3 className="text-xl font-semibold mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-blue-100 mb-6">
                Join thousands of satisfied customers who trust Pure Escape
                Limited for their IT supply needs.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;