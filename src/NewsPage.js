import { useState, useEffect } from "react";
import axios from "axios";

const NewsPage = () => {
	const [article, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		const fetchData = async () => {
			try {
				const { data } = await axios.get("http://hn.algolia.com/api/v1/search?");
				console.log(data);
			} catch (err) {
				console.log(err);
			} finally {
				setIsLoading(true);
			}
		};
		fetchData();
	}, [])

	return (
		<div className="container">
			<h1>Hacker News</h1>
		</div>
	);
};

export default NewsPage;