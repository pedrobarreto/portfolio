import React, { useState, useEffect } from 'react';
import { ProjectCard } from '@/components/project-card';
import { requestProjects, requestPosts } from '@/services/requests';
import { Section } from '@/components/ui/section';
import { ArticleCard } from './article-card';
import LoadingSpinner from './loading-spinner';

type Tab = {
  key: string;
  label: string;
};

export const TabsComponent: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('projects');
  const [projects, setProjects] = useState<any[]>([]);
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const projectsData = await requestProjects('/repos', { pagination: 1 });
      setProjects(projectsData);
      setLoading(false);
    };
    fetchData();
  }, []);

  const tabs: Tab[] = [
    { key: 'projects', label: 'Projects' },
    { key: 'articles', label: 'Articles' },
  ];

  const handleTabClick = async (tabKey: string) => {
    setSelectedTab(tabKey);
    if (tabKey === 'articles' && !posts.length) {
      setLoading(true)
      const postsData = await requestPosts('/posts', { pagination: 1 });
      setPosts(postsData);
      setLoading(false);
    }
  };

  const filteredProjects = projects.filter(project => project.description);

  return (
    <Section>
      <div id="tabs" className="flex items-center mb-4">
        {tabs.map((tab, index) => (
          <React.Fragment key={tab.key}>
            <button
              className={`text-xl font-bold ${selectedTab === tab.key ? 'text-blue-500' : ''}`}
              onClick={() => handleTabClick(tab.key)}
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
        <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
          {selectedTab === 'projects' &&
            filteredProjects.map((project) => (
              <ProjectCard
                key={project.name}
                title={project.name}
                description={project.description}
                tags={project.topics}
                link={project.html_url}
              />
            ))}
          {selectedTab === 'articles' &&
            posts.map((post) => (
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
      )}
    </Section>
  );
};
