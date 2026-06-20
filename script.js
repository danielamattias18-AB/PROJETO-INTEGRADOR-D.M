function mostrarExemplo(){

    let industria = document.getElementById("industria").value;
    let resultado = document.getElementById("resultado");

    if(industria === "altoforno"){

        resultado.innerHTML = `
        <h3>Siderúrgica (Alto-Forno)</h3>

        <p><b>Gás de Alto-Forno:</b> Geração de energia elétrica.</p>

        <p><b>Calor Residual:</b> Produção de vapor para processos industriais.</p>

        <p><b>Água Tratada:</b> Reutilização nos sistemas produtivos.</p>

        <p><b>Poeira Metálica:</b> Retorno ao processo siderúrgico.</p>
        `;
    }

    else if(industria === "alimenticia"){

        resultado.innerHTML = `
        <h3>Indústria Alimentícia</h3>

        <p><b>Resíduos Orgânicos:</b> Produção de biogás.</p>

        <p><b>Cascas e restos:</b> Fabricação de fertilizantes.</p>

        <p><b>Óleos usados:</b> Produção de biodiesel.</p>
        `;
    }

    else if(industria === "madeireira"){

        resultado.innerHTML = `
        <h3>Indústria Madeireira</h3>

        <p><b>Serragem:</b> Produção de biomassa.</p>

        <p><b>Aparas de madeira:</b> Fabricação de MDF.</p>

        <p><b>Resíduos lenhosos:</b> Geração de energia.</p>
        `;
    }

    else{

        resultado.innerHTML = "Selecione uma indústria.";
    }
}

function cadastrar(){

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;

    if(nome === "" || email === ""){

        document.getElementById("mensagem").innerHTML =
        "Preencha todos os campos.";

        return;
    }

    document.getElementById("mensagem").innerHTML =
    "✅ Cadastro realizado com sucesso! Obrigado por apoiar a sustentabilidade.";

}s