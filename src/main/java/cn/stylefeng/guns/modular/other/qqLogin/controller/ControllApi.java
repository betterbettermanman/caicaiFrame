package cn.stylefeng.guns.modular.other.qqLogin.controller;

import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ControllApi {
    /**
     * QQ鉴权
     * @param request
     * @param response
     * @throws Exception
     */
    @RequestMapping("/authqq")
    public void authQQ(HttpServletRequest request, HttpServletResponse response) throws Exception
    {
        // QQ登录有点特殊，参数放在#后面，后台无法获取#后面的参数，只能用JS做中间转换
        String html =   "<!DOCTYPE html>" +
                "<html lang=\"zh-cn\">" +
                "<head>" +
                "   <title>QQ登录重定向页</title>" +
                "   <meta charset=\"utf-8\"/>" +
                "</head>" +
                "<body>" +
                "   <script type=\"text/javascript\">" +
                "   location.href = location.href.replace('#', '&').replace('auth_qq', 'auth_qq_redirect');" +
                "   </script>" +
                "</body>" +
                "</html>";
        response.getWriter().print(html);
    }
}
