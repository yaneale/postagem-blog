document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("postForm");
    const tituloInput = document.getElementById("titulo");
    const conteudoInput = document.getElementById("conteudo");
    const tituloRenderizar = document.getElementById("renderizador-titulo");
    const conteudoRenderizar = document.getElementById("renderizador-conteudo");

    form.addEventListener("submit", async (e) => {
        e.preventDefault(); 

        const data = {
            title: tituloInput.value,
            body: conteudoInput.value,
            userId: 1
        };

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            });

            if (!response.ok) {
                throw new Error("Erro ao criar o post");
            }

            const result = await response.json();

           
            tituloRenderizar.innerHTML = result.title;
            conteudoRenderizar.innerHTML = result.body;

           
            tituloInput.value = "";
            conteudoInput.value = "";

            alert("Post criado com sucesso!");
        } catch (error) {
            console.error("Erro:", error);
            alert("Falha ao criar o post.");
        }
    });
});
