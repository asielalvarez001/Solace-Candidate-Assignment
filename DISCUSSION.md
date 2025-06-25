# Discussion

> **Note:** This project was completed within a 2 hour time limit. Due to this constraint, some enhancements and optimizations such as server-side search filtering, comprehensive testing, performance tuning, and accessibility improvements were limited in scope or simplified to fit the timeframe.


## Pagination and Search Handling

Currently, the search functionality is handled **client-side** by filtering the already-fetched page of advocates. If I had more time or in a production environment, I would:
- Move the search functionality to the API to enable **server-side filtering**.
- This would ensure that searches query the entire dataset instead of just filtering within the currently paginated page.


## Tests

Given more time, I would implement tests for both the frontend and backend.  

- For backend API and business logic, I would use **Jest** for unit and integration tests.  
- For frontend UI components, I would write **component tests** using **React Testing Library** with Jest to verify rendering, user interactions, and state changes.  
- For end-to-end user flows and UI interactions, I would leverage **Playwright** or **Cypress** to ensure the application works as expected from the user’s perspective.


## Additional Enhancements

- Add loading indicators when changing pages to provide visual feedback during data fetching.
- Consider syncing pagination and search state with the URL (using query parameters) for better browser navigation support and sharable links.
- Add error handling to display appropriate messages if the API request fails.
- Break down the UI into smaller, more modular components to improve maintainability and enable memoization for better performance.
- Although this submission contains only one pull request, in a real-world scenario I would split the work into multiple smaller, focused PRs. This helps with easier code review, better incremental testing, and more manageable merges.
- **Accessibility:** I would ensure the UI components meet accessibility standards, including proper ARIA attributes, keyboard navigability, and screen reader compatibility to make the application usable by all users.
- **Performance:** For larger datasets, I would implement optimizations such as database indexing, memoization, virtualization of list rendering, and efficient state management to maintain smooth and responsive user experiences.
