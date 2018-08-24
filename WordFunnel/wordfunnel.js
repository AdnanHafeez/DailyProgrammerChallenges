
function funnel(w1,w2){

  if((w1.length - 1) != w2.length) return false;
  let j = 0;
  let i = 0;
  while (i < w1.length) {
      if(w1.charAt(i) != w2.charAt(j)){
        i++;
        if(i > j+1) return false;
        continue;
    }
    j++;
  }
  return true;

}

console.log(funnel("leave","eave"));
console.log(funnel("reset","rest"));
console.log(funnel("dragoon","dragon"));
console.log(funnel("eave","leave"));
console.log(funnel("sleet","lets"));
console.log(funnel("skiff","ski"));
