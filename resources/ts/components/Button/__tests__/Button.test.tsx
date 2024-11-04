import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";

import Button from "../Button";

test("Buttonに文字が表示されること", async () => {
	render(<Button>Button</Button>);

	expect(screen.getByText("Button")).toBeTruthy();
});

test("ボタンの背景色がしろであること", async () => {
	render(<Button>Button</Button>);
	const button = screen.getByRole("button");

	expect(button).toHaveStyle("background-color: rgb(255, 255, 255)");
});
