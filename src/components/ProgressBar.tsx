import styled from 'styled-components';
import { rem } from 'polished';
import { Gray1 } from '../colors';

type Props = {
  percentFilled: number;
};

const BAR_HEIGHT = 4;

const BackgroundBar = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex: 1;
  background-color: ${Gray1};
  border-radius: 0px ${rem(10)} ${rem(10)} 0px;
  height: ${rem(BAR_HEIGHT)};
`;

const Progress = styled.div<{
  percentFilled: number;
}>`
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 0px ${rem(10)} ${rem(10)} 0px;
  width: ${({ percentFilled }) => percentFilled}%;
  height: ${rem(BAR_HEIGHT)};
  background: linear-gradient(180deg, #3366ff 0%, #7b61ff 100%);
`;

export const ProgressBar = (props: Props) => {
  return (
    <BackgroundBar>
      <Progress percentFilled={props.percentFilled} />
    </BackgroundBar>
  );
};
