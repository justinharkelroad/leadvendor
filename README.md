# Lead Vendor Check Up (Prototype)

This is a minimal prototype of the **Standard Lead Vendor Check Up** application.
It implements the basic project structure with React and TypeScript using Vite.
The goal is to demonstrate how the requirements in the PRD might be organized
in a client-side application. Many features are incomplete and provided as
placeholders only.

## Development

1. Install dependencies
   ```bash
   npm install
   ```
2. Start the dev server
   ```bash
   npm run dev
   ```

## Project Structure

- `src/models/` – TypeScript interfaces for Leads, Sales, Quotes and Vendor
  performance.
- `src/components/` – React components for file upload, dashboard, vendor
  management and match analysis.
- `src/utils/` – Utility functions for parsing CSV files and matching sales to
  leads.
- `src/store/` – Simple React context for application state. Actions for
  updating state are still TODO.

## Notes

- Data is parsed from CSV using `papaparse`.
- Matching logic currently performs only simple exact name matching.
- Vendor management and state updates are not fully implemented.
- This prototype is **not production ready** and is intended for illustrative
  purposes based on the provided PRD.
