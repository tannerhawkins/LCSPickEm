import React from 'react';

import Main from '../layouts/Main';


const Journal = () => (
  <Main
    description={"Journal of meetings and meeting schedule"}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading" href={`#journal`}>Journal</h2>
          <p>
            *** Journal Here ***
          </p>
        </div>
      </header>
      <header>
        <div className="title">
          <h2 data-testid="heading" href={`#schedule`}>Schedule</h2>
          <p>
            *** Schedule Here ***
          </p>
        </div>
      </header>
    </article>
  </Main>
);

export default Journal;
