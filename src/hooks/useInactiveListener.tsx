import { useEffect, useCallback } from 'react';
import { injectedConnector } from '../connectors';
import { useWeb3React } from '@web3-react/core';

/**
 * This hook contains logic that attempts to reconnect the client to the injected
 * provider upon chainChanged and accountsChanged events.
 */
export function useInactiveListener(suppress = false) {
  const { active, error, activate } = useWeb3React();

  const handleChainChanged = useCallback(() => {
    /* Attempt activation & catch errors if they appear */
    activate(injectedConnector, undefined, true).catch((error) => {
      console.error('Failed to activate after chain changed', error);
    });
  }, [activate]);

  const handleAccountsChanged = useCallback(
    (accounts: string[]) => {
      if (accounts.length > 0) {
        /* Attempt activation & catch errors if they appear */
        activate(injectedConnector, undefined, true).catch((error) => {
          console.error('Failed to activate after accounts changed', error);
        });
      }
    },
    [activate],
  );

  useEffect(() => {
    const { ethereum } = window as any;
    if (ethereum && ethereum.on && !active && !error && !suppress) {
      ethereum.on('chainChanged', handleChainChanged);
      ethereum.on('accountsChanged', handleAccountsChanged);

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener('chainChanged', handleChainChanged);
          ethereum.removeListener('accountsChanged', handleAccountsChanged);
        }
      };
    }
  }, [active, error, suppress, activate, handleChainChanged, handleAccountsChanged]);
}
