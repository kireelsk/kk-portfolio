import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Some Page",
};

export default function SomeReels() {
  return (
    <main className="some-page">
      <Section full>
        <h1 className="title-main">Some page</h1>
      </Section>
    </main>
  );
}
