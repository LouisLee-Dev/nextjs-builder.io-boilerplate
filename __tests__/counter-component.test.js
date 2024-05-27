import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Navigation from "@/components/Navigation";

test("renders Builder.io page with custom component", async () => {
  const ServerNavigation = await Navigation();
  render(ServerNavigation);
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/Landing/i)).toBeInTheDocument();
});
