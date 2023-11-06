// Defina o nome e a quantidade de experiência (xp) do herói
var nomeHeroi = "Nome do Herói";
var xp = 3000; // Atualize este valor com a quantidade de XP do herói

// Use uma estrutura de decisão para determinar o nível
var nivel;

if (xp < 1000) {
  nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
  nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
  nivel = "Prata ou Ouro";
} else if (xp >= 5001 && xp <= 8000) {
  nivel = "Platina ou Diamante";
} else if (xp >= 8001 && xp <= 9000) {
  nivel = "Ascendente";
} else {
  nivel = "Desconhecido"; // Adicione uma mensagem padrão se nenhum dos intervalos for atendido
}

// Exiba a mensagem final
console.log(`O herói de nome ${nomeHeroi} está no nível de ${nivel}.`);
