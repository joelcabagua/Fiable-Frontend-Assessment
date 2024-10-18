import { renderHook } from '@testing-library/react';
import { useParseValue } from './useParseValue';

describe('useParseValue', () => {
  it('returns undefined for x, y, and direction with empty input', () => {
    const { result } = renderHook(() => useParseValue(''));

    expect(result.current.x).toBeUndefined();
    expect(result.current.y).toBeUndefined();
    expect(result.current.direction).toBeUndefined();
    expect(result.current.error).toBe('');
  });

  it('parses valid coordinates and direction', () => {
    const { result } = renderHook(() => useParseValue('1,1 NORTH'));

    expect(result.current.x).toBe(1);
    expect(result.current.y).toBe(1);
    expect(result.current.direction).toBe('NORTH');
    expect(result.current.error).toBe('');
  });

  it('returns error for invalid coordinates', () => {
    const { result } = renderHook(() => useParseValue('A,1 NORTH'));

    expect(result.current.x).toBeUndefined();
    expect(result.current.y).toBeUndefined();
    expect(result.current.direction).toBeUndefined();
    expect(result.current.error).toBe('Invalid coordinates.');
  });

  it('returns error for coordinates out of range', () => {
    const { result } = renderHook(() => useParseValue('5,1 NORTH'));

    expect(result.current.x).toBeUndefined();
    expect(result.current.y).toBeUndefined();
    expect(result.current.direction).toBeUndefined();
    expect(result.current.error).toBe('Coordinates out of range.');
  });

  it('returns error for missing direction', () => {
    const { result } = renderHook(() => useParseValue('1,1'));

    expect(result.current.x).toBe(1);
    expect(result.current.y).toBe(1);
    expect(result.current.direction).toBeUndefined();
    expect(result.current.error).toBe('Add direction');
  });

  it('returns error for invalid direction', () => {
    const { result } = renderHook(() => useParseValue('1,1 WES'));

    expect(result.current.x).toBe(1);
    expect(result.current.y).toBe(1);
    expect(result.current.direction).toBeUndefined();
    expect(result.current.error).toBe('Invalid direction');
  });
});
