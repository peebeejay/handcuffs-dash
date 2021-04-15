import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { useWeb3React } from '@web3-react/core';
import { TextDark, Gray3, Gray1 } from '../../colors';
import { ConnectionModal } from './ConnectionModal';
import { WalletStatus } from './WalletStatus';

const ConnectWalletButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: ${rem(10)} ${rem(24)};
  width: ${rem(125)};
  height: ${rem(24)};
  font-size: ${rem(16)};
  color: ${TextDark};
  border-radius: ${rem(8)};
  border: 1px solid ${Gray3};
  transition: 250ms background ease;
  cursor: pointer;

  &:hover {
    background: ${Gray1};
  }
`;

export const Wallet = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const web3 = useWeb3React();

  useEffect(() => {
    if (web3.account) {
      setIsOpen(false);
    }
  }, [web3.account, web3.active, isOpen]);

  return (
    <>
      <ConnectionModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      {!web3.active && !web3.account && (
        <ConnectWalletButton onClick={() => setIsOpen(!isOpen)}>
          {'Connect Wallet'}
        </ConnectWalletButton>
      )}
      {web3.active && web3.account && (
        <WalletStatus onClick={() => {}} account={web3.account} />
      )}
    </>
  );
};
