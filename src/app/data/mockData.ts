
// src/app/data/mockData.ts

export type AssetType = "KPI" | "Layout" | "Data_Viz" | "Story_Board";

export interface AssetTypeLabel {
  label: string;
  value: "Featured" | AssetType;
}

export interface BusinessQuestions {
  question: string;
  description: string;
}

export interface Asset {
  id: string;
  title: string;
  thumbnailUrl: string;
  assetLink: string; // Optional link to the asset
  type: AssetType | "Featured";
  shortDescription: string;
  tags?: string[]; // Optional tags for filtering
  completeDescription: string; // Optional detailed description
  isFavorite: boolean;
  kpiUsed?: string;
  kpiType?: string;
  pageNo?: number;
  isTrending: boolean;
  lastUpdated?: string;
  businessQuestions?: BusinessQuestions[];
  metricId?: string | null; // Just added key
  calculation?: string | null; // Just added key
}

export const mockAssets: Asset[] = [
  {
    id: "1",
    title: "Revenue Growth Q1",
    type: "KPI",
    shortDescription: "Quarterly revenue growth KPI",
    isFavorite: true,
    tags: ["comms", "coverage", "stakeholders"],
    lastUpdated: "2024-01-01",
    metricId: "REV-GROWTH-Q1-2024",
    assetLink: "https://example.com/Revenue_Growth_Q1",
    isTrending: true,
    completeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    thumbnailUrl: "https://placehold.co/60x60.png?text=KPI+Thumbnail",
    businessQuestions: [
      {
        question: "What does this metric indicate?",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        question: "How can this data drive decisions?",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }
    ],
  },
  {
    id: "11",
    title: "Revenue Growth Q1-1",
    type: "KPI",
    assetLink: "https://example.com/Revenue_Growth_Q1-1",
    tags: ["comms", "coverage", "stakeholders"],
    lastUpdated: "2024-01-01",
    shortDescription: "Quarterly revenue growth KPI",
    completeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    isFavorite: false,
    isTrending: true,
    thumbnailUrl: "https://placehold.co/60x60.png?text=KPI+Thumbnail",
    businessQuestions: [
      {
        question: "What does this metric indicate?",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        question: "How can this data drive decisions?",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }
    ],
  },
  {
    id: "2",
    title: "User Retention Dashboard",
    type: "Layout",
    assetLink: "https://example.com/User_Retention_Dashboard",
    tags: ["comms", "coverage", "stakeholders"],
    lastUpdated: "2024-01-01",
    kpiUsed:"1200",
    pageNo: 6,
    kpiType: "universal",
    shortDescription: "Tracks monthly active user retention",
    completeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    isFavorite: false,
    isTrending: true,
    thumbnailUrl: "https://placehold.co/60x60.png?text=Layout+Thumbnail",
  },
  {
    id: "22",
    title: "User Retention Dashboard-1",
    type: "Layout",
    tags: ["comms", "coverage", "stakeholders"],
    lastUpdated: "2024-01-01",
    kpiUsed:"1200",
    pageNo: 2,
    kpiType: "local",
    assetLink: "https://example.com/User_Retention_Dashboard-1",
    shortDescription: "Tracks monthly active user retention",
    completeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    isFavorite: false,
    isTrending: true,
    thumbnailUrl: "https://placehold.co/60x60.png?text=Layout+Thumbnail",
  },
  {
    id: "3",
    title: "Sales by Region",
    type: "Data_Viz",
    assetLink: "https://example.com/Sales_by_Region",
    shortDescription: "Interactive map showing regional sales",
    completeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    isFavorite: true,
    isTrending: true,
    lastUpdated: "2024-12-01",
    thumbnailUrl: "https://placehold.co/60x60.png?text=Data_Viz+Thumbnail",
  },
  {
    id: "4",
    title: "2024 Product Roadmap",
    type: "Story_Board",
    assetLink: "https://example.com/2024_Product_Roadmap",
    shortDescription: "Strategic presentation for stakeholders",
    completeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    isFavorite: false,
    isTrending: true,
    lastUpdated: "2025-10-01",
    thumbnailUrl: "https://placehold.co/60x60.png?text=Story_Board+Thumbnail",
  },
  {
    id: "5",
    title: "Customer Satisfaction Index",
    type: "KPI",
    assetLink: "https://example.com/Customer_Satisfaction_Index",
    tags: ["comms", "coverage", "stakeholders"],
    shortDescription: "Monthly CSI overview",
    completeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    isFavorite: false,
    isTrending: true,
    lastUpdated: "2023-10-01",
    thumbnailUrl: "https://placehold.co/60x60.png?text=KPI+Thumbnail",
    businessQuestions: [
      {
        question: "What does this metric indicate?",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        question: "How can this data drive decisions?",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }
    ],
  },
  {
    id: "51",
    title: "Customer Satisfaction growth Index1",
    type: "KPI",
    assetLink: "https://example.com/Customer_Satisfaction_growth_Index1",
    shortDescription: "Monthly CSI overview",
    tags: ["comms", "coverage", "stakeholders"],
    completeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    isFavorite: false,
    isTrending: true,
    lastUpdated: "2023-10-01",
    thumbnailUrl: "https://placehold.co/60x60.png?text=KPI+Thumbnail",
    businessQuestions: [
      {
        question: "What does this metric indicate?",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        question: "How can this data drive decisions?",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }
    ],
  },
  {
    id: "52",
    title: "Customer Satisfaction Index2",
    type: "KPI",
    tags: ["comms", "coverage", "stakeholders"],
    lastUpdated: "2024-01-01",
    assetLink: "https://example.com/Customer_Satisfaction_Index2",
    shortDescription: "Monthly CSI overview",
    completeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    isFavorite: false,
    isTrending: true,
    thumbnailUrl: "https://placehold.co/60x60.png?text=KPI+Thumbnail",
    businessQuestions: [
      {
        question: "What does this metric indicate?",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        question: "How can this data drive decisions?",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }
    ],
  },
{
  id: "6",
  title: "Weekly Sales Growth",
  type: "KPI",
    lastUpdated: "2024-01-01",
  assetLink: "https://example.com/Weekly_Sales_Growth",
  shortDescription: "Tracks weekly sales increase",
    completeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  isFavorite: false,
  isTrending: false,
  thumbnailUrl: "https://placehold.co/60x60.png?text=KPI+Thumbnail"
},
{
  id: "7",
  title: "User Engagement Layout",
  type: "Layout",
    kpiUsed:"100",
    pageNo:36,
    kpiType: "universal",

    tags: ["comms", "coverage", "stakeholders"],
    lastUpdated: "2024-01-01",
  assetLink: "https://example.com/User_Engagement_Layout",
  shortDescription: "Visual layout for user engagement metrics",
    completeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  isFavorite: true,
  isTrending: false,
  thumbnailUrl: "https://placehold.co/60x60.png?text=Layout+Thumbnail"
},
{
  id: "8",
  title: "Sales Funnel Visualization",
  type: "Data_Viz",
  assetLink: "https://example.com/Sales_Funnel_Visualization",
  shortDescription: "Shows sales funnel breakdown",
  completeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  isFavorite: true,
  isTrending: true,
  thumbnailUrl: "https://placehold.co/60x60.png?text=Data_Viz+Thumbnail"
},
{
  id: "9",
  title: "Product Launch Timeline",
  type: "Story_Board",
  assetLink: "https://example.com/Product_Launch_Timeline",
  completeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  shortDescription: "Storyboard of major product launches",
  isFavorite: false,
  isTrending: false,
  thumbnailUrl: "https://placehold.co/60x60.png?text=Story_Board+Thumbnail"
},
{
  id: "10",
  title: "Executive Dashboard",
  type: "Featured",
  assetLink: "https://example.com/Executive_Dashboard",
  shortDescription: "High-level metrics overview for execs",
  completeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  isFavorite: true,
  isTrending: true,
  thumbnailUrl: "https://placehold.co/60x60.png?text=Featured+Thumbnail"
},

{
  id: "12",
  title: "Net Promoter Score",
  type: "KPI",
    lastUpdated: "2024-01-01",
  assetLink: "https://example.com/Net_Promoter_Score",
  shortDescription: "NPS trends over time",
  completeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  isFavorite: false,
  isTrending: true,
  thumbnailUrl: "https://placehold.co/60x60.png?text=KPI+Thumbnail",
  businessQuestions: [
      {
        question: "What does this metric indicate?",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        question: "How can this data drive decisions?",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }
    ],
},
{
  id: "13",
  title: "Conversion Rate Layout",
  type: "Layout",

    kpiUsed:"2200",
    pageNo: 4,
    kpiType: "local",
    tags: ["comms", "coverage", "stakeholders"],
    lastUpdated: "2024-01-01",
  assetLink: "https://example.com/Conversion_Rate_Layout",
  shortDescription: "Layout for tracking conversion rates",
  completeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  isFavorite: true,
  isTrending: false,
  thumbnailUrl: "https://placehold.co/60x60.png?text=Layout+Thumbnail"
},
{
  id: "14",
  title: "Churn Rate Visualization",
  type: "Data_Viz",
  assetLink: "https://example.com/Churn_Rate_Visualization",
  shortDescription: "Monthly churn visualization",
  isFavorite: true,
  completeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  isTrending: false,
  thumbnailUrl: "https://placehold.co/60x60.png?text=Data_Viz+Thumbnail"
},
{
  id: "15",
  title: "Q3 Strategy Plan",
  type: "Story_Board",
  assetLink: "https://example.com/Q3_Strategy_Plan",
  shortDescription: "Storyboard for Q3 planning",
  completeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  isFavorite: false,
  isTrending: true,
  thumbnailUrl: "https://placehold.co/60x60.png?text=Story_Board+Thumbnail"
},
{
  id: "16",
  title: "Company Overview",
  type: "Featured",
  assetLink: "https://example.com/Company_Overview",
  shortDescription: "Overview presentation for investors",
  completeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  isFavorite: false,
  isTrending: false,
  thumbnailUrl: "https://placehold.co/60x60.png?text=Featured+Thumbnail"
},

{
  id: "17",
  title: "Customer Acquisition KPI",
  type: "KPI",
    tags: ["comms", "coverage", "stakeholders"],
    lastUpdated: "2024-01-01",
  assetLink: "https://example.com/Customer_Acquisition_KPI",
  shortDescription: "Customer growth tracking",
  completeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  isFavorite: true,
  isTrending: false,
  thumbnailUrl: "https://placehold.co/60x60.png?text=KPI+Thumbnail",
  businessQuestions: [
      {
        question: "What does this metric indicate?",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        question: "How can this data drive decisions?",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }
    ],
},
{
  id: "18",
  title: "Revenue Layout Grid",
  type: "Layout",

    kpiUsed:"500",
    pageNo: 5,
    kpiType: "universal",
  assetLink: "https://example.com/Revenue_Layout_Grid",
  shortDescription: "Layout grid for regional revenue",
  completeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  isFavorite: false,
  isTrending: true,
  thumbnailUrl: "https://placehold.co/60x60.png?text=Layout+Thumbnail"
},
{
  id: "19",
  title: "Traffic Heatmap",
  type: "Data_Viz",
  assetLink: "https://example.com/Traffic_Heatmap",
  shortDescription: "Web traffic heatmap data",
  completeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  isFavorite: false,
  isTrending: true,
  thumbnailUrl: "https://placehold.co/60x60.png?text=Data_Viz+Thumbnail"
},
{
  id: "20",
  title: "Board Meeting Recap",
  type: "Story_Board",
  assetLink: "https://example.com/Board_Meeting_Recap",
  shortDescription: "Storyboard from last board meeting",
  completeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  isFavorite: false,
  isTrending: false,
  thumbnailUrl: "https://placehold.co/60x60.png?text=Story_Board+Thumbnail"
},
{
  id: "21",
  title: "Quarterly Summary Report",
  type: "Featured",
  assetLink: "https://example.com/Quarterly_Summary_Report",
  shortDescription: "Featured report with KPIs and visuals",
  completeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  isFavorite: true,
  isTrending: true,
  thumbnailUrl: "https://placehold.co/60x60.png?text=Featured+Thumbnail"
},

{
  id: "23",
  title: "Team Productivity Score",
  type: "KPI",
  shortDescription: "Tracks team productivity metrics",
  isFavorite: false,
  assetLink: "https://example.com/Team_Productivity_Score",
  isTrending: true,
  thumbnailUrl: "https://placehold.co/60x60.png?text=KPI+Thumbnail",
  completeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  businessQuestions: [
      {
        question: "What does this metric indicate?",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        question: "How can this data drive decisions?",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }
    ],
},
{
  id: "24",
  title: "UX Audit Layout",
  type: "Layout",

    kpiUsed:"100",
    pageNo: 2,
    kpiType: "local",
  assetLink: "https://example.com/UX_Audit_Layout",
  shortDescription: "UX layout for audit reports",
  completeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  isFavorite: true,
  isTrending: false,
  thumbnailUrl: "https://placehold.co/60x60.png?text=Layout+Thumbnail"
},
{
  id: "25",
  title: "Engagement Bubble Chart",
  type: "Data_Viz",
  assetLink: "https://example.com/Engagement_Bubble_Chart",
  shortDescription: "Bubble chart for user engagement",
  completeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  isFavorite: true,
  isTrending: false,
  thumbnailUrl: "https://placehold.co/60x60.png?text=Data_Viz+Thumbnail"
},
{
  id: "26",
  title: "Customer Journey Map",
  type: "Story_Board",
  assetLink: "https://example.com/Customer_Journey_Map",
  shortDescription: "Storyboard for customer touchpoints",
  completeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  isFavorite: true,
  isTrending: true,
  thumbnailUrl: "https://placehold.co/60x60.png?text=Story_Board+Thumbnail"
},
{
  id: "27",
  title: "Investor Highlights",
  type: "Featured",
  assetLink: "https://example.com/Investor_Highlights",
  shortDescription: "Featured slides for investor relations",
  completeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  isFavorite: true,
  isTrending: false,
  thumbnailUrl: "https://placehold.co/60x60.png?text=Featured+Thumbnail"
}

];
