import { promises as fs } from "fs";
import matter from "gray-matter";
import path from "path";

export interface PostInterface {
    slug: string,
    title: string,
    date: Date,
    markdown: string,
}

const getPosts = async () => {
    const postsDirectory = path.join(process.cwd(), 'posts')
    const filenames = await fs.readdir(postsDirectory)

    return await Promise.all (
        filenames.map(async (filename) => {
            const filePath = path.join(postsDirectory, filename)
            const fileContents = await fs.readFile(filePath, "utf8") // lê o conteúdo do arquivo na pasta de filepath
            const document = matter(fileContents) // faz o parse dos dados

            return {
                slug: filename.replace(/\.md$/, ""),
                title: document.data.title,
                date: document.data.date,
                markdown: document.content,
            }
        })
    )
}

export default getPosts;
