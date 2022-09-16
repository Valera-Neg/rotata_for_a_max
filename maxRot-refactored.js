function maxRot(n) {
  const res = [];
  let nStr = n.toString() 
  res.push( nStr)
for (let i=0; i<=nStr.length - 1; i++) {
  nStr = nStr.slice(0, i) + nStr.slice(i + 1) + nStr[i];
  res.push(nStr)
}
  return  Math.max(...res);
}


console.log(maxRot(56789)) //> 68957
console.log(maxRot(38458215)) //> 85821534
console.log(maxRot(195881031)) //> 988103115
console.log(maxRot(896219342)) //> 962193428
console.log(maxRot(69418307)) //> 94183076