import { stories } from '../content'

export function Stories() {
  return (
    <section className="fq-section fq-wrap" id="stories" aria-labelledby="stories-title">
      <p className="fq-kicker">On the ground</p>
      <h2 id="stories-title">Three Fridays, three different floors.</h2>
      <p className="fq-section-lede">
        These are the kinds of orders Fastquote is built to finish — not
        investor slides, not a generic marketplace.
      </p>
      <ul className="fq-stories">
        {stories.map((story) => (
          <li key={story.title}>
            <p className="fq-kicker">{story.place}</p>
            <h3>{story.title}</h3>
            <p>{story.copy}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
