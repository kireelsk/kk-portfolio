import Link from "next/link";
import Image from "next/image";

import { getProjects } from "@/lib/projects";

import { ProjectPreview } from "@/components/Project/Preview";
import { Section } from "@/components/Section";

export default function Home() {
  const skills = [
    {
      title: "First Skill",
      description: "A brief explanation of the first area of expertise.",
      image: "/media/home/skills/skill-image.webp",
    },
    {
      title: "Second Skill",
      description: "A short overview of another creative discipline.",
      image: "/media/home/skills/skill-image.webp",
    },
    {
      title: "Third Skill",
      description: "A few words describing an additional capability.",
      image: "/media/home/skills/skill-image.webp",
    },
  ];

  const projects = getProjects("featured");

  return (
    <main className="home-page">
      <Section full id="about">
        <div className="subgrid col-start-1 md:col-start-2 lg:col-start-2">
          {/* prettier-ignore */}
          <h1 className="title-hero">
            A <span className="title-accent">giant</span> <br className="sm:hidden" /> hero <br className="hidden md:block" /> title –<br className="sm:hidden" /> for <span className="title-accent">attention</span>
          </h1>

          <p className="text-lead md:col-span-6 lg:col-span-8 xl:col-span-7">
            This is an introductory paragraph. It provides a little more
            context, supports the main headline, and gives visitors a clear idea
            of what this website is about.
          </p>
        </div>
      </Section>

      <Section full>
        <div className="subgrid md:col-start-2 lg:col-span-6">
          <h2 className="title-subhead mb-8 lg:col-start-3">Skills</h2>

          <ul className="subgrid gap-y-10">
            {skills.map((skill, index) => (
              <li key={skill.title} className="subgrid items-center">
                <div className="relative col-span-1 aspect-square md:col-span-2 lg:col-span-2">
                  <Image
                    src={skill.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 16vw, (min-width: 768px) 36vw, 46vw"
                    className="object-contain"
                    loading={index === 0 ? "eager" : "lazy"}
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

      <Section full id="selected-works">
        <h2 className="title-subhead mb-5 md:col-start-2">Selected Works</h2>

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
          Explore all projects
        </Link>
      </Section>

      <Section full id="contact">
        <h2 className="title-main mb-5 md:col-start-2">Contacts</h2>

        <p className="text-lead md:col-start-2">Coming soon...</p>
      </Section>
    </main>
  );
}
