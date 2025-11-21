import { Calendar, MapPin, Clock, Navigation } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const EventDetails = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-center mb-16 text-foreground">
          Event Details
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-border/50 shadow-lg">
            <CardContent className="p-8 text-center">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground">Date</h3>
              <p className="text-lg text-muted-foreground">Saturday, June 15th, 2024</p>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-lg">
            <CardContent className="p-8 text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground">Time</h3>
              <p className="text-lg text-muted-foreground">Ceremony at 3:00 PM</p>
              <p className="text-muted-foreground">Reception to follow</p>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-lg">
            <CardContent className="p-8 text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground">Venue</h3>
              <p className="text-lg text-muted-foreground">The Garden Estate</p>
              <p className="text-muted-foreground">123 Celebration Lane</p>
              <p className="text-muted-foreground">Your City, State 12345</p>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-lg">
            <CardContent className="p-8 text-center">
              <Navigation className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground">Directions</h3>
              <p className="text-lg text-muted-foreground">From downtown:</p>
              <p className="text-muted-foreground">Take Highway 101 North</p>
              <p className="text-muted-foreground">Exit at Celebration Lane</p>
              <p className="text-muted-foreground">Parking available on-site</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
