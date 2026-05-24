const UTM_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

const FIRST_TOUCH_KEY = 'sr_first_touch';
const LATEST_TOUCH_KEY = 'sr_latest_touch';

function getUTMParams() {
  if (typeof window === 'undefined') return null;

  const urlParams = new URLSearchParams(window.location.search);
  const utmData = {};

  for (const param of UTM_PARAMS) {
    const value = urlParams.get(param);
    if (value) {
      utmData[`utm_${param.split('_')[1]}`] = value;
    }
  }

  const hasUTM = UTM_PARAMS.some((p) => urlParams.get(p));

  if (!hasUTM) {
    return null;
  }

  return utmData;
}

function getAttributionData(utmData) {
  const data = {
    timestamp: new Date().toISOString(),
  };

  if (typeof window !== 'undefined') {
    data.first_landing_page = window.location.href;
    data.current_page = window.location.href;
    data.referrer = document.referrer || '';
  }

  if (utmData) {
    Object.assign(data, utmData);
  }

  return data;
}

export function captureUTM() {
  if (typeof window === 'undefined') return null;

  const utmData = getUTMParams();
  const now = new Date().toISOString();

  // First-touch: only set if it doesn't exist yet
  let firstTouch = null;
  const existingFirstTouch = localStorage.getItem(FIRST_TOUCH_KEY);
  if (!existingFirstTouch) {
    const firstTouchData = getAttributionData(utmData);
    firstTouchData.first_touch_timestamp = now;
    localStorage.setItem(FIRST_TOUCH_KEY, JSON.stringify(firstTouchData));
    firstTouch = firstTouchData;
  } else {
    firstTouch = JSON.parse(existingFirstTouch);
  }

  // Latest-touch: always update
  const latestTouchData = getAttributionData(utmData);
  latestTouchData.latest_touch_timestamp = now;
  localStorage.setItem(LATEST_TOUCH_KEY, JSON.stringify(latestTouchData));

  return { firstTouch, latestTouch: latestTouchData };
}

export function getStoredAttribution() {
  if (typeof window === 'undefined') return { firstTouch: null, latestTouch: null };

  const firstTouchStr = localStorage.getItem(FIRST_TOUCH_KEY);
  const latestTouchStr = localStorage.getItem(LATEST_TOUCH_KEY);

  return {
    firstTouch: firstTouchStr ? JSON.parse(firstTouchStr) : null,
    latestTouch: latestTouchStr ? JSON.parse(latestTouchStr) : null,
  };
}

export function getAttributionPayload() {
  const { firstTouch, latestTouch } = getStoredAttribution();

  const payload = {
    current_page: typeof window !== 'undefined' ? window.location.href : '',
  };

  // First-touch attribution
  if (firstTouch) {
    payload.first_touch_utm_source = firstTouch.utm_source || '';
    payload.first_touch_utm_medium = firstTouch.utm_medium || '';
    payload.first_touch_utm_campaign = firstTouch.utm_campaign || '';
    payload.first_touch_utm_content = firstTouch.utm_content || '';
    payload.first_touch_utm_term = firstTouch.utm_term || '';
    payload.first_touch_landing_page = firstTouch.first_landing_page || '';
    payload.first_touch_referrer = firstTouch.referrer || '';
    payload.first_touch_timestamp = firstTouch.first_touch_timestamp || firstTouch.timestamp || '';
  } else {
    payload.first_touch_utm_source = '';
    payload.first_touch_utm_medium = '';
    payload.first_touch_utm_campaign = '';
    payload.first_touch_utm_content = '';
    payload.first_touch_utm_term = '';
    payload.first_touch_landing_page = '';
    payload.first_touch_referrer = '';
    payload.first_touch_timestamp = '';
  }

  // Latest-touch attribution
  if (latestTouch) {
    payload.latest_touch_utm_source = latestTouch.utm_source || '';
    payload.latest_touch_utm_medium = latestTouch.utm_medium || '';
    payload.latest_touch_utm_campaign = latestTouch.utm_campaign || '';
    payload.latest_touch_utm_content = latestTouch.utm_content || '';
    payload.latest_touch_utm_term = latestTouch.utm_term || '';
    payload.latest_touch_landing_page = latestTouch.first_landing_page || '';
    payload.latest_touch_referrer = latestTouch.referrer || '';
    payload.latest_touch_timestamp = latestTouch.latest_touch_timestamp || latestTouch.timestamp || '';
  } else {
    payload.latest_touch_utm_source = '';
    payload.latest_touch_utm_medium = '';
    payload.latest_touch_utm_campaign = '';
    payload.latest_touch_utm_content = '';
    payload.latest_touch_utm_term = '';
    payload.latest_touch_landing_page = '';
    payload.latest_touch_referrer = '';
    payload.latest_touch_timestamp = '';
  }

  return payload;
}
