"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from 'lucide-react';

// Form validation schema remains the same
const formSchema = z.object({
    full_name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    father_name: z.string().min(2, { message: "Father's name must be at least 2 characters" }),
    mother_name: z.string().min(2, { message: "Mother's name must be at least 2 characters" }),
    gender: z.enum(["MALE", "FEMALE"], {
        required_error: "Please select a gender",
    }),
    phone: z.string()
        .min(10, { message: "Phone number must be at least 10 characters" })
        .regex(/^[+\d\s-()]+$/, { message: "Invalid phone number format" }),
    email: z.string().email({ message: "Invalid email address" }),
    full_residential_address: z.string()
        .min(10, { message: "Address must be at least 10 characters" }),
    nationality: z.string()
        .min(2, { message: "Nationality must be at least 2 characters" }),
    employment_status: z.enum(["EMPLOYED", "UNEMPLOYED", "STUDENT"], {
        required_error: "Please select employment status",
    }),
    program_interest: z.string()
        .min(20, { message: "Please provide more details about your interest (minimum 20 characters)" })
});

export default function EnrollPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            full_name: "",
            father_name: "",
            mother_name: "",
            gender: undefined,
            phone: "",
            email: "",
            full_residential_address: "",
            nationality: "",
            employment_status: undefined,
            program_interest: "",
        },
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setIsSubmitting(true);
        try {
            const response = await fetch('https://live.plsom.com/api/submit-application/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                if (response.status === 429) {
                    toast({
                        title: "Rate Limit Exceeded",
                        description: "Too many submissions. Please try again later.",
                        variant: "destructive",
                    });
                } else {
                    throw new Error(result.message || 'Something went wrong');
                }
                return;
            }

            toast({
                title: "Application Submitted",
                description: "Your application has been submitted successfully.",
            });

            form.reset();

        } catch (error) {
            toast({
                title: "Error",
                description: (error as Error).message || "An error occurred while submitting your application.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-plsom-secondary-white">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-plsom-blue">
                <div className="absolute inset-0 bg-white/50" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Begin Your{' '}
                            <span className="text-plsom-gold">
                                Ministry Journey
                            </span>
                        </h1>
                        <p className="text-lg text-white/90 mb-8">
                            Take the first step towards your calling by enrolling in our comprehensive ministry programs.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Enrollment Form */}
            <section className="py-20">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Card className="border-plsom-secondary-blue shadow-lg">
                        <CardHeader className="space-y-1">
                            <CardTitle className="text-2xl text-plsom-navy">Enrollment Form</CardTitle>
                            <CardDescription className="text-plsom-navy/70">
                                Please fill out all required fields to submit your application.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                {/* @ts-expect-error ...*/}
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 group">
                                    <FormField
                                        control={form.control}
                                        name="full_name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-plsom-navy">Full Name</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Enter your full name"
                                                        className="border-plsom-secondary-blue focus:border-plsom-blue"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-plsom-red" />
                                            </FormItem>
                                        )}
                                    />

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <FormField
                                            control={form.control}
                                            name="father_name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-plsom-navy">Father&apos;s Name</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Enter father's name"
                                                            className="border-plsom-secondary-blue focus:border-plsom-blue"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage className="text-plsom-red" />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="mother_name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-plsom-navy">Mother&apos;s Name</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Enter mother's name"
                                                            className="border-plsom-secondary-blue focus:border-plsom-blue"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage className="text-plsom-red" />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <FormField
                                            control={form.control}
                                            name="gender"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-plsom-navy">Gender</FormLabel>
                                                    <Select
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                    >
                                                        <FormControl>
                                                            <SelectTrigger className="border-plsom-secondary-blue focus:border-plsom-blue">
                                                                <SelectValue placeholder="Select gender" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectItem value="MALE">Male</SelectItem>
                                                            <SelectItem value="FEMALE">Female</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage className="text-plsom-red" />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-plsom-navy">Phone Number</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Enter phone number"
                                                            className="border-plsom-secondary-blue focus:border-plsom-blue"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage className="text-plsom-red" />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-plsom-navy">Email</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Enter your email"
                                                        type="email"
                                                        className="border-plsom-secondary-blue focus:border-plsom-blue"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-plsom-red" />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="full_residential_address"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-plsom-navy">Full Residential Address</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Enter your full address"
                                                        className="resize-none border-plsom-secondary-blue focus:border-plsom-blue"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-plsom-red" />
                                            </FormItem>
                                        )}
                                    />

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <FormField
                                            control={form.control}
                                            name="nationality"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-plsom-navy">Nationality</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Enter your nationality"
                                                            className="border-plsom-secondary-blue focus:border-plsom-blue"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage className="text-plsom-red" />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="employment_status"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-plsom-navy">Employment Status</FormLabel>
                                                    <Select
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                    >
                                                        <FormControl>
                                                            <SelectTrigger className="border-plsom-secondary-blue focus:border-plsom-blue">
                                                                <SelectValue placeholder="Select status" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectItem value="EMPLOYED">Employed</SelectItem>
                                                            <SelectItem value="UNEMPLOYED">Unemployed</SelectItem>
                                                            <SelectItem value="STUDENT">Student</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage className="text-plsom-red" />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <FormField
                                        control={form.control}
                                        name="program_interest"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-plsom-navy">Tell us about your interest in the program</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Describe your interest and what you hope to achieve..."
                                                        className="resize-none border-plsom-secondary-blue focus:border-plsom-blue"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-plsom-red" />
                                            </FormItem>
                                        )}
                                    />

                                    <Button
                                        type="submit"
                                        className="w-full bg-plsom-red hover:bg-plsom-secondary-burgundy text-white font-semibold py-6 text-lg disabled:opacity-50"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                                Submitting...
                                            </>
                                        ) : (
                                            'Submit Application'
                                        )}
                                    </Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </main>
    );
}