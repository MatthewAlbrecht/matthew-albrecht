import { useCallback, useState } from "react";

export default function useSimpleFormState<
  TState extends Record<string, unknown>,
>(initialState: TState) {
  const [state, setState] = useState<TState>(initialState);

  const handleFormInputChange = useCallback(
    function handleFormInputChange<K extends keyof TState>(
      key: K,
      value: TState[K],
    ) {
      setState((prev) => ({ ...prev, [key]: value }));
    },
    [setState],
  );

  const handleStateChange = useCallback(
    function handleStateChange(newState: TState) {
      setState({ ...newState });
    },
    [setState],
  );

  return [state, handleFormInputChange, handleStateChange] as const;
}
