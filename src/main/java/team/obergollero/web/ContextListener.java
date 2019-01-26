package team.obergollero.web;

import team.obergollero.util.ConnectionUtil;

import javax.servlet.Servlet;
import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import java.sql.Driver;
import java.sql.SQLException;

public class ContextListener implements ServletContextListener {
    @Override
    public void contextInitialized(ServletContextEvent sce) {
        System.out.println("Application Initializing");
        ServletContext context = sce.getServletContext();
        String url = context.getInitParameter("url");
        String username = context.getInitParameter("username");
        String password = context.getInitParameter("password");
        String dbDriver = context.getInitParameter("driver");
        Driver driver;
        try{
            driver = (Driver) Class.forName(dbDriver).newInstance();
            ConnectionUtil.createConnectionManager(url, username, password, driver);
        } catch(InstantiationException e) {
            throw new IllegalStateException("Could not initialize Database Driver");
        } catch(IllegalAccessException e) {
            throw new IllegalStateException("Could not initialize Database Driver");
        } catch(ClassNotFoundException e) {
            throw new IllegalStateException("Could not initialize Database Driver");
        } catch(SQLException e) {
            throw new IllegalStateException("Could not initialize Connection Utility");
        }
    }

    @Override
    public void contextDestroyed(ServletContextEvent sce) {

    }
}
