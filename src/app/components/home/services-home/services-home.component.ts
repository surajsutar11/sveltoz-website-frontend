import { Component } from '@angular/core';

@Component({
  selector: 'app-services-home',
  standalone: false,
  templateUrl: './services-home.component.html',
  styleUrls: ['./services-home.component.scss']
})
export class ServicesHomeComponent {
services = [
    {
      title: ' AI / ML Solutions',
      points: [
        'Predictive Analytics & Forecasting Models',
        'Computer Vision & Image Recognition',
        'Natural Language Processing (NLP)',
        'Recommendation Systems & Personalization Engines',
        'Generative AI & Conversational Bots',
        'Model Deployment, Monitoring & Optimization'
      ]
    },
    {
      title: 'Drone Development',
      points: [
        'Custom Drone Design & Engineering',
        'Drone Software + Hardware Integration',
        'AI-Powered Object Detection & Tracking',
        'Industrial Drone Applications',
        'Agricultural Drone Solutions',
        'Drone Data Processing & Cloud Connectivity'
      ]
    },
    {
      title: ' Enterprise Software Development',
      points: [
        'Full-Stack Development (.NET Core + Angular)',
        'Cloud-Native & Microservices Architecture',
        'API Development & System Integration',
        'Custom ERP / CRM Application Development',
        'Application Modernization & Migration',
        'DevOps & CI/CD Automation'
      ]
    },
    {
      title: ' Data Engineering & Analytics',
      points: [
        'End-to-End Data Pipeline Design',
        'Big Data Processing (Spark, Databricks, Azure Synapse)',
        'Real-Time Dashboards & Visualization',
        'Data Lake & Warehouse Implementation',
        'Data Governance & Quality Frameworks',
        'Predictive & Prescriptive Business Analytics'
      ]
    },
    {
      title: 'Quality Assurance (QA) & Testing Services',
      points: [
        'Manual & Automated Testing (Selenium, Cypress, Playwright)',
        'API & Performance Testing',
        'Regression, Functional & UAT Testing',
        'Continuous Testing in CI/CD Pipelines',
        'Test Strategy Consulting & QA Process Automation',
        'Security & Compliance Testing'
      ]
    },
    {
      title: 'SAP Consulting & Implementation',
      points: [
        'SAP S/4HANA Implementation & Migration',
        'SAP Analytics Cloud (SAC) & BusinessObjects',
        'SAP Integration with AI/ML & Cloud Platforms',
        'Custom Module Development (FICO, MM, SD, PP)',
        'SAP Basis & Infrastructure Services',
        'Post-Implementation Support & Optimization'
      ]
    },
    {
      title: ' Cloud & Infrastructure Services',
      points: [
        'Cloud Strategy & Architecture (Azure, AWS, GCP)',
        'Serverless & Containerized Deployments',
        'Cloud Security & Compliance',
        'Backup, Disaster Recovery & Cost Optimization',
        'Infrastructure as Code (Terraform, ARM)',
        '24x7 Cloud Operations & Support'
      ]
    },
    {
      title: ' Automation & Digital Transformation',
      points: [
        'Robotic Process Automation (RPA)',
        'Business Workflow Automation',
        'Intelligent Document Processing (IDP)',
        'IoT Platform Integration',
        'AI-driven Predictive Maintenance',
        'Legacy System Modernization'
      ]
    },
    {
      title: ' Technology Consulting & Innovation',
      points: [
        'IT Strategy & Roadmap Design',
        'Solution Architecture Consulting',
        'Product Design & MVP Development',
        'Technology Feasibility & PoC Development',
        'Digital Maturity Assessment',
        'Innovation Labs & Emerging Tech R&D'
      ]
    }
  ];
}
