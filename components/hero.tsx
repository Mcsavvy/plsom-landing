import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, Book, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
            <Image
                src="/hero-img.jpg"
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="opacity-50"
            />
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-plsom-secondary-blue opacity-20 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-plsom-red opacity-10 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-plsom-gold opacity-10 blur-3xl" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent" />

            {/* Main Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text Content */}
                <motion.div
                initial="initial"
                animate="animate"
                variants={{
                    initial: { opacity: 0 },
                    animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
                }}
                className="space-y-8"
                >
                <motion.h1
                    variants={fadeIn}
                    className="text-4xl md:text-6xl font-bold leading-tight text-plsom-navy"
                >
                    <span className="text-plsom-red">
                    Empowering
                    </span>{' '}
                    the Next Generation of Ministry Leaders
                </motion.h1>

                <motion.p
                    variants={fadeIn}
                    className="text-lg text-plsom-navy/80 max-w-2xl"
                >
                    At Perfect Love School of Ministry, we are devoted to training and guiding future leaders,
                    empowering them to shape society for the glory of Jesus Christ through practical,
                    Spirit-inspired training.
                </motion.p>

                <motion.div
                    variants={fadeIn}
                    className="flex flex-wrap gap-4"
                >
                    <Button
                    size="lg"
                    className="bg-plsom-red hover:bg-plsom-secondary-burgundy text-white px-8 py-6 text-lg"
                    asChild
                    >
                    <Link href="/enroll">
                        Begin Your Journey
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                    </Button>
                    <Button
                    size="lg"
                    variant="outline"
                    className="border-plsom-navy text-plsom-navy hover:bg-plsom-secondary-blue px-8 py-6 text-lg"
                    asChild
                    >
                    <Link href="/programs">
                        Explore Programs
                    </Link>
                    </Button>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    variants={fadeIn}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8"
                >
                    {[
                    { icon: GraduationCap, label: 'Graduate Success', value: '95%' },
                    { icon: Book, label: 'Course Programs', value: '7+' },
                    { icon: Users, label: 'Active Students', value: '500+' },
                    ].map((stat, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center p-6 rounded-lg bg-white/80 backdrop-blur shadow-lg border border-plsom-secondary-blue"
                    >
                        <stat.icon className="h-8 w-8 text-plsom-red mb-2" />
                        <span className="text-2xl font-bold text-plsom-navy">{stat.value}</span>
                        <span className="text-sm text-plsom-navy/70">{stat.label}</span>
                    </div>
                    ))}
                </motion.div>
                </motion.div>

                {/* Right Column - Decorative Logo */}
                <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:block"
                >
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-plsom-red to-plsom-navy rounded-full opacity-20 blur-3xl" />
                    <div className="relative aspect-square rounded-full bg-gradient-to-r from-plsom-blue to-plsom-navy p-1">
                    <div className="absolute inset-1 bg-white rounded-full shadow-inner" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                        src="/logo.png"
                        alt="Perfect Love School of Ministry"
                        width={200}
                        height={200}
                        />
                    </div>
                    </div>
                </div>
                </motion.div>
            </div>
            </div>
        </div>
    );
};

export default HeroSection;