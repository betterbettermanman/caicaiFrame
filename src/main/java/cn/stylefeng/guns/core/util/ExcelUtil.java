package cn.stylefeng.guns.core.util;

import cn.stylefeng.guns.core.common.constant.Const;
import cn.stylefeng.guns.core.shiro.ShiroKit;
import cn.stylefeng.guns.modular.system.entity.User;
import cn.stylefeng.guns.modular.system.factory.UserFactory;
import cn.stylefeng.guns.modular.system.model.UserDto;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.*;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * 将输入流转换为WorkBook对象
 */
public class ExcelUtil {
    public static Workbook getFileExcel(InputStream is, String fileName) {
        Workbook workBook = null;
        try {
            if (fileName.contains(".xlsx")) {
                workBook = new XSSFWorkbook(is);
            }else if (fileName.contains(".xls")) {
                 workBook = new HSSFWorkbook(is);
            }
        }  catch (IOException e) {
        }
        return workBook;
    }
    public static List<Map<String,String>> excelFileDigester(Workbook workBook) {
        List<Map<String,String>> spares = new ArrayList<Map<String,String>>();
        //读取第一个工作页sheet
        Sheet sheet = workBook.getSheetAt(0);
        for(int i=1;i<=sheet.getLastRowNum();i++){
            Map map = new HashMap<String,String>();
            Row row =sheet.getRow(i);
            map.put("account",String.valueOf(row.getCell(0)));
            map.put("name",String.valueOf(row.getCell(1)));
            map.put("email",String.valueOf(row.getCell(2)));
            map.put("deptName",String.valueOf(row.getCell(3)));
            map.put("phone",String.valueOf(row.getCell(4)));
            Date dateCellValue = row.getCell(5).getDateCellValue();
            map.put("birthday",String.valueOf(dateCellValue));
            map.put("sex",String.valueOf(row.getCell(6)));
            spares.add(map);
        }
        return spares;

    }

}
