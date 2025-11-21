import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";
import VenueDialog from "./VenueDialog";
import { useLanguage } from "@/i18n/LanguageContext";

const EventDetails = () => {
  const [venueDialogOpen, setVenueDialogOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-center mb-12 text-foreground">
            {t.eventDetails.title}
          </h2>
          
          <div className="flex flex-col gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Calendar className="w-8 h-8 text-bordeaux mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground">{t.eventDetails.date}</h3>
                    <p className="text-lg text-muted-foreground">{t.eventDetails.dateValue}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-8 h-8 text-bordeaux mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground">{t.eventDetails.time}</h3>
                    <p className="text-lg text-muted-foreground">{t.eventDetails.timeValue}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card 
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setVenueDialogOpen(true)}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-bordeaux mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground">{t.eventDetails.venue}</h3>
                    <p className="text-lg text-muted-foreground">{t.eventDetails.venueValue}</p>
                    <p className="text-sm text-muted-foreground/70 mt-1">{t.eventDetails.venueSubtext}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <VenueDialog open={venueDialogOpen} onOpenChange={setVenueDialogOpen} />
    </>
  );
};

export default EventDetails;
