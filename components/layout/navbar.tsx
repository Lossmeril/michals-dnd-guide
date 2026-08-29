"use client";

import React, { useMemo } from "react";
import {
  Container,
  Grid,
  GridContent,
  GridContentFull,
} from "./layoutPrimitives";

import { useAuth } from "@/lib/functions/auth/authContext";
import { usePlayers } from "@/lib/hooks/usePlayers";
import { getPlayerProfileByUserId } from "@/lib/functions/fetchers";
import Link from "next/link";

// =============================================================================
// UI pieces
// =============================================================================

interface UserDisplayProps {
  name: string;
  avatar?: string | null;
}

const UserDisplay: React.FC<UserDisplayProps> = ({ name, avatar }) => {
  const { signOut } = useAuth();

  const initial = name.trim().charAt(0).toUpperCase() || "?";

  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  return (
    <>
      <div
        className="flex items-center space-x-2 relative cursor-pointer"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        {avatar ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={avatar}
            alt={`${name}'s avatar`}
            className="w-8 h-8 rounded-full object-cover"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-dnd-bg border-2 border-dnd-red-dark flex items-center justify-center">
            <span className="text-sm text-dnd-ink font-bold serif">
              {initial}
            </span>
          </div>
        )}
        <span className="text-sm text-dnd-ink">{name}</span>

        {/* ------ DROPDOWN MENU */}
        <div
          className={[
            dropdownOpen ? "block" : "hidden",
            "absolute -left-1/2 -translate-x-2.5 top-16 z-10 shadow-xl",
          ].join(" ")}
        >
          <div className="bg-dnd-bg border-y-2 border-dnd-ink w-40  z-10 text-center">
            <a
              href="/profile"
              className="block px-4 py-2 text-sm text-dnd-red-dark hover:bg-dnd-red-light"
            >
              Profile settings
            </a>
            <a
              onClick={() => signOut()}
              className="block px-4 py-2 text-sm text-dnd-red-dark hover:bg-dnd-red-light"
            >
              Log out
            </a>
          </div>
          <div className="w-5 h-5 bg-dnd-ink absolute -top-5 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 -z-10" />
        </div>
      </div>
    </>
  );
};

const AuthPlaceholder = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 rounded-full bg-dnd-ink/50 animate-pulse"></div>

      <span className="w-16 h-4 bg-dnd-ink/50 animate-pulse rounded-sm"></span>
    </div>
  );
};

// =============================================================================
// Navbar
// =============================================================================

const Navbar: React.FC = () => {
  const { ready, user } = useAuth();
  const { players } = usePlayers();

  const player = useMemo(() => {
    if (!user) return null;
    return getPlayerProfileByUserId(user.id, players);
  }, [user, players]);

  // -------------------------------------
  // Derive display values (auth first, player second)
  // -------------------------------------
  const displayName = useMemo(() => {
    // Prefer player profile if available
    if (player?.display_name && player.display_name.trim().length > 0) {
      return player.display_name;
    }

    // Fallback to Supabase metadata (keep your key consistent across app!)
    const metaName =
      (user?.user_metadata?.display_name as string | undefined) ??
      (user?.email ? user.email.split("@")[0] : undefined);

    return metaName?.trim() ? metaName : "Player";
  }, [player, user]);

  const avatarUrl = player?.avatar ?? null;

  return (
    <nav className="navbar border-b border-dnd-red-dark h-14 flex items-center shadow-sm">
      <Container>
        <Grid>
          <GridContent>
            <GridContentFull className="w-full flex flex-row flex-nowrap justify-between items-center">
              <Link
                href="/"
                className="text-dnd-red-dark serif font-bold text-xl uppercase"
              >
                <p className="text-dnd-red-dark serif font-bold text-xl uppercase">
                  Michal&apos;s D&amp;D Ruleset
                </p>
              </Link>

              {/* Right side */}
              {!ready ? (
                <AuthPlaceholder />
              ) : !user ? (
                <a
                  href="/login"
                  className="text-sm text-dnd-red-dark hover:underline"
                >
                  Log in
                </a>
              ) : (
                <UserDisplay name={displayName} avatar={avatarUrl} />
              )}
            </GridContentFull>
          </GridContent>
        </Grid>
      </Container>
    </nav>
  );
};

export default Navbar;
