import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const PersonalInvitation = () => {
  const [names, setNames] = useState<string[]>([]);
  const { t } = useLanguage();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name1 = params.get("name1");
    const name2 = params.get("name2");
    
    const guestNames = [name1, name2].filter(Boolean);
    setNames(guestNames);
  }, []);

  const getGreeting = () => {
    if (names.length === 0) {
      return t.invitation.dearFriends;
    } else if (names.length === 1) {
      return `${t.invitation.dear} ${names[0]}`;
    } else {
      return `${t.invitation.dear} ${names.join(` ${t.invitation.and} `)}`;
    }
  };

  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-8 text-foreground">
          {getGreeting()}
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-6">
          {t.invitation.message1}
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
          {t.invitation.message2}
        </p>
      </div>
    </section>
  );
};

export default PersonalInvitation;
