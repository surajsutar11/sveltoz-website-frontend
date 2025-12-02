import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-al-ml-solutions',
  standalone: false,
  templateUrl: './al-ml-solutions.component.html',
  styleUrl: './al-ml-solutions.component.scss'
})
export class AlMlSolutionsComponent {
 constructor(private el: ElementRef, private renderer: Renderer2) {}
  // sections = [
  //   {
  //     title: 'AI / ML Solutions',
  //     image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80',
  //     subpoints: [
  //       'Predictive Analytics & Forecasting Models',
  //       'Computer Vision & Image Recognition',
  //       'Natural Language Processing (NLP)',
  //       'Recommendation Systems & Personalization',
  //       'Generative AI & Conversational Bots',
  //       'Model Deployment, Monitoring & Optimization'
  //     ]
  //   },
  //   {
  //     title: 'Drone Development',
  //     image: 'assets/images/ssplImg/petr-sevcovic-e5trpXlFhSs-unsplash.jpg',
  //     subpoints: [
  //       'Custom Drone Design & Engineering',
  //       'Drone Software + Hardware Integration',
  //       'AI-Powered Object Detection & Tracking',
  //       'Industrial Drone Applications',
  //       'Agricultural Drone Solutions',
  //       'Drone Data Processing & Cloud Connectivity'
  //     ]
  //   },
  //   {
  //     title: 'Enterprise Software Development',
  //     image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80',
  //     subpoints: [
  //       'Full-Stack Development (.NET + Angular)',
  //       'Cloud-Native & Microservices Architecture',
  //       'API Development & System Integration',
  //       'Custom ERP / CRM Application Development',
  //       'Application Modernization & Migration',
  //       'DevOps & CI/CD Automation'
  //     ]
  //   },
  //   {
  //     title: 'Data Engineering & Analytics',
  //     image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80',
  //     subpoints: [
  //       'End-to-End Data Pipeline Design',
  //       'Big Data Processing (Spark, Databricks)',
  //       'Real-Time Dashboards & Visualization',
  //       'Data Lake & Warehouse Implementation',
  //       'Data Governance & Quality Frameworks',
  //       'Predictive & Prescriptive Analytics'
  //     ]
  //   },
  //   {
  //     title: 'Quality Assurance (QA) & Testing',
  //     image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=80',
  //     subpoints: [
  //       'Manual & Automated Testing (Selenium, Cypress)',
  //       'API & Performance Testing',
  //       'Regression, Functional & UAT Testing',
  //       'Continuous Testing in CI/CD Pipelines',
  //       'Test Strategy Consulting & Automation',
  //       'Security & Compliance Testing'
  //     ]
  //   },
  //   {
  //     title: 'SAP Consulting & Implementation',
  //     image: 'https://images.unsplash.com/photo-1560264418-c4445382edbc?auto=format&fit=crop&w=1000&q=80',
  //     subpoints: [
  //       'SAP S/4HANA Implementation & Migration',
  //       'SAP Analytics Cloud (SAC) & BusinessObjects',
  //       'SAP Integration with AI/ML & Cloud Platforms',
  //       'Custom Module Development (FICO, MM, SD, PP)',
  //       'SAP Basis & Infrastructure Services',
  //       'Post-Implementation Support & Optimization'
  //     ]
  //   },
  //   {
  //     title: 'Cloud & Infrastructure Services',
  //     image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80',
  //     subpoints: [
  //       'Cloud Strategy & Architecture (Azure, AWS, GCP)',
  //       'Serverless & Containerized Deployments',
  //       'Cloud Security & Compliance',
  //       'Backup, DR & Cost Optimization',
  //       'Infrastructure as Code (Terraform, ARM)',
  //       '24x7 Cloud Operations & Support'
  //     ]
  //   },
  //   {
  //     title: 'Automation & Digital Transformation',
  //     image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1000&q=80',
  //     subpoints: [
  //       'Robotic Process Automation (UiPath, Power Automate)',
  //       'Business Workflow Automation',
  //       'Intelligent Document Processing (IDP)',
  //       'IoT Platform Integration',
  //       'AI-driven Predictive Maintenance',
  //       'Legacy System Modernization'
  //     ]
  //   },
  //   {
  //     title: 'Technology Consulting & Innovation',
  //     image: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=1000&q=80',
  //     subpoints: [
  //       'IT Strategy & Roadmap Design',
  //       'Solution Architecture Consulting',
  //       'Product Design & MVP Development',
  //       'Technology Feasibility & PoC Development',
  //       'Digital Maturity Assessment',
  //       'Innovation Labs & Emerging Tech R&D'
  //     ]
  //   }
  // ];

