import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const PostJob = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [applicationLink, setApplicationLink] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you would typically send the data to your backend
    const jobData = {
      jobTitle,
      companyName,
      location,
      jobDescription,
      applicationLink,
    };

    console.log("Job Posted:", jobData);
    toast("Job posted successfully!");

    // Reset form fields
    setJobTitle("");
    setCompanyName("");
    setLocation("");
    setJobDescription("");
    setApplicationLink("");

    // Navigate to the jobs page
    navigate("/jobs");
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Post a Job</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
        <div>
          <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
            Job Title
          </label>
          <Input
            type="text"
            id="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="mt-1 block w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
            Company Name
          </label>
          <Input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="mt-1 block w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <Input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 block w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700">
            Job Description
          </label>
          <Textarea
            id="jobDescription"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            rows="4"
            className="mt-1 block w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="applicationLink" className="block text-sm font-medium text-gray-700">
            Application Link
          </label>
          <Input
            type="url"
            id="applicationLink"
            value={applicationLink}
            onChange={(e) => setApplicationLink(e.target.value)}
            className="mt-1 block w-full"
            required
          />
        </div>
        <Button type="submit" variant="primary" className="w-full">
          Post Job
        </Button>
      </form>
    </div>
  );
};

export default PostJob;