// Seletores
export function initCamera() {

    const botaoIniciarCamera = document.querySelector("[data-video-botao]");
    const campoCamera = document.querySelector("[data-camera]");
    const video = document.querySelector("[data-video]")
    const botaoTirarFoto = document.querySelector("[data-tirar-foto]");
    const canvas = document.querySelector("[data-video-canvas]");
    const mensagem = document.querySelector("[data-mensagem]");
    let imagemURL = "";

    const botaoEnviarFoto = document.querySelector("[data-enviar]");

    // Funções
    botaoIniciarCamera.addEventListener('click', async function () {
        console.log("iniciar camera clicado")
        const iniciarVideo = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        botaoIniciarCamera.style.display = "none";
        campoCamera.style.display = "block";

        video.srcObject = iniciarVideo;
    })

    botaoTirarFoto.addEventListener('click', function () {
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
        imagemURL = canvas.toDataURL('image/jpeg');
        campoCamera.style.display = "none";
        mensagem.style.display = "block";
        video.srcObject.getTracks().forEach(track => track.stop())
        const mensagemSucesso = document.querySelector('.message-success');
        mensagemSucesso.innerHTML = '<p class="text-sm text-gray-500 leading-relaxed message-success">Imagem capturada com sucesso !</p></div>'
    })

    botaoEnviarFoto.addEventListener('click', (e) => {
        e.preventDefault(); 
    
        const link = document.createElement('a');
        link.href = imagemURL;
        link.download = 'foto-contato.jpg'; 
        link.click();
    })
}