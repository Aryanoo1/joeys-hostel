import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* About Column */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">Joey's Hostel</h3>
            <p className="mb-6 text-gray-300">
              At Joey's Hostel, we're more than just a place to rest your head for the night.
              It's a vibrant community where you can rejuvenate, connect with travelers from
              around the globe, and forge lifelong friendships while immersing yourself in the
              rich history, delicious cuisine, and diverse culture of the city. Come, join us in
              experiencing the essence of India.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/joeyshostel" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.youtube.com/@joeyshostel" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white" aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a href="https://www.facebook.com/joeyshostel" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Explore Destinations */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">Explore Destinations</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/destinations/delhi" className="hover:text-white">
                  Joey's Delhi
                </Link>
              </li>
              <li>
                <Link href="/destinations/agra" className="hover:text-white">
                  Joey's Agra
                </Link>
              </li>
              <li>
                <Link href="/destinations/rishikesh" className="hover:text-white">
                  Joey's Rishikesh
                </Link>
              </li>
              <li>
                <Link href="/destinations/homestay" className="hover:text-white">
                  Joey's Homestay
                </Link>
              </li>
              <li>
                <Link href="/destinations/by-the-ganges" className="hover:text-white">
                  Joey's By The Ganges
                </Link>
              </li>
            </ul>
          </div>

          {/* Rate Us Here */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">Rate Us Here</h3>
            <div className="mb-3 flex items-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                ))}
              </div>
              <div className="ml-2 font-semibold text-white">4.5 Star</div>
            </div>
            <Image
              src="/images/google-rating.png"
              alt="Google Rating"
              width={100}
              height={35}
              className="mb-4"
            />
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>
            © 2025{" "}
            <Link href="/" className="text-gray-300 hover:text-white">
              Joey's Hostel - A Unit of Adimurti Foods and Beverages Pvt. Ltd.
            </Link>{" "}
            | Powered By{" "}
            <a
              href="https://www.globular.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              Globular Inc.
            </a>
          </p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="text-gray-400 hover:text-white">
              Terms & Conditions
            </Link>
            <Link href="/refunds-and-cancellations" className="text-gray-400 hover:text-white">
              Refunds & Cancellations
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
