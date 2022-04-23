<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Calculadora de Média</title>
</head>

<body>
    <section>
    <div>
            <label for="number">Adicione um número na lista:</label>
            <input id="number" type="number">
            <button>Adicionar</button>
        </div>
    <form action="SvMedia" method="post">
        
        <div>
            <textarea id="number-list" cols="50" rows="4" readonly name="textarea"><%= request.getParameter("textarea")==null?"":request.getParameter("textarea")%></textarea>
        </div>
        <button type="submit">Calcular Média</button>
        <span id="result"><%= request.getAttribute("resultado")==null?"":request.getAttribute("resultado")%></span>
    </form>
    </section>
    <script src="script.js"></script>
</body>

</html>