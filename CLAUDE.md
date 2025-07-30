# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `pnpm dev` - Start development server with Turbopack (runs on http://localhost:3000)
- `pnpm build` - Build production application
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint for code quality checks

### Package Management
This project uses `pnpm` as the package manager.

## Architecture

This is a Next.js 15 application using the App Router architecture with:

- **Framework**: Next.js 15 with React 19
- **Styling**: Tailwind CSS v4 with custom theme configuration
- **UI Components**: Configured for shadcn/ui with "new-york" style
- **TypeScript**: Strict mode enabled
- **Fonts**: Geist Sans and Geist Mono from Google Fonts

### Project Structure

- `app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with font configuration and global styles
  - `page.tsx` - Homepage component
  - `globals.css` - Global CSS with Tailwind v4 configuration and design system
- `lib/utils.ts` - Utility functions (includes `cn` helper for class merging)
- `components.json` - shadcn/ui configuration with alias mappings

### Design System

The project uses a comprehensive design system with:
- Custom CSS variables for theming (light/dark mode support)
- OKLCH color space for modern color definitions
- Consistent spacing and border radius variables
- Predefined component aliases: `@/components`, `@/lib`, `@/hooks`, etc.

### Key Dependencies

- `class-variance-authority` - For component variant management
- `clsx` + `tailwind-merge` - For conditional class composition
- `lucide-react` - Icon library
- `tw-animate-css` - Animation utilities

### Styling Approach

- Uses Tailwind CSS v4 with `@theme inline` for custom properties
- CSS variables defined in `:root` and `.dark` for theme switching
- Component-specific styling follows shadcn/ui patterns
- Font variables integrated into Tailwind configuration

## Tool Guidelines

### Context7 Documentation Guidelines
- Always use context7 for comprehensive documentation research before writing any code
- Document project architecture, design decisions, and technical requirements
- Create thorough README files and inline documentation
- Use context7 to gather best practices and industry standards

### Shadcn/UI Guidelines
- Utilize shadcn CLI for generating and managing UI components
- Follow "new-york" style configuration for consistent design
- Leverage component variants and customization options
- Prioritize accessibility and responsive design
- Use predefined component aliases for efficient imports

### Fetch Web Search Guidelines
- Use fetch for quick information gathering and research
- Verify sources and cross-reference information
- Limit web searches to technical documentation, tutorials, and official resources
- Respect rate limits and avoid excessive API calls
- Prefer official documentation and trusted technical sources

### Playwright MCP Guidelines
- Use Playwright MCP for browser-based visual and functional testing
- **When to use**:
  - User requests layout or UI changes that need visual verification
  - Testing code changes in the browser environment
  - Verifying component rendering and user interactions
  - Checking responsive design across different viewport sizes
- **Key scenarios**:
  - Navigate to localhost:3000 during development to test changes
  - Take screenshots to verify visual layouts
  - Test form submissions, button clicks, and navigation
  - Validate responsive behavior on mobile/desktop viewports
- **Best practices**:
  - Always start development server (`pnpm dev`) before browser testing
  - Use `browser_snapshot` for accessibility-focused testing
  - Take screenshots with `browser_take_screenshot` for visual verification
  - Test critical user flows and interface interactions

## Task History

### Recent Tasks Summary
*(Minimal summaries of completed tasks for context in future sessions)*

- Initial setup: Configured Next.js 15 with Tailwind CSS v4, shadcn/ui components, and project structure
- Added purple gradient background: Implemented theme-aware purple gradient (light/dark modes) using OKLCH colors in globals.css
- Fixed OneQ logo visibility: Updated SVG to use CSS custom properties for theme-aware text color, maintaining teal gradient Q in both modes