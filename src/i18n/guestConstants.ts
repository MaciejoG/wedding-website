export interface GuestDetails {
    names: string[];
    names_calls: string[] | null;
    accommodationCovered: boolean;
    withPartner: boolean;
}

export const GUEST_LIST: GuestDetails[] = [
    {
        names: ["Andreas", "Melanie"],
        names_calls: null,
        accommodationCovered: true,
        withPartner: false
    },
    {
        names: ["Radek", "Ewa"],
        names_calls: ["Radku", "Ewo"],
        accommodationCovered: true,
        withPartner: false
    },
    {
        names: ["Miroslaw"],
        names_calls: ["Miroslawie"],
        accommodationCovered: true,
        withPartner: true
    },
    {
        names: ["Loreena", "Jan"],
        names_calls: null,
        accommodationCovered: false,
        withPartner: false
    }
];