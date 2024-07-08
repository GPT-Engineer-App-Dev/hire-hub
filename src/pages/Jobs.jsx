import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { MapPin } from "lucide-react";

const Jobs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
    coverLetter: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({ ...prevData, resume: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Application Submitted:", formData);
    toast("Application submitted successfully!");
    setFormData({
      name: "",
      email: "",
      resume: null,
      coverLetter: "",
    });
    setIsOpen(false);
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Job Listings</h1>
      <div className="flex items-center justify-center space-x-2 mb-6">
        <Input type="text" placeholder="Job title" className="w-1/3" />
        <Input type="text" placeholder="Location" className="w-1/3" />
        <Button variant="primary" size="lg">Search</Button>
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
              <Button variant="outline" className="mt-4">View Details</Button>
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <Button variant="primary" className="mt-4">Apply Now</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Apply for Job Title {job}</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                      <Input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="mt-1 block w-full" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                      <Input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="mt-1 block w-full" required />
                    </div>
                    <div>
                      <label htmlFor="resume" className="block text-sm font-medium text-gray-700">Resume</label>
                      <Input type="file" id="resume" name="resume" onChange={handleFileChange} className="mt-1 block w-full" required />
                    </div>
                    <div>
                      <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">Cover Letter</label>
                      <Textarea id="coverLetter" name="coverLetter" value={formData.coverLetter} onChange={handleInputChange} rows="4" className="mt-1 block w-full" required />
                    </div>
                    <Button type="submit" variant="primary" className="w-full">Submit Application</Button>
                  </form>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Jobs;