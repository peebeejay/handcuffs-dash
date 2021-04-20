import { useState, useEffect } from 'react';
import { injectedConnector } from '../connectors';
import { useWeb3React } from '@web3-react/core';
import { useLocalStorage } from './useLocalStorage';

export enum ConnectionType {
  Injected = 'Injected',
}

/**
 * This hook attempts to connect to an injected provider upon page load to prevent
 * a user from having to reconnect / login after every page refresh. *
 */
export function useEagerConnect() {
  const { activate, active } = useWeb3React();
  const [hasTried, setHasTried] = useState(false);
  const [cachedConnection] = useLocalStorage<ConnectionType | null>(
    'cachedConnection',
    null,
  );

  /* Only run this hook once ideally */
  useEffect(() => {
    injectedConnector.isAuthorized().then((isAuthorized) => {
      if (!hasTried && isAuthorized && cachedConnection === ConnectionType.Injected) {
        activate(injectedConnector, undefined, true).catch(() => {
          setHasTried(true);
        });
      } else {
        setHasTried(true);
      }
    });
  }, [activate, cachedConnection, hasTried]);

  /**
   * If the connection worked, wait until a confirmation is received to
   * toggle the hasTried flag.
   */
  useEffect(() => {
    if (active) {
      setHasTried(true);
    }
  }, [active]);

  return hasTried;
}
