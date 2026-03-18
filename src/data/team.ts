/**
 * Team members – content from TEAM PAGE CONTENT.docx
 * Add photos to public/team/ (e.g. manish-gupta.jpg) to show on the team page.
 */
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  /** Optional: path to photo in public/team/ (e.g. /team/manish-gupta.jpg) */
  image?: string;
}

export const team: TeamMember[] = [
  { id: "manish-gupta", name: "Manish Gupta", role: "Director", image: "/team/manish-gupta.jpg" },
  { id: "munish-bharti", name: "Munish Bharti", role: "GM Operations", image: "/team/munish-bharti.jpg" },
  { id: "virender", name: "Virender", role: "GM Supply Chain Management", image: "/team/virender.jpg" },
  { id: "pawan-kumar", name: "Pawan Kumar", role: "DGM Operations", image: "/team/pawan-kumar.jpg" },
];
