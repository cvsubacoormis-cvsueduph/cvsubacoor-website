import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-royal-blue-800 text-white py-6">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <p className="text-center text-sm md:text-left">
          © {new Date().getFullYear()} University Name. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="#" className="text-sm hover:text-canary-yellow-500 hover:underline">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm hover:text-canary-yellow-500 hover:underline">
            Terms of Service
          </Link>
          <Link href="#" className="text-sm hover:text-canary-yellow-500 hover:underline">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  )
}

