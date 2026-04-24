export const validateWorkflow = (nodes) => {
  const hasStart = nodes.some((n) => n.type === "start");

  if (!hasStart) return "Start node missing";
  if (nodes.length === 0) return "Empty workflow";

  return null;
};