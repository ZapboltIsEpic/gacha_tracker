export interface FGOServants {
    name: string;
    class: string;
    rarity: number;
    description?: string; // optional field
    image?: string; // store images as base64 strings or URLs in the frontend
    // Define properties for skills, ascension, etc., as needed
}