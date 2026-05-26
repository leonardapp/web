type MemoryItem = {
  role: "user" | "ai";
  content: string;
  timestamp: number;
};

const memory: MemoryItem[] = [];

export function addMemory(item: MemoryItem) {
  memory.push(item);

  // limit memory (performance safe)
  if (memory.length > 20) memory.shift();
}

export function getMemory() {
  return memory;
}