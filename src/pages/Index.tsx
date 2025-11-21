import Hero from "@/components/Hero";
import PersonalInvitation from "@/components/PersonalInvitation";
import EventDetails from "@/components/EventDetails";
import RSVP from "@/components/RSVP";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <PersonalInvitation />
      <EventDetails />
      <RSVP />
    </div>
  );
};

export default Index;
