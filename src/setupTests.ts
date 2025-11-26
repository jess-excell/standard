// src/setupTests.js
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import mockInputNumber from './features/store/__tests__/mocks/mockInputNumber';
import mockNavigation from './features/store/__tests__/mocks/mockNavigation';

vi.mock("primereact/inputnumber", () => ({
    InputNumber: mockInputNumber
}));

vi.mock("react-router-dom", () => ({
    useNavigate: () => mockNavigation
}));

vi.mock("./features/store/utils/localStorage", () => ({
    getItem: vi.fn(() => null),
    setItem: vi.fn(),
}));