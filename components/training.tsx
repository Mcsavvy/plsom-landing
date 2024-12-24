"use client";
import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Flame, Globe, Users } from 'lucide-react';

const Bible = forwardRef<SVGSVGElement>((props, ref) => (
    <svg fill="currentColor" strokeWidth="3" {...props} ref={ref} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 466 466" xmlSpace="preserve">
        <g>
            <path strokeOpacity={3} d="M397.289,392.683c10.291,0,18.663-8.373,18.663-18.664V18.664C415.952,8.373,407.58,0,397.289,0H79.374
        C63.203,0,50.048,13.156,50.048,29.327v407.346c0,16.171,13.155,29.327,29.326,29.327h328.578c4.418,0,8-3.582,8-8s-3.582-8-8-8
        h-13.326v-57.317H397.289z M66.048,29.327C66.048,21.979,72.026,16,79.374,16h6.991v77c0,4.418,3.582,8,8,8s8-3.582,8-8V16h294.924
        c1.443,0,2.663,1.22,2.663,2.664v355.355c0,1.444-1.22,2.664-2.663,2.664H102.365V123c0-4.418-3.582-8-8-8s-8,3.582-8,8v253.682
        h-6.991c-4.796,0-9.325,1.157-13.326,3.207V29.327z M378.626,450H79.374c-7.348,0-13.326-5.979-13.326-13.327v-30.664
        c0-7.348,5.979-13.327,13.326-13.327h299.252V450z"/>
            <path strokeOpacity={3} d="M175.529,172.317h49.436v145.524c0,4.418,3.582,8,8,8h36.87c4.418,0,8-3.582,8-8V172.317h49.435c4.418,0,8-3.582,8-8
        v-36.87c0-4.418-3.582-8-8-8h-49.435V74.841c0-4.418-3.582-8-8-8h-36.87c-4.418,0-8,3.582-8,8v44.605h-49.436c-4.418,0-8,3.582-8,8
        v36.87C167.529,168.735,171.111,172.317,175.529,172.317z M183.529,135.447h49.436c4.418,0,8-3.582,8-8V82.841h20.87v44.605
        c0,4.418,3.582,8,8,8h49.435v20.87h-49.435c-4.418,0-8,3.582-8,8v145.524h-20.87V164.317c0-4.418-3.582-8-8-8h-49.436V135.447z"/>
        </g>
    </svg>
));

Bible.displayName = 'Bible';

const TrainingSection = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const programs = [
        {
            icon: Flame,
            title: 'Spiritual',
            verse: 'The Spirit of the LORD will rest on Him—the Spirit of wisdom and understanding, the Spirit of counsel and strength, the Spirit of knowledge and fear of the LORD',
            reference: 'Isaiah 11:20',
            content: 'AT PLSOM, our prayer and impartation on you is to thrive and grow in the word of God through revelation from the Holy Spirit. We desire that your spirit man will be developed and aligned with the Spirit of God who will help you to discover the unique purpose of God for you. You\'ll have the opportunity to recognize the divine gifts bestowed upon you and many more...'
        },
        {
            icon: Globe,
            title: 'Mission',
            verse: 'But ye shall receive power, after that the Holy Ghost is come upon you: and ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth.',
            reference: 'Acts 1:8',
            content: 'AT PLSOM, we train Missionaries, Evangelists and people with Apostolic calling to fulfil their God given Mandates here on earth. The world is waiting for the manifestations of the sons and daughters of God. Those who will take the gospel far and wide.'
        },
        {
            icon: Bible,
            title: 'Personal',
            verse: 'But let patience have its perfect work, that you may be perfect and complete, lacking nothing',
            reference: 'James 1:4',
            content: 'AT PLSOM, we engage, initiate and promote activities designed to improve talents, potentials, self discipline; and instill Godly principles that would enable a minister develop skills essential for both future ministry work and general life challenges. A servant of God must be productive in the society, have important skills to grow wealth and networks, be capable to effectively managing opportunities and people.'
        },
        {
            icon: Users,
            title: 'Mentorship',
            verse: 'I exhort the elders among you, as a fellow elder and a witness of the sufferings of Christ, as well as a partaker in the glory that is going to be revealed: shepherd the flock of God that is among you, exercising oversight, not under compulsion, but willingly, as God would have you; not for shameful gain, but eagerly; not domineering over those in your charge,',
            reference: '1 Peter 5:1-5',
            content: 'AT PLSOM, we do not just train, but we mentor Ministers even after graduating from School of Ministry. We will work with you, pray with you, support you to become a Complete as a minister of God.'
        }
    ];

    return (
        <section className="py-20 bg-plsom-secondary-white">
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
                        variants={fadeIn}
                        className="text-3xl font-bold mb-2 text-plsom-navy"
                    >
                        Program for Practical Ministerial Training
                    </motion.h2>
                    <motion.p
                        variants={fadeIn}
                        className="text-lg text-plsom-gold font-semibold"
                    >
                        (3 John 1:2)
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {programs.map((program, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full border-plsom-secondary-blue hover:shadow-lg transition-shadow bg-white">
                                <CardContent className="p-6 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <program.icon className="h-8 w-8 text-plsom-red" />
                                        <h3 className="text-2xl font-semibold text-plsom-navy">
                                            {program.title}
                                        </h3>
                                    </div>

                                    <blockquote className="border-l-4 border-plsom-gold pl-4 italic text-plsom-navy/80">
                                        {program.verse}
                                        <footer className="text-sm text-plsom-red font-semibold mt-2">
                                            {program.reference}
                                        </footer>
                                    </blockquote>

                                    <p className="text-plsom-navy/70 leading-relaxed">
                                        {program.content}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrainingSection;