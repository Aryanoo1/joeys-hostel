import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Location data
type LocationData = {
  id: string;
  name: string;
  title: string;
  location: string;
  description: string[];
  image: string;
  phone?: string;
  email?: string;
  address?: string;
  amenities: string[];
};

const LOCATIONS: Record<string, LocationData> = {
  delhi: {
    id: "delhi",
    name: "Delhi",
    title: "Joey's Hostel: Your Haven in Delhi",
    location: "Delhi - a city that never sleeps",
    description: [
      "Welcome to Joey's Hostel, located in New Delhi, just a stone's throw away from the Laxmi Metro Station. Enjoy complimentary Wi-Fi access throughout your stay. Each room is equipped with air conditioning and features a shared bathroom.",
      "Our hostel boasts a terrace and a communal kitchen for your convenience. Additional amenities include a shared lounge, ticket service, and tour desk. Rest assured with complimentary parking available on-site.",
      "Explore nearby attractions such as Swaminarayan Akshardham, Feroz Shah Kotla Cricket Stadium, and Rāj Ghāt, all within a few miles from our hostel. Delhi International Airport is conveniently located 12 miles away.",
      "Experience comfort and convenience at Joey's Hostel, your home away from home in New Delhi."
    ],
    image: "https://www.joeyshostel.com/img/3.jpg",
    phone: "+91 - 8527222938",
    email: "joeyshostel@gmail.com",
    address: "1/49 Lalita Park, Main Vikas Marg, Laxmi Nagar, Delhi - 110092",
    amenities: [
      "1-2 Persons per room",
      "Free Wifi",
      "Daily housekeeping",
      "Breakfast",
      "Barbecue facility on terrace",
      "Laundry & Towels",
      "24-hour front desk",
      "Parking",
      "Air Conditioning",
      "Shared kitchen",
    ]
  },

  agra: {
    id: "agra",
    name: "Agra",
    title: "Joey's Hostel: Your Gateway to the Taj Mahal",
    location: "Agra, where love stories come to life",
    description: [
      "Welcome to Joey's Hostel Agra, the perfect base for exploring the iconic Taj Mahal and other wonders of this historic city. Located just a short distance from the Taj Mahal, our hostel offers the perfect blend of comfort and convenience.",
      "Our hostel features comfortable rooms, a vibrant common area, and a rooftop terrace offering breathtaking views of the city. Connect with fellow travelers and exchange stories of your adventures in this magical city.",
      "Our knowledgeable staff can help arrange tours, transportation, and provide insider tips to make your stay in Agra truly memorable."
    ],
    image: "https://www.joeyshostel.com/img/2.jpg",
    phone: "+91 - 8273355779",
    amenities: [
      "Dorm and private rooms",
      "Free Wifi",
      "Daily housekeeping",
      "Breakfast",
      "Rooftop lounge",
      "Laundry services",
      "24-hour front desk",
      "Tour booking assistance",
      "Air Conditioning",
      "Game room",
    ]
  },

  rishikesh: {
    id: "rishikesh",
    name: "Rishikesh",
    title: "Joey's Hostel: Riverside Serenity in Rishikesh",
    location: "You, me, and the mountains",
    description: [
      "Welcome to Joey's Rishikesh, your riverside retreat in the yoga capital of the world. Our hostel offers a tranquil escape along the banks of the sacred Ganges River.",
      "Immerse yourself in the spiritual atmosphere of Rishikesh while enjoying the comfort of our thoughtfully designed accommodations. Our hostel features peaceful common areas, yoga spaces, and stunning views of the surrounding mountains.",
      "Whether you're seeking adventure in the form of white-water rafting and trekking, or inner peace through yoga and meditation, Joey's Rishikesh provides the perfect base for your journey."
    ],
    image: "https://www.joeyshostel.com/img/1.jpg",
    phone: "+91 - 7217482824",
    amenities: [
      "Riverside location",
      "Free Wifi",
      "Yoga deck",
      "Organic breakfast",
      "Outdoor lounge areas",
      "Adventure activities booking",
      "24-hour front desk",
      "Meditation spaces",
      "Shared kitchen",
      "Book exchange",
    ]
  },

  homestay: {
    id: "homestay",
    name: "Joey's Homestay",
    title: "Joey's Homestay: Your Home Away from Home",
    location: "Yoga flow and mountain glow",
    description: [
      "Experience authentic Indian hospitality at Joey's Homestay. Our family-run accommodation offers a warm, personal touch that makes you feel like part of the family from the moment you arrive.",
      "Enjoy homemade meals prepared with love, comfortable private rooms, and the opportunity to experience daily Indian life up-close. Our homestay is designed for travelers who seek a deeper connection with the local culture and people.",
      "Located in a peaceful residential area, yet close to major attractions, Joey's Homestay offers the best of both worlds for your Indian adventure."
    ],
    image: "https://www.joeyshostel.com/img/5.jpg", // Using Rishikesh image as placeholder
    amenities: [
      "Private rooms with ensuite bathrooms",
      "Free Wifi",
      "Home-cooked meals",
      "Cultural activities",
      "Local guides available",
      "Airport pickup service",
      "Laundry service",
      "Garden area",
      "Family atmosphere",
      "Long-term stays welcome",
    ]
  },

  "by-the-ganges": {
    id: "by-the-ganges",
    name: "By The Ganges",
    title: "Joey's By The Ganges: Spiritual Riverside Living",
    location: "Ganges Aarti and heartwarming moments",
    description: [
      "Joey's By The Ganges offers a spiritual retreat along the sacred river, providing a unique blend of modern comfort and traditional atmosphere.",
      "Wake up to the soothing sounds of the river and witness the spectacular Ganga Aarti ceremony just steps from your accommodation. Our hostel is designed to foster connection with nature, the river, and fellow travelers on a spiritual journey.",
      "Our peaceful rooms, meditation spaces, and yoga platforms create the perfect environment for reflection and rejuvenation during your stay."
    ],
    image: "https://www.joeyshostel.com/img/4.jpg", // Using Rishikesh image as placeholder
    phone: "+91 - 7817845045",
    amenities: [
      "Ganges riverfront location",
      "Free Wifi",
      "Daily yoga classes",
      "Vegetarian meals",
      "Meditation spaces",
      "Spiritual activities",
      "24-hour front desk",
      "Balcony views of the river",
      "Reading library",
      "Evening Aarti ceremonies",
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(LOCATIONS).map(location => ({
    location
  }));
}

export default function DestinationPage({ params }: { params: { location: string } }) {
  const location = params.location;
  const locationData = LOCATIONS[location];

  if (!locationData) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="relative bg-black h-[50vh] overflow-hidden">
        <Image
          src={locationData.image}
          alt={locationData.name}
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">{locationData.title}</h1>
            <p className="text-xl">{locationData.location}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="mb-8 text-3xl font-bold">About {locationData.name}</h2>

              {locationData.description.map((paragraph, index) => (
                <p key={`desc-${locationData.id}-${index}`} className="mb-4 text-gray-700">
                  {paragraph}
                </p>
              ))}

              <div className="mt-8">
                <a
                  href={`https://live.ipms247.com/booking/book-rooms-joeyshostel${locationData.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded bg-[#27adec] px-6 py-3 font-medium text-white hover:bg-opacity-90"
                >
                  Book Now
                </a>
              </div>
            </div>

            <div>
              <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold">Contact Information</h3>

                {locationData.address && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700">Address:</h4>
                    <p className="text-gray-600">{locationData.address}</p>
                  </div>
                )}

                {locationData.phone && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700">Phone:</h4>
                    <a href={`tel:${locationData.phone.replace(/\s+/g, '')}`} className="text-[#27adec] hover:underline">
                      {locationData.phone}
                    </a>
                  </div>
                )}

                {locationData.email && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700">Email:</h4>
                    <a href={`mailto:${locationData.email}`} className="text-[#27adec] hover:underline">
                      {locationData.email}
                    </a>
                  </div>
                )}
              </div>

              <div className="mt-6 rounded-lg bg-gray-50 p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold">Amenities</h3>
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {locationData.amenities.map((amenity, index) => (
                    <li key={`amenity-${locationData.id}-${index}`} className="flex items-center">
                      <svg className="mr-2 h-5 w-5 text-[#27adec]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#27adec] py-12 text-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready for an Unforgettable Stay?</h2>
          <p className="mx-auto mb-6 max-w-2xl">
            Book your accommodation at Joey's {locationData.name} now and become part of our global community of travelers.
          </p>
          <a
            href={`https://live.ipms247.com/booking/book-rooms-joeyshostel${locationData.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-white px-8 py-3 font-medium text-[#27adec] shadow-md transition-all hover:bg-gray-100"
          >
            Book Your Stay
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
