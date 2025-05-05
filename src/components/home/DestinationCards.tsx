import Image from "next/image";
import Link from "next/link";

type Destination = {
  id: string;
  name: string;
  location: string;
  image: string;
  tagline: string;
  phone?: string;
};

const destinations: Destination[] = [
  {
    id: "delhi",
    name: "Delhi",
    location: "Delhi - a city that never sleeps",
    image: "https://www.joeyshostel.com/img/3.jpg",
    tagline: "Launch Your Travels from the Heart of Delhi's Backpacking Scene",
    phone: "+91 - 8527222938",
  },
  {
    id: "agra",
    name: "Agra",
    location: "Agra, where love stories come to life",
    image: "https://www.joeyshostel.com/img/2.jpg",
    tagline: "Taj Mahal Socializing at Joey's",
    phone: "+91 - 8273355779",
  },
  {
    id: "rishikesh",
    name: "Rishikesh",
    location: "You, me, and the mountains",
    image: "https://www.joeyshostel.com/img/1.jpg",
    tagline: "Riverside Revelry Awaits Raft, Explore, and Connect with Nature and Fellow Travelers at Joey's Rishikesh",
    phone: "+91 - 7217482824",
  },
  {
    id: "homestay",
    name: "Joey's Homestay",
    location: "Yoga flow and mountain glow",
    image: "https://www.joeyshostel.com/img/5.jpg", // Using Rishikesh image as placeholder
    tagline: "Stay Longer, Feel at Home Find Comfort, Safety, and Community at Joey's Homestay",
  },
  {
    id: "by-the-ganges",
    name: "By The Ganges",
    location: "Ganges Aarti and heartwarming moments",
    image: "https://www.joeyshostel.com/img/4.jpg", // Using Rishikesh image as placeholder
    tagline: "Discover Tranquility Embrace Yoga, Serenity, and Community Alongside the Ganges at Joey's",
    phone: "+91 - 7817845045",
  },
];

export default function DestinationCards() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="mb-10 text-center">
          <h4 className="mb-2 text-lg font-medium text-[#b28b47]">
            Comfortable Lodgings Await: Choose Your Stay
          </h4>
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
            Cozy Corners: Discover our Dorms and Private Rooms
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <div key={destination.id} className="destination-card group">
              <div className="relative h-96 overflow-hidden rounded-lg">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                <div className="absolute bottom-0 p-6 text-white">
                  <p className="mb-1 text-sm uppercase tracking-wide text-[#27adec]">
                    {destination.location}
                  </p>
                  <h3 className="mb-2 text-2xl font-bold">{destination.name}</h3>
                  {destination.phone && (
                    <a href={`tel:${destination.phone.replace(/\s+/g, '')}`} className="mb-3 block text-sm text-gray-300">
                      {destination.phone}
                    </a>
                  )}

                  <div className="mt-4 flex space-x-3">
                    <Link href={`/destinations/${destination.id}`}>
                      <button className="rounded border border-white bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-white hover:text-black">
                        Details
                      </button>
                    </Link>
                    <a href={`https://live.ipms247.com/booking/book-rooms-joeyshostel${destination.id}`} target="_blank" rel="noopener noreferrer">
                      <button className="rounded bg-[#27adec] px-4 py-2 text-sm font-medium text-white hover:bg-opacity-90">
                        Book
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
