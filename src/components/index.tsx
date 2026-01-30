/**
 * React Components Entry Point
 *
 * This file exports all React components for the documentation site.
 * Components use @mieweb/ui as the base component library.
 */

// Re-export commonly used components from @mieweb/ui
export {
  // Theme
  ThemeProvider,
  ThemeToggle,
  useThemeContext,

  // Layout
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalClose,
  ModalTitle,

  // Forms
  Input,
  Button,

  // Feedback
  Spinner,
  Alert,

  // Data Display
  Badge,
  Tooltip,

  // Utils
  cn,
} from "@mieweb/ui";

// Export custom documentation components
export { Lightbox, type LightboxProps } from "./Lightbox";
export { SidebarSearch, type SidebarSearchProps } from "./SidebarSearch";
export { SearchModal, type SearchModalProps } from "./SearchModal";
