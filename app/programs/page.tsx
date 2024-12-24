"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import {
    Book,
    Users,
    Church,
    GraduationCap,
    Globe,
    Heart,
    Clock,
    ScrollText
} from 'lucide-react';
import Link from 'next/link';

export default function Programs() {
    const courseCategories = [
        {
            id: "doctrine",
            title: "Doctrine 101",
            description: "Foundation in Trinity, Christology, Pneumatology, and Anthropology",
            icon: Book,
            courses: [
                "Doctrine of the Trinity",
                "Doctrine of Jesus Christ",
                "Doctrine of the Holy Spirit",
                "Doctrine of Man"
            ]
        },
        {
            id: "acts",
            title: "Acts of the Apostles",
            description: "Deep dive into early church history and apostolic succession",
            icon: ScrollText,
            courses: [
                "The Ascension and Apostolic Succession (Acts 1)",
                "Pentecost (Acts 2)",
                "The Early Jerusalem Church (Acts 2–5)",
                "St. Stephen and St. Paul (Acts 6–9)",
                "The Council of Jerusalem (Acts 10–15)",
                "Paul's Mission to Gentiles (Acts 16–21)",
                "Paul's Arrest, Trials, and Journey to Rome (Acts 21–28)"
            ]
        },
        {
            id: "evangelism",
            title: "Evangelism",
            description: "Practical training in effective evangelism and cultural engagement",
            icon: Globe,
            courses: [
                "What is Evangelism",
                "Barriers to Evangelism",
                "Role of Culture in Evangelism",
                "Communication in Evangelism",
                "The Gospel of Evangelism",
                "Outreach and Open air",
                "Prayer and Evangelism",
                "Apologetics"
            ]
        },
        {
            id: "administration",
            title: "Administration",
            description: "Essential skills in church management and leadership",
            icon: Church,
            courses: [
                "Church Admin as Church Practices",
                "Church Admin and Pastoral Leadership",
                "Time Management and Time Stewardship",
                "Delegation and Meeting Stewardship",
                "Church Finance and Management",
                "Administrative Record Keeping",
                "Communication"
            ]
        },
        {
            id: "pastoral",
            title: "The Pastoral",
            description: "Core pastoral skills and spiritual leadership development",
            icon: Heart,
            courses: [
                "The Ministry Faith",
                "The Ministry of Prayer and Fasting",
                "The Ministry of the Word",
                "Gifts and Fruits of the Holy Spirit",
                "Counselling and Discipleship",
                "The Mantle, The Mandate"
            ]
        }
    ];

    return (
        <main className="min-h-screen bg-plsom-secondary-white">
            {/* Hero Section */}
            <section className="relative py-24 bg-gradient-plsom-blue">
                <div className="absolute inset-0 bg-white/80" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-plsom-navy">
                            Our{' '}
                            <span className="text-plsom-red">
                                Programs
                            </span>
                        </h1>
                        <p className="text-lg text-plsom-navy/80 mb-8">
                            Comprehensive training programs designed to equip you with the knowledge
                            and skills needed for effective ministry in today&apos;s world.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Programs Overview */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Tabs defaultValue="doctrine" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8 bg-transparent p-1 gap-2 h-24 md:h-10">
                            {courseCategories.map((category) => (
                                <TabsTrigger
                                    key={category.id}
                                    value={category.id}
                                    className="data-[state=active]:bg-plsom-red data-[state=active]:text-white data-[state=active]:shadow-lg bg-white text-black last-of-type:col-span-2 md:last-of-type:col-span-1 transition-colors"
                                >
                                    <span className="hidden md:block">{category.title}</span>
                                    <category.icon className="h-4 w-4 md:hidden" />
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        {courseCategories.map((category) => (
                            <TabsContent key={category.id} value={category.id}>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <Card className="mb-8 border-plsom-secondary-blue shadow-lg">
                                        <CardHeader className="bg-gradient-to-r from-plsom-secondary-blue to-white border-b border-plsom-secondary-blue">
                                            <div className="flex items-center space-x-4">
                                                <category.icon className="h-8 w-8 text-plsom-red" />
                                                <div>
                                                    <CardTitle className="text-plsom-navy text-2xl">{category.title}</CardTitle>
                                                    <CardDescription className="text-plsom-navy/70">{category.description}</CardDescription>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="p-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {category.courses.map((course, index) => (
                                                    <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: index * 0.1 }}
                                                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-plsom-secondary-blue/20 transition-colors"
                                                    >
                                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-plsom-red/10 flex items-center justify-center">
                                                            <Book className="h-3 w-3 text-plsom-red" />
                                                        </div>
                                                        <span className="text-plsom-navy/80">{course}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </section>

            {/* Program Features */}
            <section className="py-20 bg-gradient-plsom-blue">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold mb-4 text-white">Program Features</h2>
                        <p className="text-white/90 max-w-2xl mx-auto">
                            Our programs are designed to provide a comprehensive learning experience
                            that combines theoretical knowledge with practical application.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: GraduationCap,
                                title: "Expert Faculty",
                                description: "Learn from experienced ministers and educators"
                            },
                            {
                                icon: Clock,
                                title: "Flexible Schedule",
                                description: "Programs designed to accommodate your commitments"
                            },
                            {
                                icon: Users,
                                title: "Mentorship",
                                description: "One-on-one guidance from experienced ministers"
                            },
                            {
                                icon: Globe,
                                title: "Practical Training",
                                description: "Hands-on experience in real ministry settings"
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full hover:shadow-lg transition-shadow bg-white/95 backdrop-blur">
                                    <CardContent className="p-6 text-center">
                                        <feature.icon className="h-12 w-12 mx-auto mb-4 text-plsom-red" />
                                        <h3 className="text-lg font-semibold mb-2 text-plsom-navy">{feature.title}</h3>
                                        <p className="text-plsom-navy/70 text-sm">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-plsom-navy relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-plsom-red opacity-10 transform rotate-12 scale-150" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center text-white"
                    >
                        <h2 className="text-4xl font-bold mb-4">Ready to Begin Your Journey?</h2>
                        <p className="mb-8 text-white/90 max-w-2xl mx-auto text-lg">
                            Take the first step towards your ministerial calling. Apply now to join our
                            community of dedicated learners and future ministry leaders.
                        </p>
                        <Link
                            href="/enroll"
                            className="inline-flex items-center justify-center bg-plsom-red hover:bg-plsom-secondary-burgundy text-white px-8 py-4 rounded-md font-semibold transition-colors text-lg"
                        >
                            Apply Now
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}