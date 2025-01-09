import { render, screen, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Input from "../core/ui/input/input";
import { expect, vi } from 'vitest';
import App from '../App';

afterEach(() => {
  vi.clearAllMocks();
});

test('renders the app', () => {
  const screen =render(<App />);
  const titleElement = screen.getByText(/Meli/i);
  expect(titleElement).toBeInTheDocument();
});

test("input component", async () => {
  const outputMock = vi.fn();
  render(
    <Input
      type="text"
      placeholder="Crea tu tarea"
      output={outputMock}
      update="Initial Task"
    />
  );

  const input = screen.getByPlaceholderText("Crea tu tarea");
  expect(input).toHaveValue("Initial Task");

  await userEvent.clear(input);
  await userEvent.type(input, "Test Task");

  expect(input).toHaveValue("Test Task");

  expect(outputMock).toHaveBeenCalledWith("Test Task");
});

test('add Task', async () => {

  const screen =render(<App />);
  const id = crypto.randomUUID();

  const taskForm = screen.getByTestId("task-input-form");
  const titleInput = taskForm.querySelector("input");
  const addButton = taskForm.querySelector('[type="submit"]');

  await userEvent.type(titleInput, `Test Task ${id}`);
  expect(titleInput).toHaveValue(`Test Task ${id}`);

  await userEvent.click(addButton);
  
  await waitFor(() => {
    const taskTitle = screen.getByText(`Test Task ${id}`);
    expect(taskTitle).toBeInTheDocument();
  });
});