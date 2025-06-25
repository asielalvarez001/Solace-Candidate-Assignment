'use client';

type SearchProps = {
  handleSubmit: React.FormEventHandler<HTMLFormElement>,
  handleOnChange: React.ChangeEventHandler<HTMLInputElement>,
  handleReset: React.MouseEventHandler<HTMLButtonElement>,
  term: string,
  searchTerm: string,
  showTerm: boolean,
};

export const Search = ({ handleSubmit, handleOnChange, handleReset, term, searchTerm, showTerm }: SearchProps) => {
  return (
    <div className="max-w-lg mx-auto p-4 flex flex-col">
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-gray-800">Search</h4>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
          <input
            type="text"
            className="flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Enter search term"
            onChange={handleOnChange}
            value={term}
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200 shadow active:scale-95 focus:outline-none"
          >
            Search
          </button>
          <button
            type="button"
            className="bg-white text-black border border-gray-300 font-semibold py-2 px-4 rounded transition duration-200 shadow active:scale-95 focus:outline-none hover:bg-gray-100"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
        <div className="mt-4 min-h-[24px]">
          {showTerm && (
            <p className="text-sm text-gray-500 italic">
              Searching for:{' '}
              <span className="font-medium text-gray-900">{searchTerm}</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};
