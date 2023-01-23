const setCookie = (name, value, domain, path, expires) => {
  if (!name) return "Must include a cookie name";
  const dateFormat = (date) =>
    typeof date === "number"
      ? new Date(Date.now() + date * 86400 * 1000).toString().slice(0, 15)
      : new Date(date).toString().slice(0, 15);
  const expireDate = expires ? `expires=${dateFormat(expires)} 00:00:00; ` : "";
  return `document.cookie = "${name}=${
    value ? value : name
  }; ${expireDate}path=${path ? path : "/"}${
    domain ? "; domain=" + domain : ""
  }"`;
};
