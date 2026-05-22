import { useState } from 'react';
import bg from './assets/bg.png';
import { MainLayout } from './styles/MainLayout';
import styled from 'styled-components';
import Navigation from './components/Navigation/Navigation';
import Dashboard from './components/Dashboard/Dashboard';
import Transaction from './components/Transaction/Transaction';
import Expanse from './components/Expanses/Expanse';
import Income from './components/Incomes/Income';
import { useGlobalContext } from './context/Globalcontext';

const App = () => {
  const [active, setActive] = useState(1);

  const global = useGlobalContext();
  console.log(global);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Transaction />;
      case 3:
        return <Income />;
      case 4:
        return <Expanse />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <AppStyled bg={bg}>
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
};

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 245, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
