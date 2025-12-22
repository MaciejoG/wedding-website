import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const RSVP = () => {
  const { t } = useLanguage();

  // TODO: Update RSVP links for each language
  let rsvpLink = "";
  if (t.language === 'pl') {
    rsvpLink = "https://docs.google.com/forms/d/e/1FAIpQLScp530hfQet1dMqyLYMBOGsZoapkfKkpuXVqpXsl0d04kInBw/viewform?usp=dialog";
  } else if (t.language === 'de') {
    rsvpLink = "https://docs.google.com/forms/d/e/1FAIpQLScp530hfQet1dMqyLYMBOGsZoapkfKkpuXVqpXsl0d04kInBw/viewform?usp=dialog";
  } else {
    rsvpLink = "https://docs.google.com/forms/d/e/1FAIpQLScp530hfQet1dMqyLYMBOGsZoapkfKkpuXVqpXsl0d04kInBw/viewform?usp=dialog";
  }
  
  return (
    <section className="py-20 px-4 bg-accent/30">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-8 text-foreground">
          {t.rsvp.title}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
          {t.rsvp.message}
        </p>
        <Button 
          size="lg"
          className="bg-bordeaux hover:bg-bordeaux/90 text-bordeaux-foreground font-medium text-lg px-8 py-6"
          onClick={() => window.open(rsvpLink, "_blank")}
        >
          <span>{t.rsvp.button}</span>
          <ExternalLink className="ml-2 h-5 w-5 text-bordeaux-foreground" />
        </Button>
        <p className="text-sm text-muted-foreground mt-6">
          {t.rsvp.footnote}
        </p>
      </div>
    </section>
  );
};

export default RSVP;
