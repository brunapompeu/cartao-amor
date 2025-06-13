document.addEventListener('DOMContentLoaded', () => {
    const coverScreen = document.getElementById('cover-screen');
    const mainCard = document.getElementById('main-card');
    const cardOptions = document.querySelectorAll('.card-option');
    const revealedContent = document.getElementById('revealed-content');
    const closeContentButton = document.getElementById('close-content');
    const contentItems = document.querySelectorAll('.content-item');

    // 1. Lógica para Abrir o Cartão (clicar na capa)
    coverScreen.addEventListener('click', () => {
        coverScreen.classList.remove('active');
        coverScreen.classList.add('hidden'); // Esconde a capa
        
        // Pequeno atraso para a transição da capa antes de mostrar o cartão
        setTimeout(() => {
            mainCard.classList.remove('hidden');
            mainCard.classList.add('active'); // Mostra o cartão principal
        }, 800); // 800ms deve ser suficiente para a transição do CSS
    });

    // 2. Lógica para Mostrar o Conteúdo Específico (clicar nas opções)
    cardOptions.forEach(option => {
        option.addEventListener('click', (event) => {
            const targetId = event.currentTarget.dataset.target; // Pega o id do 'data-target'
            
            // Oculta todas as outras seções de conteúdo primeiro
            contentItems.forEach(item => {
                item.classList.remove('active');
                item.classList.add('hidden');
            });

            // Mostra a seção de conteúdo desejada
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.remove('hidden');
                targetContent.classList.add('active');
                
                // Mostra o contêiner principal de conteúdo revelado
                revealedContent.classList.remove('hidden');
                revealedContent.classList.add('active');

                // Opcional: Esconder as opções do cartão enquanto o conteúdo está visível
                document.getElementById('content-sections').classList.add('hidden');
            }
        });
    });

    // 3. Lógica para Fechar o Conteúdo Revelado e Voltar às Opções
    closeContentButton.addEventListener('click', () => {
        revealedContent.classList.remove('active');
        revealedContent.classList.add('hidden'); // Esconde o contêiner de conteúdo revelado

        // Esconde o conteúdo específico que estava visível
        contentItems.forEach(item => {
            item.classList.remove('active');
            item.classList.add('hidden');
        });

        // Mostra as opções do cartão novamente
        document.getElementById('content-sections').classList.remove('hidden');
        document.getElementById('content-sections').classList.add('active');
    });
});