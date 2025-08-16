import CommitteePage from "@/components/ui/CommitteePage";

const InternalComplaints = () => {
  const committeeData = {
    title: "Internal Complaints Committee (ICC)",
    overview: "The Internal Complaints Committee (ICC) is established to address workplace harassment and create a safe, respectful environment for all members of the college community. We ensure that all complaints are handled with confidentiality, fairness, and in accordance with legal guidelines.",
    objectives: [
      "Address complaints of sexual harassment and workplace misconduct",
      "Ensure a safe and respectful work environment",
      "Provide confidential and fair investigation processes",
      "Implement preventive measures against harassment",
      "Conduct awareness programs on workplace ethics",
      "Maintain strict confidentiality in all proceedings"
    ],
    members: [
      {
        name: "Kavitha B",
        designation: "Lecturer Computer Engineering",
        role: "Presiding Officer",
        phone: "9444359441",
        email: "kavitha.gptchr@gmail.com"
      },
      {
        name: "Aruna M",
        designation: "Lecturer Chemistry",
        role: "Member",
        phone: "9444365032",
        email: "aruna.gptchr@gmail.com"
      },
      {
        name: "External Expert",
        designation: "Legal Advisor",
        role: "External Member"
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
        label: "ICC Helpline",
        value: "9444359441"
      },
      {
        type: "email" as const,
        label: "Confidential Email",
        value: "icc.gptchr@gmail.com"
      },
      {
        type: "phone" as const,
        label: "Emergency Support",
        value: "9444365032"
      }
    ],
    documents: [
      {
        title: "ICC Guidelines",
        description: "Internal Complaints Committee procedures and guidelines",
        filename: "icc-guidelines.pdf"
      },
      {
        title: "Complaint Form",
        description: "Confidential complaint form for harassment cases",
        filename: "harassment-complaint-form.pdf"
      },
      {
        title: "Legal Framework",
        description: "Legal provisions and acts related to workplace harassment",
        filename: "legal-framework.pdf"
      }
    ]
  };

  return <CommitteePage {...committeeData} />;
};

export default InternalComplaints;