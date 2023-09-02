import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import Button from '../components/Button';
import { ROUTES } from '../constants/routes';
import { STORAGE_KEY } from '../constants/storage';
import { setItem } from '../utils/storage';

type GameMode = 'Dementia' | 'Brain';

const Mode = () => {
  const navigate = useNavigate();

  const modeChoice = (mode: GameMode) => {
    setItem(STORAGE_KEY.MODE, mode);
    navigate(ROUTES.PLAY);
  };

  return (
    <div role="main">
      <img
        src="images/options.png"
        alt="Game mode options"
        width={50}
        height={50}
        aria-hidden="true"
      />
      <ModeTitle>게임 모드</ModeTitle>
      <Description>모드 선택에 따라 첫 시작 시간이 다릅니다.</Description>
      <Description id="last-instruction">난이도는 동일합니다.</Description>
      <Example>치매 예방 : 5초</Example>
      <Example>두뇌 회전 : 3초</Example>
      <Button id="list" onClick={() => modeChoice('Dementia')}>
        치매 예방
      </Button>
      <Button color="#01a8ff" id="list" onClick={() => modeChoice('Brain')}>
        두뇌 회전
      </Button>
    </div>
  );
};

export default Mode;

const ModeTitle = styled.h1`
  font-size: 32px;
  padding: 16px 0 24px 0;
  font-family: 'RixYeoljeongdo';
  word-break: keep-all;
`;

const Description = styled.p`
  font-size: 16px;
  &#last-instruction {
    padding-bottom: 8px;
  }
`;

const Example = styled.p`
  font-size: 14px;
  text-align: center;
  color: darkblue;
`;
