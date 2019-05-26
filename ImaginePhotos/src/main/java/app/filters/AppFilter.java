package app.filters;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@WebFilter(urlPatterns = {"/", "/status", "/get", "/check", "/page", "/test1", "/test2"})
public class AppFilter implements Filter {
    public void destroy() {}
    public void init(FilterConfig filterConfig) {}
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
            throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) req;
        long startTime = System.currentTimeMillis();
        chain.doFilter(req, res);
        System.out.format(("%s - %s - %dms\n"), request.getMethod(), request.getRequestURL(),
                System.currentTimeMillis() - startTime);
    }
}
