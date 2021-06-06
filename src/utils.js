export function getRentBreakdown(amount, tenants, period) {
  let data = {};
  switch (period) {
    case "per day":
      data = getRentBreakdownDaily(amount, tenants);
      break;
    case "per week":
      data = getRentBreakdownWeekly(amount, tenants);
      break;
    case "per fortnight":
      data = getRentBreakdownFortnightly(amount, tenants);
      break;
    case "per month":
      data = getRentBreakdownMonthly(amount, tenants);
      break;
    case "per year":
      data = getRentBreakdownYearly(amount, tenants);
      break;
    default:
      console.log("invalid rent period");
  }

  return data;
}

export function getRentBreakdownWeekly(amount, tenants) {
  let _weekly = parseInt(amount);
  let _fortnightly = _weekly * 2;
  let _daily = _weekly / 7;
  let _monthly = _daily * 30;
  let _yearly = _daily * 365;

  const data = {
    daily: _daily.toFixed(2),
    weekly: _weekly.toFixed(2),
    fortnightly: _fortnightly.toFixed(2),
    monthly: _monthly.toFixed(2),
    yearly: _yearly.toFixed(2),
  };

  return data;
}

export function getRentBreakdownDaily(amount, tenants) {
  let _daily = parseInt(amount);
  let _weekly = _daily * 7;
  let _fortnightly = _weekly * 2;
  let _monthly = _daily * 30;
  let _yearly = _daily * 365;

  const data = {
    daily: _daily.toFixed(2),
    weekly: _weekly.toFixed(2),
    fortnightly: _fortnightly.toFixed(2),
    monthly: _monthly.toFixed(2),
    yearly: _yearly.toFixed(2),
  };

  return data;
}

export function getRentBreakdownFortnightly(amount, tenants) {
  let _fortnightly = parseInt(amount);
  let _weekly = _fortnightly / 2;
  let _daily = _weekly / 7;
  let _monthly = _daily * 30;
  let _yearly = _daily * 365;

  const data = {
    daily: _daily.toFixed(2),
    weekly: _weekly.toFixed(2),
    fortnightly: _fortnightly.toFixed(2),
    monthly: _monthly.toFixed(2),
    yearly: _yearly.toFixed(2),
  };

  return data;
}

export function getRentBreakdownMonthly(amount, tenants) {
  let _monthly = parseInt(amount);
  let _daily = _monthly / 30;
  let _weekly = _daily * 7;
  let _fortnightly = _weekly * 2;
  let _yearly = _daily * 365;

  const data = {
    daily: _daily.toFixed(2),
    weekly: _weekly.toFixed(2),
    fortnightly: _fortnightly.toFixed(2),
    monthly: _monthly.toFixed(2),
    yearly: _yearly.toFixed(2),
  };

  return data;
}

export function getRentBreakdownYearly(amount, tenants) {
  let _yearly = parseInt(amount);
  let _monthly = _yearly / 12;
  let _daily = _yearly / 365;
  let _weekly = _daily * 7;
  let _fortnightly = _weekly * 2;

  const data = {
    daily: _daily.toFixed(2),
    weekly: _weekly.toFixed(2),
    fortnightly: _fortnightly.toFixed(2),
    monthly: _monthly.toFixed(2),
    yearly: _yearly.toFixed(2),
  };

  return data;
}
