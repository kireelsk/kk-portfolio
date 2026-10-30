export const presets = [
  { width: 320, height: 568 },
  { width: 375, height: 812 },
  { width: 390, height: 844 },
  { width: 430, height: 932 },
  { width: 640, height: 960 },
  { width: 768, height: 1024 },
  { width: 834, height: 1112 },
  { width: 1024, height: 768 },
  { width: 1280, height: 800 },
  { width: 1440, height: 900 },
  { width: 1536, height: 960 },
];

export const breakpoints = [
  { label: "sm", width: 640 },
  { label: "md", width: 768 },
  { label: "lg", width: 1024 },
  { label: "xl", width: 1280 },
  { label: "2xl", width: 1536 },
];

export type Preset = (typeof presets)[number];
