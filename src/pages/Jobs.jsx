import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const Jobs = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Job Listings</h1>
      <div className="flex items-center justify-center space-x-2 mb-6">
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
          Search
        </Button>
      </div>
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
    </div>
  );
};

export default Jobs;