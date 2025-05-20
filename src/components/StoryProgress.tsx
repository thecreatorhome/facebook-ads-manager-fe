import { useEffect, useState } from 'react';
import { Progress } from 'antd';
import 'antd/dist/reset.css';
import "../styles/components/StoryProgress.css";

// <StoryProgress />
const StoryProgress = ({ duration = 10000 }) => {
  const [percent, setPercent] = useState(0);
  const [cycle, setCycle] = useState(0); // triggers re-run of useEffect

  useEffect(() => {
    const intervalTime = 30;
    const increment = 110 / (duration / intervalTime);

    const interval = setInterval(() => {
      setPercent(prev => {
        const next = prev + increment;

        if (next >= 110) {
          clearInterval(interval);
          setTimeout(() => {
            setPercent(0);
            setCycle(c => c + 1); // trigger useEffect to restart progress
          }, 200); // slight delay before restart
        }

        return next;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [duration, cycle]); // re-run when `cycle` updates
  
  return (
    <div style={{ width: '100%' }} key={cycle}> 
      <Progress
        percent={percent}
        showInfo={false}
        strokeColor="#fff"
        trailColor="rgba(255,255,255,0.3)"
        strokeWidth={4}
        style={{
          transition: percent === 0 ? 'none' : 'width 2s linear'
        }}
      />
    </div>
  );
};

export default StoryProgress;
