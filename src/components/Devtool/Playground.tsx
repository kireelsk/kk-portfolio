import { Section } from "../Section";

export function Playground() {
  return (
    <main className="devtool-playground site-container pt-30">
      <Section id="about">
        <div className="subgrid col-start-1 md:col-start-2 lg:col-start-2 gap-y-6">
          {/* prettier-ignore */}
          <p className="text-lead col-span-5">
            This is an introductory paragraph. It provides a little more
            context, supports the main headline, and gives visitors a clear idea
            of what this website is about. This is an introductory paragraph.
          </p>

          <p className="text-body col-span-5 pt-2">
            Develop a distinctive identity and mobile experience for a private
            communication concept. The challenge was to combine expressive brand
            imagery with a calm, personal interface that feels effortless to
            use.
          </p>

          <h1 className="title-hero">
            A <span className="title-accent">giant</span>{" "}
            <br className="sm:hidden" /> hero <br className="hidden md:block" />{" "}
            title –<br className="sm:hidden" /> for{" "}
            <span className="title-accent">attention</span>
          </h1>

          <p className="text-lead md:col-span-6 lg:col-span-8 xl:col-span-7">
            This is an introductory paragraph. It provides a little more
            context, supports the main headline, and gives visitors a clear idea
            of what this website is about.
          </p>
        </div>
      </Section>

      <Section full className="gap-y-12">
        <div className="space-y-2 lg:col-span-3 lg:col-start-6">
          <p className="title-eyebrow">What is this?</p>
          <p className="text-body">
            Social and Communication, iOS app
            <br />
            May, 2026
          </p>
        </div>

        <div className="space-y-2 lg:col-span-3 lg:col-start-9">
          <p className="title-eyebrow">Services:</p>
          <p className="text-body">
            Naming / Brand Identity / UI/UX / Advertising / Art Direction
          </p>
        </div>

        <div className="space-y-2 lg:col-span-6 lg:col-start-6">
          <p className="title-eyebrow">Task</p>
          <p className="text-body">
            Develop a distinctive identity and mobile experience for a private
            communication concept. The challenge was to combine expressive brand
            imagery with a calm, personal interface that feels effortless to
            use.
          </p>
        </div>
      </Section>

      <Section className="gap-y-12">
        <div className="my-10 lg:col-span-6 lg:col-start-2">
          <h1 className="title-main">
            Objects made of light
            <br />
            and shadow
          </h1>
          <p className="text-lead">
            Exploring form, function, and visual expression through thoughtful
            design and experimentation.
          </p>
        </div>

        <div className="my-10 lg:col-span-6 lg:col-start-2">
          <h2 className="title-heading">A different perspective</h2>
          <p className="text-body">
            Every project begins with a question. Through research, exploration,
            and iteration, simple ideas develop into meaningful visual
            experiences.
          </p>
        </div>

        <div className="my-10 lg:col-span-6 lg:col-start-2">
          <h3 className="title-subhead">Attention to detail</h3>
          <p className="text-body">
            Typography, composition, rhythm, and proportion shape the way we
            perceive and interact with the world around us.
          </p>
          <p className="text-body">
            Every project begins with a question. Through research, exploration,
            and iteration, simple ideas develop into meaningful visual
            experiences.
          </p>
        </div>
      </Section>
    </main>
  );
}
