// https://www.codewars.com/kata/514a024011ea4fb54200004b/javascript

function domainName(url) {
  let domain = url.replace(/(https?:\/\/)?(www\.)?/, ""); // Remove "http://", "https://", and "www."
  domain = domain.split(".")[0]; // Split by period and take the first part (domain name)
  return domain;
}

// Example usage:
const url1 = "http://github.com/carbonfive/raygun";
const url2 = "http://www.zombie-bites.com";
const url3 = "https://www.cnet.com";

console.log(domainName(url1)); // Output: github
console.log(domainName(url2)); // Output: zombie-bites
console.log(domainName(url3)); // Output: cnet
