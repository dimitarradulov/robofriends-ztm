import Card from './Card';
import { Robot } from './model/robot.model';

interface Props {
  robots: Robot[];
}

const CardList: React.FC<Props> = ({ robots }) => {
  return (
    <>
      {robots.map((robot, i) => (
        <Card key={i} {...robot} />
      ))}
    </>
  );
};

export default CardList;
