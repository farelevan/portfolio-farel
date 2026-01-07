export interface Experience {
    id: string;
    role: string;
    company: string;
    companyLogo?: string; // Optional: URL to logo
    period: string;
    description: string;
    skills: string[];
}

export interface Education {
    id: string;
    institution: string;
    logo?: string;
    degree: string;
    field: string;
    period: string;
    description?: string;
}

export interface Certification {
    id: string;
    name: string;
    issuer: string;
    date: string;
    credentialUrl?: string; // Link to verify
    image?: string; // Optional: badge image
}

export const EXPERIENCES: Experience[] = [
    {
        id: "exp-1",
        role: "Frontend Developer",
        company: "Tech StartUp Inc.",
        period: "2023 - Present",
        description: "Leading the frontend development of the main product using Next.js and Tailwind CSS. Improved site performance by 40% and implemented a new design system.",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"]
    },
    {
        id: "exp-2",
        role: "Web Developer Intern",
        company: "Digital Solutions Agency",
        period: "2022 - 2023",
        description: "Collaborated with senior developers to build responsive websites for clients. Assisted in migrating legacy code to modern React hooks.",
        skills: ["HTML", "CSS", "JavaScript", "React", "Git"]
    }
];

export const EDUCATION: Education[] = [
    {
        id: "edu-1",
        institution: "University of Technology",
        degree: "Bachelor of Science",
        field: "Computer Science",
        period: "2020 - 2024",
        description: "Focus on Software Engineering and Artificial Intelligence. GPA: 3.8/4.0. Active member of the Coding Club."
    }
];

export const CERTIFICATIONS: Certification[] = [
    {
        id: "cert-1",
        name: "Meta Frontend Developer Professional Certificate",
        issuer: "Coursera",
        date: "2023",
        credentialUrl: "https://www.coursera.org",
    },
    {
        id: "cert-2",
        name: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2023",
        credentialUrl: "https://aws.amazon.com",
    }
];
