import { useState } from 'react';

function useModal(initialValue) {
  const [open, setOpen] = useState(initialValue);
  function handleClick() {
    setOpen(true);
  }

  // Afer 2 seconds, close modal
  if (open) {
    setTimeout(() => {
      setOpen(false);
    }, 5000);
  }

  return {
    open,
    handleClick
  };
}
export default useModal;
