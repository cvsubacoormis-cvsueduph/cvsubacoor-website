import BackToTop from "@/components/back-to-top";
import FeedbackForm from "@/components/feedback-form";
import GovernmentLinks from "@/components/government-links";
import ImageGallery from "@/components/image-gallery";
import Navbar from "@/components/navbar";
import NewsSection from "@/components/news-section";
import QualityPolicy from "@/components/quality-policy";
import Footer from "@/components/footer";
import AnimatedHero from "@/components/animated-hero";
import AnimatedStats from "@/components/animated-stats";
import AnimatedSectionTitle from "@/components/animated-section-title";
import ScrollAnimations from "@/components/scroll-animations";
import AnimatedBackground from "@/components/animated-background";
import StickyHeader from "@/components/sticky-header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Animated background that changes on refresh */}
      <AnimatedBackground />

      <StickyHeader>
        <Navbar />
      </StickyHeader>
      <main className="flex-1">
        {/* Hero Section */}
        <AnimatedHero />

        {/* Stats Cards */}
        <AnimatedStats />

        {/* News and Updates */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-royal-blue-50/80 backdrop-blur-sm">
          <div className="container px-4 md:px-6">
            <AnimatedSectionTitle
              title="News & Updates"
              subtitle="Stay informed about the latest happenings at our university"
            />
            <NewsSection />
          </div>
        </section>

        {/* Image Gallery */}
        <ImageGallery />

        {/* Quality Policy */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white/90 backdrop-blur-sm">
          <div className="container px-4 md:px-6">
            <AnimatedSectionTitle
              title="Quality Policy"
              subtitle="Our commitment to excellence in education, research, and service"
            />
            <QualityPolicy />
          </div>
        </section>

        {/* Feedback Form */}
        <FeedbackForm />

        {/* Government Links */}
        <GovernmentLinks />
      </main>
      <Footer />

      {/* Back to Top Button */}
      <BackToTop />

      {/* Global scroll animations */}
      <ScrollAnimations />
    </div>
  );
}
