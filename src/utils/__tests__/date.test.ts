import { describe, expect, it } from 'vitest';
import { formatDateYmd, parseDateYmd } from '@/utils/date';

describe('Date Formatting: YYYY-MM-DD', () => {
  it('formats and parses date', () => {
    const date = parseDateYmd('2020-01-01');
    expect(formatDateYmd(date)).toBe('2020-01-01');
  });

  it('formats date with early time (unaffected by time zone)', () => {
    const date = new Date(2020, 1, 1, 0, 0, 1);
    expect(formatDateYmd(date), '2020-01-01');
  });

  it('formats date with late time (unaffected by time zone)', () => {
    const date = new Date(2020, 1, 1, 23, 30, 1);
    expect(formatDateYmd(date), '2020-01-01');
  });

  it('parses date', () => {
    expect(parseDateYmd('2020-01-01')).toEqual(new Date(2020, 1 - 1, 1));
  });
});
