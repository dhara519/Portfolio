// TailWind Logic needed to access it's UI
// Cn is used to manage CSS classes so it'll be imported into many UI components
// But cn is created by merging two css libraries to handle conditional classes combining classes filtering classes
// Doing the logic here creates a centralized location for the logic to live and whoever needs it can just import cn
// Insteading of importing both libraries, coding the logic to create cn, and repeating this in all UI components files

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
