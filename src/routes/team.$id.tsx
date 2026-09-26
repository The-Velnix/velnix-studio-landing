import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/team/$id")({
  beforeLoad: () => {
    throw redirect({ to: "/about" });
  },
  component: () => null,
});
