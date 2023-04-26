import styled from 'styled-components';
import PainelQuestions from '../../components/painelQuestions';

export default function Home() {
  return (
    <Main>
      <PainelQuestions></PainelQuestions>
    </Main>
  );
}

const Main = styled.main`
  min-height: 100vh;
  width: 100vw;
  padding: 10px;
  display: flex;
  flex-flow: column nowrap;
  place-content: center flex-start;
  -webkit-box-pack: start;
  -webkit-box-align: center;
  align-items: center;
  position: absolute;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
`;
