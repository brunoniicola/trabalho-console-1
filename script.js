function lerNotaValida() {
            let nota;
            do {
                nota = parseFloat(prompt("1. Digite uma nota entre 0 e 10:"));
                if (isNaN(nota) || nota < 0 || nota > 10) {
                    alert("Nota inválida. Por favor, digite uma nota entre 0 e 10.");
                }
            } while (isNaN(nota) || nota < 0 || nota > 10);
            document.getElementById("root").innerHTML = `Você digitou a nota válida: ${nota}`;
        }

        function contagemRegressiva() {
            const dataAtual = new Date();
            const anoNovo = new Date(dataAtual.getFullYear() + 1, 0, 1);

            const diferenca = anoNovo - dataAtual;
            const diasRestantes = Math.floor(diferenca / (1000 * 60 * 60 * 24));

            document.getElementById("root").innerHTML = `2. Faltam ${diasRestantes} dias para o ano novo!`;
        }

        function verificarUsuarioSenha() {
            let nomeUsuario, senha;

            do {
                nomeUsuario = prompt("3. Digite seu nome de usuário:");
                senha = prompt("3. Digite sua senha:");

                if (nomeUsuario === senha) {
                    alert("Erro: A senha não pode ser igual ao nome de usuário. Tente novamente.");
                }
            } while (nomeUsuario === senha);

            document.getElementById("root").innerHTML = "3. Login bem-sucedido!";
        }

        function exibirFormulario() {
            document.getElementById("root").innerHTML = ""; // Limpar o console
            document.getElementById("exercicio4").style.display = "block"; // Mostrar o formulário
        }

        function somarNumeros() {
            const num1 = parseFloat(document.getElementById("num1").value);
            const num2 = parseFloat(document.getElementById("num2").value);

            if (isNaN(num1) || isNaN(num2)) {
                alert("Por favor, preencha ambos os campos com números.");
            } else {
                const resultado = num1 + num2;
                document.getElementById("root").innerHTML = `4. A soma é: ${resultado}`;
            }
        }

        function limpar() {
            document.getElementById("root").innerHTML = "";
            document.getElementById("num1").value = "";
            document.getElementById("num2").value = "";
            document.getElementById("exercicio4").style.display = "none"; // Esconder o formulário
        }
