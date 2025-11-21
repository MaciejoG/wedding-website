import Hero from "@/components/Hero";
import PersonalInvitation from "@/components/PersonalInvitation";
import EventDetails from "@/components/EventDetails";
import RSVP from "@/components/RSVP";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Index = () => {
  return (
    <div className="min-h-screen">
      <LanguageSwitcher />
      <Hero />
      <PersonalInvitation />
      <EventDetails />
      <RSVP />
    </div>
  );
};

export default Index;
