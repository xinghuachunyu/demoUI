// 当文档加载完成后再来执行下面的代码
window.onload = function(){
  var a = [];
  var sum = 0;
  var max,min;
  var b = [] ,c =[];
  for(var i=0;i<20;i++){
    a[i] = Math.floor(Math.random()*100+1);
    sum += a[i];
    max = min = a[0];
    max = max>a[i]?max:a[i];
    min = min>a[i]?a[i]:min;
    if(a[i]%2 == 0){
      c.push(a[i]);
    }else{
      b.push(a[i]);
    }
  }
  var temp;
  for(var i=0;i<a.length-1;i++){
    for(var j=0;j<a.length-i;j++){
      if(a[j]>a[j+1]){
        temp = a[j+1];
        a[j+1] = a[j];
        a[j] = temp;
      }
    }
  }
  var arr = [1,2,12,23,21,34];
  arr.sort(function(a,b){
    return a-b;
  });
  console.log(arr);
  console.log("数组a的和："+sum);
  console.log("数组a的最大值："+max);
  console.log("数组a的最小值："+min);
  console.log(b);
  console.log(c);


  // 定义一个数组a，数组长度20，随机填入1-100的数，并且求出这个数组a所有数字的和、最大数、最小数、第二大数，并且新建两个数组b,c，把数组a里面的奇数存入数组b,偶数存入数组c,并分别打印出来。
}
