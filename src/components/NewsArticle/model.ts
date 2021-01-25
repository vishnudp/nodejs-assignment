/**
 * @export
 * @interface NewsArticleModel
 * @extends {Document}
 */
export interface NewsArticleModel {

    title: string,
    description: string,
    url: string,
    publishedAt: string,
    source: string
}

export default NewsArticleModel;
