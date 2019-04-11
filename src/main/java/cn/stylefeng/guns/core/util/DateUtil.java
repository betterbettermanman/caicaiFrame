package cn.stylefeng.guns.core.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

/**
 * 日期类工具
 */
public class DateUtil {

    public static Date StringToDate(String target,String pattern){
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
        Date date=new Date();
        try {
            date=simpleDateFormat.parse(target);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return date;
    }

}