  // scrollRight() {
  //   const container = document.querySelector('.cards-container')!;
  //   container.scrollBy({ left: 500, behavior: 'smooth' });
  // }

  // scrollLeft() {
  //   const container = document.querySelector('.cards-container')!;
  //   container.scrollBy({ left: -500, behavior: 'smooth' });
  // }


  // ngAfterViewInit() {
  //   const container = this.el.nativeElement.querySelector('.cards-container');
  //   const cards = container.querySelectorAll('.card');

  //   const activateCenterCard = () => {
  //     let containerCenter = container.scrollLeft + container.offsetWidth / 2;
  //     let closestCard: HTMLElement | null = null;
  //     let closestDistance = Infinity;

  //     cards.forEach((card: HTMLElement) => {
  //       const cardCenter = card.offsetLeft + card.offsetWidth / 2;
  //       const distance = Math.abs(containerCenter - cardCenter);
  //       if (distance < closestDistance) {
  //         closestDistance = distance;
  //         closestCard = card;
  //       }
  //     });

  //     cards.forEach((card: HTMLElement) =>
  //       this.renderer.removeClass(card, 'active')
  //     );
  //     if (closestCard) this.renderer.addClass(closestCard, 'active');
  //   };

  //   container.addEventListener('scroll', () => {
  //     requestAnimationFrame(activateCenterCard);
  //   });

  //   activateCenterCard(); // initial call
  // }


