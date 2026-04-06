import { useState } from 'react';

export function useLocalStorage(key, initialValue) {
  // 🔧 VERSION ULTRA-ROBUSTE : nettoie localStorage corrompu
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      // ❌ Si "undefined" ou invalide → nettoie !
      if (item === 'undefined' || item === 'null') {
        window.localStorage.removeItem(key);
        return initialValue;
      }
      // ✅ JSON valide seulement
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // 🚨 Nettoie localStorage corrompu
      console.warn(`🧹 Nettoyage localStorage corrompu pour ${key}:`, error);
      window.localStorage.removeItem(key);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      // ✅ Conversion → string → stockage
      const valueToStore = value ?? initialValue;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`❌ Erreur localStorage ${key}:`, error);
    }
  };

  return [storedValue, setValue];
}