import { Component } from '@angular/core';

@Component({
  selector: 'app-data-engineering',
  standalone: false,
  templateUrl: './data-engineering.component.html',
  styleUrl: './data-engineering.component.scss'
})
export class DataEngineeringComponent {
 dataEngineeringSolutions = [
  {
    title: "End-to-End Data Pipeline Design",
    description:
      "Build secure and efficient data pipelines to move, transform, and deliver insights in real time."
  },
  {
    title: "Big Data Processing (Spark, Databricks, Azure Synapse)",
    description:
      "Process and analyze massive datasets to unlock trends and opportunities."
  },
  {
    title: "Real-Time Dashboards & Visualization (Power BI, Tableau)",
    description:
      "Deliver actionable insights with intuitive and interactive dashboards."
  },
  {
    title: "Data Lake & Warehouse Implementation",
    description:
      "Centralize enterprise data for seamless storage, retrieval, and analytics."
  },
  {
    title: "Data Governance & Quality Frameworks",
    description:
      "Ensure data consistency, compliance, and reliability across all business units."
  },
  {
    title: "Predictive & Prescriptive Business Analytics",
    description:
      "Empower leaders with data-backed foresight and strategic recommendations."
  }
];

}
