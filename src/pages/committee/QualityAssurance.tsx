import CommitteePage from "@/components/ui/CommitteePage";

const QualityAssurance = () => {
  const committeeData = {
    title: "Internal Quality Assurance Cell (IQAC)",
    overview: "The Internal Quality Assurance Cell (IQAC) is dedicated to maintaining and enhancing the quality of education at our institution. We work systematically to improve academic standards, infrastructure, and overall institutional performance through continuous monitoring, evaluation, and quality enhancement initiatives.",
    objectives: [
      "Develop and maintain quality benchmarks for education",
      "Facilitate continuous improvement in academic standards",
      "Monitor and evaluate institutional performance",
      "Promote innovative teaching and learning methodologies",
      "Enhance infrastructure and learning resources",
      "Foster a culture of excellence and quality consciousness"
    ],
    members: [
      {
        name: "Senthil Kumaran S",
        designation: "Principal",
        role: "Chairperson",
        phone: "044-22650765",
        email: "principal.gptchr@gmail.com"
      },
      {
        name: "Sridhar P",
        designation: "HOD Computer Engineering",
        role: "Coordinator",
        phone: "9444359441",
        email: "sridhar.gptchr@gmail.com"
      },
      {
        name: "All HODs",
        designation: "Department Heads",
        role: "Members"
      },
      {
        name: "Industry Expert",
        designation: "External Expert",
        role: "External Member"
      }
    ],
    contacts: [
      {
        type: "phone" as const,
        label: "IQAC Office",
        value: "044-22650765"
      },
      {
        type: "email" as const,
        label: "Committee Email",
        value: "iqac.gptchr@gmail.com"
      },
      {
        type: "phone" as const,
        label: "Coordinator",
        value: "9444359441"
      }
    ],
    documents: [
      {
        title: "Quality Policy",
        description: "Institutional quality policy and framework",
        filename: "quality-policy.pdf"
      },
      {
        title: "IQAC Guidelines",
        description: "IQAC operational guidelines and procedures",
        filename: "iqac-guidelines.pdf"
      },
      {
        title: "Quality Improvement Plan",
        description: "Strategic plan for quality enhancement initiatives",
        filename: "quality-improvement-plan.pdf"
      }
    ]
  };

  return <CommitteePage {...committeeData} />;
};

export default QualityAssurance;