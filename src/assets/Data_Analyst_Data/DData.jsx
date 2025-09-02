
import { Award,BarChart3, Code, Database, TrendingUp } from 'lucide-react'

export const certifications = [
  { 
    title: "Python",
    issuer: "Be10x",
    date: "2025",
    description: "Advanced Python programming for data manipulation, analysis, and machine learning applications."
  },
  {
    title: "Power Bi",
    issuer: "Be10x",
    date: "2025",
    description: "Comprehensive data analysis course covering data cleaning, visualization, and statistical analysis."
  },
 
  {
    title: "SQL for Data Analysis",
    issuer: "Be10x",
    date: "2025",
    description: "Database querying and data extraction techniques for business intelligence and reporting."
  },
  {
    title: "Excel",
    issuer: "Be10x",
    date: "2025",
    description: "data organization, advanced formulas, pivot tables, and data visualization for business intelligence and reporting."
  }
];

export const skillGroups = [ 
  {
    title: "Programming Languages",
    description: "Core programming languages for data analysis and manipulation",
    icon: <Code size={32} className="text-white" />,
    items: [
      {
        name: "Python",
        description: "Data manipulation, analysis, and machine learning",
        icon: <Code size={20} className="text-white" />,
        level: 85
      },
      {
        name: "SQL",
        description: "Database querying and data extraction",
        icon: <Database size={20} className="text-white" />,
        level: 80
      },
      
    ]
  },
  {
    title: "Tools & Platforms",
    description: "Essential tools for data visualization and analysis",
    icon: <BarChart3 size={32} className="text-white" />,
    items: [
      {
        name: "Excel",
        description: "Spreadsheet analysis and financial modeling",
        icon: <TrendingUp size={20} className="text-white" />,
        level: 90
      },
      {
        name: "Power BI",
        description: "Business intelligence and interactive dashboards",
        icon: <BarChart3 size={20} className="text-white" />,
        level: 70
      },
      
      {
        name: "Jupyter Notebook",
        description: "Interactive data analysis and documentation",
        icon: <Code size={20} className="text-white" />,
        level: 85
      }
    ]
  }
];

export const journeySteps = [
  {
    title: "Learned Skills",
    description: "Mastered fundamental data analysis tools and programming languages",
    icon: <Code size={32} className="text-white" />,
    items: [
      { name: "Python", icon: <Code size={16} className="text-white" /> },
      { name: "SQL", icon: <Database size={16} className="text-white" /> },
      { name: "Excel", icon: <TrendingUp size={16} className="text-white" /> },
      { name: "Power BI", icon: <BarChart3 size={16} className="text-white" /> },
      
    ],
    details: [
      "Data cleaning and preprocessing techniques",
      "Statistical analysis and hypothesis testing",
      "Data visualization best practices",
      "Database design and optimization"
    ]
  },
  {
    title: "Worked on Projects",
    description: "Applied skills to real-world data analysis projects and dashboards",
    icon: <BarChart3 size={32} className="text-white" />,
    items: [
      { name: "Sales Analysis", icon: <TrendingUp size={16} className="text-white" /> },
      { name: "Customer Segmentation", icon: <Database size={16} className="text-white" /> },
      { name: "Inventory Optimization", icon: <BarChart3 size={16} className="text-white" /> },
      { name: "Financial Modeling", icon: <TrendingUp size={16} className="text-white" /> },
      { name: "Performance Dashboards", icon: <BarChart3 size={16} className="text-white" /> },
      { name: "Predictive Analytics", icon: <Code size={16} className="text-white" /> }
    ],
    details: [
      "Built interactive dashboards for stakeholders",
      "Created automated reporting systems",
      "Developed predictive models for business insights",
      "Presented findings to executive teams"
    ]
  },
  {
    title: "Continue on Learning",
    description: "Pursuing advanced certifications and machine learning skills",
    icon: <Award size={32} className="text-white" />,
    items: [
      { name: "Machine Learning", icon: <Code size={16} className="text-white" /> },
      { name: "Deep Learning", icon: <Code size={16} className="text-white" /> },
      
      { name: "NLP", icon: <BarChart3 size={16} className="text-white" /> },
      
      { name: "Data Engineering", icon: <TrendingUp size={16} className="text-white" /> }
    ],
    details: [
      "Advanced machine learning algorithms",
      
      
      "Data engineering and pipeline development"
    ]
  }
]



export const projects = [
    {
      title: "Blinkit Sales Data Analysis",
      description: "Conducted exploratory data analysis (EDA) on Blinkit sample dataset to uncover sales trends, customer patterns, and key performance insights using Python libraries.",
      tech: ["Python", "Pandas", "Numpy","Matplotlib","Seaborn"],
      github: "https://github.com/itsNV/blinkit-sales-analysis",
      
    },
    {
      title: "Flipkart Sales Analysis Dashboard",
      description: "Developed an interactive Power BI dashboard to analyze Flipkart’s sample dataset, uncovering key sales trends, customer behavior, and business insights for data-driven decision-making.",
      tech: ["Power BI", "Excel"],
      github: "https://github.com/itsNV/flipkart-sales-analysis",
      
    },
    {
      title: "SQL Database Management and Access Control Implementation",
      description: "Designed and managed a SQL database by implementing DDL, DML, and DCL operations, creating roles, users, stored procedures, functions, and views to enhance data security and operational efficiency.",
      tech: ["T-SQL", "SQL Server"],
      github: "https://github.com/itsNV/sql-data_management-system",
      
    }
  ];