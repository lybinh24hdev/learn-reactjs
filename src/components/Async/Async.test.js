import { render, screen } from "@testing-library/react";
import Async from "./Async";


describe("Async component", () => {
  test('Renders posts if request succeeds', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
        json: async () => [{id: 'p1', title: 'Dummy post'}]
    })

    render(<Async />);

    const listItem = await screen.findAllByRole('listitem', {exact: false}, {timeout: 2000});
    expect(listItem).not.toHaveLength(0)
  });
});
