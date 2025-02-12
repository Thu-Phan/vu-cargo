import { useEffect } from 'react';

interface ArticleProps {
  title: string;
  author: string;
  date: string;
  content: string;
  image: string;
  onClose: () => void;
}

export default function ArticlePage({ title, author, date, content, image, onClose }: ArticleProps) {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-2xl font-bold mb-2">{title}</h1>
              <div className="text-gray-600 text-sm">
                <span>{author}</span>
                <span className="mx-2">•</span>
                <span>{date}</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          <img
            src={image}
            alt={title}
            className="w-full h-[400px] object-cover rounded-lg mb-6"
          />
          <div className="prose max-w-none">
            {content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
