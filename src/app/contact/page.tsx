import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-black h-[50vh] overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Contact Joey's Hostel"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container text-center text-white">
            <h5 className="mb-2 text-xl uppercase tracking-wider">Get in Touch</h5>
            <h1 className="text-4xl font-bold md:text-5xl">Contact Us</h1>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-3xl font-bold">Send Us a Message</h2>
              <p className="mb-8 text-gray-600">
                Have questions about our hostels or need assistance with a booking? Fill out the form below and our team will get back to you as soon as possible.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-[#27adec] focus:outline-none focus:ring-1 focus:ring-[#27adec]"
                      placeholder="Your first name"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-[#27adec] focus:outline-none focus:ring-1 focus:ring-[#27adec]"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-[#27adec] focus:outline-none focus:ring-1 focus:ring-[#27adec]"
                    placeholder="Your email address"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-[#27adec] focus:outline-none focus:ring-1 focus:ring-[#27adec]"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-[#27adec] focus:outline-none focus:ring-1 focus:ring-[#27adec]"
                    placeholder="Your message"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-block rounded-md bg-[#27adec] px-6 py-3 font-medium text-white shadow-sm transition-all hover:bg-opacity-90"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="mb-6 text-3xl font-bold">Our Locations</h2>
              <p className="mb-8 text-gray-600">
                Find us at any of our welcoming locations across India. Whether you're planning to visit Delhi, Agra, Rishikesh, or seeking a tranquil stay by the Ganges, we look forward to hosting you.
              </p>

              <div className="space-y-8">
                {/* Delhi */}
                <div className="flex">
                  <div className="mr-4 flex-shrink-0 rounded-full bg-blue-50 p-3">
                    <svg className="h-6 w-6 text-[#27adec]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold">Joey's Delhi</h3>
                    <p className="mb-1 text-gray-600">
                      1/49 Lalita Park, Main Vikas Marg, Laxmi Nagar, Delhi - 110092
                    </p>
                    <a href="tel:+918527222938" className="text-[#27adec] hover:underline">
                      +91 - 8527222938
                    </a>
                  </div>
                </div>

                {/* Agra */}
                <div className="flex">
                  <div className="mr-4 flex-shrink-0 rounded-full bg-blue-50 p-3">
                    <svg className="h-6 w-6 text-[#27adec]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold">Joey's Agra</h3>
                    <p className="mb-1 text-gray-600">
                      Near Taj Mahal Eastern Gate, Agra, Uttar Pradesh
                    </p>
                    <a href="tel:+918273355779" className="text-[#27adec] hover:underline">
                      +91 - 8273355779
                    </a>
                  </div>
                </div>

                {/* Rishikesh */}
                <div className="flex">
                  <div className="mr-4 flex-shrink-0 rounded-full bg-blue-50 p-3">
                    <svg className="h-6 w-6 text-[#27adec]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold">Joey's Rishikesh</h3>
                    <p className="mb-1 text-gray-600">
                      Laxman Jhula Road, Rishikesh, Uttarakhand
                    </p>
                    <a href="tel:+917217482824" className="text-[#27adec] hover:underline">
                      +91 - 7217482824
                    </a>
                  </div>
                </div>

                {/* By the Ganges */}
                <div className="flex">
                  <div className="mr-4 flex-shrink-0 rounded-full bg-blue-50 p-3">
                    <svg className="h-6 w-6 text-[#27adec]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold">Joey's By The Ganges</h3>
                    <p className="mb-1 text-gray-600">
                      Muni Ki Reti, Ganga Riverside, Rishikesh, Uttarakhand
                    </p>
                    <a href="tel:+917817845045" className="text-[#27adec] hover:underline">
                      +91 - 7817845045
                    </a>
                  </div>
                </div>
              </div>

              {/* General Contact */}
              <div className="mt-8 rounded-lg bg-gray-50 p-6">
                <h3 className="mb-4 text-xl font-bold">General Inquiries</h3>
                <div className="flex items-center mb-4">
                  <svg className="mr-3 h-5 w-5 text-[#27adec]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:joeyshostel@gmail.com" className="text-[#27adec] hover:underline">
                    joeyshostel@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <svg className="mr-3 h-5 w-5 text-[#27adec]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:01140845678" className="text-[#27adec] hover:underline">
                    011 - 40845678
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold">Connect With Us</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/joeyshostel"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white p-4 shadow-md transition-all hover:shadow-lg"
            >
              <svg className="h-6 w-6 text-[#27adec]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/joeyshostel"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white p-4 shadow-md transition-all hover:shadow-lg"
            >
              <svg className="h-6 w-6 text-[#27adec]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/joeyshostel"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white p-4 shadow-md transition-all hover:shadow-lg"
            >
              <svg className="h-6 w-6 text-[#27adec]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.195c-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045A13.94 13.94 0 011.64 3.162a4.963 4.963 0 001.55 6.633 4.93 4.93 0 01-2.229-.618v.063c0 2.409 1.722 4.43 4.029 4.89a4.935 4.935 0 01-2.224.085 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a14.03 14.03 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@joeyshostel"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white p-4 shadow-md transition-all hover:shadow-lg"
            >
              <svg className="h-6 w-6 text-[#27adec]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
