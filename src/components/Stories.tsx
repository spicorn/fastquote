import { stories } from "../content";

export function Stories() {
  return (
    <section
      className="fq-section fq-wrap"
      id="stories"
      aria-labelledby="stories-title"
    >
      <div className="fq-stories-head">
        <p className="fq-kicker">On the ground</p>
        <h2 id="stories-title">Three Fridays, three different floors.</h2>
        <p className="fq-section-lede">
          Closed demand on a named Stock In Unit a lodge kitchen, a clinic
          floor, a mill. Same product line, three different Fridays.
        </p>
      </div>

      <ul className="fq-stories">
        {stories.map((story) => (
          <li key={story.id}>
            <article
              className="fq-ticket"
              aria-labelledby={`${story.id}-title`}
            >
              <header className="fq-ticket__top">
                <p className="fq-ticket__place">{story.place}</p>
                <p className="fq-ticket__status">{story.result}</p>
              </header>
              <p className="fq-ticket__ref">{story.ref}</p>
              <h3 id={`${story.id}-title`}>{story.product}</h3>
              <p className="fq-ticket__extra">{story.extra}</p>
              <p className="fq-ticket__copy">{story.copy}</p>
              <dl className="fq-ticket__stats">
                {story.stats.map((stat) => (
                  <div key={stat.label}>
                    <dt>{stat.label}</dt>
                    <dd>{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
