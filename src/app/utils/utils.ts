import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Team = {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
};

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  images: string[];
  tag?: string;
  team: Team[];
  link?: string;
};

import { notFound } from 'next/navigation';

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) {
    notFound();
  }

  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
    if (!fs.existsSync(filePath)) {
        notFound();
    }

    try {
        const rawContent = fs.readFileSync(filePath, "utf-8");
        const { data, content } = matter(rawContent);

        const metadata: Metadata = {
            title: data.title || "",
            publishedAt: data.publishedAt,
            summary: data.summary || "",
            image: data.image || "",
            images: data.images || [],
            tag: data.tag || [],
            team: data.team || [],
            link: data.link || "",
        };

        return { metadata, content };
    } catch (error) {
        console.error(`Error parsing YAML in file: ${filePath}`, error);
        throw error;
    }
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getPosts(customPath = ["", "", "", ""]) {
  const postsDir = path.join(process.cwd(), ...customPath);
  const posts = getMDXData(postsDir);
  return posts.sort((a, b) => new Date(b.metadata.publishedAt) - new Date(a.metadata.publishedAt)); // Sort by latest
}