import { vi } from "vitest";

const mock = vi.fn((path: string) => path);
export default mock;