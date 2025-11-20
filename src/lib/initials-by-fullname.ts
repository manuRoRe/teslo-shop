export const getInitials = (fullname: string) => {
  const nameSplited = fullname.split(" ");
  const initials = nameSplited.map((n) => {
    return n.substring(0, 1);
  });
  return initials.join("");
};
