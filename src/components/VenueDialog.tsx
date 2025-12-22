import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink, Plane, Car, Hotel } from "lucide-react";
import { Button } from "@/components/ui/button";
import venueMap from "@/assets/venue-map.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { useGuest } from "@/i18n/useGuest";

interface VenueDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const VenueDialog = ({ open, onOpenChange }: VenueDialogProps) => {
  const { t } = useLanguage();
  const { guestDetails } = useGuest();

  // Check if any guest in the group has accommodation covered
  const hasAccommodationCovered = 
    guestDetails && 
    guestDetails.accommodationCovered;
    
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-3xl text-foreground">{t.venueDialog.title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">{t.venueDialog.address}</h3>
            <p className="text-muted-foreground whitespace-pre-line">
              {t.venueDialog.addressValue}
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">{t.venueDialog.locationMap}</h3>
            <img 
              src={venueMap} 
              alt={t.venueDialog.mapAlt}
              className="w-full rounded-lg border border-border"
            />
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold mb-3 text-foreground flex items-center gap-2">
              <Plane className="w-5 h-5 text-bordeaux" />
              {t.venueDialog.nearbyAirports}
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• {t.venueDialog.airport1}</li>
              <li>• {t.venueDialog.airport2}</li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold mb-3 text-foreground flex items-center gap-2">
              <Car className="w-5 h-5 text-bordeaux" />
              {t.venueDialog.gettingThere}
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <p className="font-medium text-foreground">{t.venueDialog.fromWroclaw}</p>
                <p>{t.venueDialog.wroclawDirections.byCar}</p>
                <p>{t.venueDialog.wroclawDirections.byTrain}</p>
              </div>
              <div>
                <p className="font-medium text-foreground">{t.venueDialog.fromBerlin}</p>
                <p>{t.venueDialog.berlinDirections.byCar}</p>
                <p>{t.venueDialog.berlinDirections.byTrain}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold mb-3 text-foreground flex items-center gap-2">
              <Hotel className="w-5 h-5 text-bordeaux" />
              {t.venueDialog.accommodation}
            </h3>
            <p className="text-muted-foreground mb-3">
              {hasAccommodationCovered 
                ? t.venueDialog.accommodationTextCovered
                : t.venueDialog.accommodationTextNotCovered}
            </p>
            {!hasAccommodationCovered && (
              <div className="bg-accent/30 p-4 rounded-lg border border-bordeaux/20">
                <p className="font-mono font-semibold text-lg text-bordeaux">ABC123</p>
              </div>
            )}
          </div>

          <div>
            <Button 
              className="w-full bg-bordeaux hover:bg-bordeaux/90 text-bordeaux-foreground"
              onClick={() => window.open("https://kliczkow.com.pl/en/homepage/", "_blank")}
            >
              <span>{t.venueDialog.visitWebsite}</span>
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VenueDialog;
