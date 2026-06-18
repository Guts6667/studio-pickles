import Image from "next/image";

export default function OurServices({ title, services }) {
  const heroService = services[0];

  return (
    <section className="page-shell grid gap-3 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="section-frame flex flex-col gap-10 p-6 lg:p-8">
        <span className="eyebrow">[{title}]</span>
        <div className="flex flex-col gap-5">
          {services.map((service) => (
            <div key={service.key} className="flex flex-col gap-2 border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
              <h2 className="text-2xl leading-tight lg:text-4xl">{service.title}</h2>
              <p className="body-muted max-w-2xl text-sm leading-7">
                {service.intro}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="section-frame relative min-h-[380px] overflow-hidden">
        <Image
          src={heroService.image}
          alt={heroService.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/65" />
      </div>
    </section>
  );
}
