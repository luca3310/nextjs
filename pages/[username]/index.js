import { auth } from "../../lib/firebase";
import { signOut } from "firebase/auth";
import Link from "next/link";

export default function UserProfilePage({}) {
  return (
    <main>
      <h1>userprofile</h1>
      <Link href="/">
        <SignOutButton />
      </Link>
    </main>
  );
  function SignOutButton() {
    return <button onClick={() => signOut(auth)}>Sign Out</button>;
  }
}
