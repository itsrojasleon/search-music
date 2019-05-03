import { useEffect } from 'react';

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title === '' ? 'Search Music' : title;
  }, [title]);
}
export default useDocumentTitle;
