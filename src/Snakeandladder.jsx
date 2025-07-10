import React, { useEffect, useState } from "react";

export default function SnakeAndLadder() {
  const diceImages = [
    "https://upload.wikimedia.org/wikipedia/commons/2/2c/Alea_1.png",
    "https://upload.wikimedia.org/wikipedia/commons/b/b8/Alea_2.png",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Alea_3.png",
    "https://upload.wikimedia.org/wikipedia/commons/8/8d/Alea_4.png",
    "https://upload.wikimedia.org/wikipedia/commons/5/55/Alea_5.png",
    "https://upload.wikimedia.org/wikipedia/commons/f/f4/Alea_6.png",
  ];

  const [tiles, setTiles] = useState([]);
  const [player1Pos, setPlayer1Pos] = useState(1);
  const [player2Pos, setPlayer2Pos] = useState(1);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [diceFace, setDiceFace] = useState(0);

  const ladders = {
    5: 27, 9: 51, 22: 60, 28: 58,
    44: 79, 53: 69, 66: 88, 71: 92, 85: 97,
  };

  const snakes = {
    13: 7, 37: 19, 80: 43, 86: 55,
    91: 53, 99: 4,
  };

  useEffect(() => {
    const tempTiles = [];
    for (let row = 9; row >= 0; row--) {
      const isEven = row % 2 === 0;
      for (let col = 0; col < 10; col++) {
        const index = row * 10 + (isEven ? col + 1 : 10 - col);
        tempTiles.push(index);
      }
    }
    setTiles(tempTiles);
  }, []);

  const applyRules = (pos) => ladders[pos] || snakes[pos] || pos;

  const rollDice = () => {
    if (gameOver) return;
    const roll = Math.floor(Math.random() * 6) + 1;
    setDiceFace(roll);

    if (currentPlayer === 1) {
      let newPos = player1Pos + roll;
      if (newPos <= 100) newPos = applyRules(newPos);
      setPlayer1Pos(newPos);
      if (newPos === 100) {
        setGameOver(true);
        setTimeout(() => alert("Player 1 wins!"), 300);
      }
      setCurrentPlayer(2);
    } else {
      let newPos = player2Pos + roll;
      if (newPos <= 100) newPos = applyRules(newPos);
      setPlayer2Pos(newPos);
      if (newPos === 100) {
        setGameOver(true);
        setTimeout(() => alert("Player 2 wins!"), 300);
      }
      setCurrentPlayer(1);
    }

    const audio = new Audio("https://www.soundjay.com/button/beep-07.wav");
    audio.play();
  };

  const colors = {
  brownDark: "#5D4037",
  brownLight: "#8D6E63",
  tileBorder: "#D7CCC8",
  player1: "#00BCD4",
  player2: "#FF5722",  
  tileText: "#FFF8E1",
  glow1: "#80DEEA",     
  glow2: "#FFAB91"    
};


  return (
    <div style={{
      fontFamily: "Segoe UI, sans-serif",
      background: `linear-gradient(to bottom right, ${colors.brownDark}, ${colors.brownLight})`,
      height: "100vh",
      padding: "40px 0",
      color: colors.tileText,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>Snake and Ladder</h1>

      <h2 style={{
        backgroundColor: currentPlayer === 1 ? colors.player1 : colors.player2,
        padding: "5px 20px",
        borderRadius: "20px",
        fontSize: "18px",
        marginBottom: "20px",
        boxShadow: `0 0 10px ${colors.tileBorder}`
      }}>
        🎲 Turn: Player {currentPlayer}
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(10, 50px)",
        gridTemplateRows: "repeat(10, 50px)",
        backgroundImage: "url('snake.jpeg')",
        backgroundSize: "500px 500px",
        width: "500px",
        height: "500px",
        position: "relative",
        boxShadow: "0 0 20px rgba(0,0,0,0.5)",
        border: `4px solid ${colors.tileBorder}`,
        borderRadius: "10px",
      }}>
        {tiles.map((tile) => (
          <div key={tile} style={{
            border: `1px solid ${colors.tileBorder}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "11px",
            fontWeight: "bold",
            color: colors.tileText,
            position: "relative",
            backgroundColor: "rgba(255,255,255,0.06)",
          }}>
            {tile}
            {player1Pos === tile && (
              <div style={{
                width: "16px", height: "16px",
                backgroundColor: colors.player1,
                borderRadius: "50%",
                position: "absolute",
                top: "5px", left: "5px",
                boxShadow: `0 0 8px ${colors.glow1}`
              }}></div>
            )}
            {player2Pos === tile && (
              <div style={{
                width: "16px", height: "16px",
                backgroundColor: colors.player2,
                borderRadius: "50%",
                position: "absolute",
                bottom: "5px", right: "5px",
                boxShadow: `0 0 8px ${colors.glow2}`
              }}></div>
            )}
          </div>
        ))}
      </div>

      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <img
          src={diceImages[diceFace ? diceFace - 1 : 0]}
          alt="dice"
          width="90"
          height="90"
          style={{
            cursor: "pointer",
            transition: "transform 0.3s",
            borderRadius: "10px",
            boxShadow: `0 0 15px ${colors.tileBorder}`,
            backgroundColor: "#fff"
          }}
          onClick={rollDice}
          onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"}
          onMouseOut={(e) => e.currentTarget.style.transform = "scale(1.0)"}
        />
      </div>
    </div>
  );
}
