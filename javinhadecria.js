// Código JavaScript para trocar as imagens
document.getElementById('imagem1').addEventListener('mouseover', function() {
    document.getElementById('imagem2').style.opacity = '1';
});

document.getElementById('imagem1').addEventListener('mouseout', function() {
    document.getElementById('imagem2').style.opacity = '0';
});
