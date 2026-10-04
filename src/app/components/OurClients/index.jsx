import InfiniteTextSlider from "../InfiniteTextSlider";

const motionLabels = {
  fr: { pause: "Mettre en pause le défilement", resume: "Reprendre le défilement" },
  en: { pause: "Pause scrolling", resume: "Resume scrolling" },
  nl: { pause: "Pauzeer de beweging", resume: "Hervat de beweging" },
};

export default function OurClients({ title, intro, clients, locale = "fr" }) {
  const labels = motionLabels[locale] || motionLabels.fr;

  return (
    <section className="page-shell flex flex-col gap-8">
      <div className="flex flex-col gap-4 px-1">
        <h2 className="eyebrow">[{title}]</h2>
        {intro ? (
          <p className="body-muted max-w-3xl text-sm leading-7 lg:text-base">
            {intro}
          </p>
        ) : null}
      </div>

      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02]">
        <InfiniteTextSlider
          clients={clients}
          pauseLabel={labels.pause}
          resumeLabel={labels.resume}
        />
      </div>
    </section>
  );
}
