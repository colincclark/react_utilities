const hasLocalStorage = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    try {
      const mod = "__storage_test__";
      localStorage.setItem(mod, mod);
      localStorage.removeItem(mod);
    } catch (error: unknown) {
      return false;
    }
    return true;
  } else {
    return false;
  }
};

export default hasLocalStorage;
