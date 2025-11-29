import React from 'react';
import './styles.css';

type TimelineEvent = {
  year: string;
  title: string;
  description: string;
};

type TimelineSection = {
  id: string;
  title: string;
  blurb: string;
  accent: string;
  events: TimelineEvent[];
};

const timelineSections: TimelineSection[] = [
  {
    id: 'cossack-statehood',
    title: 'Cossack Statehood & Early Autonomy',
    blurb:
      'The Cossack Hetmanate rose as a distinct political entity, balancing alliances and partitions between empires.',
    accent: 'var(--accent-cyan)',
    events: [
      {
        year: '1648–1657',
        title: 'Khmelnytsky Uprising',
        description:
          'Cossack-led revolt against the Polish–Lithuanian Commonwealth forms the Hetmanate and seeds a modern Ukrainian polity.',
      },
      {
        year: '1654',
        title: 'Treaty of Pereiaslav',
        description:
          'Cossack leadership swears allegiance to Moscow seeking military aid, altering the Hetmanate’s autonomy balance.',
      },
      {
        year: '1667',
        title: 'Truce of Andrusovo',
        description:
          'Polish–Russian truce divides Ukraine along the Dnipro, deepening Left-Bank vs. Right-Bank trajectories.',
      },
    ],
  },
  {
    id: 'imperial-rule',
    title: 'Imperial Rule & National Awakening',
    blurb:
      'Russian and Habsburg empires absorb Ukrainian lands while cultural and political revival movements emerge.',
    accent: 'var(--accent-amber)',
    events: [
      {
        year: '1775',
        title: 'Destruction of the Zaporizhian Sich',
        description:
          'Catherine II dismantles the Cossack stronghold, ending the Hetmanate’s military-administrative autonomy.',
      },
      {
        year: '1793–1795',
        title: 'Partitions of Poland',
        description:
          'Right-Bank Ukraine is annexed by the Russian Empire, consolidating imperial control over Ukrainian territories.',
      },
      {
        year: '1846–1847',
        title: 'Cyril and Methodius Brotherhood',
        description:
          'Secret Kyiv society promotes Ukrainian-language education and federalist ideas before being suppressed.',
      },
      {
        year: '1863 & 1876',
        title: 'Language Restrictions',
        description:
          'The Valuev Circular and Ems Ukaz curb Ukrainian-language print and schooling, intensifying Russification.',
      },
      {
        year: '1890',
        title: 'First Ukrainian Political Party',
        description:
          'The Ruthenian-Ukrainian Radical Party forms in Lviv, signaling organized national politics in Galicia.',
      },
    ],
  },
  {
    id: 'revolution-independence',
    title: 'Revolution & Contested Independence',
    blurb:
      'World War I and the collapse of empires open a window for Ukrainian statehood before Soviet consolidation.',
    accent: 'var(--accent-emerald)',
    events: [
      {
        year: '1917',
        title: 'Central Rada & UNR',
        description:
          'The Central Rada proclaims the Ukrainian People’s Republic, asserting autonomy from Petrograd.',
      },
      {
        year: '1918',
        title: 'Brest-Litovsk Recognition',
        description:
          'Germany and its allies recognize Ukrainian sovereignty; short-lived Hetmanate and Directorate governments follow.',
      },
      {
        year: '1921',
        title: 'Treaty of Riga',
        description:
          'Peace between Soviet Russia and Poland partitions Ukrainian lands, cementing borders until World War II.',
      },
      {
        year: '1932–1933',
        title: 'Holodomor Famine',
        description:
          'Soviet requisition policies drive a man-made famine that kills millions across Ukraine.',
      },
    ],
  },
  {
    id: 'wwii-soviet',
    title: 'World War II & Soviet Ukraine',
    blurb:
      'Occupation, resistance, and postwar Soviet rule reshape Ukraine’s borders and international standing.',
    accent: 'var(--accent-blue)',
    events: [
      {
        year: '1941–1944',
        title: 'Nazi Occupation & Resistance',
        description:
          'German invasion devastates Ukraine; partisan movements and the UPA fight occupiers and Soviet return.',
      },
      {
        year: '1945–1946',
        title: 'UN Founding Member & Border Changes',
        description:
          'Ukrainian SSR joins the United Nations; Western Ukrainian lands are incorporated into the republic.',
      },
      {
        year: '1986',
        title: 'Chornobyl Disaster',
        description:
          'Reactor explosion spreads radiation across Europe, fueling glasnost-era criticism of Soviet governance.',
      },
      {
        year: '1991',
        title: 'Declaration of Independence',
        description:
          'Ukrainians vote overwhelmingly for statehood, dissolving Soviet authority and launching a sovereign Ukraine.',
      },
    ],
  },
  {
    id: 'modern-era',
    title: 'Independent Ukraine & Democratic Movements',
    blurb:
      'Security guarantees, civic uprisings, and war with Russia define Ukraine’s modern trajectory toward Europe.',
    accent: 'var(--accent-purple)',
    events: [
      {
        year: '1994',
        title: 'Budapest Memorandum',
        description:
          'Ukraine gives up nuclear arsenal in exchange for security assurances from Russia, the US, and the UK.',
      },
      {
        year: '2004',
        title: 'Orange Revolution',
        description:
          'Mass protests overturn a fraudulent election, leading to a rerun and strengthening democratic norms.',
      },
      {
        year: '2013–2014',
        title: 'Revolution of Dignity',
        description:
          'Euromaidan protests topple Yanukovych after he abandons the EU association path, affirming a European course.',
      },
      {
        year: '2014',
        title: 'Crimea Annexation & Donbas War',
        description:
          'Russia seizes Crimea and backs separatists in Donetsk and Luhansk, igniting an ongoing conflict.',
      },
      {
        year: '2022–present',
        title: 'Full-Scale Invasion & EU Candidacy',
        description:
          'Russia’s offensive triggers nationwide resistance; Ukraine gains EU candidate status and deepens Western ties.',
      },
    ],
  },
];

function App() {
  return (
    <div className="page">
      <div className="gradient-glow" aria-hidden />
      <main className="layout">
        <header className="hero">
          <p className="eyebrow">Ukraine Through the Centuries</p>
          <h1>
            Key turning points in <span className="highlight">Ukrainian history</span> since 1600
          </h1>
          <p className="lede">
            Explore how wars, uprisings, culture, and diplomacy shaped a nation bridging Eastern Europe and the Black Sea.
            Each cluster highlights a theme, making it easy to trace continuity and change across four centuries.
          </p>
        </header>

        <section className="timeline" aria-label="Timeline of Ukrainian history">
          {timelineSections.map((section) => (
            <article className="timeline-section" key={section.id}>
              <div className="section-header">
                <div className="section-pill" style={{ background: section.accent }}>
                  <span className="pill-dot" />
                  <span className="pill-text">{section.title}</span>
                </div>
                <p className="section-blurb">{section.blurb}</p>
              </div>

              <div className="events-grid">
                <div className="vertical-track" aria-hidden />
                {section.events.map((event, index) => (
                  <div className="event-card" key={`${section.id}-${event.year}-${index}`}>
                    <div className="event-meta">
                      <span className="event-year" style={{ color: section.accent }}>
                        {event.year}
                      </span>
                      <div className="event-marker" style={{ borderColor: section.accent }} />
                    </div>
                    <div className="event-body">
                      <h3>{event.title}</h3>
                      <p>{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
