import React from 'react';
import { Progress } from '../progress';
// import './styles.css';

const ProgressDemo = () => {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress className="ProgressRoot" value={66}>
    </Progress>
  );
};

export default ProgressDemo;