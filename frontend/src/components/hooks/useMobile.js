import { useState, useEffect } from 'react';

function useMobile() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const setWidth = () => {
      if (window.innerWidth <= 769) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    window.addEventListener('resize', setWidth);
    return () => {
      window.removeEventListener('resize', setWidth);
    };
  });

  return [mobile];
}
export default useMobile;
