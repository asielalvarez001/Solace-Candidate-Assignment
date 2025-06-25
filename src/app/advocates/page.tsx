'use client';
import { useEffect, useState } from 'react';
import { Search } from '../ui/Search';
import { AdvocateModel } from '../lib/models/advocate';
import { useSearch } from '../lib/hooks/useSearch';

export default function Advocates() {
  const [advocates, setAdvocates] = useState<AdvocateModel[]>([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState<AdvocateModel[]>(
    []
  );
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [pagination, setPagination] = useState<{
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  } | null>(null);

  useEffect(() => {
    fetch(`/api/advocates?page=${page}&pageSize=${pageSize}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
        setFilteredAdvocates(jsonResponse.data);
        setPagination(jsonResponse.pagination);
      });
  }, [page, pageSize]);

  const onSearch = (searchTerm: string) => {
    const filteredAdvocates = advocates.filter((advocate) => {
      const lowerSearchTerm = searchTerm.toLowerCase();

      return (
        advocate.firstName.toLowerCase().includes(lowerSearchTerm) ||
        advocate.lastName.toLowerCase().includes(lowerSearchTerm) ||
        advocate.city.toLowerCase().includes(lowerSearchTerm) ||
        advocate.degree.toLowerCase().includes(lowerSearchTerm) ||
        advocate.specialties.some((specialty) =>
          specialty.toLowerCase().includes(lowerSearchTerm)
        ) ||
        advocate.yearsOfExperience.toString().includes(searchTerm) ||
        advocate.phoneNumber.toString().includes(searchTerm)
      );
    });

    setFilteredAdvocates(filteredAdvocates);
  };

  const onReset = () => {
    setFilteredAdvocates(advocates);
  };

  const {
    term,
    searchTerm,
    showTerm,
    handleOnChange,
    handleSubmit,
    handleReset,
    reset,
  } = useSearch(onSearch, onReset);

  return (
    <main style={{ margin: '24px' }}>
      <h1 className="text-2xl font-bold mb-6">Solace Advocates</h1>

      <div className="mb-6">
        <Search
          handleOnChange={handleOnChange}
          handleSubmit={handleSubmit}
          handleReset={handleReset}
          term={term}
          searchTerm={searchTerm}
          showTerm={showTerm}
        />
      </div>

      {filteredAdvocates.length === 0 ? (
        <p className="text-gray-500">No advocates found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">First Name</th>
                <th className="p-2 border">Last Name</th>
                <th className="p-2 border">City</th>
                <th className="p-2 border">Degree</th>
                <th className="p-2 border">Specialties</th>
                <th className="p-2 border">Years of Experience</th>
                <th className="p-2 border">Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {filteredAdvocates.map((advocate) => (
                <tr key={advocate.id} className="odd:bg-white even:bg-gray-50">
                  <td className="p-2 border">{advocate.firstName}</td>
                  <td className="p-2 border">{advocate.lastName}</td>
                  <td className="p-2 border">{advocate.city}</td>
                  <td className="p-2 border">{advocate.degree}</td>
                  <td className="p-2 border">
                    {advocate.specialties.join(', ')}
                  </td>
                  <td className="p-2 border">{advocate.yearsOfExperience}</td>
                  <td className="p-2 border">{advocate.phoneNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end mt-4 mb-4">
            <p className="text-gray-700">
              Total advocates: {pagination?.total ?? '?'}
            </p>
          </div>
          <div className="mt-4 flex items-center justify-center gap-4">
            <button
              disabled={page <= 1}
              onClick={() => {
                setPage((prev) => Math.max(prev - 1, 1));
                reset();
              }}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span>
              Page {pagination?.page ?? page} of {pagination?.totalPages ?? '?'}
            </span>
            <button
              disabled={pagination ? page >= pagination.totalPages : false}
              onClick={() => {
                setPage((prev) =>
                  pagination
                    ? Math.min(prev + 1, pagination.totalPages)
                    : prev + 1
                );
                reset();
              }}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
