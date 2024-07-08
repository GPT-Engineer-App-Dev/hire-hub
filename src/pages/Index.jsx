import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, MapPin, Search } from "lucide-react";

const Index = () => {
  return (
    <div className="space-y-12">
      <HeroSection />
      <FeaturedJobsSection />
      <HowItWorksSection />
      <TestimonialsSection />
    </div>
  );
};

const HeroSection = () => (
  <section className="relative w-full h-[400px] bg-gray-200 flex items-center justify-center">
    <img
      src="/placeholder.svg"
      alt="placeholder"
      className="absolute inset-0 w-full h-full object-cover mx-auto"
    />
    <div className="relative z-10 text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Find Your Dream Job</h1>
      <div className="flex items-center justify-center space-x-2 mb-4">
        <Input
          type="text"
          placeholder="Job title"
          className="w-1/3"
        />
        <Input
          type="text"
          placeholder="Location"
          className="w-1/3"
        />
        <Button variant="primary" size="lg">
          <Search className="mr-2 h-5 w-5" />
          Search Jobs
        </Button>
      </div>
    </div>
  </section>
);

const FeaturedJobsSection = () => (
  <section className="container mx-auto py-12">
    <h2 className="text-3xl font-bold mb-6 text-center">Featured Jobs</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((job) => (
        <Card key={job}>
          <CardHeader>
            <CardTitle>Job Title {job}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Company Name</p>
            <p className="flex items-center">
              <MapPin className="mr-2 h-4 w-4" />
              Location
            </p>
            <Button variant="outline" className="mt-4">
              View Details
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

const HowItWorksSection = () => (
  <section className="container mx-auto py-12">
    <h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
      <div>
        <Briefcase className="mx-auto mb-4 h-12 w-12" />
        <h3 className="text-xl font-semibold mb-2">Step 1</h3>
        <p>Register and create your profile.</p>
      </div>
      <div>
        <Briefcase className="mx-auto mb-4 h-12 w-12" />
        <h3 className="text-xl font-semibold mb-2">Step 2</h3>
        <p>Search for jobs that match your skills.</p>
      </div>
      <div>
        <Briefcase className="mx-auto mb-4 h-12 w-12" />
        <h3 className="text-xl font-semibold mb-2">Step 3</h3>
        <p>Apply and get hired.</p>
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section className="container mx-auto py-12">
    <h2 className="text-3xl font-bold mb-6 text-center">Testimonials</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((testimonial) => (
        <Card key={testimonial}>
          <CardHeader>
            <CardTitle>User {testimonial}</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src="/placeholder.svg"
              alt="placeholder"
              className="mx-auto object-cover w-24 h-24 rounded-full mb-4"
            />
            <p>"This website helped me find my dream job!"</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export default Index;