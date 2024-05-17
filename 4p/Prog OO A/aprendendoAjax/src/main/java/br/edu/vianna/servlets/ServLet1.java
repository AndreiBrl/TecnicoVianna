package br.edu.vianna.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



@WebServlet(name="ServLet1" , urlPatterns = ("/oi"))
public class ServLet1 extends HttpServlet {
    protected void service(HttpServletRequest request, HttpServletResponse response) throws  IOException {
        // Configura o tipo de conteúdo da resposta como texto/html

//        response.setContentType("text/html");

//        // Obtém os parâmetros enviados no corpo da requisição
//        String numA = request.getParameter("numA");
//        String numB = request.getParameter("numB");
//
//        // Converte os parâmetros para inteiros (ou realiza outras validações/conversões necessárias)
//        int numeroA = Integer.parseInt(numA);
//        int numeroB = Integer.parseInt(numB);
//
//        // Realiza alguma operação com os números (por exemplo, soma)
//        int resultado = numeroA + numeroB;

//        PrintWriter out = response.getWriter();
//        out.println("O resultado da soma é: " + resultado);
//        System.out.println("111");
//        response.getWriter().append("Ok");
        ServletOutputStream out = response.getOutputStream();
        response.setContentType("text/html");
        out.println("<html><head><title>Básico</title></head>");
        out.println("<body>Você está no endereço: " +
                request.getRemoteAddr() + "!!</body></html>");

    }
}
