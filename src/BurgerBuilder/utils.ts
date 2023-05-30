function isMobileDevice(): boolean {
  const mobileQuery: MediaQueryList = window.matchMedia("(max-width: 480px)");
  return mobileQuery.matches;
}

export { isMobileDevice };
