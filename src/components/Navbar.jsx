import React from "react";
import MaxWidthWrapper from "./MaxWithWrapper";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="sticky inset-x-0 top-0 z-30 h-14 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <section className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="text-primary z-40 flex font-semibold">
            <span>Nebsify</span>
          </Link>
          <div className="hidden items-center space-x-8 font-semibold sm:flex">
            <Link href="/services" className="hover:text-primary">
              Services
            </Link>

            <Link className="hover:text-primary" href="/pricing">
              Pricing
            </Link>

            <Link href="/contact" className="hover:text-primary">
              Contact Us
            </Link>

            <Link href="/faq" className="hover:text-primary">
              FAQ
            </Link>
            <Button>
              <Link
                className={buttonVariants({
                  variant: "primary",
                  size: "sm",
                })}
                href="/signup"
              >
                Sign Up
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;