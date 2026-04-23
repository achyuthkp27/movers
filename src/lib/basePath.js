/** Returns the basePath — '/movers' on GitHub Pages, '' locally */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function assetPath(path) {
  return `${basePath}${path}`;
}

export default basePath;
