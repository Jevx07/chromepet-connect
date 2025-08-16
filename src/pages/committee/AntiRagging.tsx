import CommitteePage from "@/components/ui/CommitteePage";

const AntiRagging = () => {
  const committeeData = {
    title: "Anti-Ragging Committee",
    overview: "The Anti-Ragging Committee is constituted to ensure a safe and secure campus environment free from any form of ragging or harassment. We are committed to maintaining the dignity and well-being of all students by implementing strict anti-ragging policies and providing a supportive educational atmosphere.",
    objectives: [
      "Prevent any form of ragging or harassment on campus",
      "Ensure immediate action against ragging incidents",
      "Create awareness about the legal consequences of ragging",
      "Provide counseling and support to affected students",
      "Maintain a safe and friendly campus environment",
      "Implement disciplinary measures as per UGC guidelines"
    ],
    members: [
      {
        name: "Senthil Kumaran S",
        designation: "Principal",
        role: "Chairman",
        phone: "044-22650765",
        email: "principal.gptchr@gmail.com"
      },
      {
        name: "Sridhar P",
        designation: "HOD Computer Engineering",
        role: "Convener",
        phone: "9444359441",
        email: "sridhar.gptchr@gmail.com"
      },
      {
        name: "Thangavelu S",
        designation: "HOD ECE",
        role: "Member",
        phone: "9444365032",
        email: "thangavelu.gptchr@gmail.com"
      },
      {
        name: "Student Representative",
        designation: "Final Year Student",
        role: "Student Member"
      }
    ],
    contacts: [
      {
        type: "phone" as const,
        label: "Anti-Ragging Helpline",
        value: "044-22650765"
      },
      {
        type: "email" as const,
        label: "Committee Email",
        value: "antiragging.gptchr@gmail.com"
      },
      {
        type: "phone" as const,
        label: "Emergency Contact",
        value: "9444359441"
      }
    ],
    documents: [
      {
        title: "Anti-Ragging Policy Guidelines",
        description: "Complete guidelines and policies regarding anti-ragging measures",
        filename: "anti-ragging-policy.pdf"
      },
      {
        title: "Complaint Form",
        description: "Official form for reporting ragging incidents",
        filename: "ragging-complaint-form.pdf"
      },
      {
        title: "UGC Anti-Ragging Regulations",
        description: "University Grants Commission regulations on ragging",
        filename: "ugc-anti-ragging-regulations.pdf"
      }
    ]
  };

  return <CommitteePage {...committeeData} />;
};

export default AntiRagging;