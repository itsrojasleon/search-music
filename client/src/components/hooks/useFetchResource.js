import { useEffect } from 'react';

function useFetchResource(myfunction, value) {
  useEffect(() => {
    myfunction();
  }, [myfunction]);
}
export default useFetchResource;
