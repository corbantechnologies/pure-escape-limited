"use client";

import {
  Server,
  Laptop,
  Shield,
  Headphones,
  Network,
  Cloud,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Server className="w-8 h-8" />,
      title: "Enterprise Hardware",
      description:
        "High-performance servers, workstations, and networking equipment for businesses of all sizes.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Personal Computing",
      description:
        "Laptops, desktops, tablets, and accessories from leading brands with competitive pricing.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Software Solutions",
      description:
        "Licensed software, cloud services, and custom applications tailored to your business needs.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Network Infrastructure",
      description:
        "Complete networking solutions including routers, switches, cables, and wireless systems.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Solutions",
      description:
        "Cybersecurity software, hardware firewalls, and comprehensive security consulting services.",
      color: "from-red-500 to-red-600",
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Technical Support",
      description:
        "24/7 expert support, maintenance services, and on-site technical assistance for all your IT needs.",
      color: "from-teal-500 to-teal-600",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our IT Supply Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From hardware procurement to ongoing support, we provide
            comprehensive IT solutions that keep your business running smoothly
            and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;