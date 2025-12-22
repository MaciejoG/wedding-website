export type Language = 'en' | 'de' | 'pl';

export const translations = {
  en: {
    language: 'en',
    hero: {
      names: "Cassandra & Maciej"
    },
    invitation: {
      dearFriends: "Dear Family & Friends",
      dear: {
        singular: "Dear",
        plural: "Dear"
      },
      and: "and",
      message1: {
        singular: "We are delighted to invite you to celebrate our wedding day with us.",
        plural: "We are delighted to invite you to celebrate our wedding day with us.",
        withPartner: "We are delighted to invite you and your partner to celebrate our wedding day with us."
      },
      message2: {
        singular: "Your presence would mean the world to us as we begin this beautiful journey together.",
        plural: "Your presence would mean the world to us as we begin this beautiful journey together.",
        withPartner: "Your presence would mean the world to us as we begin this beautiful journey together."
      }
    },
    eventDetails: {
      title: "Event Details",
      date: "Date",
      dateValue: "August 29, 2026",
      time: "Time",
      // TODO: Confirm the exact time with Cassandra
      timeValue: "4:00 PM",
      venue: "Venue",
      venueValue: "Kliczków Castle",
      venueSubtext: "Click for more details"
    },
    venueDialog: {
      title: "Venue Details",
      address: "Address",
      addressValue: "Kliczków 8\n59-724 Kliczków\nPoland",
      locationMap: "Location Map",
      mapAlt: "Map showing venue location and distances to nearby airports",
      nearbyAirports: "Nearby Airports",
      airport1: "Wrocław Airport (WRO) - 130 km",
      airport2: "Berlin Airport (BER) - 200 km",
      gettingThere: "Getting to the Venue by Car",
      fromWroclaw: "From Wrocław Airport:",
      wroclawDirections: "Journey time approximately 1.5 hours by car.",
      fromBerlin: "From Berlin Airport:",
      berlinDirections: "Journey time approximately 2.5 hours by car.",
      accommodation: "Accommodation",
      accommodationTextNotCovered: "The venue offers on-site accommodation. When booking, please use our group code:",
      accommodationTextCovered: "We booked an on-site accommodation for you (1 night at the Castle, incl. breakfast)!",
      visitWebsite: "Visit Venue Website"
    },
    rsvp: {
      title: "RSVP",
      message: "Please let us know if you can join us for our special day. We kindly request your response by March 31st, 2026.",
      button: "Respond to Invitation",
      footnote: "Can't wait to celebrate with you!"
    }
  },
  de: {
    language: 'de',
    hero: {
      names: "Cassandra & Maciej"
    },
    invitation: {
      dearFriends: "Liebe Familie und Freunde",
      dear: {
        singular: "Liebe/Lieber",
        plural: "Liebe"
      },
      and: "und",
      message1: {
        singular: "Wir freuen uns sehr, dich zu unserer Hochzeit einzuladen.",
        plural: "Wir freuen uns sehr, euch zu unserer Hochzeit einzuladen.",
        withPartner: "Wir freuen uns sehr, dich und deinen Partner zu unserer Hochzeit einzuladen."
      },
      message2: {
        singular: "Deine Anwesenheit würde uns die Welt bedeuten, wenn wir diese wunderbare Reise gemeinsam beginnen.",
        plural: "Eure Anwesenheit würde uns die Welt bedeuten, wenn wir diese wunderbare Reise gemeinsam beginnen.",
        withPartner: "Eure Anwesenheit würde uns die Welt bedeuten, wenn wir diese wunderbare Reise gemeinsam beginnen."
      }
    },
    eventDetails: {
      title: "Veranstaltungsdetails",
      date: "Datum",
      dateValue: "29. August 2026",
      time: "Uhrzeit",
      timeValue: "16:00 Uhr",
      venue: "Veranstaltungsort",
      venueValue: "Schloss Kliczków",
      venueSubtext: "Klicken für weitere Details"
    },
    venueDialog: {
      title: "Details zum Veranstaltungsort",
      address: "Adresse",
      addressValue: "Kliczków 8\n59-724 Kliczków\nPolen",
      locationMap: "Lageplan",
      mapAlt: "Karte mit Standort und Entfernungen zu nahegelegenen Flughäfen",
      nearbyAirports: "Nahegelegene Flughäfen",
      airport1: "Flughafen Breslau (WRO) - 130 km",
      airport2: "Flughafen Berlin (BER) - 200 km",
      gettingThere: "Anreise zum Veranstaltungsort",
      fromWroclaw: "Vom Flughafen Breslau:",
      wroclawDirections: "Nehmen Sie die Autobahn A4 Richtung Legnica und folgen Sie dann den Schildern nach Kliczków. Fahrzeit ca. 1,5 Stunden.",
      fromBerlin: "Vom Flughafen Berlin:",
      berlinDirections: "Nehmen Sie die Autobahn A15 südlich Richtung Polen und fahren Sie dann auf Landstraßen nach Kliczków. Fahrzeit ca. 2,5 Stunden.",
      accommodation: "Unterkunft",
      accommodationTextNotCovered: "Der Veranstaltungsort bietet Unterkünfte vor Ort. Bitte verwenden Sie bei der Buchung unseren Gruppencode:",
      accommodationTextCovered: "Wir haben eine Unterkunft vor Ort für Sie (1 Nacht im Schloss, inkl. Frühstück) gebucht!",
      visitWebsite: "Website des Veranstaltungsortes besuchen"
    },
    rsvp: {
      title: "RSVP",
      message: "Bitte teilen Sie uns mit, ob Sie an unserem besonderen Tag dabei sein können. Wir bitten um Rückmeldung bis zum 1. Mai 2024.",
      button: "Auf Einladung antworten",
      footnote: "Wir können es kaum erwarten, mit euch zu feiern!"
    }
  },
  pl: {
    language: 'pl',
    hero: {
      names: "Cassandra & Maciej"
    },
    invitation: {
      dearFriends: "Droga Rodzino i Przyjaciele",
      dear: {
        singular: "Drogi/Droga",
        plural: "Drodzy"
      },
      and: "i",
      message1: {
        singular: "Z radością zapraszamy Cię do wspólnego świętowania naszego dnia ślubu.",
        plural: "Z radością zapraszamy Was do wspólnego świętowania naszego dnia ślubu.",
        withPartner: "Z radością zapraszamy Cię wraz z partnerem do wspólnego świętowania naszego dnia ślubu."
      },
      message2: {
        singular: "Twoja obecność będzie dla nas niezwykle ważna, gdy rozpoczynamy tę piękną wspólną podróż.",
        plural: "Wasza obecność będzie dla nas niezwykle ważna, gdy rozpoczynamy tę piękną wspólną podróż.",
        withPartner: "Wasza obecność będzie dla nas niezwykle ważna, gdy rozpoczynamy tę piękną wspólną podróż."
      }
    },
    eventDetails: {
      title: "Szczegóły wydarzenia",
      date: "Data",
      dateValue: "29. sierpnia 2026",
      time: "Godzina",
      timeValue: "16:00",
      venue: "Miejsce",
      venueValue: "Zamek Kliczków",
      venueSubtext: "Kliknij, aby uzyskać więcej informacji"
    },
    venueDialog: {
      title: "Szczegóły miejsca",
      address: "Adres",
      addressValue: "Kliczków 8\n59-724 Kliczków",
      locationMap: "Mapa lokalizacji",
      mapAlt: "Mapa pokazująca lokalizację miejsca i odległości do pobliskich lotnisk",
      nearbyAirports: "Pobliskie lotniska",
      airport1: "Lotnisko Wrocław (WRO) - 130 km",
      airport2: "Lotnisko Berlin (BER) - 200 km",
      gettingThere: "Jak dojechać",
      fromWroclaw: "Z lotniska we Wrocławiu:",
      wroclawDirections: "Autostradą A4 w kierunku Legnicy, następnie kierować się znakami do Kliczkowa. Czas podróży około 1,5 godziny samochodem.",
      fromBerlin: "Z lotniska w Berlinie:",
      berlinDirections: "Autostradą A15 na południe w kierunku Polski, następnie drogami lokalnymi do Kliczkowa. Czas podróży około 2,5 godziny samochodem.",
      accommodation: "Zakwaterowanie",
      accommodationTextNotCovered: "Miejsce oferuje zakwaterowanie na miejscu. Podczas rezerwacji prosimy o podanie naszego kodu grupowego:",
      accommodationTextCovered: "Zarezerwowalismy dla Was zakwaterowanie na miejscu (1 noc w zamku, w tym śniadanie)!",
      visitWebsite: "Odwiedź stronę miejsca"
    },
    rsvp: {
      title: "RSVP",
      message: "Prosimy o potwierdzenie obecności na naszym wyjątkowym dniu. Uprzejmie prosimy o odpowiedź do 1 maja 2024.",
      button: "Odpowiedz na zaproszenie",
      footnote: "Nie możemy się doczekać wspólnej zabawy!"
    }
  }
};
