/**
 * React Components Entry Point
 *
 * This file exports all React components for the documentation site.
 * Components use @mieweb/ui as the base component library.
 */

// Export React for the mount helper
import React from "react";
import { createRoot } from "react-dom/client";
export { React, createRoot };

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
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,

  // Command Palette (for ⌘K search)
  CommandPaletteProvider,
  CommandPalette,
  CommandPaletteTrigger,
  useCommandPalette,

  // Sidebar
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarNav,
  SidebarNavItem,
  SidebarNavGroup,
  SidebarSearch,
  SidebarProvider,
  SidebarToggle,
  useSidebar,

  // Navigation
  Breadcrumb,
  BreadcrumbItem,

  // Forms
  Input,
  Button,
  Checkbox,
  Switch,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,

  // Feedback
  Spinner,
  Alert,
  Toast,
  ToastProvider,
  useToast,
  Skeleton,

  // Data Display
  Badge,
  Tooltip,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,

  // Dropdown
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,

  // AI Components
  AIChat,
  AIChatModal,
  AIChatTrigger,
  FloatingAIChat,
  AIMessageDisplay,
  MCPToolCallDisplay,
  SuggestedActions,

  // Utils
  cn,
} from "@mieweb/ui";

// Export brand configuration for Enterprise Health
export { enterpriseHealthBrand } from "@mieweb/ui/brands";

// Export custom documentation components
export { Lightbox, type LightboxProps } from "./Lightbox";
export {
  SidebarSearch as DocSidebarSearch,
  type SidebarSearchProps,
} from "./SidebarSearch";
export { SearchModal, type SearchModalProps } from "./SearchModal";
export {
  DocumentationApp,
  SearchTrigger,
  type DocumentationAppProps,
} from "./DocumentationApp";
export { AIDocAssistant, type AIDocAssistantProps } from "./AIDocAssistant";
export { OzwellChat, type OzwellChatProps } from "./OzwellChat";
