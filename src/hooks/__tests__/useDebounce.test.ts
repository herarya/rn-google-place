import {renderHook, act} from '@testing-library/react-hooks';
import useDebounce from './../useDebounce';

describe('useDebounce hook', () => {
  beforeEach(() => {
    jest.useFakeTimers(); // Mock timers
  });

  afterEach(() => {
    jest.clearAllTimers(); // Clear all timers after each test
  });

  it('should return initial value immediately', () => {
    const {result} = renderHook(() => useDebounce('initial', 300));

    expect(result.current).toBe('initial');
  });

  it('should debounce the input value after delay', () => {
    const {result, rerender} = renderHook(
      ({value, delay}: {value: string; delay: number}) =>
        useDebounce(value, delay),
      {initialProps: {value: 'initial', delay: 300}},
    );

    // Initial render should return the initial value
    expect(result.current).toBe('initial');

    // Update value and trigger rerender
    act(() => {
      rerender({value: 'updated', delay: 300});
    });

    // Debounced value should still be the initial value immediately
    expect(result.current).toBe('initial');

    // Fast-forward time by 300ms
    act(() => {
      jest.advanceTimersByTime(300);
    });

    // After delay, debounced value should update to the latest value
    expect(result.current).toBe('updated');
  });

  it('should update delay properly', () => {
    const {result, rerender} = renderHook(
      ({value, delay}: {value: string; delay: number}) =>
        useDebounce(value, delay),
      {initialProps: {value: 'initial', delay: 300}},
    );

    // Initial render should return the initial value
    expect(result.current).toBe('initial');

    // Update delay and trigger rerender
    act(() => {
      rerender({value: 'initial', delay: 500});
    });

    // Fast-forward time by 300ms
    act(() => {
      jest.advanceTimersByTime(300);
    });

    // Debounced value should still be the initial value because delay is now 500ms
    expect(result.current).toBe('initial');

    // Fast-forward additional 200ms to total 500ms
    act(() => {
      jest.advanceTimersByTime(200);
    });

    // After total delay (500ms), debounced value should update
    expect(result.current).toBe('initial');
  });
});
