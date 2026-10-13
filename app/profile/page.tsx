import Breadcrumbs from "@/components/ui/breadcrumbs";
import StoryBox from "@/components/ui/storyBox";
import { Heading } from "@/components/ui/typography";
import { requireUser } from "@/lib/auth";
import { fetchProfile } from "@/lib/endpoints/profiles";
import { AvatarUpload } from "./avatarUpload";
import { DisplayNameForm, EmailForm, PasswordForm } from "./profileForms";

const panel = "bg-dnd-bg border border-dnd-gold rounded-lg shadow-md p-6";

const ProfilePage = async ({ searchParams }: PageProps<"/profile">) => {
  const user = await requireUser();
  const profile = await fetchProfile(user.id);
  const { email, error } = await searchParams;
  const name = profile?.display_name || user.email!;

  return (
    <>
      <Breadcrumbs items={[{ label: "Profile" }]} />
      <Heading level={1}>Profile</Heading>

      {email === "confirmed" && (
        <StoryBox>
          {user.new_email ? (
            <p>
              One seal down. The clerk wants the other one too: confirm the
              link sent to {user.new_email} as well.
            </p>
          ) : (
            <p>
              The clerk scratches out the old address and writes in{" "}
              <span className="not-italic font-bold">{user.email}</span>. Your
              letters go there from now on.
            </p>
          )}
        </StoryBox>
      )}
      {error === "confirm" && (
        <p
          role="alert"
          className="mb-8 p-3 text-sm bg-dnd-accent-red/40 border-l-4 border-dnd-red"
        >
          That link is invalid or has expired. Request the change again.
        </p>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-[16rem_1fr] gap-10 items-start">
        <aside className={`${panel} flex flex-col items-center gap-4`}>
          <div className="relative w-40 h-40 bg-skeleton rounded-full overflow-hidden border-2 border-dnd-red group">
            {profile?.avatar_url && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={profile.avatar_url}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-300">
              <AvatarUpload />
            </div>
          </div>
          <p className="libre font-bold text-dnd-red-dark text-lg text-center">
            {name}
          </p>
          {profile?.role && (
            <p className="text-xs uppercase tracking-wider text-dnd-ink/60">
              {profile.role}
            </p>
          )}
        </aside>

        <div className="flex flex-col gap-8 min-w-0">
          <section className={panel}>
            <Heading level={3}>Display name</Heading>
            <DisplayNameForm current={profile?.display_name ?? ""} />
          </section>
          <section className={panel}>
            <Heading level={3}>Email</Heading>
            <EmailForm current={user.email!} pending={user.new_email ?? null} />
          </section>
          <section className={panel}>
            <Heading level={3}>Password</Heading>
            <PasswordForm />
          </section>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
