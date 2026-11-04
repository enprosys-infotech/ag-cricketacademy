import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { GalleryExperience } from "@/components/site/GalleryExperience";

describe("Gallery experience", () => {
  it("filters images and shows an empty state for categories without photos", () => {
    render(<GalleryExperience />);

    fireEvent.click(screen.getByRole("button", { name: "Training" }));
    expect(
      screen.getByRole("button", { name: "Open image: A training session" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Open image: The ground" }),
    ).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Matches" }));
    expect(screen.getByText("No match photos yet")).toBeInTheDocument();
  });

  it("opens the lightbox and advances to the next image", async () => {
    render(<GalleryExperience />);

    fireEvent.click(screen.getByRole("button", { name: "Open image: A training session" }));
    expect(await screen.findByRole("dialog")).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "Cricketers practising batting in a net lane" }),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Next image" }));
    expect(
      screen.getByRole("img", { name: "Cricket ground and pavilion in evening light" }),
    ).toBeInTheDocument();
  });
});
