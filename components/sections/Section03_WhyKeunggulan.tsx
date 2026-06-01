"use client";

import { motion } from "framer-motion";
import { Award, Leaf, Clock, MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export default function WhyChooseUsSection() {
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Premium Quality",
      desc: "We only source the top 1% of Arabica beans globally.",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Eco-Friendly",
      desc: "Sustainable packaging and direct-trade sourcing.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Freshly Roasted",
      desc: "Roasted in-house daily for maximum flavor.",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Cozy Location",
      desc: "Located in the heart of the city with free WiFi.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-brand-50">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Why Choose Us"
          subtitle="Discover what makes Kaizen Coffee different from the rest."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-brand-200 text-center hover:-translate-y-2 transition-transform duration-300 shadow-sm"
            >
              <div className="mx-auto w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-3">{feature.title}</h3>
              <p className="text-brand-700 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
