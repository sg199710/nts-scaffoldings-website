export type ProjectCategory = "Infrastructure" | "Industrial" | "Commercial";

export interface Project {
  id: string;
  name: string;
  vendor: string;
  location: string;
  date: string;
  category: ProjectCategory;
  image: string;
}

// 68 unique construction/scaffolding-themed images (no repetition). All from Unsplash.
const PROJECT_IMAGES: string[] = [
  "https://images.unsplash.com/photo-1551104271-0bcb571ad767?w=800&q=80",   // scaffolding on building
  "https://images.unsplash.com/photo-1636163232015-7be35ebf9be7?w=800&q=80", // large building scaffolding
  "https://images.unsplash.com/photo-1559430647-5d7e96ea2bfa?w=800&q=80",   // low angle building
  "https://images.unsplash.com/photo-1557813282-bcd50093e38f?w=800&q=80",   // building under construction
  "https://images.unsplash.com/photo-1559966302-c529a769a2a5?w=800&q=80",   // high rise building
  "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?w=800&q=80", // gray concrete building
  "https://images.unsplash.com/photo-1762248576542-f98e883f3fbd?w=800&q=80", // silver scaffolding sky
  "https://images.unsplash.com/photo-1580063665421-4c9cbe9ec11b?w=800&q=80", // brown concrete building
  "https://images.unsplash.com/photo-1766470511004-98776f67d9f9?w=800&q=80", // buildings under construction
  "https://images.unsplash.com/photo-1683822119828-8dd8c90a63eb?w=800&q=80", // tall building cranes
  "https://images.unsplash.com/photo-1765192775076-cb81f45b0fa5?w=800&q=80", // bamboo scaffolding
  "https://images.unsplash.com/photo-1763281486056-9fd34c978a7d?w=800&q=80", // workers on scaffolding
  "https://images.unsplash.com/photo-1770837657551-080359a0e6ea?w=800&q=80", // building bamboo scaffolding
  "https://images.unsplash.com/photo-1758798349125-5c297b18b8b2?w=800&q=80", // workers assemble scaffolding
  "https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?w=800&q=80", // tower crane
  "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?w=800&q=80", // crane in front of building
  "https://images.unsplash.com/photo-1599707254554-027aeb4deacd?w=800&q=80", // yellow crane building
  "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?w=800&q=80", // people working building
  "https://images.unsplash.com/photo-1694521787162-5373b598945c?w=800&q=80", // men on construction site
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", // construction workers
  "https://images.unsplash.com/photo-1579847188804-ecba0e2ea330?w=800&q=80", // silhouette tower crane
  "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?w=800&q=80", // excavator
  "https://images.unsplash.com/photo-1694522362256-6c907336af43?w=800&q=80", // concrete work
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80", // construction site
  "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80", // industrial
  "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80", // industrial plant
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80", // factory
  "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=800&q=80", // construction
  "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80", // construction site
  "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80", // railway infrastructure
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80", // airport/terminal
  "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80", // campus building
  "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=800&q=80", // university
  "https://images.unsplash.com/photo-1567789884554-0b308d79bc91?w=800&q=80", // steel/industrial
  "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=800&q=80", // power plant
  "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&q=80", // parking structure
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80", // building exterior
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80", // high rise
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80", // tower
  "https://images.unsplash.com/photo-1448630360428-65456659c002?w=800&q=80", // building
  "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=800&q=80", // modern building
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80", // construction workers
  "https://images.unsplash.com/photo-1694521787673-28cbd8830ea5?w=800&q=80", // construction metal
  "https://images.unsplash.com/photo-1599995903128-531fc7fb694b?w=800&q=80", // high rise night
  "https://images.unsplash.com/photo-1604044478919-5b53331fa61e?w=800&q=80", // building street
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80", // hotel/building
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", // office building
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80", // office
  "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80", // industrial
  "https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=800&q=80", // commercial building
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", // factory interior
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80", // tech building
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", // tech
  "https://images.unsplash.com/photo-1609947017136-9daa5e0a3579?w=800&q=80", // temple/structure
  "https://images.unsplash.com/photo-1564804955-f9dbba3ed4e2?w=800&q=80", // monument
  "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=80", // hospital building
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80", // medical building
  "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80", // building
  "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?w=800&q=80", // modern structure
  "https://images.unsplash.com/photo-1575281923032-f40d94ef6160?w=800&q=80", // infrastructure
  "https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?w=800&q=80", // construction safety
  "https://images.unsplash.com/photo-1600585154520-3d70b519c2f4?w=800&q=80", // house construction
  "https://images.unsplash.com/photo-1600566753190-17f93d2c4b2e?w=800&q=80", // building exterior
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", // building
  "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80", // construction
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80", // building
  "https://images.unsplash.com/photo-1600585154340-0633130268b8?w=800&q=80", // house
  "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80", // building
  "https://images.unsplash.com/photo-1600566752357-df6d2f043f2e?w=800&q=80", // building
];

