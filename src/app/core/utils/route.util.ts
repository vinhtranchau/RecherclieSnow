export function relativePath(segments: string[]): string {
  return `${segments.join('/')}`;
}

export function absolutePath(segments: string[]): string {
  return `/${relativePath(segments)}`;
}
