import { headlines_url, category, country_code } from '../config/rest_config';
import { newsAPIKey } from '../config/api_key';

export async function getArticles(category='general') {
    try {
        let articles = await fetch(`${headlines_url}?country=${country_code}&category=${category}&apiKey=${newsAPIKey}`);

        let result = await articles.json();
        articles = null;

        return result.articles;

    } catch (error) {
        throw error;
    }
}