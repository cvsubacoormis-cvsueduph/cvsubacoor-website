"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white/90 text-black pt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Left: Logo */}
        <div className="flex flex-col items-center md:items-start mt-10">
          <Link
            href="https://www.gov.ph/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/government-assets/gov.png" // replace with your logo path
              alt="Government Logo"
              width={140}
              height={140}
              className="mb-3"
            />
          </Link>
        </div>

        {/* Middle: Quick Links */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold mb-2 text-black">Quick Links</h3>
          <div className="w-28 h-[2px] bg-accent mb-4"></div>
          <ul className="space-y-2">
            <li>
              <Link
                href="https://studentportal.cvsu-bacoor.com/"
                className="hover:text-accent transition-colors duration-200 text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Student Portal
              </Link>
            </li>
            <li>
              <Link
                href="/services/downloadable-forms"
                className="hover:text-accent transition-colors duration-200 text-sm"
              >
                Downloadable Forms
              </Link>
            </li>
            <li>
              <Link
                href="https://cvsu.edu.ph/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-200 text-sm"
              >
                CvSU Main Campus
              </Link>
            </li>
          </ul>
        </div>

        {/* Right: Contact Info */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold mb-2 text-black">Contact Us</h3>
          <div className="w-28 h-[2px] bg-accent mb-4"></div>
          <p className="text-sm">
            Lily Street. Phase II Soldiers Hills IV Bacoor City, Cavite 4102
            Philippines
          </p>
          <p className="mt-2 text-sm">Telephone: (046) 476-5029</p>
          <p className="text-sm mt-2">
            Email:{" "}
            <Link
              href="mailto:cvsubacoor@cvsu.edu.ph"
              className="hover:text-accent transition-colors duration-200"
            >
              cvsubacoor@cvsu.edu.ph
            </Link>
          </p>
          {/* <p className="text-sm mt-2">
            Web:{" "}
            <Link
              href="https://www.cvsu-rosario.edu.ph"
              target="_blank"
              className="hover:text-accent transition-colors duration-200"
            >
              www.cvsu-rosario.edu.ph
            </Link>
          </p> */}
          {/* <div className="flex gap-3 mt-3">
            <Image
              src="/dpo.png" // replace with your actual image path
              alt="DPO"
              width={50}
              height={50}
            />
            <Image
              src="/protected.png" // replace with your actual image path
              alt="Protected"
              width={80}
              height={50}
            />
          </div> */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-6">
          <p className="text-sm">
            Copyright © Cavite State University Bacoor City Campus{" "}
            {new Date().getFullYear()} | All rights reserved
          </p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link
              href="https://www.facebook.com/CvSUBacoorCityCampus"
              className="hover:text-accent transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </Link>
            <Link
              href="#"
              className="hover:text-accent transition-colors duration-200"
            >
              <Youtube />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
