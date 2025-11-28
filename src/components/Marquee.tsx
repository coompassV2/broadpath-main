import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  reverse?: boolean;
  className?: string;
}

const Marquee = ({ items, reverse = false, className }: MarqueeProps) => {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        className={cn(
          "flex flex-nowrap min-w-full items-center justify-around gap-4 py-6",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
      >
        {items.concat(items).map((item, i) => (
          <span
            key={i}
            className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tighter whitespace-nowrap mx-4 text-white"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;

