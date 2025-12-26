//src\components\HeroSection.tsx
import SearchBar from "./SearchBar";
import FilterDropdown from "./FilterDropdown";

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  jobType: string;
  onJobTypeChange: (value: string) => void;
  batch: string;
  onBatchChange: (value: string) => void;
  location: string;
  onLocationChange: (value: string) => void;
}

const jobTypes = ["Internship", "Full time"];
const batches = ["2020 graduates", "2021 graduates", "2022 graduates", "2023 graduates", "2024 graduates", "2025 graduates", "2026 graduates"];
const locations = ["Gurgaon", "Noida", "Delhi", "Bengaluru", "Pune", "Mumbai", "Hyderabad", "Remote"];

const HeroSection = ({
  searchQuery,
  onSearchChange,
  jobType,
  onJobTypeChange,
  batch,
  onBatchChange,
  location,
  onLocationChange,
}: HeroSectionProps) => {
  return (
    <section className="hero-gradient py-12 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1 max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight px-8">
              Discover verified{" "}
              <br className="hidden sm:block" />
              tech <span className="text-primary">Jobs</span> and{" "}
              <span className="text-primary">Internships</span>
              <br className="hidden sm:block" />
              {" "} at {" "} top companies.
            </h1>

            <div className="mt-8 space-y-4">
              <SearchBar value={searchQuery} onChange={onSearchChange} />
              
              <div className="flex items-center gap-2 ">
                <span className="text-sm text-muted-foreground font-medium">Filter by :</span>
                <FilterDropdown
                  label="Job type"
                  options={jobTypes}
                  value={jobType}
                  onChange={onJobTypeChange}
                />
                <FilterDropdown
                  label="Batch"
                  options={batches}
                  value={batch}
                  onChange={onBatchChange}
                />
                <FilterDropdown
                  label="Location"
                  options={locations}
                  value={location}
                  onChange={onLocationChange}
                />
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block flex-shrink-0">
            <img
              src="/hero-illustration.png"
              alt="Person working on laptop"
              className="w-80 h-auto object-contain animate-fade-in"
              style={{ animationDelay: "200ms" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
