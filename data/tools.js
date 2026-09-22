export const tools = [
  {
    "slug": "ar-carousel3d",
    "name": "Ar_Carousel3D",
    "tagline": "3D Card Carousel & Dynamic Orbit Effector",
    "description": "An advanced 3D layout generator for Fusion that arranges image and video layers into rotating 3D carousels, cylinders, orbits, and arcs. Includes automatic front-card focus, optical depth blur, and depth dimming without setting up complex 3D scenes.",
    "features": [
      "8 Layout Presets: Cylinder, Ferris Wheel, Saturn Orbit, Arc, Cover Flow, Spiral, Oval, and Fan",
      "Active Card Focus: Smoothly enlarges the front-most card automatically",
      "Depth Dimming: Background cards dim gradually to establish cinematic focus",
      "Optical Depth Blur: Realistic blur falloff on distant cards",
      "Dynamic Slot Reordering: Re-arrange cards on the fly without rewiring nodes",
      "Painters Algorithm Depth Sorting for accurate layer occlusion",
      "Unlimited inputs via dynamic MultiMerge architecture",
      "Interactive on-screen 3D rotation and pivot controls"
    ],
    "price": "Available on Whop",
    "whopUrl": "https://whop.com",
    "previewImage": "/images/carousel3d-preview.jpg",
    "compatibility": "Fusion",
    "category": "3D & Motion",
    "version": "v1.0"
  },
  {
    "slug": "ar-proximity",
    "name": "Ar_Proximity",
    "tagline": "Proximity Effector & Dock Magnification",
    "description": "A physics-inspired effector that animates layers based on distance to a controller null. Recreate the iconic macOS dock wave magnification, magnetic repulsion, spotlight focus, and custom distance falloffs natively in 2D or radial space.",
    "features": [
      "macOS Dock Wave Magnification with automatic neighboring element displacement",
      "5 Effector Modes: Dock Wave, Magnetic Repel, Gravitational Attract, Spotlight Focus, Custom",
      "Multi-Axis Distance Calculation: X-Axis, Y-Axis, and 2D Euclidean Radial",
      "Dynamic Z-Order: Front-most active cards automatically sort on top",
      "Anchor Alignments: Bottom baseline, center pivot, and top drop",
      "Customizable null controller with interactive viewer handles",
      "Independent scale, rotation, opacity, and blur response curves",
      "Supports up to 16 input layers with auto-expanding node inputs"
    ],
    "price": "$20",
    "originalPrice": "$30",
    "discount": "33% OFF",
    "onSale": true,
    "whopUrl": "https://whop.com/youtube-8f73/arproximity/",
    "previewImage": "/images/proximity-preview.jpg",
    "compatibility": "Fusion",
    "category": "Animation",
    "version": "v1.0"
  },
  {
    "slug": "ar-tapered",
    "name": "AR-Tapered",
    "tagline": "Tapered Vector Strokes & Path Generator",
    "description": "Generate customizable organic tapered strokes, calligraphy paths, and dynamic line reveals directly inside Fusion. Full control over start/end tapers, stroke curvature, and line caps for clean graphic accents.",
    "features": [
      "Continuous tapered line generation with custom thickness curves",
      "Interactive start, middle, and end control points",
      "Smooth cubic bezier curvature interpolation",
      "Animatable trim and write-on parameters for dynamic reveals",
      "Square, round, and pointed cap profiles",
      "Hardware-accelerated rendering for real-time viewport feedback",
      "High-resolution vector rasterization at any resolution",
      "Lightweight fuse with low memory overhead"
    ],
    "price": "$5",
    "originalPrice": "$8",
    "discount": "38% OFF",
    "onSale": true,
    "whopUrl": "https://whop.com/youtube-8f73/artapered-line/",
    "previewImage": "/images/tapered-preview.jpg",
    "compatibility": "Fusion",
    "category": "Generators",
    "version": "v1.0"
  }
];

export function getToolBySlug(slug) {
  return tools.find((tool) => tool.slug === slug);
}

export function getAllSlugs() {
  return tools.map((tool) => tool.slug);
}
