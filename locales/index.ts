export type Locale = 'zh' | 'en';

type TranslationObject = {
  [key: string]: string | TranslationObject;
};

type Translations = {
  [key in Locale]: TranslationObject;
};

export const translations: Translations = {
  zh: {
    common: {
      home: '首页',
      products: '产品',
      technology: '技术',
      about: '关于我们',
      careers: '加入我们',
      demo: '演示',
      contact: '联系方式',
      tryDemo: '体验演示',
      learnMore: '了解更多',
      contactUs: '联系我们',
      theme: '主题',
      language: '语言',
      chat: '在线咨询',
      chatWithAI: 'AI助手'
    },
    hero: {
      title1: '智能体技术引领',
      title2: 'AI应用新时代',
      description: '栉云科技致力于开发先进的AI智能体，帮助企业和个人实现自动化、智能化的工作流程。',
      exploreProducts: '探索产品',
      freeTrial: '免费体验'
    },
    features: {
      title: '强大的智能体功能',
      subtitle: '我们的AI智能体拥有多种强大功能，能够满足各种复杂场景的需求',
      efficiency: '高效自动化',
      efficiencyDesc: '我们的智能体能够自动完成复杂任务，提高工作效率，减少人力成本。',
      security: '安全可靠',
      securityDesc: '采用先进的安全技术，确保数据隐私和系统安全，让您放心使用。',
      customization: '定制化解决方案',
      customizationDesc: '根据您的业务需求，提供量身定制的AI解决方案，满足特定场景需求。',
      naturalLanguage: {
        name: '自然语言理解',
        description: '我们的智能体能够理解复杂的自然语言指令，准确把握用户意图，提供精准的响应和服务。'
      },
      multimodal: {
        name: '多模态交互',
        description: '支持文本、图像、语音等多种交互方式，为用户提供更加自然、便捷的使用体验。'
      },
      intelligentDecision: {
        name: '智能决策',
        description: '基于先进的AI算法，能够进行复杂的推理和决策，帮助用户解决各种问题。'
      },
      automation: {
        name: '自动化执行',
        description: '能够自动执行各种任务，如信息检索、数据分析、内容生成等，大幅提高工作效率。'
      },
      continuousLearning: {
        name: '持续学习',
        description: '我们的智能体能够从用户交互中不断学习和优化，提供越来越个性化和精准的服务。'
      },
      systemIntegration: {
        name: '系统集成',
        description: '易于与现有系统和工具集成，通过API和插件机制，扩展智能体的能力和应用场景。'
      }
    },
    products: {
      title: '我们的产品',
      subtitle: '栉云科技提供一系列先进的AI产品和解决方案，满足不同行业和场景的需求',
      features: '主要功能',
      image: '图片',
      agent: {
        name: 'Agent',
        description: '智能体平台，能够自主完成复杂任务，提高工作效率。',
        features: {
          nlp: '自然语言理解',
          multimodal: '多模态交互',
          decision: '智能决策',
          automation: '自动化执行',
          learning: '持续学习',
          integration: '系统集成'
        }
      },
      assist: {
        name: 'Assist',
        description: '智能助手，为企业和个人提供全方位的智能服务。',
        features: {
          recommendation: '个性化推荐',
          qa: '智能问答',
          schedule: '日程管理',
          retrieval: '信息检索',
          generation: '内容生成',
          multilingual: '多语言支持'
        }
      },
      insight: {
        name: 'Insight',
        description: '数据分析平台，从海量数据中挖掘有价值的信息和洞察。',
        features: {
          visualization: '数据可视化',
          trend: '趋势分析',
          anomaly: '异常检测',
          prediction: '预测分析',
          report: '报告生成',
          api: 'API集成'
        }
      }
    },
    caseStudies: {
      title: '客户成功案例',
      subtitle: '我们的智能体解决方案已经在多个行业取得了显著成效',
      image: '图片',
      finance: {
        title: '金融行业智能客服',
        description: '为某大型银行开发的智能客服系统，能够处理90%以上的常见客户咨询，大幅减少人工客服的工作量，提高客户满意度。',
        stats: {
          satisfaction: '客户满意度',
          satisfactionValue: '95%',
          responseTime: '响应时间',
          responseTimeValue: '<1秒',
          costSaving: '成本节约',
          costSavingValue: '60%'
        }
      },
      manufacturing: {
        title: '制造业智能决策系统',
        description: '为制造企业开发的智能决策系统，通过分析生产数据和市场需求，优化生产计划和库存管理，提高生产效率和资源利用率。',
        stats: {
          efficiency: '生产效率提升',
          efficiencyValue: '35%',
          inventory: '库存优化',
          inventoryValue: '40%',
          accuracy: '决策准确率',
          accuracyValue: '92%'
        }
      },
      education: {
        title: '教育领域个性化学习助手',
        description: '为教育机构开发的个性化学习助手，能够根据学生的学习情况和特点，提供定制化的学习内容和辅导，提高学习效果。',
        stats: {
          learningEfficiency: '学习效率提升',
          learningEfficiencyValue: '45%',
          engagement: '学生参与度',
          engagementValue: '增加3倍',
          workload: '教师工作量减少',
          workloadValue: '50%'
        }
      }
    },
    contact: {
      title: '联系我们',
      subtitle: '无论您有任何问题或需求，我们都随时准备为您提供帮助和支持',
      info: '联系信息',
      address: '地址',
      addressValue: '上海市浦东软件园三林园一号楼',
      phone: '电话',
      phoneValue: '13761566975',
      email: '邮箱',
      emailValue: 'chris@zhiyuncloud.tech',
      followUs: '关注我们',
      name: '姓名',
      company: '公司',
      message: '留言',
      send: '发送消息',
      messageSent: '消息已发送',
      thankYou: '感谢您的留言，我们会尽快与您联系。',
      newMessage: '发送新消息',
      errorGeneric: '提交表单时发生错误，请稍后再试。',
      errorNetwork: '网络连接错误，请检查您的网络连接。',
      errorValidation: '请检查您的输入是否正确。'
    },
    demo: {
      title: '体验演示',
      subtitle: '亲身体验栉云科技的AI智能体，感受先进技术带来的便捷和效率',
      agentDemo: '智能体演示',
      agentDemoDesc: '与我们的AI智能体进行对话，体验自然语言理解和智能决策能力',
      inputPlaceholder: '输入你的问题...',
      send: '发送',
      moreDemo: '更多演示',
      moreDesc: '探索我们的其他产品演示',
      docAnalysis: '智能文档分析',
      docAnalysisDesc: '体验我们的智能文档分析功能，自动提取关键信息，生成摘要和见解。',
      dataViz: '数据可视化',
      dataVizDesc: '体验我们的数据可视化功能，将复杂数据转化为直观、易懂的图表和仪表盘。',
      automation: '智能流程自动化',
      automationDesc: '体验我们的智能流程自动化功能，自动执行重复性任务，提高工作效率。',
      startExperience: '开始体验',
      wantToKnowMore: '想了解更多？',
      interestedDesc: '如果你对我们的产品感兴趣，或者想了解更多信息，请联系我们的销售团队。'
    },
    technology: {
      title: '我们的技术',
      subtitle: '栉云科技拥有一系列先进的AI技术，为智能体提供强大的能力支持',
      coreCapabilities: '核心能力',
      researchAreas: '研究方向',
      researchDescription: '我们持续投入研究，推动AI技术的发展和创新',
      advantages: '技术优势',
      advantagesDescription: '我们的技术具有以下显著优势',
      nlp: {
        name: '自然语言处理',
        description: '我们的自然语言处理技术能够理解和生成人类语言，支持多语言交互，准确把握用户意图。',
        features: {
          semanticUnderstanding: '语义理解',
          sentimentAnalysis: '情感分析',
          intentRecognition: '意图识别',
          multilingualSupport: '多语言支持',
          contextualUnderstanding: '上下文理解',
          naturalLanguageGeneration: '自然语言生成'
        }
      },
      ml: {
        name: '机器学习',
        description: '我们的机器学习技术能够从数据中学习规律和模式，不断优化和提升智能体的能力。',
        features: {
          supervisedLearning: '监督学习',
          unsupervisedLearning: '无监督学习',
          reinforcementLearning: '强化学习',
          transferLearning: '迁移学习',
          federatedLearning: '联邦学习',
          continuousLearning: '持续学习'
        }
      },
      kg: {
        name: '知识图谱',
        description: '我们的知识图谱技术能够构建和管理结构化知识，为智能体提供丰富的背景知识和推理能力。',
        features: {
          entityRecognition: '实体识别',
          relationExtraction: '关系抽取',
          knowledgeFusion: '知识融合',
          knowledgeReasoning: '知识推理',
          knowledgeUpdate: '知识更新',
          multimodalKnowledge: '多模态知识'
        }
      },
      multimodal: {
        name: '多模态交互',
        description: '我们的多模态交互技术支持文本、图像、语音等多种交互方式，提供更自然、便捷的用户体验。',
        features: {
          speechRecognition: '语音识别',
          imageRecognition: '图像识别',
          videoAnalysis: '视频分析',
          multimodalFusion: '多模态融合',
          contextAwareness: '情境感知',
          adaptiveInteraction: '自适应交互'
        }
      },
      research: {
        llm: {
          name: '大型语言模型',
          description: '研究更高效、更可靠的大型语言模型，提升智能体的理解和生成能力。'
        },
        multiagent: {
          name: '多智能体协作',
          description: '研究多个智能体之间的协作机制，实现复杂任务的分解和协同完成。'
        },
        xai: {
          name: '可解释AI',
          description: '研究AI决策的可解释性，让用户理解智能体的决策过程和依据。'
        },
        safety: {
          name: 'AI安全与伦理',
          description: '研究AI技术的安全性和伦理问题，确保技术的负责任应用。'
        }
      },
      advantages: {
        performance: '高性能',
        performanceDesc: '我们的技术经过优化，能够高效处理大规模数据和复杂任务，提供快速响应。',
        reliability: '高可靠性',
        reliabilityDesc: '我们的技术经过严格测试和验证，确保在各种场景下稳定可靠地运行。',
        flexibility: '灵活扩展',
        flexibilityDesc: '我们的技术架构灵活可扩展，能够根据需求快速适应不同场景和规模的应用。'
      }
    }
  },
  en: {
    common: {
      home: 'Home',
      products: 'Products',
      technology: 'Technology',
      about: 'About Us',
      careers: 'Careers',
      demo: 'Demo',
      contact: 'Contact',
      tryDemo: 'Try Demo',
      learnMore: 'Learn More',
      contactUs: 'Contact Us',
      theme: 'Theme',
      language: 'Language',
      chat: 'Chat',
      chatWithAI: 'AI Assistant'
    },
    hero: {
      title1: 'AI Agent Technology Leading',
      title2: 'The New Era of AI Applications',
      description: 'Shanghai Zhiyun Technology Co., Ltd. is committed to developing advanced AI agents to help enterprises and individuals achieve automated and intelligent workflows.',
      exploreProducts: 'Explore Products',
      freeTrial: 'Free Trial'
    },
    features: {
      title: 'Powerful <span class="text-primary-600 dark:text-primary-400">Agent</span> Features',
      subtitle: 'Our AI agents have multiple powerful features to meet the needs of various complex scenarios',
      efficiency: 'Efficient Automation',
      efficiencyDesc: 'Our agents can automatically complete complex tasks, improve work efficiency, and reduce labor costs.',
      security: 'Safe and Reliable',
      securityDesc: 'Using advanced security technology to ensure data privacy and system security, allowing you to use it with confidence.',
      customization: 'Customized Solutions',
      customizationDesc: 'According to your business needs, we provide tailored AI solutions to meet specific scenario requirements.',
      naturalLanguage: {
        name: 'Natural Language Understanding',
        description: 'Our agents can understand complex natural language instructions, accurately grasp user intentions, and provide precise responses and services.'
      },
      multimodal: {
        name: 'Multimodal Interaction',
        description: 'Support multiple interaction methods such as text, images, and voice, providing users with a more natural and convenient experience.'
      },
      intelligentDecision: {
        name: 'Intelligent Decision-Making',
        description: 'Based on advanced AI algorithms, it can perform complex reasoning and decision-making to help users solve various problems.'
      },
      automation: {
        name: 'Automated Execution',
        description: 'Able to automatically execute various tasks, such as information retrieval, data analysis, content generation, etc., greatly improving work efficiency.'
      },
      continuousLearning: {
        name: 'Continuous Learning',
        description: 'Our agents can continuously learn and optimize from user interactions, providing increasingly personalized and precise services.'
      },
      systemIntegration: {
        name: 'System Integration',
        description: 'Easy to integrate with existing systems and tools, extending the capabilities and application scenarios of agents through API and plugin mechanisms.'
      }
    },
    products: {
      title: 'Our Products',
      subtitle: 'Zhiyun Technology provides a series of advanced AI products and solutions to meet the needs of different industries and scenarios',
      features: 'Key Features',
      image: 'Image',
      agent: {
        name: 'Agent',
        description: 'Intelligent agent platform that can autonomously complete complex tasks and improve work efficiency.',
        features: {
          nlp: 'Natural Language Understanding',
          multimodal: 'Multimodal Interaction',
          decision: 'Intelligent Decision-Making',
          automation: 'Automated Execution',
          learning: 'Continuous Learning',
          integration: 'System Integration'
        }
      },
      assist: {
        name: 'Assist',
        description: 'Intelligent assistant providing comprehensive smart services for enterprises and individuals.',
        features: {
          recommendation: 'Personalized Recommendations',
          qa: 'Intelligent Q&A',
          schedule: 'Schedule Management',
          retrieval: 'Information Retrieval',
          generation: 'Content Generation',
          multilingual: 'Multilingual Support'
        }
      },
      insight: {
        name: 'Insight',
        description: 'Data analysis platform that mines valuable information and insights from massive data.',
        features: {
          visualization: 'Data Visualization',
          trend: 'Trend Analysis',
          anomaly: 'Anomaly Detection',
          prediction: 'Predictive Analytics',
          report: 'Report Generation',
          api: 'API Integration'
        }
      }
    },
    caseStudies: {
      title: 'Customer Success Stories',
      subtitle: 'Our intelligent agent solutions have achieved significant results in multiple industries',
      image: 'Image',
      finance: {
        title: 'Financial Industry Intelligent Customer Service',
        description: 'An intelligent customer service system developed for a large bank, capable of handling over 90% of common customer inquiries, greatly reducing the workload of human customer service and improving customer satisfaction.',
        stats: {
          satisfaction: 'Customer Satisfaction',
          satisfactionValue: '95%',
          responseTime: 'Response Time',
          responseTimeValue: '<1s',
          costSaving: 'Cost Saving',
          costSavingValue: '60%'
        }
      },
      manufacturing: {
        title: 'Manufacturing Intelligent Decision System',
        description: 'An intelligent decision-making system developed for manufacturing enterprises, optimizing production plans and inventory management by analyzing production data and market demand, improving production efficiency and resource utilization.',
        stats: {
          efficiency: 'Production Efficiency Improvement',
          efficiencyValue: '35%',
          inventory: 'Inventory Optimization',
          inventoryValue: '40%',
          accuracy: 'Decision Accuracy',
          accuracyValue: '92%'
        }
      },
      education: {
        title: 'Education Personalized Learning Assistant',
        description: 'A personalized learning assistant developed for educational institutions, which can provide customized learning content and guidance according to students\' learning situations and characteristics, improving learning effectiveness.',
        stats: {
          learningEfficiency: 'Learning Efficiency Improvement',
          learningEfficiencyValue: '45%',
          engagement: 'Student Engagement',
          engagementValue: '3x Increase',
          workload: 'Teacher Workload Reduction',
          workloadValue: '50%'
        }
      }
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'No matter what questions or needs you have, we are always ready to provide you with help and support',
      info: 'Contact Information',
      address: 'Address',
      addressValue: 'Building 1, Sanlin Software Park, Pudong, Shanghai',
      phone: 'Phone',
      phoneValue: '13761566975',
      email: 'Email',
      emailValue: 'chris@zhiyuncloud.tech',
      followUs: 'Follow Us',
      name: 'Name',
      company: 'Company',
      message: 'Message',
      send: 'Send Message',
      messageSent: 'Message Sent',
      thankYou: 'Thank you for your message, we will contact you as soon as possible.',
      newMessage: 'Send New Message',
      errorGeneric: 'An error occurred while submitting the form, please try again later.',
      errorNetwork: 'Network connection error, please check your network connection.',
      errorValidation: 'Please check if your input is correct.'
    },
    demo: {
      title: 'Experience Demo',
      subtitle: 'Experience Zhiyun Technology\'s AI agents firsthand and feel the convenience and efficiency brought by advanced technology',
      agentDemo: 'Agent Demo',
      agentDemoDesc: 'Interact with our AI agent to experience natural language understanding and intelligent decision-making capabilities',
      inputPlaceholder: 'Enter your question...',
      send: 'Send',
      moreDemo: 'More Demos',
      moreDesc: 'Explore our other product demos',
      docAnalysis: 'Intelligent Document Analysis',
      docAnalysisDesc: 'Experience our intelligent document analysis function, automatically extract key information, generate summaries and insights.',
      dataViz: 'Data Visualization',
      dataVizDesc: 'Experience our data visualization function, transforming complex data into intuitive and easy-to-understand charts and dashboards.',
      automation: 'Intelligent Process Automation',
      automationDesc: 'Experience our intelligent process automation function, automatically execute repetitive tasks, and improve work efficiency.',
      startExperience: 'Start Experience',
      wantToKnowMore: 'Want to know more?',
      interestedDesc: 'If you are interested in our products or want to learn more information, please contact our sales team.'
    },
    technology: {
      title: 'Our Technology',
      subtitle: 'Zhiyun Technology has a series of advanced AI technologies to provide powerful capability support for intelligent agents',
      coreCapabilities: 'Core Capabilities',
      researchAreas: 'Research Areas',
      researchDescription: 'We continuously invest in research to promote the development and innovation of AI technology',
      advantages: 'Technical Advantages',
      advantagesDescription: 'Our technology has the following significant advantages',
      nlp: {
        name: 'Natural Language Processing',
        description: 'Our natural language processing technology can understand and generate human language, support multilingual interaction, and accurately grasp user intent.',
        features: {
          semanticUnderstanding: 'Semantic Understanding',
          sentimentAnalysis: 'Sentiment Analysis',
          intentRecognition: 'Intent Recognition',
          multilingualSupport: 'Multilingual Support',
          contextualUnderstanding: 'Contextual Understanding',
          naturalLanguageGeneration: 'Natural Language Generation'
        }
      },
      ml: {
        name: 'Machine Learning',
        description: 'Our machine learning technology can learn patterns from data and continuously optimize and enhance the capabilities of intelligent agents.',
        features: {
          supervisedLearning: 'Supervised Learning',
          unsupervisedLearning: 'Unsupervised Learning',
          reinforcementLearning: 'Reinforcement Learning',
          transferLearning: 'Transfer Learning',
          federatedLearning: 'Federated Learning',
          continuousLearning: 'Continuous Learning'
        }
      },
      kg: {
        name: 'Knowledge Graph',
        description: 'Our knowledge graph technology can build and manage structured knowledge, providing intelligent agents with rich background knowledge and reasoning capabilities.',
        features: {
          entityRecognition: 'Entity Recognition',
          relationExtraction: 'Relation Extraction',
          knowledgeFusion: 'Knowledge Fusion',
          knowledgeReasoning: 'Knowledge Reasoning',
          knowledgeUpdate: 'Knowledge Update',
          multimodalKnowledge: 'Multimodal Knowledge'
        }
      },
      multimodal: {
        name: 'Multimodal Interaction',
        description: 'Our multimodal interaction technology supports various interaction methods such as text, images, and voice, providing a more natural and convenient user experience.',
        features: {
          speechRecognition: 'Speech Recognition',
          imageRecognition: 'Image Recognition',
          videoAnalysis: 'Video Analysis',
          multimodalFusion: 'Multimodal Fusion',
          contextAwareness: 'Context Awareness',
          adaptiveInteraction: 'Adaptive Interaction'
        }
      },
      research: {
        llm: {
          name: 'Large Language Models',
          description: 'Research more efficient and reliable large language models to enhance the understanding and generation capabilities of intelligent agents.'
        },
        multiagent: {
          name: 'Multi-Agent Collaboration',
          description: 'Research collaboration mechanisms between multiple intelligent agents to achieve complex task decomposition and collaborative completion.'
        },
        xai: {
          name: 'Explainable AI',
          description: 'Research the explainability of AI decisions, allowing users to understand the decision-making process and basis of intelligent agents.'
        },
        safety: {
          name: 'AI Safety and Ethics',
          description: 'Research the safety and ethical issues of AI technology to ensure responsible application of technology.'
        }
      },
      advantages: {
        performance: 'High Performance',
        performanceDesc: 'Our technology is optimized to efficiently process large-scale data and complex tasks, providing fast responses.',
        reliability: 'High Reliability',
        reliabilityDesc: 'Our technology has been rigorously tested and validated to ensure stable and reliable operation in various scenarios.',
        flexibility: 'Flexible Scalability',
        flexibilityDesc: 'Our technology architecture is flexibly scalable and can quickly adapt to different scenarios and scales of applications according to requirements.'
      }
    }
  }
}; 