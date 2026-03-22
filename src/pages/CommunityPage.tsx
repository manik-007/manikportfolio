import { useEffect, useState } from "react";
import { Youtube, Twitter } from "lucide-react";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import SectionHeading from "@/components/sections/SectionHeading";

const COMMUNITIES_BUILT = [
  {
    org: "Girls Leading Tech",
    role: "Builder",
    period: "June 2024 – Present",
    bullets: [
      "Founded Girls Leading Tech from a WhatsApp group of 5 girls into a thriving community of 3,300+ members across 900+ colleges and 25+ Indian states.",
      "Built and managed a 15-member core team, driving operations, events, partnerships, and growth strategy.",
      "Hosted 55+ mentorship sessions, 5 coffee chats, 4 GLT Spotlights, 20 Twitter spaces, and several unique initiatives including contests, \"How to Crack\" series, Valentine's Week, EmpowerHer on International Women's Day, and Yoga Day Special Session.",
      "Collaborated with leading women-in-tech platforms like SheCanCode and featured speakers from Google, Amazon, Microsoft, Uber, Flipkart, Infosys, SAP, Salesforce, and more.",
      "Grew digital presence to 15K+ followers, 3.5K+ Substack and 1.7K+ Luma subscribers, and 20K+ YouTube views with 1,300 subscribers.",
      "Organised Global AI Buildathon, an 8-hour virtual hackathon with 57K+ impressions, 700+ hackers, and 81 AI projects addressing UN Sustainable Development Goals.",
      "Organised ML Cohort 1.0, a month-long initiative to educate and provide mentorship to girls in AI. With daily challenges and project spotlights, over 1,100 applications from 7+ countries, 600+ mentees joined, and around 400 projects were created through learning from 8 mentors and attending 11 exclusive mentorship sessions.",
      "Organised HackAura, a 24-hour virtual hackathon powered by 14 sponsors and supported by 45+ community partners. With 1,700+ hackers, 150+ projects were made across 3 tracks: AI, Web3 & Open Innovation. 20 podcasts, 4 quizzes, 3 workshops, and 1 gaming activity were conducted in a 24-hour livestream.",
    ],
  },
  {
    org: "Lamit Club",
    role: "Founding Lead",
    period: "Apr 2024 – Jan 2025",
    bullets: [
      "Built and scaled a 300-member Web3 community, organizing 5 speaker sessions, 8 interaction calls, 6 offline gatherings, and 1 seminar.",
      "Led high-impact events including a 5-day bootcamp (296 registrations), orientation (230+ sign-ups, 130+ attendees), and a logo competition (103 entries, 60 submissions) for club rebranding.",
      "Facilitated strategic growth by conducting regular team meetings to brainstorm and implement community initiatives.",
    ],
  },
  {
    org: "Letz Connect",
    role: "Builder",
    period: "",
    bullets: [],
  },
];

const VOLUNTEERING = [
  {
    org: "CMX",
    role: "CMX Connect Host",
    period: "June 2024 – Present",
    bullets: [
      "Hosted 10+ virtual events on Bevy featuring top Community Managers, DevRels, and Founders; topics included Web3, DevRel, AR, Diversity, and Community Building.",
      "Grew the CMX chapter to 410+ members, with 2 global spotlight features in the CMX Newsletter among 75+ chapters worldwide.",
      "Led flagship events like EmpowerHer in collaboration with Girls Leading Tech, attracting 330+ registrations — one of the highest among CMX chapters.",
      "Recognized globally as Best CMX Director of the Month, Most Promising Debut, and Youngest CMX Director Worldwide for one consecutive year.",
    ],
  },
  {
    org: "SheBuilds",
    role: "Organizer",
    period: "Oct 2024 – Apr 2025",
    bullets: [
      "Spearheaded sponsorship efforts for Hackemon, a 36-hour Pokémon-themed hackathon; collaborated with 14 co-organizers and led 9 volunteers.",
      "Designed the sponsorship deck and pitched to 15+ leads at BSCon (IIT Delhi), securing follow-up interest from all; initiated venue partnerships.",
      "Conducted outreach to 40+ potential sponsors, achieving a 55%+ response rate.",
      "Led outreach and sponsorship for Code & Connect Meetups (Delhi & Noida), managing a 10-member volunteer team.",
      "Secured InterviewCake and JetBrains as in-kind sponsors, and onboarded HER DAO as the Title Sponsor.",
      "Managed attendee forms and community partnerships, onboarding 10+ partners and identifying city leads for Chennai, Bangalore, Lucknow, and Nagpur.",
    ],
  },
  {
    org: "CNCF Jalandhar",
    role: "Organizer",
    bullets: [
      "Organized 'Introduction to CNCF' online panel discussion and 'Introducing Argo CD + Getting Involved' featuring Christian, Head of Community at Akuity.",
      "Designed promotional posters and digital assets for events and speaker sessions to drive engagement and participation.",
    ],
  },
  {
    org: "Google Cloud",
    role: "Arcade Facilitator",
    bullets: [
      "Built and nurtured a community of 1,200+ members, enrolling 550+ participants into the Arcade Program.",
      "Achieved the 2nd milestone and successfully completed the program, driving engagement and structured community growth.",
    ],
  },
  {
    org: "THM CGC",
    role: "Marketing",
    bullets: [
      "Led event promotion, speaker outreach, and crafted effective social media strategies to grow chapter presence across platforms.",
      "Contributed to organizing key seminars including the Inaugural Seminar on Cyber Threat Intelligence & Ethical Hacking and Cyber101.",
    ],
  },
  {
    org: "TPG Chandigarh",
    role: "Community Lead",
    bullets: [
      "Organized the Starknet India Roadshow, a 2-day in-person event hosted at Antier Solutions.",
      "Led end-to-end planning and execution of Road to Devcon at Chandigarh University, achieving 110+ registrations and 70+ attendees.",
      "Managed the official Twitter account, driving online engagement and community visibility.",
    ],
  },
  {
    org: "Socrates Global",
    role: "Partnerships Lead",
    bullets: [
      "Reached out to 60+ leads and pitched Socrates Global to potential partners and users.",
      "Contributed to the acquisition of 4,000+ unique users within 2 weeks through strategic outreach efforts.",
    ],
  },
  {
    org: "Hack for Bloom",
    role: "Partnerships Lead",
    bullets: [
      "Outreached to sponsors including Hive, GeeksforGeeks, Outdefine, and HackQuest for potential partnerships.",
      "Provided practical growth strategies to organize, scale, and strengthen the community structure.",
      "Curated a targeted list of sponsor leads to streamline outreach and partnership efforts.",
    ],
  },
  {
    org: "IBW",
    role: "Volunteer",
    bullets: [
      "Actively participated in brainstorming and engaged in community & social posts.",
    ],
  },
  {
    org: "Web3 Conf Goa",
    role: "Partnership Team",
    bullets: [
      "Outreached to 5+ potential sponsors to secure partnerships and support for community initiatives.",
    ],
  },
  {
    org: "HackArCode",
    role: "Partnership Lead",
    bullets: [
      "Outreached to 10+ potential sponsors to secure partnerships and support for community initiatives.",
    ],
  },
  {
    org: "KotlinConf",
    role: "Content Writer",
    bullets: [
      "Wrote social media content for KotlinConf, contributing to increased engagement and growth across platforms.",
      "Volunteered on-site, managing crowd flow, handling the community lounge, maintaining discipline, unpacking swag, and assisting attendees with navigation during the conference.",
    ],
  },
];

