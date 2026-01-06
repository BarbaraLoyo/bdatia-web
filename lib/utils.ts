// Utility functions
export function cn(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}

// Scroll to section function
export function scrollToSection(href: string): void {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Format for accessibility
export function formatAriaLabel(text: string): string {
  return text.replace(/[^\w\s]/g, '').toLowerCase()
}
