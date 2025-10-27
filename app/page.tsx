import FeedbackForm from "@/components/feedback-form";
import GovernmentLinks from "@/components/government-links";
import Navbar from "@/components/navbar";
import NewsSection from "@/components/news-section";
import QualityPolicy from "@/components/quality-policy";
import AnimatedHero from "@/components/animated-hero";
import AnimatedSectionTitle from "@/components/animated-section-title";
import ScrollAnimations from "@/components/scroll-animations";
import AnimatedBackground from "@/components/animated-background";
import CoreValues from "@/components/core-values";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Animated background that changes on refresh */}
      <AnimatedBackground />

      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <AnimatedHero />

        {/* Stats Cards
        <AnimatedStats /> */}

        {/* News and Updates */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-royal-blue-900/70 to-royal-blue-800/40">
          <div className="container px-4 md:px-6">
            <AnimatedSectionTitle
              title="News & Updates"
              subtitle="Stay informed about the latest happenings at our university"
            />
            <NewsSection />
          </div>
        </section>

        {/* Quality Policy */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-royal-blue-900/70 to-royal-blue-800/40">
          <div className="container px-4 md:px-6">
            <AnimatedSectionTitle
              title="Quality Policy"
              subtitle={
                <>
                  We{" "}
                  <span className="text-canary-yellow-500 font-semibold">
                    C
                  </span>
                  ommit to the highest standards of education,
                  <span className="text-canary-yellow-500 font-semibold">
                    {" "}
                    v
                  </span>
                  alue our stakeholders,
                  <span className="text-canary-yellow-500 font-semibold">
                    {" "}
                    S
                  </span>
                  trive for continual improvement of our products and services,
                  and{" "}
                  <span className="text-canary-yellow-500 font-semibold">
                    {" "}
                    U
                  </span>
                  phold the University’s tenets of Truth, Excellence, and
                  Service to produce globally competitive and morally upright
                  individuals.
                </>
              }
            />

            <QualityPolicy />
            <CoreValues />
          </div>
        </section>

        {/* Government Links */}
        <GovernmentLinks />

        {/* Feedback Form */}
        <FeedbackForm />
      </main>

      {/* Global scroll animations */}
      <ScrollAnimations />
    </div>
  );
}
