import jakarta.servlet.*;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;


@WebServlet("/primeiro")

public class ServLet extends HttpServlet {


    protected void service(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
//         Configura o tipo de conteúdo da resposta como texto/html

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


    RequestDispatcher rd = request.getRequestDispatcher("teste.jsp");
rd.forward(request,response);
    }
}