  //  serviceSections = [
  //   {
  //     icon: '🤖',
  //     title: 'AI / ML Solutions',
  //     points: [
  //       { title: 'Predictive Analytics', description: 'Anticipate trends and business outcomes using intelligent forecasting.' },
  //       { title: 'Computer Vision', description: 'Real-time image analysis for automation and surveillance.' },
  //       { title: 'NLP Systems', description: 'Understand and respond to human language with contextual intelligence.' },
  //       { title: 'Recommendation Systems', description: 'Deliver personalized user experiences using ML.' },
  //       { title: 'Generative AI', description: 'Automate communication with human-like conversational bots.' },
  //       { title: 'Model Deployment & Monitoring', description: 'Deploy, track, and optimize ML models efficiently.' }
  //     ]
  //   },
  //   {
  //     icon: '🚁',
  //     title: 'Drone Development',
  //     points: [
  //       { title: 'Custom Drone Design', description: 'Industry-specific drones built from hardware to software.' },
  //       { title: 'Integration', description: 'Combine AI-based software with drone hardware for seamless flight.' },
  //       { title: 'AI Object Detection', description: 'Autonomously track and analyze objects in real time.' },
  //       { title: 'Industrial Applications', description: 'Deploy drones for inspection, logistics, and defense.' },
  //       { title: 'Agricultural Drones', description: 'Enable crop monitoring and yield optimization.' },
  //       { title: 'Data Processing', description: 'Connect aerial data with cloud analytics for decision-making.' }
  //     ]
  //   },
  //   {
  //     icon: '💻',
  //     title: 'Enterprise Software Development',
  //     points: [
  //       { title: '.NET + Angular Apps', description: 'Develop modern web applications using enterprise frameworks.' },
  //       { title: 'Microservices Architecture', description: 'Scalable and cloud-ready system architecture.' },
  //       { title: 'API Development', description: 'Unify systems with robust API integration.' },
  //       { title: 'Custom ERP/CRM', description: 'Tailored business apps for workflow efficiency.' },
  //       { title: 'Modernization', description: 'Upgrade legacy apps into modern digital ecosystems.' },
  //       { title: 'DevOps & CI/CD', description: 'Automate delivery pipelines for speed and reliability.' }
  //     ]
  //   },
  //   {
  //     icon: '📊',
  //     title: 'Data Engineering & Analytics',
  //     points: [
  //       { title: 'Data Pipelines', description: 'Build efficient, secure real-time data pipelines.' },
  //       { title: 'Big Data Processing', description: 'Leverage Spark, Databricks, and Azure Synapse.' },
  //       { title: 'Visualization', description: 'Deliver real-time dashboards with Power BI and Tableau.' },
  //       { title: 'Data Lakes', description: 'Centralize enterprise data for analytics.' },
  //       { title: 'Governance', description: 'Ensure data consistency and compliance.' },
  //       { title: 'Predictive Analytics', description: 'Provide foresight through data-backed insights.' }
  //     ]
  //   },
  //   {
  //     icon: '🧪',
  //     title: 'QA & Testing Services',
  //     points: [
  //       { title: 'Automated Testing', description: 'Ensure accuracy and usability with automation tools.' },
  //       { title: 'Performance Testing', description: 'Measure reliability under various loads.' },
  //       { title: 'Functional Testing', description: 'Guarantee seamless functionality before rollout.' },
  //       { title: 'Continuous Testing', description: 'Integrate QA into CI/CD for continuous validation.' },
  //       { title: 'QA Consulting', description: 'Optimize QA strategy and automation.' },
  //       { title: 'Security Testing', description: 'Protect data and meet compliance standards.' }
  //     ]
  //   },
  //   {
  //     icon: '💼',
  //     title: 'SAP Consulting & Implementation',
  //     points: [
  //       { title: 'S/4HANA Migration', description: 'Modernize operations with SAP’s real-time ecosystem.' },
  //       { title: 'SAP Analytics Cloud', description: 'Unlock insights with next-gen reporting.' },
  //       { title: 'AI + SAP Integration', description: 'Extend SAP with AI and hybrid cloud.' },
  //       { title: 'Custom Module Dev', description: 'FICO, MM, SD, PP modules tailored to workflows.' },
  //       { title: 'SAP Basis', description: 'Maintain and secure system infrastructure.' },
  //       { title: 'Post-Implementation', description: 'Continuous monitoring and optimization.' }
  //     ]
  //   },
  //   {
  //     icon: '☁️',
  //     title: 'Cloud & Infrastructure Services',
  //     points: [
  //       { title: 'Cloud Strategy', description: 'Define multi-cloud strategies aligned with business goals.' },
  //       { title: 'Serverless Deployments', description: 'Optimize workloads using Kubernetes and Docker.' },
  //       { title: 'Security & Compliance', description: 'Safeguard systems with IAM and encryption.' },
  //       { title: 'Backup & Recovery', description: 'Ensure business continuity and cost efficiency.' },
  //       { title: 'Infrastructure as Code', description: 'Automate infrastructure provisioning.' },
  //       { title: '24x7 Support', description: 'Global monitoring and support services.' }
  //     ]
  //   },
  //   {
  //     icon: '🧠',
  //     title: 'Automation & Digital Transformation',
  //     points: [
  //       { title: 'RPA', description: 'Automate repetitive processes with UiPath and Power Automate.' },
  //       { title: 'Workflow Automation', description: 'Streamline business operations intelligently.' },
  //       { title: 'Document Processing', description: 'Digitize and extract data from documents using AI.' },
  //       { title: 'IoT Integration', description: 'Connect devices for real-time operational insights.' },
  //       { title: 'Predictive Maintenance', description: 'Minimize downtime using AI-driven prediction.' },
  //       { title: 'System Modernization', description: 'Transform outdated systems into digital platforms.' }
  //     ]
  //   },
  //   {
  //     icon: '🎯',
  //     title: 'Technology Consulting & Innovation',
  //     points: [
  //       { title: 'IT Strategy', description: 'Align technology investments with business goals.' },
  //       { title: 'Architecture Consulting', description: 'Design scalable and secure ecosystems.' },
  //       { title: 'MVP Development', description: 'Rapidly build and validate innovative products.' },
  //       { title: 'PoC Development', description: 'Test emerging technologies effectively.' },
  //       { title: 'Digital Maturity', description: 'Assess and elevate digital readiness.' },
  //       { title: 'Innovation Labs', description: 'Experiment with frontier technologies.' }
  //     ]
  //   }
  // ];
  solutions = [
    {
      icon: 'fa-solid fa-chart-line',
      title: 'Predictive Analytics & Forecasting Models',
      description:
        'Anticipate future trends and business outcomes through intelligent, data-driven forecasting models.'
    },
    {
      icon: 'fa-solid fa-camera',
      title: 'Computer Vision & Image Recognition',
      description:
        'Enable real-time image analysis and object detection for automation, inspection, and surveillance use cases.'
    },
    {
      icon: 'fa-solid fa-language',
      title: 'Natural Language Processing (NLP)',
      description:
        'Build systems that understand, interpret, and respond to human language with contextual intelligence.'
    },
    {
      icon: 'fa-solid fa-user-check',
      title: 'Recommendation Systems & Personalization Engines',
      description:
        'Deliver personalized user experiences and product suggestions powered by machine learning.'
    },
    {
      icon: 'fa-solid fa-robot',
      title: 'Generative AI & Conversational Bots',
      description:
        'Leverage advanced AI models to create human-like interactions and automate customer communication.'
    },
    {
      icon: 'fa-solid fa-network-wired',
      title: 'Model Deployment, Monitoring & Optimization',
      description:
        'Seamlessly deploy, track, and fine-tune ML models to ensure accuracy, scalability, and performance.'
    }
  ];

}
