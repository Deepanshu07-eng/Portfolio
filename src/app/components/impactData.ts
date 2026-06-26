// Machine-readable impact catalog driving the Impact constellation.
// Human source of truth: /IMPACT.md. Keep the two in sync.

// Machine-readable portfolio catalog driving the Impact constellation.

export type ImpactCategory =
  | "programming"
  | "analytics"
  | "backend"
  | "projects"
  | "learning"
  | "problemSolving"
  | "achievements";

export const CATEGORY_META: Record<
  ImpactCategory,
  { label: string; color: string }
> = {
  programming: { label: "Programming", color: "#22d3ee" },
  analytics: { label: "Data Analytics", color: "#10b981" },
  backend: { label: "Backend & Apps", color: "#a78bfa" },
  projects: { label: "Projects", color: "#eab308" },
  learning: { label: "Current Focus", color: "#60a5fa" },
  problemSolving: { label: "Problem Solving", color: "#2dd4bf" },
  achievements: { label: "Milestones", color: "#f5ca40" },
};

export const CATEGORY_ORDER: ImpactCategory[] = [
  "programming",
  "analytics",
  "backend",
  "projects",
  "learning",
  "problemSolving",
  "achievements",
];

export type Impact = {
  value: string;
  label: string;
  item: string;
  category: ImpactCategory;
  magnitude: 1 | 2 | 3 | 4 | 5;
  href?: string;
};

export const ITEM_META: Record<string, { client: string; context: string }> = {
  Python: {
    client: "Programming",
    context: "Primary language for data analysis, scripting, and backend development.",
  },
  SQL: {
    client: "Database",
    context: "Completed SQL fundamentals and currently advancing toward complex queries and analytics use cases.",
  },
  FastAPI: {
    client: "Backend",
    context: "Learning FastAPI to build scalable backend APIs for data-driven applications.",
  },
  Streamlit: {
    client: "Data Apps",
    context: "Learned Streamlit for building interactive data applications and dashboards.",
  },
  "Netflix Analysis": {
    client: "Project",
    context: "Exploratory data analysis project using Python, Pandas, and Matplotlib.",
  },
  "Student Result Analysis": {
    client: "Project",
    context: "Student performance analysis project using Python and data visualization.",
  },
  "Bus Route Optimizer": {
    client: "Major Project",
    context: "Smart school/college bus route optimization project using Python, SQL, and FastAPI.",
  },
  "Google Data Analytics": {
    client: "Certification",
    context: "Professional certificate journey focused on analytics workflow, SQL, spreadsheets, and visualization.",
  },
  "Coding Blocks DSA": {
    client: "Problem Solving",
    context: "Solved 200+ DSA problems and completed C++ DSA with 92% Certificate of Excellence.",
  },
  PowerBI: {
    client: "Business Intelligence",
    context: "Next focus area for building interactive dashboards and business insights.",
  },
  GitHub: {
    client: "Portfolio",
    context: "Projects and learning work organized through GitHub repositories.",
  },
};

export const impacts: Impact[] = [
  {
    value: "Python",
    label: "core programming language",
    item: "Python",
    category: "programming",
    magnitude: 5,
  },
  {
    value: "C++",
    label: "problem-solving language",
    item: "Coding Blocks DSA",
    category: "programming",
    magnitude: 4,
  },
  {
    value: "SQL",
    label: "database querying and analysis",
    item: "SQL",
    category: "programming",
    magnitude: 5,
  },
  {
    value: "Pandas",
    label: "data cleaning and analysis",
    item: "Netflix Analysis",
    category: "analytics",
    magnitude: 5,
  },
  {
    value: "NumPy",
    label: "numerical computing",
    item: "Netflix Analysis",
    category: "analytics",
    magnitude: 4,
  },
  {
    value: "Matplotlib",
    label: "data visualization",
    item: "Netflix Analysis",
    category: "analytics",
    magnitude: 4,
  },
  {
    value: "Excel",
    label: "spreadsheet analysis",
    item: "Google Data Analytics",
    category: "analytics",
    magnitude: 3,
  },
  {
    value: "Power BI",
    label: "next dashboard focus",
    item: "PowerBI",
    category: "analytics",
    magnitude: 3,
  },
  {
    value: "FastAPI",
    label: "backend APIs in progress",
    item: "FastAPI",
    category: "backend",
    magnitude: 4,
  },
  {
    value: "Streamlit",
    label: "interactive data apps",
    item: "Streamlit",
    category: "backend",
    magnitude: 4,
  },
  {
    value: "Git",
    label: "version control",
    item: "GitHub",
    category: "backend",
    magnitude: 3,
  },
  {
    value: "GitHub",
    label: "project publishing",
    item: "GitHub",
    category: "backend",
    magnitude: 3,
  },
  {
    value: "Netflix",
    label: "real-world EDA project",
    item: "Netflix Analysis",
    category: "projects",
    magnitude: 5,
    href: "https://github.com/Deepanshu07-eng/Python/tree/main/Real%20Life%20NetfliX%20Visualisation%20Project%20(Pandas%2C%20matplotlib)",
  },
  {
    value: "Student",
    label: "result analysis project",
    item: "Student Result Analysis",
    category: "projects",
    magnitude: 4,
  },
  {
    value: "Bus Route",
    label: "major project in progress",
    item: "Bus Route Optimizer",
    category: "projects",
    magnitude: 5,
  },
  {
    value: "SQL+API",
    label: "major project stack",
    item: "Bus Route Optimizer",
    category: "projects",
    magnitude: 4,
  },
  {
    value: "Adv SQL",
    label: "currently advancing",
    item: "SQL",
    category: "learning",
    magnitude: 5,
  },
  {
    value: "FastAPI",
    label: "currently learning",
    item: "FastAPI",
    category: "learning",
    magnitude: 4,
  },
  {
    value: "Power BI",
    label: "next exploration area",
    item: "PowerBI",
    category: "learning",
    magnitude: 3,
  },
  {
    value: "GDA",
    label: "Google Data Analytics journey",
    item: "Google Data Analytics",
    category: "learning",
    magnitude: 4,
  },
  {
    value: "200+",
    label: "DSA problems solved",
    item: "Coding Blocks DSA",
    category: "problemSolving",
    magnitude: 5,
  },
  {
    value: "DSA",
    label: "logic and optimization",
    item: "Coding Blocks DSA",
    category: "problemSolving",
    magnitude: 4,
  },
  {
    value: "92%",
    label: "Coding Blocks DSA score",
    item: "Coding Blocks DSA",
    category: "achievements",
    magnitude: 5,
  },
  {
    value: "B.Tech",
    label: "Computer Science Engineering",
    item: "Google Data Analytics",
    category: "achievements",
    magnitude: 4,
  },
  {
    value: "Portfolio",
    label: "personal website built and customized",
    item: "GitHub",
    category: "achievements",
    magnitude: 4,
  },
];