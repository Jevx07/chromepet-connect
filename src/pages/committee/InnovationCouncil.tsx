import CommitteePage from "@/components/ui/CommitteePage";

const InnovationCouncil = () => {
  const committeeData = {
    title: "Institution's Innovation Council (IIC)",
    overview: "The Institution's Innovation Council (IIC) is established to foster innovation and entrepreneurship among students and faculty. We aim to create an ecosystem that promotes creative thinking, technological advancement, and startup culture while bridging the gap between academia and industry.",
    objectives: [
      "Promote innovation and entrepreneurship culture",
      "Support startup initiatives and business incubation",
      "Facilitate industry-academia collaboration",
      "Organize innovation challenges and competitions",
      "Provide mentorship for innovative projects",
      "Create awareness about intellectual property rights"
    ],
    members: [
      {
        name: "Anand S",
        designation: "HOD Mechanical",
        role: "President",
        phone: "7010878240",
        email: "anand.gptchr@gmail.com"
      },
      {
        name: "Juliet Thessalonica",
        designation: "Lecturer Computer Engineering",
        role: "Convener",
        phone: "9444365032",
        email: "juliet.gptchr@gmail.com"
      },
      {
        name: "Priya V",
        designation: "Lecturer Computer Engineering",
        role: "Innovation Ambassador",
        phone: "9444190646",
        email: "priya.gptchr@gmail.com"
      },
      {
        name: "Industry Mentor",
        designation: "Startup Founder",
        role: "External Mentor"
      }
    ],
    contacts: [
      {
        type: "phone" as const,
        label: "IIC Office",
        value: "7010878240"
      },
      {
        type: "email" as const,
        label: "Innovation Email",
        value: "innovation.gptchr@gmail.com"
      },
      {
        type: "phone" as const,
        label: "Innovation Support",
        value: "9444365032"
      }
    ],
    documents: [
      {
        title: "Innovation Policy",
        description: "Policy framework for innovation and entrepreneurship",
        filename: "innovation-policy.pdf"
      },
      {
        title: "Startup Guidelines",
        description: "Guidelines for student startup initiatives",
        filename: "startup-guidelines.pdf"
      },
      {
        title: "Project Proposal Format",
        description: "Format for submitting innovative project proposals",
        filename: "project-proposal-format.pdf"
      }
    ]
  };

  return <CommitteePage {...committeeData} />;
};

export default InnovationCouncil;