/** Returns the basePath configured in next.config.mjs */
const basePath = process.env.NODE_ENV === 'production' ? '/movers' : '';

export function assetPath(path) {
  return `${basePath}${path}`;
}

export default basePath;
