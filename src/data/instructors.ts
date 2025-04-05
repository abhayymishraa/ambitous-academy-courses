
export interface Instructor {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  specializations: string[];
  featured?: boolean;
}

export const instructors: Instructor[] = [
  {
    id: "eleanor-bennett",
    name: "Prof. Eleanor Bennett",
    title: "Constitutional Law Professor",
    bio: "Professor Bennett is a renowned constitutional scholar with over 20 years of experience in legal education. She served as a clerk for Justice Sonya Sotomayor and has published extensively on constitutional interpretation and judicial decision-making. Her approach combines rigorous theoretical analysis with practical insights from her litigation experience.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    specializations: ["Constitutional Law", "Civil Liberties", "Judicial Process"],
    featured: true
  },
  {
    id: "james-harrison",
    name: "Dr. James Harrison",
    title: "Corporate Law Expert & Former General Counsel",
    bio: "Dr. Harrison brings decades of corporate law experience to his teaching. As former General Counsel for a Fortune 500 company, he offers students insights into the practical challenges of corporate governance, compliance, and transaction management. His research focuses on the evolving role of corporate counsel in modern business environments.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    specializations: ["Corporate Governance", "Mergers & Acquisitions", "Securities Regulation"],
    featured: true
  },
  {
    id: "michael-rodriguez",
    name: "Atty. Michael Rodriguez",
    title: "Criminal Defense Attorney",
    bio: "Attorney Rodriguez is a nationally recognized criminal defense lawyer with over 15 years of experience handling high-profile cases. A former public defender, he now leads his own criminal defense practice while sharing his expertise with the next generation of trial attorneys. His courses emphasize practical skills and ethical advocacy.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    specializations: ["Criminal Procedure", "Trial Advocacy", "Sentencing Law"],
    featured: true
  },
  {
    id: "sarah-lee",
    name: "Prof. Sarah Lee",
    title: "Intellectual Property Specialist",
    bio: "Professor Lee is a leading expert in intellectual property law, with particular focus on digital technologies and creative industries. She previously practiced at a top IP firm in Silicon Valley and holds both a law degree and a master's in computer science. Her interdisciplinary approach helps students understand both legal and technical aspects of IP protection.",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    specializations: ["Patent Law", "Copyright", "Technology Licensing"],
    featured: true
  },
  {
    id: "alex-wong",
    name: "Tech Counsel Alex Wong",
    title: "Legal Technology Consultant",
    bio: "Alex Wong has pioneered the integration of technology into legal practice at several AmLaw 100 firms. He specializes in legal operations optimization, e-discovery management, and the ethical implementation of AI in legal services. His courses help attorneys leverage technology to improve client service and practice efficiency.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    specializations: ["Legal Technology", "E-Discovery", "Practice Management"],
    featured: false
  },
  {
    id: "rachel-green",
    name: "Dr. Rachel Green",
    title: "Environmental Law Professor",
    bio: "Dr. Green combines academic expertise with practical experience in environmental regulation and compliance. She previously served as regional counsel for the EPA and has represented both government agencies and private clients in environmental litigation. Her teaching emphasizes the intersection of science, policy, and law in addressing environmental challenges.",
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    specializations: ["Environmental Regulation", "Climate Change Law", "Natural Resources"],
    featured: false
  }
];
