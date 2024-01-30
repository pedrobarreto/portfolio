import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
  imageUrl?: string;
}

export function ArticleCard({ title, description, tags, link, imageUrl }: Props) {

  const cardStyle: React.CSSProperties = {
    backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingTop: "56.25%",
  };

  return (
    <Card id="articles" className="flex flex-col overflow-hidden border border-muted p-3">
      <CardHeader className="mb-4" style={cardStyle}></CardHeader>
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
        {description}
      </CardDescription>
      <CardContent className="mt-auto flex">
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag) => (
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
}
