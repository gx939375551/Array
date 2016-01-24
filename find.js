 /*思路:循环遍历当前数组,用一个数组记录当前字符,一个数组记录当前出现的次数，
  一个数组记录出现的位置（字符串数组）,当前记录数组中不包含当前字符就添加到数
  组中，在对应次数数组中设置为1，并在位置数组中记录位置，如果包含当前字符，就
  将次数+1，同样记录下位置。同时每次循环设置下当前出现最多次数字符的索引*/
 function arrayTest() {

     var arr = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"];

     // 记录最多次数；
     var count = 0;
     // 记录最多次数的字符；
     var maxCountStr = "";
     // 标记最多次数字符串在数组中的位置；
     var maxCountIndex = 0;
     // 去重复的字符并保存在数组中；
     var stringArr = new Array(arr.length);
     // 记录位置数组，对应索引与stringArr一致
     var pointArr = new Array(arr.length);
     // 记录出现次数，对应索引与stringArr一致；
     var countArr = new Array(arr.length);
     // 临时记录源数组字符
     var tempStr = null;
     // 记录stringArr的索引
     var index = 0;
     // 临时记录次数
     var temp = 0;
     // 标记stringArr数组是否包含当前的字符
     var mark = false;
     for (var i = 0; i < arr.length; i++) {
         tempStr = arr[i];
         mark = false; // 每次外部循环都将mark设置为false
         for (var j = 0; j < index; j++) { // 循环string数组
             if (tempStr == stringArr[j]) { // 当string数组包含当前字符串
                 pointArr[j] += ("," + i); // 记录当前字符串位置
                 countArr[j] += 1; // 记录当前字符串出现+1
                 mark = true; // 将mark值设为true
                 temp = countArr[j]; // 用临时变量记录当前字符串出现的次数
                 if (temp > count) { // 当前字符串出现的最大次数大于count中记录的最大值时；
                     count = temp; // count的值设为临时变量的值
                     maxCountStr = tempStr; // 最多次数字符串设为当前字符串
                     maxCountIndex = j; // 最大次数索引设置为当前stringArr索引
                     break; // 设置完毕推出循环
                 }
             }
         }
         if (!mark) { // 当标记为false表示stringArr中不包含当前字符串
             stringArr[index] = tempStr; // 将当前的字符串添加到stringArr
             pointArr[index] = ("" + i); // 将当前字符串的下标天添加到下标数组中
             countArr[index] = 1; // 将当前字符串出现次数设置为1
             index++;
         }
     }
     alert("出现最多的字母是:" + tempStr + "; 次数为:" + count + "; 位置分别为:" + pointArr[maxCountIndex]);
 }
