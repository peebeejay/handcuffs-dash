import React, { SVGAttributes, useEffect } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import MUDialog from '@material-ui/core/Dialog';
import { useWeb3React } from '@web3-react/core';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { injected } from '../../connectors';
import { Gray2, Gray1, TextDark, TextLight } from '../../colors';
import { MetamaskLogo } from '../icons/MetaMaskLogo';
import { ExternalLink } from '../shared/Link';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

type WalletInfo = {
  name: string;
  subtext: string;
  description: string;
  logo: React.ForwardRefExoticComponent<
    SVGAttributes<SVGSVGElement> & React.RefAttributes<SVGSVGElement>
  >;
  connector: AbstractConnector;
};

const options: WalletInfo[] = [
  {
    name: 'Metamask',
    subtext: 'Add funds with your Metamask Wallet',
    logo: MetamaskLogo,
    connector: injected,
    description: 'Easy-to-use browser extension.',
  },
];

const Dialog = styled(({ className, ...props }) => (
  <MUDialog {...props} classes={{ paper: className }} />
))`
  border-radius: ${rem(12)};
`;

const Body = styled.section`
  min-width: ${rem(500)};
  padding: ${rem(30)} ${rem(20)};
  box-shadow: 0px ${rem(6)} ${rem(16)} rgba(0, 0, 0, 0.1);
`;

const ConnectWallet = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  font-weight: 700;
  font-size: ${rem(26)};
  color: ${TextDark};
`;

const SubHeader = styled.div`
  font-weight: 400;
  font-size: ${rem(16)};
  line-height: ${rem(24)};
  color: ${TextLight};
`;

const Options = styled.section`
  margin-top: ${rem(15)};
`;

const OptionTile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: ${rem(10)};
  border: 1px solid ${Gray2};
  padding: ${rem(30)};
  transition: 200ms background-color ease;

  &:hover {
    background-color: ${Gray1};
    cursor: pointer;
  }
`;

const Blurb = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const NewToEthereum = styled.div`
  color: ${TextDark};
  margin-right: ${rem(5)};
`;

export const ConnectionModal = (props: Props) => {
  const { isOpen, onClose } = props;

  const { active, account, connector, activate, error } = useWeb3React();

  const activateConnection = async (connector?: AbstractConnector) => {
    connector &&
      activate(connector, undefined, true).catch((err) => {
        console.error(err);
      });
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <Body>
        <ConnectWallet>
          <Header>{'Connect Wallet'}</Header>
          <SubHeader>{'To add to your vault'}</SubHeader>
        </ConnectWallet>
        <Options>
          {options.map((option, i) => {
            const Logo = option.logo;
            return (
              <OptionTile
                key={`connect-modal-option-${i}`}
                onClick={() =>
                  option.connector !== connector && activateConnection(option.connector)
                }
              >
                <Logo />
                <Header>{option.name}</Header>
                <SubHeader>{option.subtext}</SubHeader>
              </OptionTile>
            );
          })}
        </Options>
        <Blurb>
          <NewToEthereum>{'New to Ethereum?'}</NewToEthereum>
          <ExternalLink href="https://ethereum.org/wallets/" target="_blank">
            {'Learn more about wallets'}
          </ExternalLink>
        </Blurb>
      </Body>
    </Dialog>
  );
};
