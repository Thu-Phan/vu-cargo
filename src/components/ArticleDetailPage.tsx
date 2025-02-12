export default function ArticleDetailPage({ title, author, date, content, image }: {
  title: string;
  author: string;
  date: string;
  content: string;
  image: string;
}) {
  return (
    <div className="container mx-auto px-4 py-24">
      <article className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <div className="text-gray-600 text-sm">
            <span>{author}</span>
            <span className="mx-2">•</span>
            <span>{date}</span>
          </div>
        </div>
        
        <img
          src={image}
          alt={title}
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />
        
        <div className="prose max-w-none">
          {content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
}
