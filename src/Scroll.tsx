import { PropsWithChildren } from 'react';

const Scroll: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        border: '3px solid black',
        height: '700px',
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;
