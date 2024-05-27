import { builder } from "@builder.io/sdk";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function Navigation() {
  const links: any[] = await builder.getAll("nav-link", { prerender: false });
  return (
    <header className="w-full">
      <nav className="flex items-center space-x-2 px-[8rem]">
        {links.map((link, index) => (
          <a key={index} href={link.data.url} className="px-6 py-3 font-semibold hover:text-blue-500">
            {link.data.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
