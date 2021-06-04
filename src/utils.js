export function getDetailsFromWeeklyRent(weekly) {
  let _base = parseInt(weekly);
  let _daily = _base / 7;
  let _monthly = _daily * 30;
  let _per_divident = _monthly;
  let _yearly = _daily * 365;

  const data = {
    base: _base,
    daily: _daily,
    monthly: _monthly,
    per_divident: _per_divident,
    yearly: _yearly,
  };

  return data;
}
