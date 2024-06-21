import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertToSingleDecimalPlace(
  number: number,
  decimalPlaces: number
) {
  const roundedNumber = number.toFixed(decimalPlaces);
  const singleDecimalPlace = parseFloat(roundedNumber).toFixed(1);

  return parseFloat(singleDecimalPlace);
}


export function calculateIncreasePercentage(
  current: number,
  previous: number
): number {
  if (previous === 0)
  {
    return 0;
  }

  return convertToSingleDecimalPlace(
    ((current - previous) / previous) * 100,
    1
  );
}