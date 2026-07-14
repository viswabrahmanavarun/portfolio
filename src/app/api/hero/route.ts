import { NextResponse } from "next/server";

export async function GET() {
  // This could be replaced with a call to a database or CMS in the future.
  const heroData = {
    name: "Varun Viswabrahmana",
    roles: ["Software Engineer", "Full Stack Developer"],
    description:
      "I design and develop scalable full-stack applications using Next.js, TypeScript, and Node.js. I focus on building high-performance, maintainable systems with clean UI/UX and robust backend architectures. Passionate about solving real-world problems through efficient, user-centric software solutions.",
    buttonText: "View Projects",
    buttonLink: "#projects",
    techIcons: [
      { iconKey: "SiJavascript", className: "top-20 left-16 text-yellow-400" },
      { iconKey: "SiReact", className: "top-40 right-24 text-cyan-400" },
      { iconKey: "SiNextdotjs", className: "top-16 right-1/2 text-black/70" },
      { iconKey: "SiHtml5", className: "bottom-32 left-24 text-orange-500" },
      { iconKey: "SiCss3", className: "bottom-24 right-40 text-blue-500" },
      { iconKey: "SiTailwindcss", className: "top-1/2 left-10 text-sky-400" },
      { iconKey: "SiNodedotjs", className: "top-1/3 left-1/2 text-green-500" },
      { iconKey: "SiExpress", className: "bottom-1/3 right-1/3 text-gray-700" },
      { iconKey: "SiMongodb", className: "top-24 left-1/3 text-green-600" },
      { iconKey: "SiMysql", className: "bottom-16 left-1/4 text-blue-600" },
      { iconKey: "SiPostgresql", className: "top-2/3 right-16 text-indigo-600" },
      { iconKey: "SiDocker", className: "top-1/2 right-20 text-sky-500" },
      { iconKey: "SiGit", className: "bottom-1/2 left-20 text-red-500" },
      { iconKey: "SiCypress", className: "top-1/4 left-1/4 text-green-700" },
      { iconKey: "SiSelenium", className: "bottom-1/4 right-1/4 text-green-600" },
      { iconKey: "SiPython", className: "top-3/4 left-1/2 text-yellow-500" },
      { iconKey: "SiTensorflow", className: "bottom-3/4 right-1/3 text-orange-500" },
    ],
  };

  return NextResponse.json(heroData);
}
