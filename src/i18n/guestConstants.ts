export interface GuestDetails {
    names: string[];
    callers: string[] | null;
    accommodationCovered: boolean;
    withPartner: boolean;
}

export const GUEST_LIST: GuestDetails[] = [
    {
        names: ["Andreas", "Melanie"],
        callers: ["Andreas", "Melanie"],
        accommodationCovered: true,
        withPartner: false
    },
    {
        names: ["Radek", "Ewa"],
        callers: ["Radku", "Ewo"],
        accommodationCovered: true,
        withPartner: false
    },
    {
        names: ["Miroslaw"],
        callers: ["Miroslawie"],
        accommodationCovered: true,
        withPartner: true
    },
    {
        names: ["Loreena", "Jan"],
        callers: ["Loreena", "Jan"],
        accommodationCovered: false,
        withPartner: false
    }
];