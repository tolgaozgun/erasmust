import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import { useAuthContext } from '../contexts/auth-context';

export const AuthGuard = (props) => {
  const { children } = props;
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthContext();
  const ignore = useRef(false);
  const [checked, setChecked] = useState(false);

  // Only do authentication check on component mount.
  // This flow allows you to manually redirect the user after sign-out, otherwise this will be
  // triggered and will automatically redirect to sign-in page.

  useEffect(
    () => {
      if (!navigate.isReady) {
        return;
      }

      // Prevent from calling twice in development mode with React.StrictMode enabled
      if (ignore.current) {
        return;
      }

      ignore.current = true;

      if (!isAuthenticated) {
        console.log('Not authenticated, redirecting');
        navigate
          .replace({
            pathname: '/sign-in',
            query: navigate.asPath !== '/' ? { continueUrl: navigate.asPath } : undefined
          })
          .catch(console.error);
      } else {
        setChecked(true);
      }
    },
    [navigate.isReady]
  );

  if (!checked) {
    return null;
  }

  // If got here, it means that the redirect did not occur, and that tells us that the user is
  // authenticated / authorized.

  return children;
};

AuthGuard.propTypes = {
  children: PropTypes.node
};
