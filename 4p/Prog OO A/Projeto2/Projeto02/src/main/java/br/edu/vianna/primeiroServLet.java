package br.edu.vianna;

import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


import java.io.IOException;


@WebServlet (name = "oi",urlPatterns = "/teste")
public class primeiroServLet extends HttpServlet {



        protected void service(HttpServletRequest request, HttpServletResponse response) throws IOException {

            System.out.println("111");
            response.getWriter().append("Ok");

    }
}
