import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Companies = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Companies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((company) => (
          <Card key={company}>
            <CardHeader>
              <CardTitle>Company {company}</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src="/placeholder.svg"
                alt="placeholder"
                className="mx-auto object-cover w-full h-[100px] mb-4"
              />
              <p>Brief description of the company.</p>
              <Button variant="outline" className="mt-4">
                View Jobs
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Companies;