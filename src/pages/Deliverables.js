import React from 'react';

import Main from '../layouts/Main';

const sections = [
  'Deliverable Names Go Here',
];

const Deliverables = () => (
  <Main
    title="Deliverables"
    description="List of Deliverables from this project."
  >
    <article className="post" id="deliverables">
      <header>
        <div className="title">
          <h2 data-testid="heading">Deliverables</h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>

    </article>
  </Main>
);

export default Deliverables;
