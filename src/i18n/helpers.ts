/**
 * Helper functions for i18n data access
 * Provides utilities to retrieve translated data from the structured i18n arrays
 */

interface ProjectData {
  id: string;
  title?: string;
  subtitle?: string;
  description?: string;
  role?: string;
  problem?: string;
  features?: string[];
  contributions?: string[];
  status?: string;
}

/**
 * Get a project by ID from the projects array
 * @param projects - Array of projects from i18n
 * @param projectId - The project ID to find
 * @returns Project data object or undefined
 */
export function getProjectById(
  projects: ProjectData[],
  projectId: string
): ProjectData | undefined {
  return projects.find((p) => p.id === projectId);
}

/**
 * Get localized status label
 * @param status - Status key (e.g., "completed", "in-progress", "maintenance")
 * @param i18n - The i18n object
 * @returns Localized status label
 */
export function getStatusLabel(
  status: string,
  i18n: Record<string, any>
): string {
  const statusMap: Record<string, string> = {
    completed: i18n.COMMON?.STATUS_COMPLETED || i18n.PROYECTS?.STATUS_COMPLETED || "Completed",
    "in-progress": i18n.COMMON?.STATUS_IN_PROGRESS || i18n.PROYECTS?.STATUS_IN_PROGRESS || "In progress",
    maintenance: i18n.COMMON?.STATUS_MAINTENANCE || i18n.PROYECTS?.STATUS_MAINTENANCE || "Maintenance",
  };
  return statusMap[status] || status;
}