const TWITTER_SPACES = [
  { title: "How Humanizing Tech Made Me a Conference Speaker", link: "https://x.com/GirlLeadingTech/status/1973776234237575178", speakers: [{ name: "Diana Oyster", role: "Developer Advocate at Vonage", twitter: "https://x.com/dianasoyster" }] },
  { title: "Rust as a Programming Language", link: "https://x.com/GirlLeadingTech/status/1973346885651013877", speakers: [{ name: "Francesco Ciulla", role: "Developer Advocate at Daily.Dev", twitter: "https://x.com/FrancescoCiull4" }] },
  { title: "Role of Communities in Web3", link: "https://x.com/GirlLeadingTech/status/1973035390245409111", speakers: [{ name: "Matilde Silva", role: "Community Strategist Advisor at Her DAO", twitter: "https://x.com/WHTIFIGO" }] },
  { title: "Career, Jobs & Placements", link: "https://x.com/GirlLeadingTech/status/1970460131466129730", speakers: [{ name: "SVS", role: "Tech Recruiter", twitter: "https://x.com/_svs_" }] },
  { title: "Health and Tech", link: "https://x.com/GirlLeadingTech/status/1970090673547407665", speakers: [{ name: "Aditi Tiwari", role: "Founder at Sia Health", twitter: "https://x.com/Imaditi007" }] },
  { title: "Career & Life Experiences", link: "https://x.com/GirlLeadingTech/status/1969785139535515740", speakers: [{ name: "Narayani Gurunathan", role: "Senior Talent Advisor", twitter: "https://x.com/Narayani07" }] },
  { title: "Women in Tech", link: "https://x.com/GirlLeadingTech/status/1969416982111142252", speakers: [{ name: "Rudy", role: "Community Manager", twitter: "https://x.com/rudythetechy" }] },
  { title: "Crypto, DevRel & Engineering", link: "https://x.com/GirlLeadingTech/status/1968983669608964196", speakers: [{ name: "Kanishk Khurana", role: "DevRel Engineer at Across Protocol", twitter: "https://x.com/kanishkkhurana" }] },
  { title: "AMA with Ankush Dharkar", link: "https://x.com/realankush", speakers: [{ name: "Ankush Dharkar", role: "Founder at RealDevSquad", twitter: "https://x.com/realankush" }] },
  { title: "Blockchain 101 & Community Management", link: "https://x.com/GirlLeadingTech/status/1967279353022263730", speakers: [{ name: "Rieselle Saure", role: "Lead Community Ambassador at Core DAO", twitter: "https://x.com/elleseir" }] },
  { title: "Tech Trends with Ayush", link: "https://x.com/GirlLeadingTech/status/1967257007754473754", speakers: [{ name: "Ayush Chugh", role: "Founder at Ravix Studio", twitter: "https://x.com/aayushchugh" }] },
  { title: "Is AI the Only End Game?", link: "https://x.com/GirlLeadingTech/status/1967241530168774664", speakers: [{ name: "Unnati Chhabra", role: "Data Scientist at Grid Dynamics", twitter: "https://x.com/Unnati_twts" }] },
  { title: "How to Find Good Hackathons", link: "https://x.com/GirlLeadingTech/status/1966901850571239807", speakers: [{ name: "Manik", role: "Builder at Girls Leading Tech", twitter: "https://x.com/themanikdiaries" }] },
];

const INITIAL_SPACES = 3;

