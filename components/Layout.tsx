import Link from "next/link";
import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/"> Home</Link>
          </li>
          <li>
            <Link href="/blog/first-article">
              <a>First-article</a>
            </Link>
          </li>
          <li>
            <Link href="/blog/second-article">
              <a>Second-article</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <article>{children}</article>
      </div>
    </div>
  );
};

export default Layout;
