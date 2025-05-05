import Image from "next/image"
import Link from "next/link"

import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/home/Hero"
import DestinationCards from "@/components/home/DestinationCards"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <DestinationCards />

      {/* About Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h4 className="section-subtitle">
                Cultivating Connections: Welcome to Joey's Hostels
              </h4>
              <h2 className="section-title">
                Discover the Essence of Travel: Community, Connection, and Comfort at Joey's Hostels
              </h2>
              <p className="mb-4 text-gray-600">
                Welcome to Joey's Hostels, where every stay promises more than just a bed for the night - it's an invitation to join a vibrant community of travelers and explorers. As avid backpackers ourselves, we understand the essence of travel extends beyond sightseeing; it's about the connections forged and the experiences shared.
              </p>
              <p className="mb-4 text-gray-600">
                Our hostels are designed as hubs of social interaction, where events, outings, and shared spaces foster friendships and unforgettable moments. From late-night conversations that unravel new perspectives to the comfort of knowing our reliable staff has your back, we prioritize the small details that elevate your stay.
              </p>
              <p className="mb-6 text-gray-600">
                Whether it's swapping stories over breakfast, embarking on adventures together, or simply finding solace in the tranquility of our accommodations, Joey's Hostels offer a unique blend of camaraderie and comfort. Join us, and let's explore the world - and ourselves - together.
              </p>
              <div className="flex items-center">
                <div className="mr-4 font-semibold text-gray-700">Call Now</div>
                <a
                  href="tel:01140845678"
                  className="flex items-center text-lg font-bold text-[#27adec] hover:underline"
                >
                  011 - 40845678
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Image
                src="/images/about-1.jpg"
                alt="Joey's Hostel Community"
                width={400}
                height={600}
                className="h-auto w-full rounded-lg object-cover"
              />
              <Image
                src="/images/about-2.jpg"
                alt="Joey's Hostel Experience"
                width={400}
                height={600}
                className="h-auto w-full rounded-lg object-cover md:mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="section-title">Experience the Joey's Difference</h2>
            <p className="mx-auto max-w-3xl text-gray-600">
              Our hostels are designed with your comfort and social experience in mind.
              Discover what makes Joey's Hostel the perfect home away from home for travelers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 rounded-full bg-blue-50 p-3 inline-flex">
                <svg className="h-6 w-6 text-[#27adec]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Vibrant Community</h3>
              <p className="text-gray-600">
                Connect with fellow travelers from around the world and build lasting friendships in our social spaces.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 rounded-full bg-blue-50 p-3 inline-flex">
                <svg className="h-6 w-6 text-[#27adec]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Prime Locations</h3>
              <p className="text-gray-600">
                Our hostels are strategically located near major attractions, making it easy to explore the best of each city.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 rounded-full bg-blue-50 p-3 inline-flex">
                <svg className="h-6 w-6 text-[#27adec]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Safety & Security</h3>
              <p className="text-gray-600">
                Rest easy knowing that our 24-hour front desk and secure facilities prioritize your safety and peace of mind.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 rounded-full bg-blue-50 p-3 inline-flex">
                <svg className="h-6 w-6 text-[#27adec]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Clean & Comfortable</h3>
              <p className="text-gray-600">
                Enjoy spotless rooms, comfortable beds and modern amenities for a relaxing stay after a day of exploration.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 rounded-full bg-blue-50 p-3 inline-flex">
                <svg className="h-6 w-6 text-[#27adec]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Cultural Immersion</h3>
              <p className="text-gray-600">
                Experience authentic local culture through our curated events, city tours, and insider recommendations.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 rounded-full bg-blue-50 p-3 inline-flex">
                <svg className="h-6 w-6 text-[#27adec]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Home-Like Atmosphere</h3>
              <p className="text-gray-600">
                Our communal kitchens, lounges, and outdoor spaces create a homey environment where you can relax and feel welcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#27adec] py-16 text-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Experience Joey's Hostel?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Book your stay now and join our community of travelers exploring the best of India.
          </p>
          <Link
            href="/destinations/delhi"
            className="inline-block rounded-md bg-white px-8 py-3 font-medium text-[#27adec] shadow-lg transition-all hover:bg-opacity-90"
          >
            Book Your Stay
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
