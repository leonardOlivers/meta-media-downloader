export default async function retryRequest(fn, retries = 3, delay = 500) {
  let lastErr;

  for (let i = 0; i <= retries; i++) {
    try {
      return await fn();
    } catch (err) {
      lastErr = err;
      if (i < retries) await new Promise(r => setTimeout(r, delay));
    }
  }

  throw lastErr;
}