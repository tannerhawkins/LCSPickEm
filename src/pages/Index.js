import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, signOut } from '../app/account/actions';
import { selectIsSignedIn } from '../app/account/selectors';
import Main from '../layouts/Main';

const Index = () => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector(selectIsSignedIn);

  const handleSignIn = () => {
    dispatch(signIn());
  }

  const handleSignOut = () => {
    dispatch(signOut());
  }
  
  return (
  <Main
    description={"Project Description Homepage"}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading" href={`#description`}>Project Description</h2>
          {!isSignedIn && <button onClick={handleSignIn}>Sign In</button>}
          {isSignedIn && <button onClick={handleSignOut}>Sign Out</button>}
          <p>
            *** Project Decription Here ***
          </p>
        </div>
      </header>
    </article>
  </Main>
)};

export default Index;
