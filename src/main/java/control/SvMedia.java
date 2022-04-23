package control;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/SvMedia")
public class SvMedia extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String textarea = request.getParameter("textarea");
		int aux = 0;
		String[] vetor = textarea.split(", ");
		for(int i = 0; i < vetor.length; i++) {
			aux += Integer.parseInt(vetor[i]);
		}
		int resultado = aux/vetor.length;
		
		request.setAttribute("resultado", resultado);
		request.getRequestDispatcher("index.jsp").forward(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}
}
