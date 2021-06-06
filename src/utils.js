export function getRentBreakdown(amount, tenants, period) {
  let data = {};
  switch (period) {
    case "per day":
      data = getRentBreakdownDaily(amount);
      break;
    case "per week":
      data = getRentBreakdownWeekly(amount);
      break;
    case "per fortnight":
      data = getRentBreakdownFortnightly(amount);
      break;
    case "per month":
      data = getRentBreakdownMonthly(amount);
      break;
    case "per year":
      data = getRentBreakdownYearly(amount);
      break;
    default:
      console.log("invalid rent period");
  }

  return getTenantBreakdown(data, tenants);
}

function getTenantBreakdown(data, tenants) {
  let perTenant = {}

  for (const [key, value] of Object.entries(data)) {
    perTenant[key] = (value/tenants).toFixed(2);
  }

  return {'totalRent': data, 'perTenant': perTenant};
}

function getRentBreakdownWeekly(amount) {
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

function getRentBreakdownDaily(amount) {
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

function getRentBreakdownFortnightly(amount) {
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

function getRentBreakdownMonthly(amount) {
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

function getRentBreakdownYearly(amount) {
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
