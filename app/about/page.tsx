"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import {
    Heart,
    Users,
    Target,
    BookOpen,
    GraduationCap,
    Star
} from 'lucide-react';

export default function About() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const visionPoints = [
        {
            icon: Target,
            title: "Practical & Spiritual Preparation",
            description: "Providing practical and spiritual preparation for the apostolic mandate of the saints of God in these end times."
        },
        {
            icon: BookOpen,
            title: "Conducive Learning Environment",
            description: "Building a conducive learning environment with a Holy Ghost inspired culture that emphasizes the ministry of the word and prayer."
        },
        {
            icon: Star,
            title: "Uphold Biblical Values",
            description: "Upholding and impacting biblical truth in its totality without compromise, preparing ministers for effective service."
        }
    ];

    const values = [
        {
            title: "Spiritual Excellence",
            description: "We strive for spiritual excellence through deep biblical understanding and Holy Spirit guidance.",
            icon: Heart
        },
        {
            title: "Practical Training",
            description: "Our programs combine theological knowledge with practical ministry experience.",
            icon: GraduationCap
        },
        {
            title: "Mentorship Focus",
            description: "We believe in personal guidance and mentorship for each student's spiritual journey.",
            icon: Users
        }
    ];

    return (
        <main className="min-h-screen bg-plsom-secondary-white">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-plsom-blue">
                <div className="absolute inset-0 bg-white/80" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={{
                            initial: { opacity: 0 },
                            animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
                        }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <motion.h1
                            variants={fadeInUp}
                            className="text-4xl md:text-5xl font-bold mb-6 text-plsom-navy"
                        >
                            Welcome to{' '}
                            <span className="text-plsom-red">
                                Perfect Love School of Ministry
                            </span>
                        </motion.h1>
                        <motion.p
                            variants={fadeInUp}
                            className="text-lg text-plsom-navy/80 mb-8"
                        >
                            We are dedicated to providing exceptional practical ministry training to equip our
                            students with the skills and knowledge needed to thrive in their spiritual journey.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-20 bg-white">
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
                            className="text-3xl font-bold mb-4 text-plsom-navy"
                        >
                            Our Vision
                        </motion.h2>
                        <motion.p
                            variants={fadeInUp}
                            className="text-plsom-navy/80 max-w-2xl mx-auto"
                        >
                            Guided by the Holy Spirit, we are committed to raising a generation that will
                            fearlessly proclaim the message of the Kingdom of God with unwavering conviction.
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {visionPoints.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full hover:shadow-lg transition-shadow border-plsom-secondary-blue">
                                    <CardContent className="p-6">
                                        <point.icon className="h-12 w-12 text-plsom-red mb-4" />
                                        <h3 className="text-xl font-semibold mb-2 text-plsom-navy">{point.title}</h3>
                                        <p className="text-plsom-navy/70">{point.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
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
                            className="text-3xl font-bold mb-4 text-white"
                        >
                            Our Core Values
                        </motion.h2>
                        <motion.p
                            variants={fadeInUp}
                            className="text-white/90 max-w-2xl mx-auto"
                        >
                            At Perfect Love School of Ministry, our values shape everything we do, from our
                            teaching methods to our community engagement.
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full hover:shadow-lg transition-shadow bg-white/95 backdrop-blur">
                                    <CardContent className="p-6">
                                        <value.icon className="h-12 w-12 text-plsom-red mb-4" />
                                        <h3 className="text-xl font-semibold mb-2 text-plsom-navy">{value.title}</h3>
                                        <p className="text-plsom-navy/70">{value.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={{
                            initial: { opacity: 0 },
                            animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
                        }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    >
                        <motion.div variants={fadeInUp}>
                            <h2 className="text-3xl font-bold mb-6 text-plsom-navy">Why Choose PLSOM?</h2>
                            <div className="space-y-6">
                                {[
                                    {
                                        icon: GraduationCap,
                                        title: "Experienced Faculty",
                                        description: "Our experienced and dedicated teachers are committed to helping students reach their full potential."
                                    },
                                    {
                                        icon: BookOpen,
                                        title: "Comprehensive Curriculum",
                                        description: "Our curriculum combines academic excellence with a strong foundation in faith and values."
                                    },
                                    {
                                        icon: Users,
                                        title: "Supportive Community",
                                        description: "Join a nurturing community where students grow academically and spiritually together."
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-10 h-10 rounded-full bg-plsom-secondary-blue flex items-center justify-center">
                                                <item.icon className="h-5 w-5 text-plsom-navy" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-2 text-plsom-navy">{item.title}</h3>
                                            <p className="text-plsom-navy/70">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="relative"
                        >
                            <div className="relative rounded-lg overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-plsom-blue opacity-10" />
                                <div className="relative p-8 bg-white rounded-lg border border-plsom-secondary-blue">
                                    <blockquote className="text-lg italic text-plsom-navy/80">
                                        &quot;We are devoted to training and guiding the next generation of Ministry leaders,
                                        empowering them to shape society for the glory of Jesus Christ through practical,
                                        Spirit-inspired training.&quot;
                                    </blockquote>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}