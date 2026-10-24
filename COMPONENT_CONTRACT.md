# Data-Grid Component Contract

## 1. Purpose

Define the public interface, state ownership, and behavioral expectations of the React Data-Grid before implementation.

## 2. Technology

- React for component rendering and state management.
- Semantic HTML table elements for accessible tabular data.
- Native buttons and form controls for keyboard-accessible interactions.
- CSS for layout, responsive behavior, and visible focus indicators.

## 3. Component Interface

### 3.1 Column Definition

Each column definition should support:

- `key`: unique identifier matching a field in the row data.
- `header`: human-readable column heading.
- `sortable`: whether the column supports sorting.

### 3.2 DataGrid Props

The `DataGrid` component accepts:

- `columns`: array of column definitions.
- `rows`: array of data objects.
- `pageSize`: number of rows displayed per page.

### 3.3 Internal State

The component owns the following interactive state:

- `sortConfig`: active sort column and direction.
- `filterQuery`: current filtering keyword.
- `currentPage`: currently selected page.

Derived data should be computed from the source rows in this order:

1. Apply filtering.
2. Apply sorting.
3. Apply pagination.

## 4. Behavioral Requirements

### 4.1 Rendering

- Render column headings and row values from the supplied props.
- Use `table`, `thead`, `tbody`, `tr`, `th`, and `td` appropriately.
- Associate column headings with their columns using `scope="col"`.

### 4.2 Sorting

- Allow sorting only on columns marked `sortable`.
- Expose the current sort direction accessibly.
- Keep the displayed rows consistent with the active sort configuration.

### 4.3 Filtering

- Filter rows using a visible, labelled search input.
- Update the displayed results when the query changes.
- Handle queries with no matching results.

### 4.4 Pagination

- Display no more than `pageSize` rows on a page.
- Provide accessible previous-page and next-page controls.
- Prevent navigation outside the available page range.
- Reset or clamp the current page when filtering changes the result count.

### 4.5 Empty States

- Show a clear message when the source data is empty.
- Show a distinct or appropriately worded message when filtering returns no matches.
- Ensure empty-state messages are available to assistive technologies.

## 5. Accessibility Requirements

- Use semantic HTML before introducing ARIA roles.
- Ensure all interactive controls are keyboard accessible.
- Provide visible keyboard focus indicators.
- Give form controls accessible labels.
- Use `aria-sort` on sortable column headers where appropriate.
- Do not apply `role="grid"` unless the required grid keyboard interaction model is implemented and tested.
- Target WCAG 2.2 Level AA; conformance must be verified through testing rather than assumed.

## 6. Scope and Verification

- Sorting, filtering, and pagination must work together.
- Verify empty data, no matching results, and normal populated data.
- Test keyboard operation and inspect accessibility with appropriate tools.
- Treat any Lighthouse score target as unverified until a report is produced.

## 7. Implementation Notes

This document defines the initial component contract. Implementation details may be refined when the original assignment requirements are checked, but changes must preserve the stated functional and accessibility goals.