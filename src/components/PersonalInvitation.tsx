import { useEffect, useState } from "react";

const PersonalInvitation = () => {
  const [names, setNames] = useState<string[]>([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name1 = params.get("name1");
    const name2 = params.get("name2");
    
    const guestNames = [name1, name2].filter(Boolean);
    setNames(guestNames);
  }, []);

  const getGreeting = () => {
    if (names.length === 0) {
      return "Dear Friends";
    } else if (names.length === 1) {
      return `Dear ${names[0]}`;
    } else {
      return `Dear ${names.join(" and ")}`;
    }
  };

  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-8 text-foreground">
          {getGreeting()}
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-6">
          We are delighted to invite you to celebrate our wedding day with us.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
          Your presence would mean the world to us as we begin this beautiful journey together.
        </p>
      </div>
    </section>
  );
};

export default PersonalInvitation;
