type MarketingSubpageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function MarketingSubpageHero({ eyebrow, title, subtitle }: MarketingSubpageHeroProps) {
  return (
    <section className="subpage-hero">
      <div className="home-container subpage-hero__inner">
        {eyebrow ? <p className="subpage-hero__eyebrow">{eyebrow}</p> : null}
        <h1 className="subpage-hero__title">{title}</h1>
        {subtitle ? <p className="subpage-hero__subtitle">{subtitle}</p> : null}
      </div>
    </section>
  );
}
