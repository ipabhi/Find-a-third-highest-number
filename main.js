function getThirdHighest(arr) {
  arr.sort(function(a, b) {
    return b - a;
  })
  console.log(arr[2])
}

const array = [45,23,12,67,89,10,100,0,90,345];
getThirdHighest(array);     // 90

