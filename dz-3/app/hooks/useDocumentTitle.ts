import { useEffect } from "react";

// Custom hook - postavlja u naslovu kartice broj nedovrsenih zadataka
export function useDocumentTitle(unfinishedCount: number) {
  useEffect(() => {
    if (unfinishedCount > 0) {
      document.title = "To Do List (" + unfinishedCount + " otvorena)";
    } else {
      document.title = "To Do List";
    }
  }, [unfinishedCount]);
}