const SESSIONS = [
  { title: "A Panel Discussion on Google WE Scholarship", link: "https://youtu.be/T92Vx4-Giy4?si=ZfO5VyQlaLM0gEu7", speakers: [{ name: "Ridhy Arora", role: "WE Scholar 2024", linkedin: "https://www.linkedin.com/in/ridhy-arora-097784258/" }, { name: "Kavya Choudhary", role: "WE Scholar 2024", linkedin: "https://www.linkedin.com/in/kavya1610/" }, { name: "Sravya Uppalapati", role: "WE Scholar 2024", linkedin: "https://www.linkedin.com/in/sravyauppalapati16/" }] },
  { title: "Google STEP Internship Mentorship Session", link: "https://youtu.be/N3iP6_oaum0?si=jXy-XsHsepa7VqxL", speakers: [{ name: "Jigisha Arora", role: "SWE Intern'25 at Google", linkedin: "https://www.linkedin.com/in/jigisha-arora-212ab5256/" }] },
  { title: "GSOC Mentorship Session", link: "https://youtu.be/qYo1UFocUwo?si=JsEUaK1Sl7j3_4gL", speakers: [{ name: "Nishant Singhal", role: "GSOC Mentor", linkedin: "https://www.linkedin.com/in/nishant-singhal19/" }, { name: "Angel Sharma", role: "Backend Intern at Mercari Inc., GSOC'24", linkedin: "https://www.linkedin.com/in/angel-sharma-2a5240260/" }] },
  { title: "Mentorship Session on Google SWE Internship", link: "https://youtu.be/J8nHxauzyDs?si=nZ0e72cgrd9x1eqC", speakers: [{ name: "Divina Pooja John", role: "Software Engineer at Google", linkedin: "https://www.linkedin.com/in/divina-john/" }] },
  { title: "Mentorship Session on Uber She++ & STAR Internship Programs", link: "https://youtu.be/1bm_ARA1zfo?si=6cjYV6596LtTzdCV", speakers: [{ name: "Radhika Bansal", role: "Software Developer at Uber", linkedin: "https://www.linkedin.com/in/radhika403/" }] },
  { title: "Tips to Crack LinkedIn CoachIn Program", link: "https://youtu.be/OuRihewdRKg?si=xBnByKEOw2v1VX41", speakers: [{ name: "Swasti Sargam", role: "LinkedIn CoachIn Mentee", linkedin: "https://www.linkedin.com/in/swastisargam2002/" }] },
  { title: "Blockchain Fundamentals", link: "https://youtu.be/luBrrTvTtHg?si=-u17B6NDweSkMbIC", speakers: [{ name: "Mohammad Mudassir", role: "Junior Support Engineer at Algorand Foundation", linkedin: "https://www.linkedin.com/in/mohammad-mudassir-b788a41ab/" }] },
  { title: "Mentorship Session on Outreachy", link: "https://youtu.be/2IOd-_DABMY?si=uM7ZrmYKOkelmKDQ", speakers: [{ name: "Siddhi Agarwal", role: "Outreachy Fellow", linkedin: "https://www.linkedin.com/in/siddhi-agr/" }] },
  { title: "Know Everything About Google Solution Challenge", link: "https://youtu.be/-i30xHpXQGY?si=YJjQi9zJoGzjI-PU", speakers: [{ name: "Krishna Aute", role: "Winner of Google Solution Challenge", linkedin: "https://www.linkedin.com/in/krishna-aute-195b2b135/" }] },
  { title: "Google Girl Hackathon Winning Strategies", link: "https://youtu.be/B1WVvwqMd6k?si=Su30EZbcaf5BDj6G", speakers: [{ name: "Tanisha Singh", role: "Winner of Google Girl Hackathon 2026", linkedin: "https://www.linkedin.com/in/the-tanisha-singh/" }] },
  { title: "How to Make the Best Resume", link: "https://youtu.be/ft-Y88hA1q8?si=GbFkQ-ccGfD2oPK8", speakers: [{ name: "Radhika Patwari", role: "Software Engineer at Uber", linkedin: "https://www.linkedin.com/in/radhika-patwari-334541172/" }] },
  { title: "How to Win Any Hackathon", link: "https://youtu.be/c2zJxi8ByYA?si=JJQpREDiUZ8gDh_J", speakers: [{ name: "Mohit Bhat", role: "50x Hackathon Winner, 3x ETH Global Winner", linkedin: "https://www.linkedin.com/in/mbcse/" }] },
  { title: "How You Can Build a Strong Network", link: "https://youtu.be/6cM8fqBy1_w?si=0Ah9ZC8dzfQ0X2PB", speakers: [{ name: "Garima Pahwa", role: "SWE at Becton Dickinson", linkedin: "https://www.linkedin.com/in/garima-pahwa-68416a22a/" }] },
  { title: "Entrepreneurship and Strategic Thinking for Success", link: "https://youtu.be/WkiHwfHo-qk?si=AcNHL9QVHL6o5j_M", speakers: [{ name: "Nidhi Banthia Mehta", role: "TEDx Speaker, Leadership Consultant", linkedin: "https://www.linkedin.com/in/nidhibanthiamehta/" }] },
  { title: "How to Deal with FOMO, Burnout & Imposter Syndrome", link: "https://youtu.be/pb5cL2zY7U8?si=gKc79LQYM0H4uIj-", speakers: [{ name: "Ramesh Rajini", role: "Senior Principle Consultant at Infosys", linkedin: "https://www.linkedin.com/in/rameshrajini/" }] },
  { title: "How Leadership & Public Speaking Build Your Confidence", link: "https://youtu.be/pdAkjkFv4i4?si=6WHHG8UrrvD8pzzc", speakers: [{ name: "Shilpi Mitra", role: "Engineering Leader at Microsoft", linkedin: "https://www.linkedin.com/in/shilpimitra/" }] },
  { title: "Unlock Your Hidden Potential & Live Your Life to the Fullest", link: "https://youtu.be/QTazZvDYFAw?si=k-1q2YfRByodOvIS", speakers: [{ name: "Dr. Naga Swathi TJ", role: "Global Senior Director at SAP Business AI", linkedin: "https://www.linkedin.com/in/drnagaswathitj/" }] },
  { title: "Discussion on Mental Health", link: "https://youtu.be/0BBn6bgb_F8?si=sURK-J-WhuMZlyd-", speakers: [{ name: "Madhu Sathvik", role: "Founder of Satwa Yoga", linkedin: "https://www.facebook.com/madhu.sathvik/" }] },
  { title: "How to Become a Codess Cafe Mentee", link: "https://youtu.be/F3bvY6T8iQo?si=nvtxfheXg-ucriIF", speakers: [{ name: "Garima Jha", role: "Codess Cafe Mentee", linkedin: "https://www.linkedin.com/in/garimajha25/" }, { name: "Sweta Pandey", role: "Codess Cafe Mentee", linkedin: "https://www.linkedin.com/in/sweta-pandey-37178a22b/" }, { name: "Urvashi Agarwal", role: "Codess Cafe Mentee", linkedin: "https://www.linkedin.com/in/uraviva/" }] },
  { title: "How to Find Events Happening Around You", link: "https://youtu.be/TSZXUpS78oo?si=lWT2A4Olkii3HT9e", speakers: [{ name: "Manik", role: "Community Leader", linkedin: "https://www.linkedin.com/in/mrmanik/" }] },
  { title: "How to Crack Google", link: "https://youtu.be/uTANGbXJ4pY?si=HFYP5ZYlLxSpaCpF", speakers: [{ name: "Deeksha Pandey", role: "SDE 3 at Google", linkedin: "https://www.linkedin.com/in/deekshapandey16/" }] },
  { title: "How to Crack Intuit", link: "https://youtu.be/VRhuMVR_XTw?si=rPGJzPPtVgP8oPvB", speakers: [{ name: "Akanksha Buchke", role: "Senior Software Engineer at Intuit", linkedin: "https://www.linkedin.com/in/akanksha-buchke/" }] },
  { title: "How to Crack LFX (Linux Foundation Mentorship)", link: "https://youtu.be/20SraqgHPo4?si=lX8BeYrxV2dDS031", speakers: [{ name: "Chinmayi DS", role: "LFX'24 Mentee at Hyperledger", linkedin: "https://www.linkedin.com/in/chinmayi-d-s-2608b0263/" }] },
  { title: "Everything About European Summer of Code", link: "https://youtu.be/xnl-GIXszK8?si=sCrg-1UQapVTiiBp", speakers: [{ name: "Pranav Bhat", role: "ESOC'25 Contributor", linkedin: "https://www.linkedin.com/in/pranav-bhat-966003195/" }] },
  { title: "Getting Started with Twitter", link: "https://youtu.be/g69YR_HVLdY?si=Hx3NNeQxRNEN2_5-", speakers: [{ name: "Preksha Mahajan", role: "SWE at Nielson", linkedin: "https://www.linkedin.com/in/preksha-mahajan-090359214/" }, { name: "Anshika Agarwal", role: "Intern at Salesforce", linkedin: "https://www.linkedin.com/in/anshika-aggarwal9/" }] },
  { title: "Everything About Amazon ML Summer School", link: "https://youtu.be/QOI35U32TOc?si=tvaQbeLijsBrwTCw", speakers: [{ name: "Anushka Srivastava", role: "SWE Intern at Microsoft, AMSS'24", linkedin: "https://www.linkedin.com/in/anushka-srivastava-798540255/" }] },
  { title: "How to Become a Women Techmaker Ambassador", link: "https://youtu.be/Y1rT73vDdB0?si=LS5oPDdpS-7Uht8N", speakers: [{ name: "Khushi Panwar", role: "WTM Ambassador", linkedin: "https://www.linkedin.com/in/smilewithkhushi/" }] },
  { title: "How to Crack Amazon", link: "https://youtu.be/dRXGYcYNOyA?si=F6pZbo4z9M5Z2rEH", speakers: [{ name: "Priyanshi Agarwal", role: "SDE at Amazon", linkedin: "https://www.linkedin.com/in/priyanshi-agarwal-4b1713212/" }] },
  { title: "How to Crack Microsoft", link: "https://youtu.be/Dkzxav6CLKg?si=-qnIusX5FUHeH1S0", speakers: [{ name: "Riya Singhal", role: "SDE at Microsoft, Ex-IBM, Red Hat", linkedin: "https://www.linkedin.com/in/riya-singhal-58a2071a5/" }] },
  { title: "How to ACE Flipkart Grid Hackathon", link: "https://youtu.be/karUHuo0w34?si=hhzJ5VeF5o1wQCDx", speakers: [{ name: "Juhie Chandra", role: "Flipkart Grid 5.0 Winner", linkedin: "https://www.linkedin.com/in/juhiechandra-02/" }] },
  { title: "How to Become a Google Generation Scholar", link: "https://youtu.be/Y2guRprmN-o?si=fLLP7OenWuBp5_eq", speakers: [{ name: "Akanksha Rani", role: "SWE at Barclays", linkedin: "https://www.linkedin.com/in/akanksha-rani-775355202/" }] },
  { title: "How to Crack GSOC 2026", link: "https://youtu.be/XtBF0FBO3Wk?si=GRrp_Ix_Yg0OF_AU", speakers: [{ name: "Suhaani Agarwal", role: "GSOC'25 Contributor", linkedin: "https://www.linkedin.com/in/suhaani-agarwal-010a0a280/" }] },
  { title: "Mastering React: Beginner to Advanced", link: "https://youtu.be/f2NLQdlY6SQ?si=81EzBgCH_ubarJJ9", speakers: [{ name: "Praveen Kumar Puroshothaman", role: "Associate Director at Fitch Group", linkedin: "https://www.linkedin.com/in/praveentech/" }] },
  { title: "Foundations of Machine Learning", link: "https://www.youtube.com/live/YYZ1pEmYnnk?si=GWS0QNu6nG0t8l4T", speakers: [{ name: "Shreya Mathur", role: "AMSS'24", linkedin: "https://www.linkedin.com/in/shreya-mathur-0092b6257/" }] },
  { title: "Real World Machine Learning", link: "https://www.youtube.com/live/a_vOegkcMM8?si=dyHc9NhN0rNNUjJA", speakers: [{ name: "Suvendu Mohanty", role: "Senior ML Engineer at Amazon", linkedin: "https://www.linkedin.com/in/suvenduml/" }] },
  { title: "Feature Engineering", link: "https://www.youtube.com/live/iPlED7mHG-0?si=IqsvOHbG7z0OdUAO", speakers: [{ name: "Suvendu Mohanty", role: "Senior ML Engineer at Amazon", linkedin: "https://www.linkedin.com/in/suvenduml/" }] },
  { title: "First Machine Learning Model", link: "https://www.youtube.com/live/RNK2i9SYMJc?si=W36KGuKh_e2dO0GR", speakers: [{ name: "Yashika Kukkar", role: "SDE 1 at Morgan Stanley", linkedin: "https://www.linkedin.com/in/yashika-kukkar-8a1943223/" }] },
  { title: "Hands-On Machine Learning Workshop", link: "https://www.youtube.com/live/Wl7nM4JuUj0?si=HH3GE_YJBhltwbPp", speakers: [{ name: "Akshay Gautam", role: "CTO at Fernbio", linkedin: "https://www.linkedin.com/in/ak-gautam/" }] },
  { title: "Model Optimization & Ensemble Learning", link: "https://www.youtube.com/live/SM6ZBLc_Cys?si=4T9On_HkbKvAiiD6", speakers: [{ name: "Amandeep Singh", role: "Senior AI/ML Engineer at PayPal", linkedin: "https://www.linkedin.com/in/mundraaman/" }] },
  { title: "Careers in GenAI", link: "https://www.youtube.com/live/ZBUkkzDyyfw?si=53qGgCDR1njr7H4q", speakers: [{ name: "Dr. Mohit Sewak", role: "Staff Software Engineer at Google", linkedin: "https://www.linkedin.com/in/mohitsewak/" }] },
  { title: "Navigating Careers in ML Research", link: "https://www.youtube.com/live/0kv51pWPZ5w?si=mB7vGmQ8f5tJj1aa", speakers: [{ name: "Disha Shrivastava", role: "Senior Research Scientist at Google DeepMind", linkedin: "https://www.linkedin.com/in/disha-shrivastava-8398a212/" }] },
  { title: "Navigating the Landscape of AI Startups", link: "https://www.youtube.com/live/NDRxh0RvP90?si=1RZXVPMFQ7MMKbIw", speakers: [{ name: "Neha Goel", role: "Founder of Darzy AI, Ex-Microsoft AI Startup Mentor", linkedin: "https://www.linkedin.com/in/nehagoel23/" }] },
  { title: "How to Build a Winning Hackathon Project", link: "https://www.youtube.com/live/dPQaiVNLTGI?si=bsE9phR3XfllfaJI", speakers: [{ name: "Mannan Tyagi", role: "10x Hackathon Winner", linkedin: "https://www.linkedin.com/in/mannantyagi/" }] },
  { title: "My Journey at Microsoft: From Campus to Corporate", link: "https://www.youtube.com/live/psawxxTwnx8?si=N4lb_rXtI9M6PXCF", speakers: [{ name: "Nandini Taneja", role: "SDE at Microsoft", linkedin: "https://www.linkedin.com/in/nandini-taneja4/" }] },
  { title: "Bridging the Gap Between Youth and Brands", link: "https://www.youtube.com/live/5GS36-jOlXQ?si=VWJt_fwNo7RBoD26", speakers: [{ name: "Ayush Kumar Prajapati", role: "Outreach Lead at Market Mafia", linkedin: "https://www.linkedin.com/in/ayush-kumar-prajapati-82546235a" }] },
  { title: "How AR/VR Can Make Hackathon Projects Stand Out", link: "https://www.youtube.com/live/bWKrKpYoEtI?si=Z0j7TO5StsS07VwT", speakers: [{ name: "Chhavi Garg", role: "Co-Founder of BharatXR & Arexa", linkedin: "https://www.linkedin.com/in/chhavigg/" }] },
  { title: "How to Solve Healthcare Problems Using AR/VR & AI", link: "https://www.youtube.com/live/JHkAo6sDcdQ?si=EY3cwg0nyrzrAcc_", speakers: [{ name: "Sanjit Singh", role: "Co-Founder of Valkyra Technologies", linkedin: "https://www.linkedin.com/in/sanjit-singh-66374b6a/" }] },
  { title: "Startups and Product Journey", link: "https://www.youtube.com/live/VKCFLiVnQ7w?si=U72gaxg20j8sAmfh", speakers: [{ name: "Gurtej Singh", role: "Senior Manager at Bytexl", linkedin: "https://www.linkedin.com/in/gurtej-singh-cse/" }] },
  { title: "Generative AI: Future Opportunities and Challenges", link: "https://www.youtube.com/live/0yF1lcGeVGk?si=UBK8nc5ozF94rwFb", speakers: [{ name: "Dr. Krishna Chaitanya Rao", role: "Director at MTDA", linkedin: "https://www.linkedin.com/in/krishnachaitanyarao/" }] },
  { title: "Build a Career in Computer Graphics and Vision", link: "https://www.youtube.com/live/aCeh534nSt8?si=_KAR2Bx9f2BZi6rW", speakers: [{ name: "Preetish Kakkar", role: "Sr. Computer Graphics Engineer at Adobe", linkedin: "https://www.linkedin.com/in/preeteesh/" }] },
  { title: "Rapid Prototyping with Android, Firebase & Generative AI for Hackathons", link: "https://www.youtube.com/live/tL-B6v3J31E?si=L4OZNVfym52amNBr", speakers: [{ name: "Pankaj Rai", role: "GDE at Firebase", linkedin: "https://www.linkedin.com/in/pankajrai16/" }] },
  { title: "How to Validate Your Hackathon Idea Like a Product Manager", link: "https://www.youtube.com/live/irJ-wp5cjh4?si=Vkz1EhCfIl3aI5zj", speakers: [{ name: "Yajur Bajaj", role: "AI Product Manager at Dubai Holding", linkedin: "https://www.linkedin.com/in/yajurbajaj/" }] },
  { title: "The Power of Communities: How GSSOC & AWS Cloud Build Future Leaders", link: "https://www.youtube.com/live/P59IxcXlG6U?si=2nehUCapGDljAqQT", speakers: [{ name: "Arushi Garg", role: "SDE 1 at Adobe", linkedin: "https://www.linkedin.com/in/arushi-garg105/" }] },
  { title: "Technical Writing 101", link: "https://www.youtube.com/live/3b1qmZT5Jnw?si=fNrX639TzXrvTziJ", speakers: [{ name: "Riza Farheen", role: "Developer Advocate at Orkes", linkedin: "https://www.linkedin.com/in/riza-farheen/" }] },
  { title: "How to Get High Paying Jobs in AI", link: "https://www.youtube.com/live/zqL84gfxhGg?si=KHOdS6q5PSRRao46", speakers: [{ name: "Shivam Chhirolya", role: "Senior ML Scientist at Prezent AI", linkedin: "https://www.linkedin.com/in/shivam-chhirolya/" }] },
  { title: "Tips to Win Hackathons", link: "https://www.youtube.com/live/zbCwocWSPZ4?si=ok_0cCBc8vozxcSH", speakers: [{ name: "Mohammad Danish", role: "Program Manager, SIH Winner", linkedin: "https://www.linkedin.com/in/mohammad-danish-535028294/" }, { name: "Souradip Pal", role: "SIH Winner", linkedin: "https://www.linkedin.com/in/souradip-pal-codes/" }] },
  { title: "AI in Finance", link: "https://www.youtube.com/live/DIH6wdNpV70?si=VLetgO-g9F1h1HoP", speakers: [{ name: "Anubha Pandey", role: "Data Scientist Manager at Mastercard", linkedin: "https://www.linkedin.com/in/anubha-pandey-294747161/" }] },
  { title: "Innovation and Emerging Tech: How Can We Make Use of Its Full Potential", link: "https://www.youtube.com/live/6lkz6eiF8pM?si=ti3qCgxEgbZFo9xW", speakers: [{ name: "Kaushika Anandharaman", role: "Core SWE Developer", linkedin: "https://www.linkedin.com/in/kaushika-anandharaman/" }] },
  { title: "Guitar, Coding and a Cup of Tea", link: "https://youtu.be/E02ediWQ7v4?si=vN6ghiu1qeUoOUTO", speakers: [{ name: "Gracey Duggar", role: "Co-Founder at LaGravitea", linkedin: "https://www.linkedin.com/in/gracey-dugar-71b55821b" }] },
  { title: "Ship a Mini App in 45 — Vibe Coding with AI (PRD to Prototype)", link: "https://youtu.be/AwdAeL9B1w4?si=5hRhVL3uG-5A98dB", speakers: [{ name: "Ramyashree Shetty", role: "Data Engineer at Radix", linkedin: "https://www.linkedin.com/in/ramyashree-shetty" }] },
  { title: "Building Smart, Not Big: How Simple Solutions Win Hackathons", link: "https://youtu.be/8goFETlO3T8?si=nQDxpBNoeUle6y6P", speakers: [{ name: "Manishka Dubey", role: "Founder at Tinker Techie", linkedin: "https://www.linkedin.com/in/manishka-dubey-871a65202" }] },
  { title: "Quantum Curiosity: Exploring Ideas Beyond Normal Coding", link: "https://youtu.be/anNL8jYhjCg?si=8FAmOUL6izV6gWlD", speakers: [{ name: "Ernestine Lerisha", role: "AI & Quantum Researcher", linkedin: "https://www.linkedin.com/in/ernestine-lerisha-john-4a863a204/" }] },
  { title: "From Idea to Product: Turn a Random Idea into a Real App", link: "https://youtu.be/hielu7rBxdE?si=58W2Ls4E_dLjJGpF", speakers: [{ name: "Aprajita Verma", role: "Frontend Architect at Mycom", linkedin: "https://www.linkedin.com/in/aprajita-verma-19522814a/" }] },
  { title: "Building for Social Good: DOGs & DPIs", link: "https://youtu.be/7j3yI3vZOvE?si=ii50zYa06nE8JEff", speakers: [{ name: "Ajitha Sindhe", role: "Program Coordinator at Code4GovTech", linkedin: "https://www.linkedin.com/in/ajitha-sindhe-63623b105/" }] },
  { title: "Everything You Need to Know About Google STEP Internship", link: "https://youtu.be/FaPYJCEbGoU?si=FbGKJQh124YTYY_E", speakers: [{ name: "Mehak Garg", role: "Google STEP Intern 2025", linkedin: "https://www.linkedin.com/in/mehakg05/" }] },
  { title: "How to Crack LinkedIn CoachIn and LinkedIn Internship", link: "https://youtu.be/7YzcHkhoYaU?si=jVYU7mWsvQonBysv", speakers: [{ name: "Kritika Dhiman", role: "LinkedIn CoachIn 2025", linkedin: "https://www.linkedin.com/in/kritika-dhiman-a23104290/" }, { name: "Garima Sahu", role: "Intern at Dell Technologies", linkedin: "https://www.linkedin.com/in/garima-sahu-84649a322/" }] },
  { title: "Senior Engineering Leadership", link: "https://youtu.be/olgVuJ79HbY", speakers: [{ name: "Sobhitha Neelanath", role: "Senior Engineering Leader at Salesforce", linkedin: "https://www.linkedin.com/in/sobhitha-neelanath/" }] },
  { title: "Innovation Women", link: "https://youtu.be/zra81UZd6nA", speakers: [{ name: "Bobbie Carlton", role: "Founder of Innovation Women", linkedin: "https://www.linkedin.com/in/bobbiecarlton/" }] },
  { title: "Enterprise Business Leadership", link: "https://youtu.be/j_1Bqtf9FRA", speakers: [{ name: "Bhagyasrie M Masorkar", role: "AGM CMT (Enterprise Business) at Sify Technologies", linkedin: "https://www.linkedin.com/in/bhagyashree-masurkar/" }] },
  { title: "People Impact and Leadership", link: "https://youtu.be/5236jNJXB4s", speakers: [{ name: "Chaitra Rao", role: "Founder & Managing Partner at People Impact", linkedin: "https://www.linkedin.com/in/craopeopleimpact/" }] },
  { title: "Aspire For Her", link: "https://youtu.be/QIJxhEO8WE4", speakers: [{ name: "Madhura DasGupta Sinha", role: "Founder of Aspire For Her", linkedin: "https://www.linkedin.com/in/madhura-dasgupta-sinha/" }] },
  { title: "Executive Advisory and Nano Insights", link: "https://youtu.be/_DH-gVUPICM", speakers: [{ name: "Su Jella", role: "Executive & Advisor at Nano Insights", linkedin: "https://www.linkedin.com/in/sujella/" }] },
  { title: "Empowering 1 Million Girls", link: "https://youtu.be/kKUN1YnvRSU", speakers: [{ name: "Jacintha Jayachandran", role: "Founder of HopeWorks Foundation", linkedin: "https://www.linkedin.com/in/jacintha-jayachandran-empowering1milliongirls/" }] },
  { title: "AI Engineering at LTIMindTree", link: "https://youtu.be/h5tUFMQNrAQ", speakers: [{ name: "Yashaswini Vismaya", role: "Artificial Intelligence Engineer at LTIMindTree", linkedin: "https://www.linkedin.com/in/yash-vis/" }] },
  { title: "Caregiver Saathi", link: "https://youtu.be/hTu4mLX3asc", speakers: [{ name: "Bhavana Issar", role: "Founder CEO of Caregiver Saathi", linkedin: "https://www.linkedin.com/in/bhavanaissar/" }] },
  { title: "Tips to Crack Companies as an Entry-Level Blockchain Dev", link: "https://www.youtube.com/watch?v=kdfcaxUwW0U", speakers: [{ name: "Veer Pratap Singh", role: "Team Lead at Antier Solutions", linkedin: "" }] },
  { title: "How to Become a Blockchain Developer", link: "https://www.youtube.com/watch?v=evZyrU0hFmk", speakers: [{ name: "Aditya Sahu", role: "Sr. Blockchain Developer at Wolfpacklabs", linkedin: "https://www.linkedin.com/in/aditya-sahu-477a69175/" }] },
  { title: "Introducing Web3 & Its Opportunities", link: "https://www.youtube.com/watch?v=iHKBbaA46k4", speakers: [{ name: "Naga Padmini", role: "SDE at Amazon", linkedin: "https://www.linkedin.com/in/nagapadmini/" }] },
  { title: "Build Your Network", link: "https://www.youtube.com/watch?v=9n8gfN89z34", speakers: [{ name: "Manik", role: "Founder Lamit Club", linkedin: "https://www.linkedin.com/in/mrmanik/" }] },
  { title: "Benefits of Attending Events & Meetups", link: "https://www.youtube.com/watch?v=79dDFyT4wWw&t=253s", speakers: [{ name: "Manik", role: "Founder Lamit Club", linkedin: "https://www.linkedin.com/in/mrmanik/" }] },
  { title: "How to Build Your Personal Brand", link: "https://www.youtube.com/watch?v=VB51QTLXFZM", speakers: [{ name: "Manik", role: "Founder Lamit Club", linkedin: "https://www.linkedin.com/in/mrmanik/" }] },
  { title: "Hack the Hackathons", link: "https://www.youtube.com/watch?v=_cMVANraEvw", speakers: [{ name: "Manik", role: "Founder Lamit Club", linkedin: "https://www.linkedin.com/in/mrmanik/" }] },
  { title: "LinkedIn Masterclass", link: "https://www.youtube.com/watch?v=GNn-QlQ8v3I&t=1s", speakers: [{ name: "Manik", role: "Founder Lamit Club", linkedin: "https://www.linkedin.com/in/mrmanik/" }] },
  { title: "Explore Web3 & Outdefine CGC Benefits", link: "https://www.youtube.com/watch?v=y-U7dgCxCPw&t=4s", speakers: [{ name: "Manik", role: "Founder Lamit Club", linkedin: "https://www.linkedin.com/in/mrmanik/" }, { name: "Shivam Garg", role: "", linkedin: "https://www.linkedin.com/in/meshivamgarg/" }] },
  { title: "Introductory Session of Outdefine CGC Club & Outdefine Community", link: "https://www.youtube.com/watch?v=AOAmKS8fUDw&t=1s", speakers: [{ name: "Manik", role: "Founder Lamit Club", linkedin: "https://www.linkedin.com/in/mrmanik/" }] },
  { title: "A Beginner's Guide to Blockchain with Mohammad Mudassir", link: "https://www.youtube.com/watch?v=foYCjHZMt-s&t=1727s", speakers: [{ name: "Mohammad Mudassir", role: "Junior Support Engineer at Algorand Foundation", linkedin: "https://www.linkedin.com/in/mohammad-mudassir-b788a41ab/" }] },
  { title: "Introduction to Open Source Intelligence (OSINT)", link: "https://www.youtube.com/watch?v=Xd5wwGBcdEQ&t=16s", speakers: [] },
  { title: "Security Talks: Kickstart Your Career as a Highly Paid Ethical Hacker", link: "https://www.youtube.com/watch?v=tn5_3kXJCgg&t=81s", speakers: [] },
];

