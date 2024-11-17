"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface LogoutButtonProps {
  className?: string;
  onLogoutSuccess?: () => void;
}

export default function LogoutButton({
  className = "",
  onLogoutSuccess,
}: LogoutButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Logout failed");
      }

      // Clear any client-side state if needed
      if (onLogoutSuccess) {
        onLogoutSuccess();
      }

      // Redirect to login page
      router.push("/login");
      location.reload();
    } catch (error) {
      console.error("Logout error:", error);
      // You might want to show an error message to the user
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={isLoading}
      className={`px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 ${className}`}
    >
      {isLoading ? "Logging out..." : "Logout"}
    </button>
  );
}
