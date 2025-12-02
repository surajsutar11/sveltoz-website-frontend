import { Component } from '@angular/core';

@Component({
  selector: 'app-success-stories-page',
  standalone: false,
  templateUrl: './success-stories-page.component.html',
  styleUrl: './success-stories-page.component.scss'
})
export class SuccessStoriesPageComponent {

  stories = [
    {
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
      category: "Technology Solutions",
      domain: "Agriculture",
      date: "14 November, 2025",
      title: "Drone-Based Crop Monitoring (AgriTech)",
      description:
        "Manual crop inspection was slow and physically demanding. AI-powered drones with multispectral cameras instantly identified crop health issues.",
      impact: [
        "Field inspection became 8× faster.",
        "Early detection of diseases and nutrient deficiencies.",
        "Better yield predictions and improved resource management."
      ]
    },

    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      category: "Technology Solutions",
      domain: "Manufacturing",
      date: "12 November, 2025",
      title: "SAP-Integrated Analytics Dashboard",
      description:
        "SAP lacked real-time visibility of production, supply chain, and inventory. The solution integrated SAP S/4HANA with Azure Data Lake and Power BI.",
      impact: [
        "Unified real-time operational monitoring.",
        "Improved forecasting and faster decision-making.",
        "Leadership gained access to data-backed insights."
      ]
    },

    {
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&q=80",
      category: "Technology Solutions",
      domain: "Enterprise Operations",
      date: "10 November, 2025",
      title: "Automated Document Processing with Azure AI",
      description:
        "Legacy OCR lacked accuracy and required heavy manual effort. Azure Document Intelligence with custom AI models enabled precise extraction.",
      impact: [
        "95% accuracy in document identification.",
        "Reduced manual work by 70%.",
        "Fully integrated with enterprise systems."
      ]
    },

    {
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      category: "Technology Solutions",
      domain: "Technology / SaaS",
      date: "09 November, 2025",
      title: "Cloud Modernization for SaaS Product",
      description:
        "An on-prem system struggled with scaling and performance. Azure migration introduced microservices, CI/CD, and auto-scaling.",
      impact: [
        "40% faster release cycles.",
        "Improved performance and availability.",
        "Reduced infrastructure costs."
      ]
    },

    {
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80", category: "AI & Machine Learning",
      domain: "BFSI (Insurance)",
      date: "07 November, 2025",
      title: "Insurance Lead Conversion Prediction",
      description:
        "Sales teams lacked visibility on high-potential leads. ML-based lead scoring predicted purchase behavior for improved engagement.",
      impact: [
        "Higher agent productivity and sales conversions.",
        "AI-driven marketing campaigns.",
        "Better customer engagement insights."
      ]
    },

    {
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      category: "Technology Solutions",
      domain: "Energy / Utilities",
      date: "06 November, 2025",
      title: "Drone & AI for Industrial Asset Inspection",
      description:
        "Manual inspection of power lines and assets was slow and error-prone. AI-powered drones performed automated damage detection.",
      impact: [
        "60% reduction in inspection time.",
        "Lower operational costs and risks.",
        "Immediate maintenance alerts for proactive repairs."
      ]
    },

    {
      image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1200&q=80", category: "Data & Analytics",
      domain: "Retail / Consumer Goods",
      date: "05 November, 2025",
      title: "Data Engineering & BI Modernization",
      description:
        "Scattered data sources and outdated reports limited insights. A modern data lake with Power BI unified analytics across departments.",
      impact: [
        "Unified data sources in a single platform.",
        "Faster analytics with improved data quality.",
        "Better customer segmentation and market insights."
      ]
    },

    {
  image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1200&q=80",
      category: "AI & Computer Vision",
      domain: "Manufacturing",
      date: "04 November, 2025",
      title: "AI-Powered Quality Detection in Manufacturing",
      description:
        "Manual defect inspection caused inconsistencies and rework. Computer vision models on edge cameras automated real-time defect detection.",
      impact: [
        "99% accuracy in defect identification.",
        "Reduced human involvement and rework.",
        "Higher product quality and faster production."
      ]
    }
  ];

}