const INITIAL_SESSIONS = 6;

const CommunityCard = ({ org, role, period, bullets }: {
  org: string; role: string; period?: string; bullets: string[];
}) => (
  <div className="border border-border rounded-lg p-5 sm:p-6 hover:border-foreground/20 transition-colors">
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
      <div>
        <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground">{org}</h3>
        <p className="text-xs text-muted-foreground mt-0.5">{role}{period ? ` · ${period}` : ""}</p>
      </div>
    </div>
    {bullets.length > 0 && (
      <ul className="list-disc list-outside pl-5 space-y-1.5">
        {bullets.map((b, i) => (
          <li key={i} className="text-sm text-muted-foreground leading-relaxed">{b}</li>
        ))}
      </ul>
    )}
  </div>
);

const VolunteerCard = ({ org, role, period, bullets }: { org: string; role: string; period?: string; bullets: string[] }) => (
  <div className="border border-border rounded-lg p-4 sm:p-5 hover:border-foreground/20 transition-colors">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
      <h3 className="font-serif text-base font-semibold text-foreground">{org}</h3>
      <span className="text-xs text-muted-foreground">{role}{period ? ` · ${period}` : ""}</span>
    </div>
    <ul className="list-disc list-outside pl-4 space-y-1">
      {bullets.map((b, i) => (
        <li key={i} className="text-sm text-muted-foreground leading-relaxed">{b}</li>
      ))}
    </ul>
  </div>
);

