import React from 'react';
/** @jsx jsx */
import { Global, css, jsx } from '@emotion/core';

import logo from '../img/logo.svg';
import general from '../styles/style.scss';

const App = () => {
  return (
    <React.Fragment>
      <Global styles={css`${general}`} />
      <div css={style}>
        <header css={header}>
          <img src={logo} alt="React" />
        </header>
        <main>
          <p>Hello React Application</p>
        </main>
      </div>
    </React.Fragment>
  );
};

const style = css`
  padding: 2.4rem 5%;

  @media screen and (min-width: 900px) {
    padding: 2.4rem calc((100% - 720px) / 2);
  }
`;

const header = css`
  margin: 0 0 2.4rem;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: .05em;
  }
`;

export default App;
