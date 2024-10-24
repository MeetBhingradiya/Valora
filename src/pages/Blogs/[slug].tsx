import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import Link from "next/link";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypePrism from "rehype-prism-plus";
import { getAllMdx, getMdx } from "@App/lib/mdx";
import { MDXFrontMatter } from "@App/lib/types";
import { cx } from "@App/lib/utils";
import { Page } from "@/components/Page";
import { components } from "@/components/MDX";
import { Prose } from "@/components/Prose";
import remarkGfm from "remark-gfm";

interface ContextProps extends ParsedUrlQuery {
    slug: string;
}

interface PostProps {
    frontMatter: MDXFrontMatter;
    mdx: any;
    previous: MDXFrontMatter | null;
    next: MDXFrontMatter | null;
}

const Post: NextPage<PostProps> = ({ frontMatter, mdx, previous, next }) => {
    return (
        <>
            <Page author={""} privacy={""} views={0} likes={0} readtime={0} {...frontMatter}>
                {/* Main content rendering */}
                <Prose>
                    <MDXRemote {...mdx} components={components} />
                </Prose>

                {/* Navigation for Previous and Next Posts */}
                {(previous || next) && (
                    <nav
                        className={cx(
                            "flex my-5",
                            previous && next ? "justify-between" : "justify-center",
                            previous && next ? "gap-4" : "gap-0"
                        )}
                    >
                        {previous && (  
                            <div className="flex-1 text-left">
                                <Link
                                    href={`/Blogs/${previous?.slug}`}
                                    className="rounded-lg p-3 hover:bg-dark no-underline font-semibold text-primary hover:underline"
                                >
                                    &larr; {previous?.title}
                                </Link>
                            </div>
                        )}

                        {next && (
                            <div className="flex-1 text-right"> 
                                <Link
                                    href={`/Blogs/${next?.slug}`}
                                    className="rounded-lg p-3 hover:bg-dark no-underline font-semibold text-primary hover:underline"
                                >
                                    {next?.title} &rarr;
                                </Link>
                            </div>
                        )}
                    </nav>
                )}
            </Page>
        </>
    );
};

// Fetching the paths for all blog posts
export const getStaticPaths: GetStaticPaths = async () => {
    const mdxFiles = await getAllMdx();
    return {
        paths: mdxFiles.map((file) => ({
            params: { slug: file.frontMatter.slug },
        })),
        fallback: false,
    };
};

// Fetching the content and static props for the post
export const getStaticProps: GetStaticProps = async (context) => {
    const { slug } = context.params as ContextProps;
    const mdxFiles = await getAllMdx();
    const postIndex = mdxFiles.findIndex((p) => p.frontMatter.slug === slug);
    const post = mdxFiles[postIndex];
    const { frontMatter, content } = post;
    const mdxContent = await serialize(content, {
        mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypePrism],
        },
        scope: frontMatter,
    });
    return {
        props: {
            frontMatter,
            mdx: mdxContent,
            previous: mdxFiles[postIndex + 1]?.frontMatter || null,
            next: mdxFiles[postIndex - 1]?.frontMatter || null,
        },
    };
};

export default Post;
