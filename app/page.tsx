"use client";
import { motion } from 'framer-motion';
import HeroSection from '@/components/hero';
import { Card, CardContent } from "@/components/ui/card";
import { Book } from 'lucide-react';
import Link from 'next/link';
import TrainingSection from '@/components/training';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const programs = [
    {
      title: 'Doctrine 101',
      description: 'Foundation in Trinity, Christology, Pneumatology, and Anthropology'
    },
    {
      title: 'Acts of the Apostles',
      description: 'Deep dive into early church history and apostolic succession'
    },
    {
      icon: Book,
      title: 'Evangelism & Outreach',
      description: 'Practical training in effective evangelism and cultural engagement'
    },
    {
      title: 'Church Administration',
      description: 'Essential skills in church management and leadership'
    }
  ];

  return (
    <div className="min-h-screen bg-plsom-secondary-white">
      <main>
        <HeroSection />

        <TrainingSection />

        {/* Programs Section */}
        <section className="py-20 bg-gradient-plsom-blue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{
                initial: { opacity: 0 },
                animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
              className="text-center mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl font-bold mb-4 text-white"
              >
                Our Programs
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-white/90 max-w-2xl mx-auto text-lg"
              >
                Comprehensive training programs designed to equip you for effective ministry
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow bg-white/95 backdrop-blur">
                    <CardContent className="p-6">
                      <Book className="h-8 w-8 mb-4 text-plsom-red" />
                      <h3 className="text-lg font-semibold mb-2 text-plsom-navy">{program.title}</h3>
                      <p className="text-plsom-navy/70 text-sm">{program.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-plsom-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-4 text-white">
                Begin Your Ministerial Journey Today
              </h2>
              <p className="mb-8 text-white/90 text-lg">
                Join us in shaping the future of ministry through practical, Spirit-led training.
              </p>
              <Link href="/enroll"
                className="inline-flex items-center justify-center bg-plsom-red text-white px-8 py-4 rounded-md font-semibold hover:bg-plsom-secondary-burgundy transition-colors text-lg"
              >
                Apply Now
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}