import Link from "next/link";
import { cx, slugify } from "@Lib/utils";

interface TagProps {
  href: string;
  children: string;
}

export function Tag ({ href, children }:any) {
  return (
    <Link
      href={href}
      className={cx(
        "inline-block text-sm py-0.5 px-2.5 rounded-full border hover:underline",
        "bg-gray-100 border-gray-200",
        "dark:bg-gray-800 dark:border-gray-700"
      )}
    >
      #{slugify(children)}
    </Link>
  );
};
