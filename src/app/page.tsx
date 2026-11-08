import Link from "next/link";
import Image from "next/image";
import { getProjects } from "@/lib/projects";
import { ProjectPreview } from "@/components/Project/Preview";
import { Section } from "@/components/Section";

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
    <main className="home-page">
      <Section full id="about">
        <div className="subgrid col-start-1 md:col-start-2 lg:col-start-2 xl:col-start-3">
          <h1 className="title-hero">
            I make things
            <br />
            better – by{"\u00A0"}
            <i>design</i>
          </h1>

          <p className="text-lead md:col-span-6 lg:col-span-8 xl:col-span-7">
            I work across disciplines because each brings a different way to
            approach an idea. I learn by making, exploring new possibilities and
            using what I discover to make things better.
          </p>
        </div>
      </Section>

      <Section full>
        <div className="subgrid md:col-start-2 lg:col-span-6">
          <h2 className="title-subhead mb-8 lg:col-start-3">Skills</h2>

          <ul className="subgrid gap-y-10">
            {skills.map((skill) => (
              <li key={skill.title} className="subgrid items-center">
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
                  <h3 className="title-heading">{skill.title}</h3>
                  <p className="mt-1">{skill.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="subgrid md:col-start-2 lg:col-span-6">
          <h2 className="title-subhead mb-8 lg:col-start-2">Experience</h2>
        </div>
      </Section>

      <Section full id="best-works">
        <h2 className="title-subhead mb-5 md:col-start-2">Best Works</h2>

        <ul className="subgrid gap-y-10">
          {projects.map((project, index) => (
            <li key={project._meta.path} className="subgrid">
              <ProjectPreview
                project={project}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </li>
          ))}
        </ul>

        <Link
          href="/projects"
          className="text-lead link md:col-start-2 mt-20 inline-block underline"
        >
          All Projects
        </Link>
      </Section>

      <Section full id="contact">
        <h2 className="title-main mb-5 md:col-start-2">Contacts</h2>

        <p className="text-lead md:col-start-2">Coming soon...</p>
      </Section>
    </main>
  );
}
