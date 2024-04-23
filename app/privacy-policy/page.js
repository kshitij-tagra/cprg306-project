"use client";

import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Link from "next/link";
import { useState } from "react";

export default function PrivacyPolicy({ handleSubmit }) {
  const [query, setQuery] = useState("");
  
  return (
    <>
      <Navbar query={query} setQuery={setQuery} handleSubmit={handleSubmit} />
      <div className="container mx-auto my-36 px-5">
        <h1 className="text-3xl font-bold mb-5">Privacy Policy</h1>
        <p className="text-lg mb-5">
          This Privacy Policy describes how we collect, use, and share
          information about you when you use our service.
        </p>

        <div className="mx-5">
          <h2 className="text-2xl font-semibold mt-10">
            Information We Collect
          </h2>
          <p className="text-md mt-2">
            We may collect information about you directly from you, as well as
            automatically through your use of our site or services. This may
            include, but is not limited to, your name, email address, and usage
            data.
          </p>

          <h2 className="text-2xl font-semibold mt-10">
            How We Use Your Information
          </h2>
          <p className="text-md mt-2">
            We use the information we collect to provide and improve our
            services, communicate with you, and for other internal purposes such
            as analytics.
          </p>

          <h2 className="text-2xl font-semibold mt-10">
            Sharing Your Information
          </h2>
          <p className="text-md mt-2">
            We do not sell your information to third parties. However, we may
            share your information with third-party service providers to help us
            operate our business or to comply with legal requirements.
          </p>

          <h2 className="text-2xl font-semibold mt-10">Your Rights</h2>
          <p className="text-md mt-2">
            You have certain rights regarding the information we collect. This
            may include the right to access, correct, or delete your
            information. Contact us for any questions or concerns regarding your
            rights.
          </p>

          <h2 className="text-2xl font-semibold mt-10">Contact Us</h2>
          <p className="text-md mt-2">
            If you have any questions about this Privacy Policy, please{" "}
            <Link href="/contact" className="text-blue-900 underline">
              Contact Us
            </Link>
            .
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
