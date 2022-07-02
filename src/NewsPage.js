import { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "./components/NewsCard";

const NewsPage = () => {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [totalPages, setTotalPages] = useState(0);

	useEffect(() => {
		setIsLoading(true);
		const fetchData = async () => {
			try {
				const { data } = await axios.get("http://hn.algolia.com/api/v1/search?");
				const { hits, nbPages } = data;
				setArticles(hits);
				setTotalPages(nbPages);
			} catch (err) {
				console.log(err);
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, [])

	return (
		<div className="container">
			<h1>Hacker News</h1>
			<div className="news-container">
				{isLoading ? (
					<p>Loading...</p>
				) : (
						articles.map((article) => (
							<NewsCard article={article} key={article.objectID} />
						))
				)}
			</div>
		</div>
	);
};

export default NewsPage;