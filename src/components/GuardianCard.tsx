import React from 'react';
import styled from 'styled-components';
import { rem, transparentize } from 'polished';
import { ShieldPurple, Gray4, Gray3, TextLight, Gray1 } from '../colors';
import { ShieldWithCheckMark } from './icons/ShieldWithCheckMark'; // switch this out with the other shield icon when you get it

type Props = {
    color: string;
    address: string;
    status: string;
};

const Container = styled.div`
    width: ${rem(240)};
    height: ${rem(230)};
    border: 1px solid ${Gray3};
    border-radius: ${rem(16)};
    // padding: ${rem(12)} ${rem(24)};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    line-height: ${rem(24)};
`;

const Rectangle = styled.div`
    background: ${Gray1};
    width: ${rem(240)};
    height: ${rem(64)};
    box-sizing: border-box;
    border-radius: ${rem(16)} ${rem(16)} 0px 0px;
`;

const GuardianIcon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: ${rem(64)};
    height: ${rem(64)};
    background-color: ${transparentize(0.8, ShieldPurple)};
    border-radius: 50%;
    margin-bottom: ${rem(16)};
    margin-top: ${rem(-32)};

    path {
        fill: ${ShieldPurple};
    }
`;

const Address = styled.div`
    font-size: ${rem(16)};
    color: ${TextLight};
    font-weight: 500;
`;

const Status = styled.div`
    font-size: ${rem(14)};
    color: ${Gray4};
`;

export const GuardianCard = (props: Props) => {
    const {color, address, status} = props;
    return (
        <Container>
            <Rectangle />
            <GuardianIcon>
                < ShieldWithCheckMark />
            </GuardianIcon>
            <Address> {address} </Address>
            <Status> {status} </Status>
        </Container>
    );
};