import '../css/index.scss';
import HelloWorld from '../components/HelloWorld';
import styled from 'styled-components';

const Page = styled.div`
  margin-top: 10vh;
  font-family: monospace;
  text-align: center;
`;
const Index = () => {
  return (
    <Page>
      <HelloWorld />
    </Page>
  );
};

export default Index;
