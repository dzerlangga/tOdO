import { ADD_ARTICLE } from "../constant/type";

export function addArticle(payload) {
    return { type:ADD_ARTICLE, payload }
};