import { useState } from 'react';

export const useSearch = (onSearchCallback: (term: string) => void, onResetCallback: () => void) => {
  const [term, setTerm] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showTerm, setShowTerm] = useState<boolean>(false);

  const reset = () => {
    setShowTerm(false);
    setTerm('');
    setSearchTerm('');
    onResetCallback();
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setTerm(input);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!term) {
      reset();
    } else {
      onSearchCallback(term);
      setSearchTerm(term);
      setShowTerm(true);
    }
  };

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    reset();
  };

  return {
    term,
    searchTerm,
    showTerm,
    handleOnChange,
    handleSubmit,
    handleReset,
    reset,
  };
}
