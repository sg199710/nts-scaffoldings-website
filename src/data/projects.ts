export type ProjectCategory = "Infrastructure" | "Industrial" | "Commercial";

export interface Project {
  id: string;
  name: string;
  location: string;
  category: ProjectCategory;
  image: string;
  /** Optional official or authoritative link for SEO and user reference */
  url?: string;
}

/** Image index 1–74 from doc; projects 22 and 41 have no image in source → use placeholder */
function projectImage(projectNum: number): string {
  if (projectNum === 22 || projectNum === 41) return "/projects/project-1.png";
  const idx = projectNum - (projectNum > 22 ? 1 : 0) - (projectNum > 41 ? 1 : 0);
  return `/projects/project-${idx}.png`;
}

function inferCategory(name: string, location: string): ProjectCategory {
  const lower = (name + " " + location).toLowerCase();
  if (/\b(refinery|data center|steel|factory|foxconn|adani|connex|ghee|dairy|ro\.|semiconductor)\b/.test(lower)) return "Industrial";
  if (/\b(dlf|prestige|godrej|hotel|reserve|chalet|sawasdee|crest|trees|capital green|cyber park|experion|sez|township|aranya|eternia|sky city|trayam)\b/.test(lower)) return "Commercial";
  return "Infrastructure";
}

const ROW_DATA: [string, string][] = [
  ["Kiran Nadar Museum of Art Project", "Vasant Vihar, Delhi"],
  ["Prestige Pallavaram Gardens Project", "Chennai, Tamil Nadu"],
  ["AIIMS", "Madurai, Tamil Nadu"],
  ["Brigade Altius Project", "Chennai, Tamil Nadu"],
  ["Asset-13", "Aerocity, Delhi"],
  ["Shri Ram Janmabhoomi", "Ayodhya, Uttar Pradesh"],
  ["Government Medical College and Hospital", "Buxer, Bihar"],
  ["Bullet Train", "Uttarsanda, Gujarat"],
  ["Common Central Secretriate Building Project", "New Delhi"],
  ["CIDCO Housing Project", "Navi Mumbai, Maharashtra"],
  ["Prestige Cosmos Project", "Mumbai, Maharashtra"],
  ["Tata Cancer Hospital", "Dhubri, Assam"],
  ["Equinix Data Center Project", "Mumbai, Maharashtra"],
  ["Executive Enclave", "New Delhi"],
  ["Tata Cancer Care Hospital", "Golaghat, Assam"],
  ["Assam Police Reserve Campus", "Kamrup, Assam"],
  ["Yashobhoomi Project", "Dwarka, Delhi"],
  ["IIT Kanpur", "Kanpur, Uttar Pradesh"],
  ["IKEA GMP Project", "Gurgaon, Haryana"],
  ["Prestige City", "Ghaziabad, Uttar Pradesh"],
  ["Government Medical College", "Jind, Haryana"],
  ["Mahendra Mohan Choudhury Hospital, TB Hospital Campus", "Kalapahar, Assam"],
  ["LTI Mindtree Limited", "Kolkata, West Bengal"],
  ["MHADA-BDD Chawl Project", "Mumbai, Maharashtra"],
  ["Statue of Oneness Project", "Omkareshwar, Madhya Pradesh"],
  ["SCB Medical Expansion", "Cuttack, Odisha"],
  ["Tata Cancer Care Hospital", "Assam"],
  ["Tata Semiconductor Assembly and Test (TSAT) Project", "Assam"],
  ["Gateway Project", "Sewri, Mumbai, Maharashtra"],
  ["Foxconn", "Ranga Reddy, Telangana"],
  ["Elan Emperial", "Gurgaon, Haryana"],
  ["Godrej Reserve Project", "Mumbai, Maharashtra"],
  ["Adani Connex", "Sector 62 Noida, Uttar Pradesh"],
  ["Madhusudan Ghee", "Saharanpur, Uttar Pradesh"],
  ["DLF Privana South", "Gurugram, Haryana"],
  ["Chalet Hotel", "Mumbai, Maharashtra"],
  ["Sawasdee 7", "Civil Lines, Delhi"],
  ["Sarvodya Bharat Foundation", "Sector 145 Noida, Uttar Pradesh"],
  ["Sikka Kaamna Greens", "Greater Noida, Uttar Pradesh"],
  ["Sant Nirankari Health City Center", "Burari, Delhi"],
  ["1200 Seater Girls Hostel", "Varanasi, Uttar Pradesh"],
  ["Haldiram Snacks Project", "Sec 67 Noida, Uttar Pradesh"],
  ["Tata Steel Project", "Keonjhar, Odisha"],
  ["Gwalior Airport & Railway Station", "Gwalior, Madhya Pradesh"],
  ["Madhusudan Dairy Plant", "Khurja, Uttar Pradesh"],
  ["STT Global", "Sector 143 Noida, Uttar Pradesh"],
  ["Old Age Home Project", "Greater Noida, Uttar Pradesh"],
  ["Kent R.O.", "Greater Noida, Uttar Pradesh"],
  ["IICT1 and IICT2 Bombay Reality Project", "Dadar, East Mumbai"],
  ["AIIMS Project", "Gorakhpur, Uttar Pradesh"],
  ["Central Armed Police Forces Institute of Medical Sciences (CAPFIMS) Project", "Delhi"],
  ["DLF The Crest Project", "Gurgaon"],
  ["Dhirubhai Ambani International Convention and Exhibition Center (DAICEC) Project", "Bandra, Kurla, Mumbai"],
  ["Indira Gandhi Hospital Project", "Dwarka, Sec-9, Delhi"],
  ["Experion Project", "Gurgaon, Haryana"],
  ["Godrej The Trees Project", "Vikhroli, Mumbai"],
  ["Wipro I.T. SEZ Project", "Hinjewadi, Pune"],
  ["Reliance Township Project", "Nagothane, Raigad, Maharashtra"],
  ["Safdarjung Hospital Project", "New Delhi"],
  ["Shiv Nadar University Project", "Greater Noida"],
  ["DLF Capital Green Project", "Moti Bagh, Delhi"],
  ["BJP Karyalay Project", "New Delhi"],
  ["IIT Hyderabad Project", "Hyderabad"],
  ["Maruti Suzuki Project", "Sonipat, Haryana"],
  ["DLF Cyber Park Project", "Gurgaon, Haryana"],
  ["Delhi International Airport Limited (DIAL) Project", "Terminal-1, New Delhi"],
  ["HRRL Refinery Project", "Barmer, Rajasthan"],
  ["Government Medical College", "Dumka, Jharkhand"],
  ["Katni Grade Separator Project (PKG1 & PKG2)", "Katni, Madhya Pradesh"],
  ["LTR Project Gate No.1 & 7", "Powai, Mumbai"],
  ["Oberoi Eternia Mulund Project", "Mumbai"],
  ["Oberoi Sky City Project", "Mumbai"],
  ["Piramal Aranya Project", "Mumbai"],
  ["Tata Cancer Hospital Project", "Sivasagar, Assam"],
  ["Super Speciality Hospital", "Warangal, Telangana"],
  ["Peerless Trayam Project", "New Town, Kolkata"],
];

