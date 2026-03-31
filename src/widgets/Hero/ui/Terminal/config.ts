export const controls = ["close", "collapse", "stretch"];

export const terminalText = ({
  name,
  role,
  location,
}: {
  name: string;
  role: string;
  location: string;
}) => {
  return {
    firstLine: "~ $ cat ./about/kazbek.json",
    secondLine: `{ "name": "${name}", "role": "${role}", "location": "${location}" }`,
  };
};
