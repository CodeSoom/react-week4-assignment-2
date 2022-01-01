export default function generateId() {
  return `${Date.now()}_${Math.floor(Math.random() * 1000)}`;
}
