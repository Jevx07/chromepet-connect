import CommitteePage from "@/components/ui/CommitteePage";

const WomenEmpowerment = () => {
  const committeeData = {
    title: "Women Empowerment Committee (WEC)",
    overview: "The Women Empowerment Committee (WEC) is dedicated to promoting gender equality, women's rights, and empowerment initiatives within our institution. We strive to create an inclusive environment that supports the personal and professional development of women students and faculty members.",
    objectives: [
      "Promote gender equality and women's rights",
      "Support women's professional and personal development",
      "Address gender-specific issues and concerns",
      "Organize empowerment programs and workshops",
      "Provide mentorship and career guidance",
      "Create awareness about women's safety and security"
    ],
    members: [
      {
        name: "Tamilarasi R",
        designation: "HOD EEE",
        role: "Chairperson",
        phone: "9445204146",
        email: "tamilarasi.gptchr@gmail.com"
      },
      {
        name: "Rajarajeshwari V",
        designation: "Lecturer Chemistry",
        role: "Convener",
        phone: "9444365032",
        email: "rajarajeshwari.gptchr@gmail.com"
      },
      {
        name: "Kavitha B",
        designation: "Lecturer Computer Engineering",
        role: "Member",
        phone: "9444359441",
        email: "kavitha.gptchr@gmail.com"
      },
      {
        name: "Women Student Representative",
        designation: "Student Council",
        role: "Student Member"
      }
    ],
    contacts: [
      {
        type: "phone" as const,
        label: "WEC Helpline",
        value: "9445204146"
      },
      {
        type: "email" as const,
        label: "Committee Email",
        value: "wec.gptchr@gmail.com"
      },
      {
        type: "phone" as const,
        label: "Women Support",
        value: "9444365032"
      }
    ],
    documents: [
      {
        title: "Women Empowerment Policy",
        description: "Policy framework for women's empowerment initiatives",
        filename: "women-empowerment-policy.pdf"
      },
      {
        title: "Safety Guidelines",
        description: "Safety and security guidelines for women",
        filename: "women-safety-guidelines.pdf"
      },
      {
        title: "Career Development Resources",
        description: "Resources for women's career development and growth",
        filename: "career-development-resources.pdf"
      }
    ]
  };

  return <CommitteePage {...committeeData} />;
};

export default WomenEmpowerment;