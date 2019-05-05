import { useEffect } from 'react';

function useFetchResource(resource) {
  useEffect(() => {
    resource();
  }, [resource]);
}
export default useFetchResource;