/** Relevant official/authoritative links for SEO; project id -> url */
const PROJECT_LINKS: Partial<Record<number, string>> = {
  1: "https://www.knma.org/",
  2: "https://prestigepallavaram.com/",
  3: "https://aiimsmadurai.edu.in/",
  4: "https://www.brigadegroup.com/",
  6: "https://srjbtkshetra.org/",
  8: "https://www.nhsrcl.in/",
  9: "https://centralvista.gov.in/",
  10: "https://www.cidco.maharashtra.gov.in/",
  11: "https://www.prestigeconstructions.com/",
  12: "https://www.tatacancercare.org/",
  13: "https://www.equinix.com/",
  14: "https://centralvista.gov.in/",
  17: "https://yashobhoomi.co.in/",
  18: "https://www.iitk.ac.in/",
  19: "https://www.ikea.com/in/",
  20: "https://www.prestigecityghaziabad.org/",
  23: "https://www.ltimindtree.com/",
  24: "https://www.mhada.gov.in/en/content/bdd-chawl-redevelopment-project",
  25: "https://oneness.org.in/statue-of-oneness",
  27: "https://www.tatacancercare.org/",
  28: "https://www.tata.com/",
  29: "https://www.lntecc.com/",
  30: "https://www.foxconn.com/en-us/",
  31: "https://www.elanlimited.com/",
  32: "https://www.godrejproperties.com/",
  33: "https://www.adaniconnex.com/",
  34: "https://www.smc-madhusudan.co.in/",
  35: "https://dlfparivanasouth.in/",
  36: "https://www.chalethotels.com/",
  37: "https://www.sawasdeeseven.info/",
  39: "https://www.sikkakaamnagreens.in/",
  40: "https://nirankarihealthcity.org/",
  42: "https://www.haldirams.com/",
  43: "https://www.tatasteel.com/",
  45: "https://www.smc-madhusudan.co.in/",
  46: "https://www.sttelemediagdc.com/in-en/locations/noida",
  48: "https://www.kent.co.in/",
  50: "https://aiimsgorakhpur.edu.in/",
  52: "https://dlfcrest.in/",
  53: "https://www.jioworldcentre.com/",
  55: "https://www.experion.co/",
  56: "https://www.godrejproperties.com/mumbai/residential/the-trees",
  57: "https://www.wipro.com/",
  58: "https://www.ril.com/",
  59: "https://safdarjunghospital.delhi.gov.in/",
  60: "https://www.shivnadaruniversity.edu.in/",
  61: "https://www.capitalgreensdelhi.com/",
  63: "https://www.iith.ac.in/",
  64: "https://www.marutisuzuki.com/",
  65: "https://www.dlf.in/offices/gurugram/dlf-cyberpark/",
  66: "https://www.newdelhiairport.in/",
  67: "https://www.hpcl.co.in/",
  71: "https://www.oberoirealty.com/residential/eternia-mulund-west",
  72: "https://www.oberoirealty.com/",
  73: "https://www.piramalrealty.com/",
  74: "https://www.tatacancercare.org/",
  75: "https://kakatiya.ac.in/",
  76: "https://peerlesstrayam.com/",
};

export const projects: Project[] = ROW_DATA.map(([name, location], i) => {
  const projectNum = i + 1;
  return {
    id: String(projectNum),
    name,
    location,
    category: inferCategory(name, location),
    image: projectImage(projectNum),
    url: PROJECT_LINKS[projectNum],
  };
});
