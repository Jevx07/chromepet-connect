import CommitteePage from "@/components/ui/CommitteePage";

const AntiDrugs = () => {
  const committeeData = {
    title: "Anti-Drugs Committee",
    overview: "The Anti-Drugs Committee works dedicatedly to promote awareness about the harmful effects of substance abuse and to create a drug-free campus environment. We focus on prevention, education, and rehabilitation to ensure the physical and mental well-being of all students and staff members.",
    objectives: [
      "Create awareness about the dangers of drug abuse",
      "Implement preventive measures against substance abuse",
      "Provide counseling and support to affected individuals",
      "Organize educational programs and workshops",
      "Collaborate with medical professionals for rehabilitation",
      "Maintain a drug-free campus environment"
    ],
    members: [
      {
        name: "Dr. Palaniyappa R",
        designation: "Lecturer Mathematics",
        role: "Chairman",
        phone: "9444190646",
        email: "palaniyappa.gptchr@gmail.com"
      },
      {
        name: "Tamilarasi R",
        designation: "HOD EEE",
        role: "Convener",
        phone: "9445204146",
        email: "tamilarasi.gptchr@gmail.com"
      },
      {
        name: "Anand S",
        designation: "HOD Mechanical",
        role: "Member",
        phone: "7010878240",
        email: "anand.gptchr@gmail.com"
      },
      {
        name: "Medical Officer",
        designation: "Campus Health Center",
        role: "Health Advisor"
      }
    ],
    contacts: [
      {
        type: "phone" as const,
        label: "Anti-Drugs Helpline",
        value: "9444190646"
      },
      {
        type: "email" as const,
        label: "Committee Email",
        value: "antidrugs.gptchr@gmail.com"
      },
      {
        type: "phone" as const,
        label: "Counseling Support",
        value: "9445204146"
      }
    ],
    documents: [
      {
        title: "Anti-Drug Policy",
        description: "Comprehensive policy on substance abuse prevention",
        filename: "anti-drug-policy.pdf"
      },
      {
        title: "Awareness Materials",
        description: "Educational materials about drug abuse prevention",
        filename: "drug-awareness-materials.pdf"
      },
      {
        title: "Counseling Guidelines",
        description: "Guidelines for counseling and rehabilitation support",
        filename: "counseling-guidelines.pdf"
      }
    ]
  };

  return <CommitteePage {...committeeData} />;
};

export default AntiDrugs;