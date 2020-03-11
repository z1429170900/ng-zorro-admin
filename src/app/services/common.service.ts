import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  constructor() { }
 
  // 时间转换
  timeStamp(time:any, format:string) {
    if (!format) {
      format = "yyyy-MM-dd HH:mm:ss";
    }
    if (!time) {
        return
    }
    var date = new Date(time);
    var Y:any = date.getFullYear();
    var M:any = (date.getMonth() + 1 < 10 ? (date.getMonth() + 1) : date.getMonth() + 1);
    var D:any = date.getDate();
    var h:any = date.getHours();
    var m:any = date.getMinutes();
    var s:any = date.getSeconds();
    if (m < 10) {
        m = "0" + m;
    }
    if (M < 10) {
        M = "0" + M;
    }
    if (h < 10) {
        h = "0" + h;
    }
    if (s < 10) {
        s = "0" + s;
    }

    if (D < 10) {
        D = "0" + D;
    }
    return format
        .replace("yyyy", Y)
        .replace("MM", M)
        .replace("dd", D)
        .replace("HH", h)
        .replace("mm", m)
        .replace("ss", s);
  }

  // 获取中文日期 如周一,周二
  weekDay(time:any) {
    var str:string = "";
    var week = new Date(time).getDay();  
    if (week == 0) {  
            str = "星期日";  
    } else if (week == 1) {  
            str = "星期一";  
    } else if (week == 2) {  
            str = "星期二";  
    } else if (week == 3) {  
            str = "星期三";  
    } else if (week == 4) {  
            str = "星期四";  
    } else if (week == 5) {  
            str = "星期五";  
    } else if (week == 6) {  
            str = "星期六";  
    }
    return str;
  }
}
