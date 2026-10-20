import Link from "next/link";
import Image from "next/image";
import { getProjects } from "@/lib/projects";
import { ProjectPreview } from "@/components/Project/Preview";

export default function Home() {
  const skills = [
    {
      title: "Graphic Design",
      description: "Visual identities, editorial and print design.",
      image: "/media/home/skills/graphic-design.webp",
    },
    {
      title: "Motion & 3D",
      description: "Animation, 3D graphics, visualization.",
      image: "/media/home/skills/motion-3d.webp",
    },
    {
      title: "Web Design",
      description: "Websites, digital experiences and interfaces.",
      image: "/media/home/skills/web-design.webp",
    },
  ];

  const projects = getProjects("featured");

  return (
    <main className="home-page min-w-0">
      <section id="about" className="site-container content-grid mt-140 mb-40">
        <h1 className="col-span-full mb-10">
          I make things
          <br />
          better – by{"\u00A0"}
          <i>design</i>
        </h1>

        <p className="col-span-full lg:col-span-6">
          I work across disciplines because each brings a different way to
          approach an idea. I learn by making, exploring new possibilities and
          using what I discover to make things better.
        </p>
      </section>

      <section className="site-container content-grid mb-40">
        <div className="col-span-full grid grid-cols-subgrid lg:col-span-6">
          <h2 className="col-span-full mb-8 lg:col-start-3">Skills</h2>

          <ul className="col-span-full grid grid-cols-subgrid gap-y-10">
            {skills.map((skill) => (
              <li
                key={skill.title}
                className="col-span-full grid grid-cols-subgrid items-center"
              >
                <div className="relative col-span-1 aspect-square md:col-span-2 lg:col-span-2">
                  <Image
                    src={skill.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 16vw, (min-width: 768px) 36vw, 46vw"
                    className="object-contain"
                  />
                </div>

                <div className="col-span-3 md:col-span-5 lg:col-span-4">
                  <h3>{skill.title}</h3>
                  <p className="mt-1">{skill.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-full grid grid-cols-subgrid lg:col-span-6">
          <h2 className="col-span-full mb-8 lg:col-start-2">Experience</h2>
        </div>
      </section>

      <section id="best-works" className="site-container content-grid mb-40">
        <h2 className="col-span-full mb-5">Best Works</h2>

        <ul className="col-span-full grid grid-cols-subgrid gap-y-10">
          {projects.map((project, index) => (
            <li
              key={project._meta.path}
              className="col-span-full grid grid-cols-subgrid"
            >
              <ProjectPreview
                project={project}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </li>
          ))}
        </ul>

        <Link
          href="/projects"
          className="col-span-full mt-20 inline-block text-xl text-neutral-500 hover:underline"
        >
          All Projects
        </Link>
      </section>

      <section id="contact" className="site-container content-grid mb-40">
        <h2 className="col-span-full mb-5">Contacts</h2>

        <p className="col-span-full lg:col-span-6">Coming soon...</p>
      </section>
    </main>
  );
}
