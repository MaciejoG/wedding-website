import { useLanguage } from "@/i18n/LanguageContext";
import { useGuest } from "@/i18n/useGuest";

const PersonalInvitation = () => {
  const { t } = useLanguage();
  const { names, guestDetails, isValid, error } = useGuest();

  if (!isValid) {
    return (
      <section className="py-20 px-4 bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-8 text-bordeaux">
            Invalid guest name(s) provided.
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            {error}
          </p>
        </div>
      </section>
    );
  }

  let guest_names_preformatted = [];
  if (t.language === 'pl') {
    guest_names_preformatted = guestDetails.callers;
  } else {
    guest_names_preformatted = guestDetails.names;
  }

  let guest_names_formatted = ''
  let message1_formatted = '';
  let message2_formatted = '';
  let dear_formatted = '';
  guest_names_formatted = guest_names_preformatted.map(name => `${name}`).join(' ' + t.invitation.and + ' ');
  if (names.length === 1) {
    dear_formatted = t.invitation.dear.singular;
    if (guestDetails.withPartner) {
      message1_formatted = t.invitation.message1.withPartner;
      message2_formatted = t.invitation.message2.withPartner;
    } else {
      message1_formatted = t.invitation.message1.singular;
      message2_formatted = t.invitation.message2.singular;
    }
  } else {
    dear_formatted = t.invitation.dear.plural;
    message1_formatted = t.invitation.message1.plural;
    message2_formatted = t.invitation.message2.plural;
  }

  const getGreeting = () => {
    if (names.length === 0) {
      return t.invitation.dearFriends;
    } else {
      return `${dear_formatted} ${guest_names_formatted}`;
    }
  };

  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-8 text-foreground">
          {getGreeting()}
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-6">
          {message1_formatted}
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
          {message2_formatted}
        </p>
      </div>
    </section>
  );
};

export default PersonalInvitation;
