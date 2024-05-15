export const groupBy = <T>(array: unknown, key: string) => {
  // @ts-ignore
  return array.reduce((result: Record<string, T[]>, currentValue: T) => {
    // @ts-ignore
    const keyValue = currentValue[key] as unknown as string; // Cast the key value to string
    (result[keyValue] = result[keyValue] ?? []).push(currentValue);
    return result;
  }, {});
};

export const groupByArray = <T>(array: unknown, key: string) => {
  return Object.entries(groupBy(array, key))
    .map(([key, value]) => ({
      key,
      value,
    }))
    .sort((a, b) => {
      return +b.key - +a.key;
    });
};
