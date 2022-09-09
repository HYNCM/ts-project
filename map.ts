let nameSiteMapping = new Map();
nameSiteMapping.set("Google", "www.google.com");
nameSiteMapping.set("Runoob", "www.runoob.com");
nameSiteMapping.set("Taobao", "www.taobao.com");
nameSiteMapping.set("Facebook", "www.facebook.com");

console.log(nameSiteMapping.get("Runoob"));
console.log(nameSiteMapping.has("Google"));
console.log(nameSiteMapping.delete("Facebook"));
console.log(nameSiteMapping.size);
let keySet = nameSiteMapping.keys();
for (let key of keySet) {
  console.log(nameSiteMapping.get(key));
}

//迭代map中的key=>value
for (let [key, value] of nameSiteMapping) {
  console.log(key + " = " + value);
}

for (let entry of nameSiteMapping.entries()) {
  console.log(entry[0], entry[1]);
}