const SessionRow = ({ title, link, speakers }: {
  title: string;
  link: string;
  speakers: { name: string; role: string; linkedin: string }[];
}) => (
  <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6 border-b border-border py-4">
    <div className="flex-1 min-w-0">
      <h3 className="font-serif text-base font-medium text-foreground leading-snug">{title}</h3>
      <p className="text-sm text-muted-foreground mt-1">
        {speakers.map((s, i) => (
          <span key={i}>
            {i > 0 && ", "}
            <a href={s.linkedin} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground transition-colors">
              {s.name}
            </a>
            <span className="text-xs"> ({s.role})</span>
          </span>
        ))}
      </p>
    </div>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="shrink-0 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
    >
      <Youtube size={16} />
      Watch
    </a>
  </div>
);

const CommunityPage = () => {
  const [showAllSessions, setShowAllSessions] = useState(false);
  const [showAllSpaces, setShowAllSpaces] = useState(false);
  const visibleSessions = showAllSessions ? SESSIONS : SESSIONS.slice(0, INITIAL_SESSIONS);
  const visibleSpaces = showAllSpaces ? TWITTER_SPACES : TWITTER_SPACES.slice(0, INITIAL_SPACES);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeading>Community Contributions</SectionHeading>

          {/* Communities I Built */}
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mt-12 mb-6 text-center">Communities I Built</h3>
          <div className="space-y-5">
            {COMMUNITIES_BUILT.map((c) => (
              <CommunityCard key={c.org} {...c} />
            ))}
          </div>

          {/* Communities in Which I Volunteered */}
          <div className="mt-16">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-6 text-center">Communities in Which I Volunteered</h3>
            <div className="space-y-4">
              {VOLUNTEERING.map((v) => (
                <VolunteerCard key={v.org} {...v} />
              ))}
            </div>
          </div>

          {/* Twitter Spaces */}
          <div className="mt-16">
            <SectionHeading>Twitter Spaces — Hosted & Organised</SectionHeading>
            <p className="text-sm text-muted-foreground text-center mb-8">{TWITTER_SPACES.length} Twitter Spaces on tech, careers, Web3, community building, and more.</p>
            <div className="space-y-3">
              {visibleSpaces.map((space) => (
                <a
                  key={space.link}
                  href={space.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-lg border border-border hover:border-primary/40 hover:bg-accent/40 transition-colors group block"
                >
                  <Twitter className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{space.title}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-sm text-muted-foreground">
                      {space.speakers.map((sp) => (
                        <span key={sp.name}>
                          {sp.name}{sp.role ? ` · ${sp.role}` : ""}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
            {!showAllSpaces && TWITTER_SPACES.length > INITIAL_SPACES && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowAllSpaces(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
                >
                  See All {TWITTER_SPACES.length} Twitter Spaces
                </button>
              </div>
            )}
          </div>

          {/* Sessions */}
          <div className="mt-16">
            <SectionHeading>Sessions Organised & Hosted</SectionHeading>
            <p className="text-sm text-muted-foreground text-center mb-8">{SESSIONS.length} sessions featuring speakers from Google, Amazon, Microsoft, Uber, Salesforce, and more.</p>
            <div>
              {visibleSessions.map((s) => (
                <SessionRow key={s.link} {...s} />
              ))}
            </div>
            {!showAllSessions && SESSIONS.length > INITIAL_SESSIONS && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowAllSessions(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
                >
                  See All {SESSIONS.length} Sessions
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CommunityPage;
