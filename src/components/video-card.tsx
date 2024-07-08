import React from 'react';
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlayCircle } from 'lucide-react';

interface Props {
  title: string;
  description: string;
  tags: string[];
  link: string;
  imageUrl: string;
  videoId: string;
}

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

export const VideoCard: React.FC<Props> = ({ title, description, tags, link, imageUrl, videoId }) => {
  const cardStyle: React.CSSProperties = {
    backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    paddingTop: "56.25%",
  };

  const openVideo = (videoId: string) => {
    const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
    window.open(youtubeUrl, '_blank');
  };

  return (
    <Card id="videos" className="flex flex-col overflow-hidden border border-muted p-3">
      <CardHeader className="mb-4 relative" style={cardStyle}>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer transition-colors duration-200 ease-in-out opacity-0 hover:opacity-100" onClick={() => openVideo(videoId)}>
          <PlayCircle className="text-white w-16 h-16 hover:text-gray-400 transition-colors duration-200 ease-in-out" />
        </div>
      </CardHeader>
      <CardTitle className="text-base mb-2">
        {link ? (
          <a href={link} target="_blank" className="inline-flex items-center gap-1 hover:underline">
            {title} <span className="size-1 rounded-full"></span>
          </a>
        ) : (
          title
        )}
      </CardTitle>
      <CardDescription className="font-mono text-xs mb-4">
        {truncateText(description, 200)} 
      </CardDescription>
      <CardContent className="mt-auto flex">
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.slice(0, 4).map((tag) => (
            <Badge
              className="px-2 py-1 text-[12px]"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
