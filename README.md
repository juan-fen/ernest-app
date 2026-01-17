# Viewport Grid

A production-quality single-page application that renders a responsive, configurable grid of viewport cells. Built with React, Vite, and vanilla CSS.

## Features

- **Fixed Sidebar**: Control grid dimensions with numeric inputs for Rows and Columns (1-10 range)
- **Collapsible Sidebar**: Toggle the sidebar open/closed with a smooth animation
- **Responsive Grid**: Dynamically generates and renders uniform grid of viewports
- **Viewport Display**: Each viewport shows:
  - A unique sequential ID in the top-left corner
  - Current dimensions (width × height) centered in the cell
- **Smart Sizing**: Grid and viewports respond smoothly to:
  - Browser window resizes
  - Sidebar expansion/collapse
  - Input value changes
- **Clean Modern UI**: Professional styling with subtle shadows, smooth transitions, and mobile responsiveness

## Project Structure

```
src/
├── App.jsx                 # Main application component
├── App.css                 # Application layout styles
├── index.css               # Global styles
├── components/
│   ├── Sidebar.jsx         # Settings sidebar component
│   ├── Sidebar.css         # Sidebar styles
│   ├── Grid.jsx            # Grid container component
│   ├── Grid.css            # Grid styles
│   ├── Viewport.jsx        # Individual viewport cell component
│   ├── Viewport.css        # Viewport styles
├── test/
│   └── setup.js            # Test environment setup
└── App.test.jsx            # Unit tests
vite.config.js              # Vite configuration
vitest.config.js            # Vitest configuration
```

## Setup

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
npm install
```

### Development

Start the development server with hot module reloading:

```bash
npm run dev
```

The application will open automatically at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

Output will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Testing

The project includes 4 comprehensive unit tests using React Testing Library and Vitest:

1. **App Component Rendering**: Verifies the App renders with default grid settings (3×3)
2. **Sidebar Toggle**: Tests that the sidebar can be opened and closed
3. **Grid Updates**: Confirms grid updates when rows/columns values change
4. **Input Constraints**: Validates that row/column inputs are constrained to 1-10 range

Run tests:

```bash
npm run test
```

Run tests with UI:

```bash
npm run test:ui
```

### Test Coverage

- **Component Integration**: Tests the full app workflow from user input to grid update
- **Input Validation**: Verifies numeric input constraints (1-10 range)
- **State Management**: Confirms state changes propagate to child components
- **UI Rendering**: Validates that correct number of viewports render based on grid dimensions

## Component Documentation

### App.jsx

Main component managing application state:

- `rows`: Current number of rows (default: 3)
- `columns`: Current number of columns (default: 3)
- `sidebarOpen`: Boolean tracking sidebar visibility state

Handles input validation and state updates for grid configuration.

### Sidebar.jsx

Controls grid dimensions:

- Accepts rows and columns as props (1-10 each)
- Displays current values with visual feedback
- Includes toggle button to collapse/expand
- Responsive design adapts to mobile layouts

### Grid.jsx

Container component that:

- Renders grid layout using CSS Grid
- Generates viewport components based on rows × columns
- Calculates equal sizing with gutters
- Uses `useMemo` to optimize viewport array generation

### Viewport.jsx

Individual grid cell component:

- Displays unique sequential ID in top-left
- Shows current dimensions using ResizeObserver
- Tracks size changes on window resize and sidebar toggle
- Provides visual feedback on hover

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Edge 90+
- Safari 14+

## Performance Notes

- Uses React.useMemo for grid calculations
- ResizeObserver for efficient dimension tracking
- CSS Grid for optimal layout performance
- Smooth CSS transitions for sidebar and viewport interactions

## Styling

The application uses:

- **Modern CSS**: Grid, Flexbox, CSS Variables
- **Color Scheme**: Professional blues, grays, and greens
- **Responsive Design**: Media queries for tablet and mobile
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

## No External Dependencies

This project uses only React and React-DOM (core dependencies). All styling and functionality is implemented with vanilla CSS and JavaScript. Testing uses the standard React Testing Library ecosystem without additional utility libraries.

## License

This project is provided as-is for educational and production use.
