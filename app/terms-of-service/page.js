"use client";

import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Link from "next/link";
import { useState } from "react";

export default function TermsOfService({ handleSubmit }) {
  const [query, setQuery] = useState("");

  return (
    <>
      <Navbar query={query} setQuery={setQuery} handleSubmit={handleSubmit} />
      <div className="container mx-auto my-36 px-5">
        <h1 className="text-3xl font-bold mb-5">Terms of Service</h1>

        <p className="text-lg mb-5">
          These Terms of Service ("Terms") govern your use of our website and
          services. By accessing or using our services, you agree to comply with
          these Terms.
        </p>

        <div className="mx-5">
          <h2 className="text-2xl font-semibold mt-10">User Obligations</h2>
          <p className="text-md mt-2">
            As a user, you agree not to engage in any activity that violates
            applicable laws, infringes on the rights of others, or is otherwise
            harmful or inappropriate. You are responsible for the content you
            share or post on our site.
          </p>

          <h2 className="text-2xl font-semibold mt-10">Acceptable Use</h2>
          <p className="text-md mt-2">
            You agree to use our site and services only for lawful purposes and
            in accordance with these Terms. Prohibited activities include, but
            are not limited to, unauthorized access to our systems, distribution
            of malware, or harassment of other users.
          </p>

          <h2 className="text-2xl font-semibold mt-10">
            Intellectual Property
          </h2>
          <p className="text-md mt-2">
            All content on this site, including text, graphics, logos, and
            software, is the property of our company or its licensors and is
            protected by copyright and other intellectual property laws. You may
            not reproduce, distribute, or create derivative works without prior
            written consent.
          </p>

          <h2 className="text-2xl font-semibold mt-10">
            Limitation of Liability
          </h2>
          <p className="text-md mt-2">
            We are not liable for any damages arising from your use of our site
            or services, to the extent permitted by law. This includes direct,
            indirect, incidental, or consequential damages.
          </p>

          <h2 className="text-2xl font-semibold mt-10">Termination</h2>
          <p className="text-md mt-2">
            We reserve the right to terminate or suspend your account if you
            violate these Terms or engage in any unauthorized or illegal
            activities. Termination may occur without prior notice.
          </p>

          <h2 className="text-2xl font-semibold mt-10">Governing Law</h2>
          <p className="text-md mt-2">
            These Terms are governed by and construed in accordance with the
            laws of [Your Country/State], without regard to its conflict of law
            principles.
          </p>

          <h2 className="text-2xl font-semibold mt-10">Contact Us</h2>
          <p className="text-md mt-2">
            If you have any questions about these Terms of Service, please{" "}
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
