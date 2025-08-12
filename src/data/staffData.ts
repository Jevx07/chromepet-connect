export interface StaffMember {
  name: string;
  designation: string;
  department: string;
  qualification: string;
  image: string;
  email: string;
  phone: string;
}

export interface StaffData {
  [key: string]: StaffMember[];
}

export const staffData: StaffData = {
  "basic-engineering": [
    {
      name: "Senthil Kumaran.S",
      designation: "Senior Lecturer",
      department: "Department of Physics",
      qualification: "M.Sc., M.Ed., M.Phil",
      image: "/images/staff/senthil_kumar.jpg",
      email: "senthil@gptcchromepet.edu.in",
      phone: "+91 9876543210"
    },
    {
      name: "Thangadurai.C",
      designation: "Physics Lecturer",
      department: "Department of Physics",
      qualification: "M.Sc., M.Ed., M.Phil",
      image: "/images/staff/Thangadurai.jpg",
      email: "thangadurai@gptcchromepet.edu.in",
      phone: "+91 9876543211"
    },
    {
      name: "Dr.Palaniyappa .R",
      designation: "Mathematics Lecturer",
      department: "Department of Mathematics",
      qualification: "M.Sc., M.Phil, Ph.D",
      image: "/images/staff/Dr.Palaniyappa.jpg",
      email: "palaniyappa@gptcchromepet.edu.in",
      phone: "+91 9876543212"
    },
    {
      name: "Vijila Mary.R",
      designation: "Mathematics Lecturer",
      department: "Department of Mathematics",
      qualification: "M.Sc, M.Ed., M.Phil",
      image: "/images/staff/Vijila Mary.jpg",
      email: "vijila@gptcchromepet.edu.in",
      phone: "+91 9876543213"
    },
    {
      name: "Gnanasekaran .P",
      designation: "Chemistry Lecturer",
      department: "Department of Chemistry",
      qualification: "M.Sc., B.Ed.,M.Phil",
      image: "/images/staff/Gnanasekaran.png",
      email: "gnanasekaran@gptcchromepet.edu.in",
      phone: "+91 9876543214"
    },
    {
      name: "Aruna.M",
      designation: "Chemistry Lecturer",
      department: "Department of Chemistry",
      qualification: "M.Sc, M.Phil",
      image: "/images/staff/Aruna.jpg",
      email: "aruna@gptcchromepet.edu.in",
      phone: "+91 9876543215"
    },
    {
      name: "Raja Rajeswari.V",
      designation: "Chemistry Lecturer",
      department: "Department of Chemistry",
      qualification: "M.Sc, M.Phil",
      image: "/images/staff/Raja Rajeswari.jpg",
      email: "raja@gptcchromepet.edu.in",
      phone: "+91 9876543216"
    },
    {
      name: "Sivagami .N",
      designation: "Lab Attender - I/0",
      department: "Basic Engineering",
      qualification: "H.S.C+M.A(Distance education) + B.Lib.",
      image: "/images/staff/Sivagami.jpg",
      email: "sivagami@gptcchromepet.edu.in",
      phone: "+91 9876543217"
    }
  ],
  "computer-technology": [
    {
      name: "Sridhar.P",
      designation: "Head Of the Department",
      department: "Computer Technology",
      qualification: "M.E.",
      image: "/images/staff/Sridhar.P.png",
      email: "sridhar@gptcchromepet.edu.in",
      phone: "+91 9876543218"
    },
    {
      name: "Kavitha.B",
      designation: "Lecturer",
      department: "Computer Technology",
      qualification: "M.E.",
      image: "/images/staff/Kavitha.B.jpg",
      email: "kavitha@gptcchromepet.edu.in",
      phone: "+91 9876543219"
    },
    {
      name: "Manga.V",
      designation: "Lecturer",
      department: "Computer Technology",
      qualification: "M.E.",
      image: "/images/staff/Manga.V.jpg",
      email: "manga@gptcchromepet.edu.in",
      phone: "+91 9876543220"
    },
    {
      name: "Juliet Thessalonica.D",
      designation: "Lecturer",
      department: "Computer Technology",
      qualification: "M.E.",
      image: "/images/staff/Juliet Thessalonica.D.jpg",
      email: "juliet@gptcchromepet.edu.in",
      phone: "+91 9876543221"
    },
    {
      name: "Priya.V",
      designation: "Lecturer",
      department: "Computer Technology",
      qualification: "M.E.",
      image: "/images/staff/Priya.V.jpg",
      email: "priya@gptcchromepet.edu.in",
      phone: "+91 9876543222"
    },
    {
      name: "Vairam.M",
      designation: "ASST.WORKSHOP INSTRUCTOR",
      department: "Computer Technology",
      qualification: "I.T.I & NTC NATC",
      image: "/images/staff/vairam.jpg",
      email: "vairam@gptcchromepet.edu.in",
      phone: "+91 9876543223"
    }
  ],
  "electrical-electronics": [
    {
      name: "Tamilarasi.R",
      designation: "Lecturer",
      department: "Electrical & Electronics",
      qualification: "M.E.",
      image: "/images/staff/Tamilarasi.R.jpg",
      email: "tamilarasi@gptcchromepet.edu.in",
      phone: "+91 9876543224"
    },
    {
      name: "Rajakumari.A",
      designation: "Lecturer",
      department: "Electrical & Electronics",
      qualification: "B.E.",
      image: "/images/staff/Rajakumari.A.jpg",
      email: "rajakumari@gptcchromepet.edu.in",
      phone: "+91 9876543225"
    },
    {
      name: "Singaram.T",
      designation: "LABTECH",
      department: "Electrical & Electronics",
      qualification: "I.T.I & NTC NATC, M.E",
      image: "/images/staff/Singaram.T.jpg",
      email: "singaram@gptcchromepet.edu.in",
      phone: "+91 9876543226"
    }
  ],
  "electronics-communication": [
    {
      name: "Mary Josephine Caroline.R",
      designation: "Head Of the Department",
      department: "Electronics & Communication",
      qualification: "M.E",
      image: "/images/staff/Mary Josephine Caroline.R.jpg",
      email: "mary@gptcchromepet.edu.in",
      phone: "+91 9876543227"
    },
    {
      name: "Thangavelu.S",
      designation: "Lecturer",
      department: "Electronics & Communication",
      qualification: "M.E.",
      image: "/images/staff/Thangavelu.S.jpg",
      email: "thangavelu@gptcchromepet.edu.in",
      phone: "+91 9876543228"
    },
    {
      name: "Arulmozhi Vijaya Banu.N",
      designation: "Lecturer",
      department: "Electronics & Communication",
      qualification: "M.E.",
      image: "/images/staff/Arulmozhi Vijaya Banu.N.jpg",
      email: "arulmozhi@gptcchromepet.edu.in",
      phone: "+91 9876543229"
    },
    {
      name: "Kavitha Sridhar.B",
      designation: "Lecturer",
      department: "Electronics & Communication",
      qualification: "M.E",
      image: "/images/staff/Kavitha Sridhar.B.jpg",
      email: "kavithasridhar@gptcchromepet.edu.in",
      phone: "+91 9876543230"
    },
    {
      name: "Sagaya Arockiaraj.X",
      designation: "LAB TECH",
      department: "Electronics & Communication",
      qualification: "I.T.I & NTC NATC, B.E",
      image: "/images/staff/Sagaya Arockiaraj.X.jpg",
      email: "sagaya@gptcchromepet.edu.in",
      phone: "+91 9876543231"
    }
  ],
  "mechanical-engineering": [
    {
      name: "Venkatesan .M",
      designation: "Lecturer",
      department: "Mechanical Engineering",
      qualification: "M.E",
      image: "/images/staff/Venkatesan .M.jpg",
      email: "venkatesan@gptcchromepet.edu.in",
      phone: "+91 9876543232"
    },
    {
      name: "Anand .S",
      designation: "Lecturer",
      department: "Mechanical Engineering",
      qualification: "M.E.",
      image: "/images/staff/Anand .S.jpg",
      email: "anand@gptcchromepet.edu.in",
      phone: "+91 9876543233"
    },
    {
      name: "Durairaj .J",
      designation: "SKILLED ASST - GR I",
      department: "Mechanical Engineering",
      qualification: "I.T.I & NTC NATC",
      image: "/images/staff/Durairaj .J.png",
      email: "durairaj@gptcchromepet.edu.in",
      phone: "+91 9876543234"
    },
    {
      name: "John Kennady .S.B",
      designation: "SKILLED ASST - GR I",
      department: "Mechanical Engineering",
      qualification: "I.T.I & NTC NATC & B.A",
      image: "/images/staff/John Kennady .S.B.jpg",
      email: "john@gptcchromepet.edu.in",
      phone: "+91 9876543235"
    },
    {
      name: "Venkatesan .J",
      designation: "FORMAN",
      department: "Mechanical Engineering",
      qualification: "I.T.I & NTC",
      image: "/images/staff/Venkatesan .J.jpg",
      email: "venkatesanj@gptcchromepet.edu.in",
      phone: "+91 9876543236"
    }
  ],
  "office": [
    {
      name: "NASER .S",
      designation: "JR. ASST",
      department: "Office",
      qualification: "B.B.A",
      image: "/images/staff/Naser.s.jpg",
      email: "naser@gptcchromepet.edu.in",
      phone: "+91 9876543237"
    }
  ]
};