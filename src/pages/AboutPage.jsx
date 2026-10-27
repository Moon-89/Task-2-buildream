import PageBanner from '../components/PageBanner.jsx';
import SideMenu from '../components/SideMenu.jsx';

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About us" />
      <div className="page-layout">
        <article className="page-main">
          <p>
            “WeBuildDreams” as a construction-related name for a business or website exudes a sense of
            craftsmanship, dedication, and the commitment to realizing the dreams of clients through construction
            projects. The term “We Build” signifies a collaborative effort, emphasizing a partnership between the
            construction professionals and their clients. By incorporating “Dreams,” the name goes beyond the
            physical structures and touches upon the emotional and aspirational aspect of construction. It suggests
            that the construction company is not merely building buildings but is actively engaged in creating
            spaces that fulfill the dreams and visions of its clients.
          </p>
          <img src="/images/service1.jpg" alt="Home construction" />
          <p>
            This name is not only memorable and marketable but also communicates a customer-centric approach,
            making it suitable for a construction business that values both the practical and emotional dimensions
            of its work. “WeBuildDreams” serves as a powerful and positive brand identity, resonating with
            individuals seeking a construction partner that understands and shares in their vision. “WeBuildDreams”
            stands out as a distinctive and evocative name for a construction-focused venture, conveying a profound
            commitment to transforming aspirations into tangible structures. The fusion of “We Build” implies a
            collaborative synergy, emphasizing a collective effort between professionals and clients. Meanwhile, the
            inclusion of “Dreams” adds a unique touch, suggesting that the construction company is not just erecting
            physical edifices but actively participating in the realization of personal dreams and visions. This
            name is more than a mere business identifier; it’s a brand statement, reflecting a dedication to
            creativity, innovation, and the emotional fulfillment associated with constructing spaces that go beyond
            the ordinary. “WeBuildDreams” is not just a construction service; it’s a promise to craft dreamscapes,
            making it a name that captures attention, sparks imagination, and sets the tone for a transformative
            construction experience.
          </p>
        </article>
        <SideMenu />
      </div>
    </>
  );
}
