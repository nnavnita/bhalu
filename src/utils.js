export const getDetailsFromWeeklyRent = (weekly) => {
  let _base = parseInt(weekly);
  let _daily = base / 7;
  let _monthly = daily * 30;
  let _per_divident = monthly;
  let _yearly = daily * 365;

  const data = {
    base: _base,
    daily: _daily,
    monthly: _monthly,
    per_divident: _per_divident,
    yearly: _yearly,
  };

  return data;
};
