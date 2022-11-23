import request from './request';

export async function getArticle() {
    return await request.get('api/article/admin')
}