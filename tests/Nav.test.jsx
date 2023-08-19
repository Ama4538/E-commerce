import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Nav from "../src/components/Nav";

describe('Nav component', () => {
  it('render Nav', () => {
    render(<Nav />)
    expect(screen.getByRole('navigation'), { name: 'navbar' })
  })
})