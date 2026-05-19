import readingTime from "reading-time";

export function getReadingTime(content: string) {
  return readingTime(content).text;
}
