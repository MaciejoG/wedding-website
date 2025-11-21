import { useState } from "react";
import { Calendar, MapPin, Clock, Navigation } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import VenueDialog from "./VenueDialog";

const EventDetails = () => {
  const [venueDialogOpen, setVenueDialogOpen] = useState(false);

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-center mb-16 text-foreground">
          Event Details
        </h2>
        
        <div className="flex flex-col gap-8">
          <Card className="border-border/50 shadow-lg">
            <CardContent className="p-8 text-center">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-bordeaux" />
              <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground">Date</h3>
              <p className="text-lg text-muted-foreground">Saturday, June 15th, 2024</p>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-lg">
            <CardContent className="p-8 text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-bordeaux" />
              <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground">Time</h3>
              <p className="text-lg text-muted-foreground">Ceremony at 3:00 PM</p>
              <p className="text-muted-foreground">Reception to follow</p>
            </CardContent>
          </Card>

          <Card 
            className="border-border/50 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => setVenueDialogOpen(true)}
          >
            <CardContent className="p-8 text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-bordeaux" />
              <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground">Venue</h3>
              <p className="text-lg text-muted-foreground">Zamek Kliczków</p>
              <p className="text-muted-foreground">59-724 Kliczków, Poland</p>
              <p className="text-sm text-bordeaux mt-2">Click for details</p>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-lg">
            <CardContent className="p-8 text-center">
              <Navigation className="w-12 h-12 mx-auto mb-4 text-bordeaux" />
              <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground">Directions</h3>
              <p className="text-lg text-muted-foreground">From downtown:</p>
              <p className="text-muted-foreground">Take Highway 101 North</p>
              <p className="text-muted-foreground">Exit at Celebration Lane</p>
              <p className="text-muted-foreground">Parking available on-site</p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <VenueDialog open={venueDialogOpen} onOpenChange={setVenueDialogOpen} />
    </section>
  );
};

export default EventDetails;
