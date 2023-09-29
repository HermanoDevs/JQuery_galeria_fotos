$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none;"></li>');
        const imagem = $('<img>').attr('src', enderecoDaNovaImagem).attr('alt', 'Imagem adicionada');
        const overlayLink = $('<div class="overlay-imagem-link"></div>');
        const link = $('<a></a>').attr('href', enderecoDaNovaImagem).attr('target', '_blank').attr('title', 'Ver imagem em tamanho real').text('Ver imagem em tamanho real');

        overlayLink.append(link);
        novoItem.append(imagem);
        novoItem.append(overlayLink);
        novoItem.appendTo('ul');
        novoItem.fadeIn(1000);
        $('#endereco-imagem-nova').val('');
    });
});
