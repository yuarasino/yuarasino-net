import { defineComponent } from "~/utils/preact.ts";
import { tw } from "~/utils/tailwind.ts";
import IconButton from "~/components/inlines/IconButton.tsx";
import ImageLink from "~/components/inlines/ImageLink.tsx";
import TextLink from "~/components/inlines/TextLink.tsx";
import IconLink from "~/components/inlines/IconLink.tsx";

export type HeaderProps = {
  show: () => void;
};

export default defineComponent<HeaderProps>(({ show }) => {
  return (
    <header class={tw`fixed inset-0 bottom-auto z-40`}>
      <nav class={tw`flex flex-col`}>
        <div class={tw`flex justify-between items-center h-16`}>
          <p class={tw`px-4`}>
            <ImageLink
              href="/#top"
              src="/images/logo.webp"
              alt="top"
            />
          </p>
          <p class={tw`px-5 split:hidden`}>
            <IconButton
              src="/icons/bars.svg"
              alt="open menu"
              onClick={show}
            />
          </p>
          <p class={tw`hidden gap-12 px-5 split:flex`}>
            <TextLink
              href="/#prof"
              label="prof"
            />
            <TextLink
              href="/#news"
              label="news"
            />
            <TextLink
              href="/#spec"
              label="spec"
            />
            <TextLink
              href="/#work"
              label="work"
            />
            <TextLink
              href="/info"
              label="info"
            />
            <TextLink
              href="/blog"
              label="blog"
            />
            <IconLink
              href="https://github.com/yuarasino/yuarasino-net"
              src="/icons/github.svg"
              alt={`github`}
              target="_blank"
            />
          </p>
        </div>
      </nav>
    </header>
  );
});
