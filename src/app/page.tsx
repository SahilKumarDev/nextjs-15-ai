import { ModeToggle } from "@/components/ModeToggle";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen gap-4">
      <h1>Create next app</h1>
      <ModeToggle />
    </div>
  );
}
