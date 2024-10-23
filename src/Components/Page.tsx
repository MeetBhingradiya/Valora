import Head from "next/head";
import Image from "next/image";
import { onlyText } from "react-children-utilities";
import { formatDate } from "@App/lib/formatDate";
import siteConfig from "@App/data/siteConfig";
import { Prose } from "@App/components/Prose";
import { cx } from "@App/lib/utils";
import { Clock, Heart, Eye, Calendar, User } from "react-feather";

interface BlogOptions {
    // ^ Required Propertys
    title: string
    author: string
    privacy: string
    views: number
    likes: number
    readtime: number // ? in minutes

    // ^ Optional
    description?: string
    thumbnail?: string
    date?: string
    authorImage?: string
    tags?: string[]

    // ^ React By Default
    children?: React.ReactNode
}

export const Page: React.FC<BlogOptions> = ({
    date,
    title,
    description,
    thumbnail,
    children,
    author,
    privacy,
    views,
    likes,
    readtime,
    tags,
    authorImage
}) => {
    const metaTitle = onlyText(title);
    const metaDescription = description
        ? onlyText(description)
        : siteConfig.siteDescription;
    const metaThumbnail = thumbnail ? thumbnail : siteConfig.siteThumbnail;
    const customTitle = `${metaTitle} - ${siteConfig.siteName}`;

    return (
        <>
            <Head>
                <title>{customTitle}</title>
                <meta name="og:url" content={siteConfig.siteUrl} />
                <meta property="og:title" content={metaTitle} />
                <meta name="description" content={metaDescription} />
                <meta name="og:description" content={metaDescription} />
                <meta property="og:image" content={`${siteConfig.siteUrl}${metaThumbnail}`} />
            </Head>


            {/* Header Section */}
            <header className="my-5 dark:border-dark rounded-lg">
                {/* Thubnail */}
                {thumbnail && (
                    <Image
                        className="rounded-t-lg w-full h-auto object-cover"
                        src={metaThumbnail}
                        alt={metaTitle}
                        width={1200}
                        height={630}
                    />
                )}

                <div className="mt-5 flex items-center gap-3 text-lightText dark:text-darkText text-sm">
                    <span className="flex gap-2"><User className="h-5 w-5" />{author}</span>
                    •
                    {date && (
                        <span className="text-gray-400 flex gap-2">
                            <Calendar className="h-5 w-5" /> {formatDate(date)}
                        </span>
                    )}
                    •
                        <span className="flex gap-2 text-gray-400">
                            <Eye className="h-5 w-5" /> 
                            {views}
                            {/* <Heart className="h-5 w-5" />
                            {likes} */}
                        </span>
                        •
                        <span className="flex gap-2 text-gray-400">
                            <Clock className="h-5 w-5" />
                            {readtime} min
                        </span>
                </div>

                                {/* Title & Description */}
                                <h1 className="mt-5 text-4xl font-bold text-lightText dark:text-darkText">{title}</h1>
                {description && (
                    <p className="mt-4 mb-5 text-lightdarkText dark:text-darklightText leading-relaxed">
                        {typeof description === "string" ? description : description}
                    </p>
                )}
            </header>

            {/* Main Content */}
            <main className="prose dark:prose-dark max-w-none text-lightText dark:text-darkText">
                {children}
            </main>
        </>
    );
};

