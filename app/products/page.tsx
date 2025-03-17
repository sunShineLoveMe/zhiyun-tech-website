"use client";

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '../../contexts/LanguageContext';
import { useEffect, useState } from 'react';

// 定义产品类型
interface Product {
  name: string;
  description: string;
  features: string[];
  image: string;
}

export default function Products() {
  const { t, locale } = useLanguage();
  
  // 使用状态来存储翻译后的数据
  const [products, setProducts] = useState<Product[]>([]);
  
  // 当语言变化时更新内容
  useEffect(() => {
    // 产品数据
    const productData = [
      {
        nameKey: 'products.agent.name',
        descriptionKey: 'products.agent.description',
        featuresKeys: [
          'products.agent.features.nlp',
          'products.agent.features.multimodal',
          'products.agent.features.decision',
          'products.agent.features.automation',
          'products.agent.features.learning',
          'products.agent.features.integration',
        ],
        image: '/images/product-zhiagent.jpg',
      },
      {
        nameKey: 'products.assist.name',
        descriptionKey: 'products.assist.description',
        featuresKeys: [
          'products.assist.features.recommendation',
          'products.assist.features.qa',
          'products.assist.features.schedule',
          'products.assist.features.retrieval',
          'products.assist.features.generation',
          'products.assist.features.multilingual',
        ],
        image: '/images/product-zhiassist.jpg',
      },
      {
        nameKey: 'products.insight.name',
        descriptionKey: 'products.insight.description',
        featuresKeys: [
          'products.insight.features.visualization',
          'products.insight.features.trend',
          'products.insight.features.anomaly',
          'products.insight.features.prediction',
          'products.insight.features.report',
          'products.insight.features.api',
        ],
        image: '/images/product-zhiinsight.jpg',
      },
    ];
    
    // 翻译产品数据
    const translatedProducts = productData.map(product => ({
      name: t(product.nameKey) || product.nameKey.split('.').pop() || 'Product',
      description: t(product.descriptionKey) || '智能产品，提供先进的AI功能。',
      features: product.featuresKeys.map(key => t(key) || key.split('.').pop() || 'Feature'),
      image: product.image
    }));
    
    setProducts(translatedProducts);
  }, [t, locale]); // 添加locale作为依赖项，确保语言变化时重新执行
  
  return (
    <div>
      <Navbar />
      <div className="pt-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              {t('products.title') || '我们的产品'}
            </h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('products.subtitle') || '栉云科技提供一系列先进的AI产品和解决方案，满足不同行业和场景的需求'}
            </p>
          </div>

          <div className="mt-16 space-y-16">
            {products.map((product, index) => (
              <div
                key={product.name}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-primary-600 opacity-20 dark:opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-medium">
                      {product.name} {t('products.image') || '图片'}
                    </div>
                    {/* 实际项目中替换为真实图片 */}
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {product.name}
                  </h2>
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                    {product.description}
                  </p>
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {t('products.features') || '主要功能'}
                    </h3>
                    <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
                      {product.features.map((feature: string) => (
                        <li
                          key={feature}
                          className="flex items-center text-gray-600 dark:text-gray-300"
                        >
                          <svg
                            className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8">
                    <a
                      href="#"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    >
                      {t('common.learnMore') || '了解更多'}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 