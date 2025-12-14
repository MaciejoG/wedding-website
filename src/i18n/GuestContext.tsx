import { createContext, useEffect, useState, ReactNode } from "react";
import { GUEST_LIST, type GuestDetails } from "./guestConstants";

export interface GuestContextType {
  names: string[];
  guestDetails: GuestDetails[];
  isValid: boolean;
  error: string | null;
}

export const GuestContext = createContext<GuestContextType | undefined>(undefined);

export const GuestProvider = ({ children }: { children: ReactNode }) => {
  const [names, setNames] = useState<string[]>([]);
  const [guestDetails, setGuestDetails] = useState<GuestDetails[]>([]);
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name1 = params.get("name1");
    const name2 = params.get("name2");

    const guestNames = [name1, name2].filter(Boolean) as string[];

    if (guestNames.length === 0) {
      // No guest names provided - error
      setIsValid(false);
      setError("No guest(s) provided.");
      setNames([]);
      setGuestDetails([]);
      return;
    }

    // Find guest pair that matches exactly the provided names
    const matchingGuestGroup = GUEST_LIST.find((guest) => {
      // Check if the guest group names match exactly (in any order)
      if (guest.names.length !== guestNames.length) {
        return false;
      }
      return guestNames.every((name) => guest.names.includes(name));
    });

    if (matchingGuestGroup) {
      setIsValid(true);
      setError(null);
      setNames(guestNames);
      setGuestDetails([matchingGuestGroup]);
    } else {
      setIsValid(false);
      setError(`Invalid guest pair: ${guestNames.join(" and ")}`);
      setNames([]);
      setGuestDetails([]);
    }
  }, []);

  return (
    <GuestContext.Provider value={{ names, guestDetails, isValid, error }}>
      {children}
    </GuestContext.Provider>
  );
};
