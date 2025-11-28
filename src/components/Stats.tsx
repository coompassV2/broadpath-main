import AnimatedCounter from "./AnimatedCounter";

const Stats = () => {
  const stats = [
    { value: 5, label: "Projects Completed", suffix: "+" },
    { value: 98, label: "Satisfied Clients", suffix: "%" },
    { value: 45, label: "Prototypes Built", suffix: "+" },
    { value: 15, label: "Years of Experience", suffix: "+" }
  ];
  
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              <p className="text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

