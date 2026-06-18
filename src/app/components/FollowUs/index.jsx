import SocialItem from "../SocialItem";

export default function FollowUs({ title, marquee, socialItems }) {
  const repeatedTitle = marquee.repeat(12);

  return (
    <section className="page-shell flex flex-col gap-8 overflow-hidden">
      <div className="relative">
        <p className="whitespace-nowrap text-[28px] uppercase tracking-[0.12em] text-white/18 lg:text-[44px]">
          {repeatedTitle}
        </p>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </div>
      <div className="flex flex-col gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10">
        {socialItems.map((item, index) => (
          <SocialItem key={`${item.name}-${index}`} name={item.name} link={item.link} />
        ))}
      </div>
    </section>
  );
}
