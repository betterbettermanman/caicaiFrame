package cn.stylefeng.guns.modular.other.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/test")
public class TestController {
    private String PREFIX = "/modular/other/";
    @RequestMapping("/test1")
    public String test1(){
        return PREFIX+"test1.html";
    }

}
