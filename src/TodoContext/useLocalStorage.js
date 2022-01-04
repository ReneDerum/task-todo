import React from "react";
export function useLocalStorage(itemName, initialValue) {
   const [item, setItem] = React.useState(initialValue);
   const [loading, setLoading] = React.useState(true);
   const [error, setError] = React.useState(false);
   React.useEffect(() => {
      setTimeout(() => {
         try {
            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem;
            if (!localStorageItem) {
               localStorage.setItem(itemName, JSON.stringify(initialValue));
               parsedItem = initialValue;
            } else {
               parsedItem = JSON.parse(localStorageItem);
            }
            setItem(parsedItem);
            setLoading(false);
         } catch (error) {
            setError(error);
         }
      }, 2000);
   }, []);

   const saveItem = (newItem) => {
      try {
         let stringifiedItem = JSON.stringify(newItem);
         localStorage.setItem(itemName, stringifiedItem);
         setItem(newItem);
      } catch (e) {
         setError(e);
      }
   };

   return { item, saveItem, loading, error };
}
