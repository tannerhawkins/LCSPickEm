import React from 'react';
import Main from '../layouts/Main';

const Team = () => (
  <Main
  description={"About our team"}
>
  <article className="post" id="index">
  <header>
      <div className="title">
        <h2 data-testid="heading" href={`#aboutteam`}>Team Roles</h2>
        <p>
          *** About Us Including Roles ***
        </p>
      </div>
    </header>
    <header>
      <div className="title">
        <h2 data-testid="heading" href={`#teamrules`}>Team Rules</h2>
        <p>
          *** Team Rules Here ***
        </p>
      </div>
    </header>
  </article>
</Main>
);

export default Team;
