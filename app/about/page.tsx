'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useLanguage } from '../../contexts/LanguageContext';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

// 定义团队成员和里程碑的类型
interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface Milestone {
  year: string;
  title: string;
  description: string;
}

export default function About() {
  const { t, locale } = useLanguage();
  
  // 使用状态来存储翻译后的数据
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  
  // 添加视图引用
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [milestonesRef, milestonesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [cultureRef, cultureInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // 定义动画变体
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // 当语言变化时更新内容
  useEffect(() => {
    // 团队成员数据
    const teamData = [
      {
        nameKey: 'about.team.member1.name',
        roleKey: 'about.team.member1.role',
        bioKey: 'about.team.member1.bio',
        image: '/images/qijun.jpg',
      },
      {
        nameKey: 'about.team.member2.name',
        roleKey: 'about.team.member2.role',
        bioKey: 'about.team.member2.bio',
        image: '/images/wangjian.jpg',
      },
      {
        nameKey: 'about.team.member3.name',
        roleKey: 'about.team.member3.role',
        bioKey: 'about.team.member3.bio',
        image: '/images/mennan.jpg',
      },
      {
        nameKey: 'about.team.member4.name',
        roleKey: 'about.team.member4.role',
        bioKey: 'about.team.member4.bio',
        image: '/images/lice.jpg',
      },
    ];
    
    // 里程碑数据
    const milestoneData = [
      {
        year: '2020',
        titleKey: 'about.milestones.milestone1.title',
        descriptionKey: 'about.milestones.milestone1.description',
      },
      {
        year: '2021',
        titleKey: 'about.milestones.milestone2.title',
        descriptionKey: 'about.milestones.milestone2.description',
      },
      {
        year: '2022',
        titleKey: 'about.milestones.milestone3.title',
        descriptionKey: 'about.milestones.milestone3.description',
      },
      {
        year: '2023',
        titleKey: 'about.milestones.milestone4.title',
        descriptionKey: 'about.milestones.milestone4.description',
      },
      {
        year: '2024',
        titleKey: 'about.milestones.milestone5.title',
        descriptionKey: 'about.milestones.milestone5.description',
      },
    ];
    
    // 翻译团队成员数据
    const translatedTeam = teamData.map(member => ({
      name: t(member.nameKey) || member.nameKey.split('.').pop() || '团队成员',
      role: t(member.roleKey) || member.roleKey.split('.').pop() || '职位',
      bio: t(member.bioKey) || member.bioKey.split('.').pop() || '个人简介',
      image: member.image
    }));
    
    // 翻译里程碑数据
    const translatedMilestones = milestoneData.map(milestone => ({
      year: milestone.year,
      title: t(milestone.titleKey) || milestone.titleKey.split('.').pop() || '里程碑',
      description: t(milestone.descriptionKey) || milestone.descriptionKey.split('.').pop() || '描述',
    }));
    
    setTeamMembers(translatedTeam);
    setMilestones(translatedMilestones);
  }, [t, locale]); // 添加locale作为依赖项，确保语言变化时重新执行
  
  return (
    <div>
      <Navbar />
      <div className="pt-20 bg-white dark:bg-gray-900">
        {/* 公司介绍 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div 
            ref={titleRef}
            initial="hidden"
            animate={titleInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              {t('about.title') || '关于我们'}
            </h1>
            <motion.p 
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              {t('about.description') || '上海栉云科技有限公司是一家专注于AI应用和智能体开发的高科技企业，致力于为企业和个人提供先进的人工智能解决方案。'}
            </motion.p>
          </motion.div>

          <motion.div 
            ref={missionRef}
            initial="hidden"
            animate={missionInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div variants={fadeInLeft} transition={{ duration: 0.8 }}>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t('about.mission.title') || '我们的使命'}
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                  {t('about.mission.description') || '通过先进的AI技术，让智能体成为人类的得力助手，提高工作效率，创造更多价值。'}
                </p>
              </motion.div>
              <motion.div variants={fadeInRight} transition={{ duration: 0.8, delay: 0.2 }}>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t('about.vision.title') || '我们的愿景'}
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                  {t('about.vision.description') || '成为全球领先的AI智能体解决方案提供商，推动人工智能技术的普及和应用。'}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* 发展历程 */}
        {/* <div className="bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <motion.div 
              ref={milestonesRef}
              initial="hidden"
              animate={milestonesInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {t('about.milestones.title') || '发展历程'}
              </h2>
              <motion.p 
                variants={fadeInUp}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              >
                {t('about.milestones.subtitle') || '我们的成长足迹'}
              </motion.p>
            </motion.div>

            <motion.div 
              className="mt-12 relative"
              variants={staggerContainer}
              initial="hidden"
              animate={milestonesInView ? "visible" : "hidden"}
            >
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div 
                    key={milestone.year} 
                    className="relative"
                    variants={fadeInUp}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center">
                      <motion.div 
                        className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold z-10"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {milestone.year}
                      </motion.div>
                      <div className="ml-6">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {milestone.title}
                        </h3>
                        <p className="mt-1 text-gray-600 dark:text-gray-300">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div> */}

        {/* 团队介绍 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div 
            ref={teamRef}
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {t('about.team.title') || '我们的团队'}
            </h2>
            <motion.p 
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              {t('about.team.subtitle') || '由一群充满激情和创造力的专业人士组成'}
            </motion.p>
          </motion.div>

          <motion.div
            ref={teamRef}
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center px-4"
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-full border-4 border-white dark:border-gray-800 shadow-md"
                  />
                </div>
                <div className="mt-4 space-y-3">
                  <p className="text-gray-600 dark:text-gray-400 italic text-sm md:text-base min-h-[3rem]">
                    "{member.bio}"
                  </p>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{member.name}</h3>
                    <p className="text-gray-500 dark:text-gray-500 text-sm">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 公司文化 */}
        <div className="bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <motion.div 
              ref={cultureRef}
              initial="hidden"
              animate={cultureInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {t('about.culture.title') || '公司文化'}
              </h2>
              <motion.p 
                variants={fadeInUp}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              >
                {t('about.culture.subtitle') || '我们的核心价值观'}
              </motion.p>
            </motion.div>

            <motion.div 
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              animate={cultureInView ? "visible" : "hidden"}
            >
              {/* 创新 */}
              <motion.div 
                className="card p-6"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <motion.div 
                  className="w-12 h-12 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary-600 dark:text-primary-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t('about.culture.value1.title') || '创新'}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {t('about.culture.value1.description') || '我们鼓励创新思维，不断探索AI技术的新可能性，推动行业发展。'}
                </p>
              </motion.div>

              {/* 协作 */}
              <motion.div 
                className="card p-6"
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <motion.div 
                  className="w-12 h-12 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary-600 dark:text-primary-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t('about.culture.value2.title') || '协作'}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {t('about.culture.value2.description') || '我们重视团队协作，相信集体智慧的力量，共同创造卓越的产品和服务。'}
                </p>
              </motion.div>

              {/* 责任 */}
              <motion.div 
                className="card p-6"
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <motion.div 
                  className="w-12 h-12 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary-600 dark:text-primary-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t('about.culture.value3.title') || '责任'}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {t('about.culture.value3.description') || '我们对技术和产品负责，确保AI的安全和道德使用，为社会创造积极价值。'}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 