export interface Project {
  id: string;
  name: string;
  subtitle: string;
  useCase: string;
  tags: string[];
  stack: string[];
  github: string;
  status: "complete" | "in-progress" | "archived";
  highlight?: string; // key metric or result
}

export const projects: Project[] = [
  {
    id: "pump-sensor",
    name: "Pump Sensor Failure Prediction",
    subtitle: "Explainable ML for industrial predictive maintenance",
    useCase:
      "Predictive maintenance analysis of industrial pump sensors using RandomForest and PCA to detect machine failures from 50-sensor time series data. Includes SHAP-based explainability to surface which sensors drive failure predictions — making the model auditable for engineering teams.",
    highlight: "50-sensor time series · XAI",
    tags: ["Predictive Maintenance", "Explainable AI", "Time Series", "Anomaly Detection"],
    stack: ["Python", "RandomForest", "PCA", "SHAP", "scikit-learn", "Pandas"],
    github: "https://github.com/shreyashniv/Pump-sensor-model",
    status: "complete",
  },
  {
    id: "credit-risk",
    name: "Credit Risk Platform + LLM",
    subtitle: "LLM-augmented credit eligibility decisioning",
    useCase:
      "End-to-end credit risk platform that combines traditional ML risk scoring with LLM integration to assess credit eligibility based on applicant inputs. The LLM layer adds natural language reasoning on top of structured model outputs — bridging statistical risk assessment with explainable decisions.",
    highlight: "ML + LLM hybrid",
    tags: ["Credit Risk", "LLM Integration", "FinTech", "Risk Modelling"],
    stack: ["Python", "LLM", "scikit-learn", "Pandas", "FastAPI"],
    github: "https://github.com/shreyashniv",
    status: "complete",
  },
  {
    id: "youth-offending",
    name: "Youth Offending in the UK",
    subtitle: "Statistical modelling of UK youth crime patterns",
    useCase:
      "Statistical analysis and predictive modelling of UK youth crime data using R. Explores socioeconomic correlates of youth offending rates across regions, applies regression modelling and hypothesis testing to surface policy-relevant patterns in the data.",
    highlight: "Statistical inference · R",
    tags: ["Statistical Modelling", "Criminology", "Public Policy", "Regression"],
    stack: ["R", "ggplot2", "tidyverse", "Statistical Testing"],
    github: "https://github.com/shreyashniv",
    status: "complete",
  },
  {
    id: "nba-position",
    name: "NBA Player Position Prediction",
    subtitle: "Optimal position classification from performance stats",
    useCase:
      "ML classification model that predicts optimal player positions from NCAA/NBA performance statistics. Uses clustering and supervised classification to identify positional fit based on shooting, assist, rebound, and defensive metrics — bridging sports analytics with decision support.",
    highlight: "Sports analytics · Classification",
    tags: ["Sports Analytics", "Classification", "Clustering", "NCAA/NBA"],
    stack: ["Python", "scikit-learn", "Pandas", "Matplotlib", "KMeans"],
    github: "https://github.com/shreyashniv",
    status: "complete",
  },
  {
    id: "nhsflow",
    name: "NHSFlow Intelligence",
    subtitle: "RTT breach-risk intelligence across NHS England",
    useCase:
      "End-to-end analytics platform built on real NHS England RTT (Referral to Treatment) data to monitor waiting list pressure, flag breach-risk thresholds automatically, and surface longest-waiting patients — enabling data-driven intervention before SLA breaches occur.",
    highlight: "Real NHS RTT data · March 2026",
    tags: ["Healthcare Analytics", "RTT Data", "Risk Flagging", "KPIs"],
    stack: ["Python", "SQL", "PostgreSQL", "Power BI"],
    github: "https://github.com/shreyashniv",
    status: "complete",
  },
  {
    id: "smartmart",
    name: "SmartMart E-commerce Analytics",
    subtitle: "$263M in sales insights — raw CSV to Power BI",
    useCase:
      "End-to-end retail analytics pipeline processing 185,950 sales transactions. Designed a PostgreSQL star schema, built a Python ETL pipeline, and delivered 5 interactive Power BI dashboards revealing £263M in revenue across products, regions, and time.",
    highlight: "185,950 transactions · £263M revenue",
    tags: ["ETL", "Star Schema", "Sales Analytics", "DAX"],
    stack: ["Python", "PostgreSQL", "Power BI", "Pandas", "DAX"],
    github: "https://github.com/shreyashniv",
    status: "complete",
  },
];
