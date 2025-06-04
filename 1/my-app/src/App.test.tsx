import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders all pricing plans", () => {
    render(<App />);
    expect(screen.getByText("Standard")).toBeInTheDocument();
    expect(screen.getByText("Pro")).toBeInTheDocument();
    expect(screen.getByText("Expert")).toBeInTheDocument();
  });

  test("renders subscribe buttons", () => {
    render(<App />);
    const buttons = screen.getAllByRole("button", { name: /subscribe/i });
    expect(buttons.length).toBe(3);
  });

  test("renders features for Standard plan", () => {
    render(<App />);
    expect(screen.getByText("50,000 Requests")).toBeInTheDocument();
    expect(screen.getByText("4 contributors")).toBeInTheDocument();
    expect(screen.getByText("Up to 3 GB storage space")).toBeInTheDocument();
  });
});
