import { Button } from "shared/ui";
import { useEffect, useState } from "react";

// КОМПОНЕНТ ДЛЯ ТЕСТИРОВАНИЯ!!!
export function BugButton() {
  const [error, setError] = useState(false);
  const toggleError = () => setError(true);
  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);
  return (
    <Button
      onClick={toggleError}

      // eslint-disable-next-line i18next/no-literal-string
    >
      throw error123
    </Button>
  );
}
