const dadosSignos = {
    aries: {
        nome: "Áries",
        cor: "#FF4D4D",
        previsao: "Dia de tomar iniciativas e liderar novos projetos com coragem.",
        imagem: "aries.png"
    },
    touro: {
        nome: "Touro",
        cor: "#4CAF50",
        previsao: "Mantenha o foco nos objetivos e aproveite momentos de conforto.",
        imagem: "touro.png"
    },
    gemeos: {
        nome: "Gêmeos",
        cor: "#9C27B0",
        previsao: "Ótimo dia para comunicação, trocas de ideias e novos aprendizados.",
        imagem: "gemeos.png"
    },
    cancer: {
        nome: "Câncer",
        cor: "#00BCD4",
        previsao: "Valorize os laços familiares e momentos de intuição e sensibilidade.",
        imagem: "cancer.png"
    },
    leao: {
        nome: "Leão",
        cor: "#FF9800",
        previsao: "Seu brilho pessoal está em alta. Aproveite para demonstrar seus talentos.",
        imagem: "leao.png"
    },
    virgem: {
        nome: "Virgem",
        cor: "#8BC34A",
        previsao: "Organização e atenção aos detalhes farão toda a diferença hoje.",
        imagem: "virgem.png"
    },
    libra: {
        nome: "Libra",
        cor: "#E91E63",
        previsao: "Busque o equilíbrio nas relações e evite decisões impulsivas.",
        imagem: "libra.png"
    },
    escorpiao: {
        nome: "Escorpião",
        cor: "#7d46c2",
        previsao: "Transformações positivas estão a caminho. Confie na sua intuição.",
        imagem: "escorpiao.png"
    },
    sagitario: {
        nome: "Sagitário",
        cor: "#FF5722",
        previsao: "Dia favorável para planejar viagens e expandir seus horizontes.",
        imagem: "sagitario.png"
    },
    capricornio: {
        nome: "Capricórnio",
        cor: "#607D8B",
        previsao: "A disciplina e a determinação serão suas maiores aliadas no trabalho.",
        imagem: "capricornio.png"
    },
    aquario: {
        nome: "Aquário",
        cor: "#2196F3",
        previsao: "Pense fora da caixa e busque soluções inovadoras para seus desafios.",
        imagem: "aquario.png"
    },
    peixes: {
        nome: "Peixes",
        cor: "#db9ebb",
        previsao: "Dificuldades em conciliar desejos com a realidade nas relações.",
        imagem: "peixes.png"
    
    }
};

const seletorSigno = document.getElementById("seletorSigno");
const botaoVer = document.getElementById("botaoVer");
const cartao = document.getElementById("cartao");
const nomeSigno = document.getElementById("nomeSigno");
const textoPrevisao = document.getElementById("textoPrevisao");
const imagemSigno = document.getElementById("imagemSigno");

botaoVer.addEventListener("click", function() {
    const signoEscolhido = seletorSigno.value;

    if (signoEscolhido === "") {
        alert("Por favor, escolha um signo válido antes de clicar no botão.");
        return;
    }

    const dados = dadosSignos[signoEscolhido];

    if (dados) {
        nomeSigno.innerText = dados.nome;
        textoPrevisao.innerText = dados.previsao;
        imagemSigno.src = dados.imagem;
        
        cartao.style.backgroundColor = dados.cor;
    }
});