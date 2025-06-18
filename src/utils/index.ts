export function debounce(
  func: any, 
  wait: number
): (...args: any[]) => void {
  let timeout: number | undefined;
  
  return function executedFunction(...args: any[]): void {
    const later = (): void => {
      clearTimeout(timeout);
      func(...args);
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}