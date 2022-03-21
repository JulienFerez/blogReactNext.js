import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Bienvenue sur Mon Blog ! </h1>
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

      <h1>Bienvenue sur Mon blog de voyage</h1>

      <p>
        First Article Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Rem accusamus iure quas laudantium consequatur optio quo nisi placeat
        quis voluptate soluta eveniet ea, minima, unde maiores similique maxime
        doloribus dignissimos. First Article Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Rem accusamus iure quas laudantium
        consequatur optio quo nisi placeat quis voluptate soluta eveniet ea,
        minima, unde maiores similique maxime doloribus dignissimos. First
        Article Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
        accusamus iure quas laudantium consequatur optio quo nisi placeat quis
        voluptate soluta eveniet ea, minima, unde maiores similique maxime
        doloribus dignissimos. First Article Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Rem accusamus iure quas laudantium
        consequatur optio quo nisi placeat quis voluptate soluta eveniet ea,
        minima, unde maiores similique maxime doloribus dignissimos. First
        Article Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
        accusamus iure quas laudantium consequatur optio quo nisi placeat quis
        voluptate soluta eveniet ea, minima, unde maiores similique maxime
        doloribus dignissimos. First Article Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Rem accusamus iure quas laudantium
        consequatur optio quo nisi placeat quis voluptate soluta eveniet ea,
        minima, unde maiores similique maxime doloribus dignissimos.
      </p>
    </div>
  );
}
