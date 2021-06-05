export function getDetailsFromWeeklyRent(amount, period) {
  let _base = parseInt(amount);
  let _daily = _base / 7;
  let _monthly = _daily * 30;
  let _per_divident = _monthly;
  let _yearly = _daily * 365;

  const data = {
    base: _base.toFixed(2),
    daily: _daily.toFixed(2),
    monthly: _monthly.toFixed(2),
    per_divident: _per_divident.toFixed(2),
    yearly: _yearly.toFixed(2),
  };

  return data;
}
