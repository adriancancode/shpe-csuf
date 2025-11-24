'use client'
import React from 'react';
import AlumniList from '@/components/AlumniList';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export default function alumniPage() {
    return (
    <div className="min-h-screen">
        <Header variant="page" />
        <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-5xl font-bold mb-6">Alumni</h1>
                <p className="text-xl max-w-3xl mx-auto">
                    Celebrating the achievements of our SHPE CSUF alumni who are making waves in the STEM industry.
                </p>
            </div>
        </section>
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <AlumniList />
            </div>
        </section>
        <Footer />
    </div>
    );
}