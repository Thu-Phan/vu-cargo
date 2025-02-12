import { useParams, useNavigate } from "react-router-dom";
import { getArticleBySlug } from "../data/articles";
import ArticleDetailPage from "../components/ArticleDetailPage";

export default function ArticlePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    navigate("/blog");
    return null;
  }

  return (
    <ArticleDetailPage
      title={article.title}
      author={article.author}
      date={article.date}
      content={article.content}
      image={article.image}
    />
  );
}
