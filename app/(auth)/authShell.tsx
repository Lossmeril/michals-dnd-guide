import Link from "next/link";
import Panel from "@/components/ui/panel";
import { Heading } from "@/components/ui/typography";
import { getDict } from "@/lib/i18n/server";
import StoryBox from "@/components/ui/storyBox";

interface AuthShellProps {
  title: string;
  /** The guard's lines, in a StoryBox */
  story: React.ReactNode;
  /** The way to the other auth page */
  switchText: string;
  switchLabel: string;
  switchHref: string;
  children: React.ReactNode;
}

/** The gate picture on the side, the guard's story and the form in the middle */
const AuthShell = async ({
  title,
  story,
  switchText,
  switchLabel,
  switchHref,
  children,
}: AuthShellProps) => {
  const t = (await getDict()).account;
  return (
  <div className="grid grid-cols-1 lg:grid-cols-[20rem_1fr] gap-10 items-start max-w-5xl mx-auto">
    <aside className="order-last lg:order-none bg-dnd-bg border border-dnd-red-dark rounded-lg shadow-md overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/img/auth/gate.webp"
        alt={t.gateAlt}
        className="w-full aspect-[4/3] object-cover"
      />
      <div className="p-5">
        <p className="text-sm text-dnd-ink/75 mb-2">{switchText}</p>
        <Link href={switchHref} className="button-link">
          {switchLabel} →
        </Link>
      </div>
    </aside>

    <div className="min-w-0">
      <Heading level={1} className="mb-4">
        {title}
      </Heading>
      {story}
      <Panel>{children}</Panel>
    </div>
  </div>
  );
};

/** The guard's lines, one paragraph each */
export const GuardStory: React.FC<{ lines: string[] }> = ({ lines }) => (
  <StoryBox>
    {lines.map((line) => (
      <p key={line}>{line}</p>
    ))}
  </StoryBox>
);

export default AuthShell;
