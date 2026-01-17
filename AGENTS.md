# Viewport Grid

## Task

Using the provided project template (based off create-react-app), create a single-page application that satisfies the following core requirements:

- Provide a fixed Sidebar with numeric inputs for `Rows` and `Columns`, each constrained to the range 1-10. The Sidebar must include a control to collapse or expand it.
- Render a uniform Grid that reflects the configured row and column counts, displaying a Viewport at every grid position.
- Ensure the Grid fills the available space, gives each Viewport equal sizing with a small gutter, and responds smoothly to browser resizes and Sidebar collapsing/expanding.
- Style each Viewport with a thin border and show its current dimensions centered within it.
- Treat each Viewport as a unique instance and display a stable identifier (e.g., UUID, sequential id) in its top-left corner so individual cells are easily distinguishable.

The example colours are purely illustrative; aim for a clean, modern UX when designing the final interface.

### Example

![](example.gif)

### Constraints

- Solution should be production quality, documented, and reusable.
- Solution should contain appropriate unit testing.
- Solution should not require additional NPM packages.
- Solution should work against the latest version of Chrome, Firefox and Edge
- Replace this README with documentation specific to your implementation, covering setup, usage, and testing notes.
