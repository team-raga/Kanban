interface ZennArticle {
  id: number;
  post_type: "Article";
  title: string;
  slug: string;
  comments_count: number;
  liked_count: number;
  body_letters_count: number;
  article_type: "tech";
  emoji: string;
  is_suspending_private: boolean;
  published_at: Date;
  body_updated_at: Date;
  source_repo_updated_at: null;
  pinned: boolean;
  path: string;
  user: {
    id: number;
    username: string;
    name: string;
    avatar_small_url: string;
  };
  publication: null;
}

export const getZennArticles = async () => {
  const response = await fetch('https://zenn.dev/api/articles?username=1000_x_t30');
  const data = await response.json();
  if(!data) return null
  const articles = data.articles as ZennArticle[];
  return articles
}
