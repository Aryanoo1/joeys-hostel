import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-black h-[50vh] overflow-hidden">
        <Image
          src="/images/about-1.jpg"
          alt="Joey's Hostel Community Space"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container text-center text-white">
            <h5 className="mb-2 text-xl uppercase tracking-wider">Joey's Hostel</h5>
            <h1 className="text-4xl font-bold md:text-5xl">About Us</h1>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  ))}
                </div>
              </div>

              <h4 className="mb-4 text-lg font-medium text-[#b28b47]">
                Embark on Our Journey: From Humble Beginnings to Endless Connections
              </h4>
              <h2 className="mb-6 text-3xl font-bold text-gray-800 md:text-4xl">
                Our Story: Building Connections, One Journey at a Time
              </h2>

              <p className="mb-4 text-gray-700">
                It all began in Delhi back in 2015 with just 28 beds. Fueled by our passion for fostering connections and creating memorable experiences for travelers, we swiftly expanded, nearly tripling our capacity to accommodate almost 80 beds.
              </p>
              <p className="mb-6 text-gray-700">
                In 2019, we embarked on a new adventure with the launch of our Agra property, followed by our expansion into Rishikesh in 2021. Today, we proudly introduce Joey's by the Ganges, our latest addition to the family, unveiled in 2023.
              </p>

              <div className="mt-8 flex items-center">
                <div className="mr-4 font-semibold">Call Us @</div>
                <a
                  href="tel:01140845678"
                  className="text-lg font-bold text-[#27adec] hover:underline"
                >
                  011 - 40845678
                </a>
              </div>
            </div>

            <div className="md:col-span-1">
              <Image
                src="/images/about-2.jpg"
                alt="Joey's Hostel Experience"
                width={400}
                height={600}
                className="h-auto w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
              Our Core Values
            </h2>
            <p className="mx-auto max-w-3xl text-gray-600">
              At Joey's Hostel, we're guided by principles that ensure every traveler feels welcome, connected, and enriched by their stay with us.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Value 1 */}
            <div className="rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 text-[#27adec]">
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold">Community</h3>
              <p className="text-gray-600">
                We create spaces where travelers from all walks of life can connect, share stories, and form lasting friendships.
              </p>
            </div>

            {/* Value 2 */}
            <div className="rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 text-[#27adec]">
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold">Comfort</h3>
              <p className="text-gray-600">
                We believe that affordable travel shouldn't sacrifice comfort. Our spaces are designed to provide a cozy home away from home.
              </p>
            </div>

            {/* Value 3 */}
            <div className="rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 text-[#27adec]">
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold">Cultural Exchange</h3>
              <p className="text-gray-600">
                We foster an environment where diverse perspectives are shared and celebrated, enriching the travel experience for all.
              </p>
            </div>

            {/* Value 4 */}
            <div className="rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 text-[#27adec]">
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold">Safety</h3>
              <p className="text-gray-600">
                We prioritize the security and well-being of our guests, ensuring a worry-free stay for solo travelers and groups alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
              Meet Our Team
            </h2>
            <p className="mx-auto max-w-3xl text-gray-600">
              The heart and soul of Joey's Hostel is our dedicated team of travel enthusiasts who ensure your stay is nothing short of exceptional.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Team Member 1 */}
            <div className="rounded-lg bg-white p-6 shadow-sm text-center">
              <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                <Image
                  src="/images/about-1.jpg"
                  alt="Team Member"
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold">Raj Sharma</h3>
              <p className="mb-3 text-[#27adec]">Founder & CEO</p>
              <p className="text-gray-600">
                A passionate traveler who turned his love for exploring into a mission to create spaces where connections thrive.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="rounded-lg bg-white p-6 shadow-sm text-center">
              <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                <Image
                  src="/images/about-2.jpg"
                  alt="Team Member"
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold">Priya Patel</h3>
              <p className="mb-3 text-[#27adec]">Operations Manager</p>
              <p className="text-gray-600">
                With an eye for detail and a heart for hospitality, Priya ensures every aspect of your stay exceeds expectations.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="rounded-lg bg-white p-6 shadow-sm text-center">
              <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                <Image
                  src="/images/about-1.jpg"
                  alt="Team Member"
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold">Arjun Kapoor</h3>
              <p className="mb-3 text-[#27adec]">Community Manager</p>
              <p className="text-gray-600">
                A former guest turned team member, Arjun's firsthand experience shapes our community-focused approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="bg-[#27adec] py-16 text-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Join Our Community?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Experience the Joey's Hostel difference for yourself. Book your stay now and become part of our global family of travelers.
          </p>
          <Link
            href="/"
            className="inline-block rounded-md bg-white px-8 py-3 font-medium text-[#27adec] shadow-lg transition-all hover:bg-opacity-90"
          >
            Explore Our Destinations
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
