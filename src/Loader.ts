import { json } from "react-router-dom";
import type { LoaderFunctionArgs } from "react-router-dom";
import env from "./environment";

const POSTS = []

export const loader = () => {
    fetch(`${env.url}/posts`)
    .then(response => response.json())
    .then(data => setPosts(data))
}