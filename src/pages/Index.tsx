//src\pages\Index.tsx
import { useState, useMemo } from "react";
import Logo from "@/components/Logo";
import HeroSection from "@/components/HeroSection";
import JobCard from "@/components/JobCard";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Telegram from "@/components/Telegram";
import Footer from "@/components/Footer";
import { jobs } from "@/data/jobs";
import { Link } from "react-router-dom";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [jobType, setJobType] = useState("");
  const [batch, setBatch] = useState("");
  const [location, setLocation] = useState("");

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        searchQuery === "" ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesJobType = jobType === "" || job.type === jobType;
      const matchesBatch = batch === "" || job.batch === batch;
      const matchesLocation =
        location === "" ||
        (job.location &&
          job.location.toLowerCase().includes(location.toLowerCase()));

      return matchesSearch && matchesJobType && matchesBatch && matchesLocation;
    });
  }, [searchQuery, jobType, batch, location]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-4 px-4 lg:px-8 border-b border-border">
        <div className="container mx-auto">
          <Link to="/" aria-label="Go to home">
            <Logo />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        jobType={jobType}
        onJobTypeChange={setJobType}
        batch={batch}
        onBatchChange={setBatch}
        location={location}
        onLocationChange={setLocation}
      />

      {/* Main Content */}
      <main className="container mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Job Listings */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-foreground mb-6">
              All Jobs ({filteredJobs.length})
            </h2>

            <div className="space-y-4">
              {filteredJobs.map((job, index) => (
                <JobCard key={job.id} job={job} index={index} />
              ))}

              {filteredJobs.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    No jobs found matching your criteria.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80 flex-shrink-0 block mb-2 space-y-4">
            <WhatsAppCTA />
            <Telegram />
          </aside>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