export const projects: Project[] = [
  { id: "1", name: "KNMA Project", vendor: "Larsen and Toubro Limited", location: "Vasant Vihar, Delhi", date: "Jul 2025", category: "Infrastructure", image: PROJECT_IMAGES[0] },
  { id: "2", name: "Prestige Pallava Garden Project", vendor: "Larsen and Toubro Limited", location: "Chennai, Tamil Nadu", date: "Sep 2025", category: "Commercial", image: PROJECT_IMAGES[1] },
  { id: "3", name: "AIIMS Madurai", vendor: "Larsen and Toubro Limited", location: "Madurai, Tamil Nadu", date: "Nov 2025", category: "Infrastructure", image: PROJECT_IMAGES[2] },
  { id: "4", name: "Brigade Altius Project", vendor: "Larsen and Toubro Limited", location: "Chennai, Tamil Nadu", date: "Aug 2025", category: "Commercial", image: PROJECT_IMAGES[3] },
  { id: "5", name: "Asset-13", vendor: "Larsen and Toubro Limited", location: "Aerocity, Delhi", date: "Oct 2021", category: "Commercial", image: PROJECT_IMAGES[4] },
  { id: "6", name: "Shri Ram Janambhoomi", vendor: "Larsen and Toubro Limited", location: "Ayodhya, Uttar Pradesh", date: "Jul 2023", category: "Infrastructure", image: PROJECT_IMAGES[5] },
  { id: "7", name: "HRRL Refinery", vendor: "Larsen and Toubro Limited", location: "Barmer, Rajasthan", date: "Dec 2021", category: "Industrial", image: PROJECT_IMAGES[6] },
  { id: "8", name: "MCHC Project", vendor: "Larsen and Toubro Limited", location: "Buxer, Bihar", date: "Nov 2025", category: "Infrastructure", image: PROJECT_IMAGES[7] },
  { id: "9", name: "MAHSR C-6 Station Project", vendor: "Larsen and Toubro Limited", location: "Uttarsanda, Gujarat", date: "Jul 2023", category: "Infrastructure", image: PROJECT_IMAGES[8] },
  { id: "10", name: "CCS Building Project", vendor: "Larsen and Toubro Limited", location: "New Delhi", date: "Jan 2024", category: "Infrastructure", image: PROJECT_IMAGES[9] },
  { id: "11", name: "CIDCO Housing Project", vendor: "Larsen and Toubro Limited", location: "Navi Mumbai, Maharashtra", date: "Feb 2021", category: "Commercial", image: PROJECT_IMAGES[10] },
  { id: "12", name: "Prestige Cosmos Project", vendor: "Larsen and Toubro Limited", location: "Mumbai, Maharashtra", date: "Feb 2022", category: "Commercial", image: PROJECT_IMAGES[11] },
  { id: "13", name: "Tata Cancer Hospital", vendor: "Larsen and Toubro Limited", location: "Dubri, Assam", date: "Oct 2025", category: "Infrastructure", image: PROJECT_IMAGES[12] },
  { id: "14", name: "Govt. Medical College & Hospital", vendor: "Larsen and Toubro Limited", location: "Dumka, Jharkhand", date: "Oct 2024", category: "Infrastructure", image: PROJECT_IMAGES[13] },
  { id: "15", name: "Equinix Project", vendor: "Larsen and Toubro Limited", location: "Mumbai, Maharashtra", date: "Feb 2023", category: "Industrial", image: PROJECT_IMAGES[14] },
  { id: "16", name: "Executive Enclave", vendor: "Larsen and Toubro Limited", location: "New Delhi", date: "May 2023", category: "Infrastructure", image: PROJECT_IMAGES[15] },
  { id: "17", name: "Katni Grade Separator Project", vendor: "Larsen and Toubro Limited", location: "Katni, Madhya Pradesh", date: "Sep 2021", category: "Infrastructure", image: PROJECT_IMAGES[16] },
  { id: "18", name: "Tata Cancer Care Hospital", vendor: "Larsen and Toubro Limited", location: "Golaghat, Assam", date: "Mar 2024", category: "Infrastructure", image: PROJECT_IMAGES[17] },
  { id: "19", name: "Assam Police Reserve Campus", vendor: "Larsen and Toubro Limited", location: "Kamrup, Assam", date: "Aug 2024", category: "Infrastructure", image: PROJECT_IMAGES[18] },
  { id: "20", name: "IICC Project", vendor: "Larsen and Toubro Limited", location: "Dwarka, Delhi", date: "Apr 2018", category: "Infrastructure", image: PROJECT_IMAGES[19] },
  { id: "21", name: "IIT Hyderabad", vendor: "Larsen and Toubro Limited", location: "Sangareddy, Hyderabad", date: "Sep 2021", category: "Infrastructure", image: PROJECT_IMAGES[20] },
  { id: "22", name: "GSMST Project IIT", vendor: "Larsen and Toubro Limited", location: "Kanpur, Uttar Pradesh", date: "Mar 2024", category: "Infrastructure", image: PROJECT_IMAGES[21] },
  { id: "23", name: "IKEA GMP Project", vendor: "Larsen and Toubro Limited", location: "Gurgaon, Haryana", date: "Dec 2022", category: "Commercial", image: PROJECT_IMAGES[22] },
  { id: "24", name: "TPCI Project", vendor: "Larsen and Toubro Limited", location: "Ghaziabad, Uttar Pradesh", date: "Feb 2025", category: "Industrial", image: PROJECT_IMAGES[23] },
  { id: "25", name: "Govt. Medical College", vendor: "Larsen and Toubro Limited", location: "Jind, Haryana", date: "May 2022", category: "Infrastructure", image: PROJECT_IMAGES[24] },
  { id: "26", name: "MMCH, TB Hospital Campus", vendor: "Larsen and Toubro Limited", location: "Kalapahar, Assam", date: "Oct 2024", category: "Infrastructure", image: PROJECT_IMAGES[25] },
  { id: "27", name: "LTI Mindtree Limited", vendor: "Larsen and Toubro Limited", location: "Kolkata, West Bengal", date: "Feb 2025", category: "Commercial", image: PROJECT_IMAGES[26] },
  { id: "28", name: "Reality Project", vendor: "Larsen and Toubro Limited", location: "Mumbai, Maharashtra", date: "Jan 2018", category: "Commercial", image: PROJECT_IMAGES[27] },
  { id: "29", name: "MHADA-BDD Chawl Project", vendor: "Larsen and Toubro Limited", location: "Mumbai, Maharashtra", date: "Apr 2023", category: "Commercial", image: PROJECT_IMAGES[28] },
  { id: "30", name: "Statue of Oneness Project", vendor: "Larsen and Toubro Limited", location: "Omkareshwar, Madhya Pradesh", date: "Jan 2023", category: "Infrastructure", image: PROJECT_IMAGES[29] },
  { id: "31", name: "LTR Project", vendor: "Larsen and Toubro Limited", location: "Mumbai, Maharashtra", date: "Sep 2022", category: "Commercial", image: PROJECT_IMAGES[30] },
  { id: "32", name: "Prestige Jasdan Classic Project", vendor: "Larsen and Toubro Limited", location: "Mumbai, Maharashtra", date: "Jul 2021", category: "Commercial", image: PROJECT_IMAGES[31] },
  { id: "33", name: "SCB Medical Expansion", vendor: "Larsen and Toubro Limited", location: "Cuttack, Odisha", date: "Jul 2023", category: "Infrastructure", image: PROJECT_IMAGES[32] },
  { id: "34", name: "Tata Cancer Care Hospital", vendor: "Larsen and Toubro Limited", location: "Demow, Assam", date: "Jun 2024", category: "Infrastructure", image: PROJECT_IMAGES[33] },
  { id: "35", name: "Tata Semicon. Assembly & Test", vendor: "Larsen and Toubro Limited", location: "Morigaon, Assam", date: "Dec 2025", category: "Industrial", image: PROJECT_IMAGES[34] },
  { id: "36", name: "Super Speciality Hospital Project", vendor: "Larsen and Toubro Limited", location: "Warangal, Telangana", date: "Sep 2022", category: "Infrastructure", image: PROJECT_IMAGES[35] },
  { id: "37", name: "Prestige Nautius", vendor: "Larsen and Toubro Limited", location: "Mumbai, Maharashtra", date: "Mar 2025", category: "Commercial", image: PROJECT_IMAGES[36] },
  { id: "38", name: "Gateway Project", vendor: "Larsen and Toubro Limited", location: "Mumbai, Maharashtra", date: "Jul 2024", category: "Commercial", image: PROJECT_IMAGES[37] },
  { id: "39", name: "Project No. 300", vendor: "China Construction Sousum India Pvt Ltd.", location: "Ranga Reddy, Telangana", date: "Oct 2024", category: "Industrial", image: PROJECT_IMAGES[38] },
  { id: "40", name: "Elan Emperial", vendor: "Leighton India Contractors Pvt Ltd.", location: "Gurgaon, Haryana", date: "Sep 2025", category: "Commercial", image: PROJECT_IMAGES[39] },
  { id: "41", name: "Godrej Reserve Project", vendor: "Leighton India Contractors Pvt Ltd.", location: "Mumbai, Maharashtra", date: "Aug 2025", category: "Commercial", image: PROJECT_IMAGES[40] },
  { id: "42", name: "Powergrid Corporation of India", vendor: "Coatsman Offshore Services Pvt Ltd.", location: "Malda, West Bengal", date: "Aug 2025", category: "Industrial", image: PROJECT_IMAGES[41] },
  { id: "43", name: "Adani Connex", vendor: "Coatsman Offshore Services Pvt Ltd.", location: "Sec 62 Noida, Uttar Pradesh", date: "Jul 2025", category: "Industrial", image: PROJECT_IMAGES[42] },
  { id: "44", name: "Madhusudan Ghee", vendor: "SMC Foods Ltd.", location: "Saharanpur, Uttar Pradesh", date: "Jan 2025", category: "Industrial", image: PROJECT_IMAGES[43] },
  { id: "45", name: "DLF Parivana South", vendor: "ACC India Pvt. Ltd.", location: "Gurugram, Haryana", date: "Jul 2025", category: "Commercial", image: PROJECT_IMAGES[44] },
  { id: "46", name: "Chalet Hotel", vendor: "Steel Infra Solutions Pvt. Ltd.", location: "Mumbai, Maharashtra", date: "Aug 2025", category: "Commercial", image: PROJECT_IMAGES[45] },
  { id: "47", name: "Madhusudan Milk Plant", vendor: "Shakti Infra Tech Pvt Ltd.", location: "Saharanpur, Uttar Pradesh", date: "Dec 2025", category: "Industrial", image: PROJECT_IMAGES[46] },
  { id: "48", name: "Sawasdee 7", vendor: "Pari Estates Pvt Ltd.", location: "Civil Lines, Delhi", date: "Aug 2025", category: "Commercial", image: PROJECT_IMAGES[47] },
  { id: "49", name: "Sarvodya Bharat Foundation", vendor: "Kalyani Engineering Company", location: "Sec 145 Noida, Uttar Pradesh", date: "Mar 2025", category: "Infrastructure", image: PROJECT_IMAGES[48] },
  { id: "50", name: "Sector 31", vendor: "Master CAD Solution", location: "Greater Noida, Uttar Pradesh", date: "Oct 2024", category: "Commercial", image: PROJECT_IMAGES[49] },
  { id: "51", name: "Vayusena Vihar", vendor: "Saral Enterprises", location: "New Delhi", date: "Sep 2024", category: "Infrastructure", image: PROJECT_IMAGES[50] },
  { id: "52", name: "Sikka Kamna Green", vendor: "Kindle Infra Height Pvt Ltd.", location: "Greater Noida, Uttar Pradesh", date: "Aug 2024", category: "Commercial", image: PROJECT_IMAGES[51] },
  { id: "53", name: "Sri Ram Janambhumi Parisar", vendor: "Mateshweri Temple Construction Pvt. Ltd.", location: "Faizabad, Uttar Pradesh", date: "Jul 2024", category: "Infrastructure", image: PROJECT_IMAGES[52] },
  { id: "54", name: "CPWD, Kendriya Vidyalaya", vendor: "Kalyani Engineering Co.", location: "Bahraich, Uttar Pradesh", date: "Jul 2024", category: "Infrastructure", image: PROJECT_IMAGES[53] },
  { id: "55", name: "Sant Nirankari Health City Center", vendor: "3D Mega Structure Pvt Ltd.", location: "Burari, Delhi", date: "Apr 2024", category: "Infrastructure", image: PROJECT_IMAGES[54] },
  { id: "56", name: "1200 Seaters Girls Hostel", vendor: "Kashyapi Infrast. Pvt. Ltd.", location: "Varanasi, Uttar Pradesh", date: "Apr 2024", category: "Infrastructure", image: PROJECT_IMAGES[55] },
  { id: "57", name: "Haldiram Snacks Project", vendor: "Rattan Singh Builders Pvt. Ltd.", location: "Sec 67 Noida, Uttar Pradesh", date: "Mar 2024", category: "Industrial", image: PROJECT_IMAGES[56] },
  { id: "58", name: "Tata Steel Project", vendor: "KEC International Ltd.", location: "Keonjhar, Odisha", date: "Dec 2022", category: "Industrial", image: PROJECT_IMAGES[57] },
  { id: "59", name: "Gwalior Air & Railway Station", vendor: "KPC Projects Ltd.", location: "Gwalior, Madhya Pradesh", date: "Dec 2022", category: "Infrastructure", image: PROJECT_IMAGES[58] },
  { id: "60", name: "Madhusudan Dairy Plant", vendor: "Creamy Foods Limited", location: "Khurja, Uttar Pradesh", date: "Sep 2022", category: "Industrial", image: PROJECT_IMAGES[59] },
  { id: "61", name: "Multilevel Car Parking", vendor: "Hiptage Infrastructure Pvt. Ltd.", location: "Sadar Bazar, Delhi", date: "Aug 2022", category: "Commercial", image: PROJECT_IMAGES[60] },
  { id: "62", name: "Sikka Kapital Green", vendor: "Granite Hill Properties Pvt. Ltd.", location: "Sec 98 Noida, Uttar Pradesh", date: "Jan 2024", category: "Commercial", image: PROJECT_IMAGES[61] },
  { id: "63", name: "STT Global", vendor: "Blue Star Limited", location: "Sec 143 Noida, Uttar Pradesh", date: "Apr 2022", category: "Industrial", image: PROJECT_IMAGES[62] },
  { id: "64", name: "CPWD, Aryabhatt College", vendor: "Kalyani Engineering Co.", location: "Delhi", date: "Aug 2024", category: "Infrastructure", image: PROJECT_IMAGES[63] },
  { id: "65", name: "CPWD, Mega Boy Hostel NIT", vendor: "Kalyani Engineering Co.", location: "Jalandhar, Punjab", date: "Jun 2024", category: "Infrastructure", image: PROJECT_IMAGES[64] },
  { id: "66", name: "University of South Gaya", vendor: "Kashyapi Infrastructure Pvt. Ltd.", location: "Gaya, Bihar", date: "Nov 2021", category: "Infrastructure", image: PROJECT_IMAGES[65] },
  { id: "67", name: "Harshiv Healthy Food", vendor: "Rattan Singh Builders Pvt. Ltd.", location: "Nagpur, Maharashtra", date: "May 2022", category: "Industrial", image: PROJECT_IMAGES[66] },
  { id: "68", name: "Old Age Home Project", vendor: "Rattan Singh Builders Pvt. Ltd.", location: "Greater Noida, Uttar Pradesh", date: "Jul 2019", category: "Commercial", image: PROJECT_IMAGES[67] },
];
