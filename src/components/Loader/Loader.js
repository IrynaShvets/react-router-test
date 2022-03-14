import { LineWave } from 'react-loader-spinner';
import { Container } from './Loader.styled';

const Loader = () => {
  return (
    <Container>
      <LineWave
        color="red"
        height={250}
        width={250}
        ariaLabel="three-circles-rotating"
      />
    </Container>
  );
};
export default Loader;
