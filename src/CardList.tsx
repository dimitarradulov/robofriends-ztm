import Card from './Card';
import { Robot } from './model/robot.model';

interface Props {
  robots: Robot[];
}

const CardList: React.FC<Props> = ({ robots }) => {
  return (
    <>
      <h1>RoboFriends</h1>
      {robots.map((robot, i) => (
        <Card key={i} {...robot} />
      ))}
    </>
  );
};

export default CardList;
