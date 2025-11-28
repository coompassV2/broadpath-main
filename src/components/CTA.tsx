import Marquee from "./Marquee";

const CTA = () => {
  const marqueeItems = ["Let's collaborate", "Start a project", "Get in touch", "Work with us"];
  
  return (
    <section className="py-24 relative overflow-hidden">
      <Marquee items={marqueeItems} />
    </section>
  );
};

export default CTA;

