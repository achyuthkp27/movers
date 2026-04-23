/**
 * SwiftMove® — Performance & Animation Configuration
 * Centralizes settings for animations, transitions, and performance optimization
 */

export const animationConfig = {
  // Animation durations (in seconds)
  duration: {
    fast: 0.25,
    normal: 0.4,
    slow: 0.6,
    slower: 0.8,
  },

  // Easing functions
  easing: {
    default: 'cubic-bezier(0.3, 0.4, 0, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    power3: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    power4: 'cubic-bezier(0.23, 1, 0.32, 1)',
  },

  // Stagger delays
  stagger: {
    small: 0.05,
    normal: 0.1,
    large: 0.15,
  },

  // Scroll trigger positions
  scrollTrigger: {
    topIn: 'top 80%',
    center: 'top 50%',
    bottomIn: 'top 20%',
  },
};

export const performanceConfig = {
  // Disable heavy animations on mobile
  mobileAnimationsEnabled: false,

  // Disable animations below this breakpoint (px)
  animationBreakpoint: 768,

  // Reduce particle count on low-end devices
  particleQuality: {
    high: 500,
    medium: 300,
    low: 100,
  },

  // Image optimization
  imageOptimization: {
    quality: 80,
    formats: ['webp', 'jpg'],
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  },

  // Lazy loading threshold (px)
  lazyLoadThreshold: 300,
};

export const accessibilityConfig = {
  // Respect user's motion preferences
  respectPreferredMotion: true,

  // Ensure sufficient color contrast
  minContrastRatio: 4.5,

  // Focus indicators
  focusOutlineWidth: 2,
  focusOutlineColor: 'var(--accent)',

  // Keyboard navigation support
  tabableElements: ['a', 'button', '[role="button"]', 'input', 'textarea', 'select'],
};

export const seoConfig = {
  // Base URL for canonical tags and sitemap
  baseUrl: process.env.NEXT_PUBLIC_BUSINESS_URL || 'https://swiftmove.local',

  // Default OG image (update with actual path)
  ogImage: 'https://swiftmove.local/og-image.jpg',

  // Social sharing
  social: {
    twitter: '@SwiftMove',
    facebook: 'swiftmove',
    instagram: 'swiftmove',
  },

  // Business information for schema
  businessInfo: {
    name: process.env.NEXT_PUBLIC_BUSINESS_NAME || 'SwiftMove®',
    phone: process.env.NEXT_PUBLIC_PHONE,
    email: process.env.NEXT_PUBLIC_EMAIL,
    rating: 4.8,
    reviewCount: 247,
  },
};
