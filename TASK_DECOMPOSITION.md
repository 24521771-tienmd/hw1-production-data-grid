# HW1 — Production Enterprise Data-Grid

## 1. Project Objective

Build an accessible, production-oriented Data-Grid with sorting, filtering, and pagination, following the requirements specified in the HW1 assignment.

## 2. Functional Requirements

- **FR-01 — Data Rendering:** Display tabular data using semantic HTML.
- **FR-02 — Sorting:** Allow users to sort supported columns.
- **FR-03 — Filtering:** Allow users to filter records.
- **FR-04 — Pagination:** Allow users to navigate between pages.
- **FR-05 — Keyboard Interaction:** Implement and verify the required keyboard interactions.
- **FR-06 — Accessibility:** Provide accessible names, appropriate table semantics, visible focus indicators, and sufficient color contrast.
- **FR-07 — Empty Results:** Communicate clearly when no records match the current criteria.
- **FR-08 — Verification:** Test functional behavior, accessibility, and Lighthouse requirements.

## 3. Technical Constraints

- Use semantic HTML elements, including `table`, `thead`, `tbody`, `th`, and `button`, where appropriate.
- Use `scope="col"` for column headers.
- Follow the assignment's WCAG 2.2 AA accessibility target.
- Avoid unnecessary generic `div` elements.
- Keep data operations, UI rendering, and interaction logic organized into maintainable modules.
- Do not claim accessibility compliance or Lighthouse scores without verification.

## 4. Task Decomposition

### M0 — Specification and Planning

- T01: Document project requirements and acceptance criteria.
- T02: Define the Data-Grid component contract and data model.

### M1 — Table Foundation

- T03: Create the initial application structure and semantic table.
- T04: Render sample records and column headers.

### M2 — Data Operations

- T05: Implement column sorting.
- T06: Implement record filtering.
- T07: Implement pagination.

### M3 — Accessibility and Interaction

- T08: Implement keyboard navigation and visible focus.
- T09: Add accessible labels, announcements, and empty-result handling.
- T10: Verify color contrast and semantic structure.

### M4 — Verification and Delivery

- T11: Test sorting, filtering, pagination, and edge cases.
- T12: Audit accessibility and Lighthouse results.
- T13: Document verification results and known limitations.

## 5. Acceptance Criteria

- Sorting produces the expected record order.
- Filtering returns only matching records.
- Pagination displays the correct records and handles boundary conditions.
- The table uses appropriate semantic HTML.
- Required keyboard interactions work consistently.
- Focus remains visible during keyboard navigation.
- Empty results are communicated accessibly.
- Color contrast is checked against applicable WCAG 2.2 AA criteria.
- Lighthouse Accessibility and Best Practices scores are measured and recorded.
- Each meaningful implementation milestone is verified before being committed.

## 6. Git Workflow

- Use small, meaningful commits.
- Run `git diff --check` before committing.
- Review the staged diff before each commit.
- Record test results and update this document when acceptance criteria change.
- Do not mark a task complete until its verification criteria have been checked.

## 7. Scope Notes

The detailed component API, dataset, sorting rules, filtering behavior, pagination defaults, and exact keyboard interaction model will be finalized before implementation.

Any requirement not fully specified in the available assignment material must be confirmed or documented as an explicit implementation decision.
