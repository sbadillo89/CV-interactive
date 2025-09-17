import type { ProfileData } from './types';

export const locales: Record<'es' | 'en', ProfileData> = {
  es: {
    name: "Sergio Andrés Badillo Bustillo",
    title: "Desarrollador Senior .Net",
    location: "Barranquilla, Colombia",
    email: "ser.badillo@gmail.com",
    linkedin: "https://www.linkedin.com/in/sergio-badillo-bustillo/",
    github: "https://github.com/sbadillo89",
    about: "Soy un desarrollador web apasionado y dedicado con más de 10 años de experiencia en el desarrollo de aplicaciones web y de escritorio. Con capacidad de liderazgo, planificación, diseño e implementación. Me encanta el trabajo en equipo, trabajar con personas de diferentes habilidades y contribuir a la consecución de objetivos. Me considero una persona dinámica y con excelentes habilidades de comunicación.",
    experience: [
      {
        role: "Desarrollador Senior .Net",
        company: "Globant",
        period: "Marzo 2022 - Actualidad",
        description: [
          "Soporte e implementación de nuevas funcionalidades para productos de clientes en industrias como salud, oil & gas y financiamiento de vehículos.",
          "Entrega de soluciones escalables y eficientes utilizando tecnologías como .Net Core 8, C#, AWS, Docker, Terraform y VueJs.",
        ],
      },
      {
        role: "Desarrollador .Net",
        company: "Impexium",
        period: "Julio 2021 - Marzo 2022",
        description: [
          "Soporte y adición de nuevas funcionalidades al producto principal de la compañía usando .Net Framework, C#, Web Forms y SQL Server.",
        ],
      },
      {
        role: "Desarrollador Senior .Net / ReactJs",
        company: "Leantech",
        period: "Junio 2020 - Junio 2021",
        description: [
          "Responsable de la lógica de aplicación del lado del servidor y la integración con el front-end.",
          "Creación de APIs para logística, servicios de web scraping y KPIs de seguimiento de proyectos usando .Net Core 6, NodeJs, ReactJs y Tailwind CSS.",
        ],
      },
       {
        role: "Ingeniero Desarrollador Senior",
        company: "Consware",
        period: "Junio 2018 - Mayo 2020",
        description: [
          "Diseño y desarrollo de arquitectura del lado del cliente y del servidor para soluciones de software.",
          "Desarrollo de aplicaciones web full-stack, incluyendo una aplicación multiplataforma para gestión de combustible y otra para una tienda mayorista.",
        ],
      },
      {
        role: "Desarrollador .Net",
        company: "Almacenes de Compraventa E Jiménez",
        period: "Noviembre 2016 - Junio 2018",
        description: [
          "Desarrollo del nuevo software operativo de la empresa, enfocado en la gestión de ventas.",
          "Creación de integraciones con aplicaciones de terceros usando ASP.Net MVC y C#.",
        ],
      },
      {
        role: "Desarrollador .Net",
        company: "Almacenes de Compraventa Megamas",
        period: "Diciembre 2011 - Noviembre 2016",
        description: [
            "Desarrollo y mantenimiento de aplicaciones para las áreas de operación y gestión de la empresa.",
            "Construcción de módulos para gestión de impresión, liquidación de impuestos e integraciones con software contable usando .Net (C#, Vb.Net).",
        ]
      }
    ],
    education: [
      {
        degree: "Ingeniería de Sistemas",
        institution: "Politécnico de la Costa Atlántica, Barranquilla",
        period: "2016 - 2018",
      },
      {
        degree: "Tecnólogo en Sistemas",
        institution: "Corporacion Universitaria Empresarial de Salamanca (CUES)",
        period: "2007 - 2012",
      },
    ],
    skills: [
      { name: "C#", level: 9, description: "Lenguaje de programación principal para el desarrollo en el ecosistema .NET." },
      { name: ".Net Core", level: 9, description: "Framework moderno y multiplataforma para construir aplicaciones de alto rendimiento." },
      { name: "API Rest", level: 9, description: "Diseño y construcción de servicios web RESTful para la comunicación entre aplicaciones." },
      { name: "SQL Server", level: 9, description: "Gestión y consulta de bases de datos relacionales de Microsoft." },
      { name: "JavaScript", level: 6, description: "Lenguaje fundamental para la interactividad en el desarrollo web front-end." },
      { name: "HTML5 & CSS3", level: 6, description: "Estructuración y estilización de contenido web moderno y responsivo." },
      { name: ".Net Framework", level: 8, description: "Framework tradicional de .NET para la creación de aplicaciones Windows y web." },
      { name: "MVC", level: 8, description: "Patrón de arquitectura para organizar aplicaciones en Modelo-Vista-Controlador." },
      { name: "React.js", level: 5, description: "Biblioteca de JavaScript para construir interfaces de usuario interactivas." },
      { name: "Azure", level: 7, description: "Plataforma en la nube de Microsoft para desplegar y gestionar servicios." },
      { name: "Docker", level: 4, description: "Plataforma de contenedores para construir, distribuir y ejecutar aplicaciones." },
      { name: "Node.js", level: 4, description: "Entorno de ejecución de JavaScript del lado del servidor." },
      { name: "Angular", level: 3, description: "Framework para el desarrollo de aplicaciones a gran escala y nivel empresarial." },
      { name: "VueJs", level: 4, description: "Framework progresivo de JavaScript para construir interfaces de usuario." },
      { name: "AWS", level: 4, description: "Plataforma de Amazon Web Services para servicios en la nube." },
      { name: "SSIS", level: 5, description: "Herramienta de SQL Server para la integración de datos y flujos de trabajo ETL." },
    ],
    languages: [
      { language: "Español", proficiency: "Nativo" },
      { language: "Inglés", proficiency: "Profesional" },
    ],
    sections: {
      about: "Sobre Mí",
      experience: "Experiencia Laboral",
      education: "Educación",
      skills: "Habilidades",
      languages: "Idiomas",
    }
  },
  en: {
    name: "Sergio Andrés Badillo Bustillo",
    title: "Senior .Net Developer",
    location: "Barranquilla, Colombia",
    email: "ser.badillo@gmail.com",
    linkedin: "https://www.linkedin.com/in/sergio-badillo-bustillo/",
    github: "https://github.com/sbadillo89",
    about: "I am a passionate and dedicated web developer with over 10 years of experience developing web and desktop applications. With leadership capacity, planning, design, and implementation skills. I love teamwork, working with different skilled people, and contributing to achieving goals. I consider myself a dynamic person with excellent communication skills.",
    experience: [
      {
        role: "Senior .Net Developer",
        company: "Globant",
        period: "March 2022 - Current",
        description: [
          "Supporting and implementing new functionalities for client products in industries like healthcare, oil & gas, and vehicle financing.",
          "Delivering scalable, efficient solutions using technologies like .Net Core 8, C#, AWS, Docker, Terraform, and VueJs.",
        ],
      },
      {
        role: ".Net Developer",
        company: "Impexium",
        period: "July 2021 - March 2022",
        description: [
          "Supported and added new functionalities to the company's main product using .Net Framework, C#, Web Forms, and SQL Server.",
        ],
      },
      {
        role: "Senior .Net Developer/ReactJs Developer",
        company: "Leantech",
        period: "June 2020 - June 2021",
        description: [
          "Responsible for server-side web application logic and integration with the front-end.",
          "Created APIs for logistics, web scraping services, and project tracking KPIs using .Net Core 6, NodeJs, ReactJs, and Tailwind CSS.",
        ],
      },
       {
        role: "Senior Developer Engineer",
        company: "Consware",
        period: "June 2018 - May 2020",
        description: [
          "Designed and developed client-side and server-side architecture for software solutions.",
          "Developed full-stack web applications, including a multiplatform application for fuel management and another for a wholesale store.",
        ],
      },
      {
        role: ".Net Developer",
        company: "Almacenes de Compraventa E Jiménez",
        period: "November 2016 - June 2018",
        description: [
          "Developed the new operative software for the company, focusing on sales management.",
          "Created integrations with third-party applications using ASP.Net MVC and C#.",
        ],
      },
      {
        role: ".Net Developer",
        company: "Almacenes de Compraventa Megamas",
        period: "December 2011 - November 2016",
        description: [
            "Developed and maintained applications for the company's operation and management areas.",
            "Built modules for printing management, tax settlement, and integrations with accounting software using .Net (C#, Vb.Net).",
        ]
      }
    ],
    education: [
      {
        degree: "System Engineering",
        institution: "Politécnico de la Costa Atlántica, Barranquilla",
        period: "2016 - 2018",
      },
      {
        degree: "System Technologist",
        institution: "Corporacion Universitaria Empresarial de Salamanca (CUES)",
        period: "2007 - 2012",
      },
    ],
    skills: [
      { name: "C#", level: 9, description: "Primary programming language for development in the .NET ecosystem." },
      { name: ".Net Core", level: 9, description: "Modern, cross-platform framework for building high-performance applications." },
      { name: "API Rest", level: 9, description: "Designing and building RESTful web services for application communication." },
      { name: "SQL Server", level: 9, description: "Management and querying of Microsoft's relational databases." },
      { name: "JavaScript", level: 6, description: "Fundamental language for interactivity in front-end web development." },
      { name: "HTML5 & CSS3", level: 6, description: "Structuring and styling modern, responsive web content." },
      { name: ".Net Framework", level: 8, description: "Traditional .NET framework for creating Windows and web applications." },
      { name: "MVC", level: 8, description: "Architectural pattern for organizing applications into Model-View-Controller." },
      { name: "React.js", level: 5, description: "JavaScript library for building interactive user interfaces." },
      { name: "Azure", level: 7, description: "Microsoft's cloud platform for deploying and managing services." },
      { name: "Docker", level: 4, description: "Containerization platform to build, ship, and run applications." },
      { name: "Node.js", level: 4, description: "Server-side JavaScript runtime environment." },
      { name: "Angular", level: 3, description: "Framework for developing large-scale, enterprise-level applications." },
      { name: "VueJs", level: 4, description: "Progressive JavaScript framework for building user interfaces." },
      { name: "AWS", level: 4, description: "Amazon Web Services platform for cloud services." },
      { name: "SSIS", level: 5, description: "SQL Server tool for data integration and ETL workflows." },
    ],
    languages: [
      { language: "Spanish", proficiency: "Native" },
      { language: "English", proficiency: "Professional" },
    ],
    sections: {
      about: "About Me",
      experience: "Work Experience",
      education: "Education",
      skills: "Skills",
      languages: "Languages",
    }
  }
};
