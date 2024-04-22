"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900 mt-10 p-4 w-full text-center text-white">
      <div className="flex justify-evenly items-center">
        <Link href="/privacy-policy">
          <p className="hover:text-gray-400">Privacy Policy</p>
        </Link>
        <Link href="/terms-of-service">
          <p className="hover:text-gray-400">Terms of Service</p>
        </Link>
        <Link href="/contact">
          <p className="hover:text-gray-400">Contact Us</p>
        </Link>
      </div>
      <div className="mt-4">
        <p className="text-sm">
          &copy; 2024 Cinema Vault. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
