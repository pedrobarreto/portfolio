import React, { useEffect, useState } from 'react';
import { ProjectCard } from '@/components/project-card';
import { requestProjects, requestPosts, requestVideos } from '@/services/requests';
import { Section } from '@/components/ui/section';
import { ArticleCard } from './article-card';
import { VideoCard } from './video-card'; 
import LoadingSpinner from './loading-spinner';
import { useTabContext } from '@/contexts/tab-context';
import { useLanguage } from '@/contexts/language-context'; 

type Tab = {
  key: string;
  label: string;
};

export const TabsComponent: React.FC = () => {
  const { selectedTab, setSelectedTab } = useTabContext();
  const { language } = useLanguage(); 
  const [projects, setProjects] = useState<any[]>([]);
  const [posts, setPosts] = useState<any[]>([]);
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setSelectedTab('projects');
  }, [setSelectedTab]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (selectedTab === 'projects') {
        const projectsData = await requestProjects('/projects', { pagination: 1, language });
        setProjects(projectsData);
      } else if (selectedTab === 'articles') {
        const postsData = await requestPosts('/posts', { pagination: 1, language });
        setPosts(postsData);
      } else if (selectedTab === 'videos') {
        const videosData = await requestVideos('/videos', { pagination: 1, language });
        setVideos(videosData);
      }
      setLoading(false);
    };
    fetchData();
  }, [selectedTab, language]);

  const tabs: Tab[] = [
    { key: 'projects', label: language === 'pt' ? 'Projetos' : 'Projects' },
    { key: 'articles', label: language === 'pt' ? 'Artigos' : 'Articles' },
    { key: 'videos', label: language === 'pt' ? 'Vídeos' : 'Videos' },
  ];

  const renderContent = () => {
    switch (selectedTab) {
      case 'projects':
        return (
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project: any) => (
              <ProjectCard
                key={project.name}
                title={project.name}
                description={project.description}
                tags={project.tags}
                link={project.html_url}
              />
            ))}
          </div>
        );
      case 'articles':
        return (
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: any) => (
              <ArticleCard
                key={post.title}
                title={post.title}
                description={post.description}
                tags={post.tag_list}
                link={post.url}
                imageUrl={post.cover_image}
              />
            ))}
          </div>
        );
      case 'videos':
        return (
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((video: any) => (
              <VideoCard
                key={video.id}
                title={video.title}
                description={video.description}
                tags={video.tags}
                link={video.link}
                imageUrl={video.thumbnail.url}
                videoId={video.id}
              />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Section id="tabs">
      <div className="flex items-center mb-4">
        {tabs.map((tab, index) => (
          <React.Fragment key={tab.key}>
            <button
              className={`text-xl font-bold ${selectedTab === tab.key ? 'text-blue-500' : ''}`}
              onClick={() => setSelectedTab(tab.key)}
            >
              {tab.label}
            </button>
            {index !== tabs.length - 1 && <h2 className="text-xl font-bold mx-4">|</h2>}
          </React.Fragment>
        ))}
      </div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        renderContent()
      )}
    </Section>
  );
};
