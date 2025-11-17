import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Thanks = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-24 w-24 text-green-500" strokeWidth={2} />
        </div>
        
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Form submitted successfully!
        </h1>
        
        <p className="text-foreground mb-2">
          Thank you! The form has been submitted successfully.
        </p>
        
        <p className="text-foreground mb-8">
          We will reply to you soon!
        </p>
        
        <Button variant="link" asChild>
          <Link to="/contact" className="text-primary hover:text-primary/80">
            Go back
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Thanks;