import { render, screen, cleanup, waitFor } from "@testing-library/react";
import FlashLight from "../flashlight";
import renderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";

afterEach(() => {
  cleanup();
});

test("should render flashlight component", () => {
  render(<FlashLight />);
  const flashlightElement = screen.getByTestId("flashlight-1");
  expect(flashlightElement).toBeInTheDocument();
});

test("should have off state", async () => {
  render(<FlashLight />);
  await waitFor(() => {
    expect(screen.getByTestId("flashlight-2").innerHTML).toBe("off");
  });
});

test("should have on state", async () => {
  render(<FlashLight />);
  const button = screen.getByTestId("flashlight-3");
  userEvent.click(button);
  const curState = await screen.findByTestId("flashlight-2");
  expect(curState.innerHTML).toBe("on");
});

test("should have blink state", async () => {
  render(<FlashLight />);
  const button = screen.getByTestId("flashlight-3");
  userEvent.click(button);
  userEvent.click(button);
  const curState = await screen.findByTestId("flashlight-2");
  expect(curState.innerHTML).toBe("blink");
});

test("matches snapshot", () => {
  const tree = renderer.create(<FlashLight />).toJSON();
  expect(tree).toMatchSnapshot();
});
