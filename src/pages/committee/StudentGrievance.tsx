import CommitteePage from "@/components/ui/CommitteePage";

const StudentGrievance = () => {
  const committeeData = {
    title: "Student Grievance Redressal Committee (SGRC)",
    overview: "The Student Grievance Redressal Committee (SGRC) serves as a platform for students to voice their concerns and seek resolution for academic and administrative issues. We are committed to ensuring transparent, fair, and timely resolution of all student grievances while maintaining the highest standards of educational excellence.",
    objectives: [
      "Provide a transparent grievance redressal mechanism",
      "Ensure timely resolution of student complaints",
      "Address academic and administrative concerns effectively",
      "Maintain student welfare and satisfaction",
      "Improve communication between students and administration",
      "Promote a harmonious learning environment"
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
        name: "Thangavelu S",
        designation: "HOD ECE",
        role: "Convener",
        phone: "9444365032",
        email: "thangavelu.gptchr@gmail.com"
      },
      {
        name: "Kavitha Sridhar B",
        designation: "Lecturer ECE",
        role: "Member",
        phone: "9444359441",
        email: "kavithasridhar.gptchr@gmail.com"
      },
      {
        name: "Student Council President",
        designation: "Student Representative",
        role: "Student Member"
      }
    ],
    contacts: [
      {
        type: "phone" as const,
        label: "Grievance Helpline",
        value: "044-22650765"
      },
      {
        type: "email" as const,
        label: "Committee Email",
        value: "grievance.gptchr@gmail.com"
      },
      {
        type: "phone" as const,
        label: "Student Support",
        value: "9444365032"
      }
    ],
    documents: [
      {
        title: "Grievance Procedure",
        description: "Step-by-step procedure for filing grievances",
        filename: "grievance-procedure.pdf"
      },
      {
        title: "Grievance Form",
        description: "Official form for submitting student grievances",
        filename: "student-grievance-form.pdf"
      },
      {
        title: "Resolution Guidelines",
        description: "Guidelines for grievance resolution and timelines",
        filename: "resolution-guidelines.pdf"
      }
    ]
  };

  return <CommitteePage {...committeeData} />;
};

export default StudentGrievance;