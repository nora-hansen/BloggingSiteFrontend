import env from "./environment";

export const postLoader = async () => {
    const response = await fetch(`${env.url}/posts`)
    return await response.json()
}

