import { useEffect, useState } from 'react';

export default function useWindowSize() {
  const [windowDimension, setWindowDimension] = useState({});

  const detectSize = () => {
    setWindowDimension({ winWidth: window.innerWidth });
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);

    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, [windowDimension]);

  return { windowDimension };
}
