import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const RSVP = () => {
  return (
    <section className="py-20 px-4 bg-accent/30">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-8 text-foreground">
          RSVP
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
          Please let us know if you can join us for our special day. 
          We kindly request your response by May 1st, 2024.
        </p>
        <Button 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-lg px-8 py-6"
          onClick={() => window.open("https://doodle.com/", "_blank")}
        >
          <span>Respond to Invitation</span>
          <ExternalLink className="ml-2 h-5 w-5" />
        </Button>
        <p className="text-sm text-muted-foreground mt-6">
          Can't wait to celebrate with you!
        </p>
      </div>
    </section>
  );
};

export default RSVP;
