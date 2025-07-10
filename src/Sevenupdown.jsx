import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from './firebase'; 

function SevenUpDownGame() {
  const [selectedChoice, setSelectedChoice] = useState('');
  const [balance, setBalance] = useState(100);
  const [bet, setBet] = useState('');
  const [dice, setDice] = useState([1, 1]);
  const [resultMsg, setResultMsg] = useState('');
  const navigate = useNavigate();

  const userId = 'test-user-id'; 
  useEffect(() => {
    const fetchBalance = async () => {
      const userDoc = doc(db, 'users', userId);
      const userSnap = await getDoc(userDoc);
      if (userSnap.exists()) {
        setBalance(userSnap.data().balance || 100);
      } else {
        await setDoc(userDoc, { balance: 100 });
      }
    };

    fetchBalance();
  }, []);

  const updateBalanceInFirestore = async (newBalance) => {
    const userDoc = doc(db, 'users', userId);
    await updateDoc(userDoc, { balance: newBalance });
  };

  const handleChoice = (choice) => {
    setSelectedChoice(choice);
  };

  const playSound = (win) => {
    const sound = new Audio(win ? '/a2.mp3' : '/a1.mp3');
    sound.play();
  };

  const rollDice = async () => {
    const betAmount = parseInt(bet);

    if (!selectedChoice) {
      alert("Please select a choice: 7 UP, 7, or 7 DOWN.");
      return;
    }

    if (!betAmount || betAmount <= 0) {
      alert("Please enter a valid bet amount.");
      return;
    }

    if (betAmount > balance) {
      alert("Insufficient balance!");
      return;
    }

    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const total = dice1 + dice2;

    setDice([dice1, dice2]);

    let isWin = false;
    let winnings = 0;
    let newBalance = balance;

    if (selectedChoice === "7" && total === 7) {
      isWin = true;
      winnings = betAmount * 5;
      newBalance += winnings;
      setResultMsg(`You rolled ${total}. It's exactly 7! You win ₹${winnings}!`);
    } else if (selectedChoice === "7 UP" && total > 7) {
      isWin = true;
      winnings = betAmount * 2;
      newBalance += winnings;
      setResultMsg(`You rolled ${total}. It's above 7! You win ₹${winnings}!`);
    } else if (selectedChoice === "7 DOWN" && total < 7) {
      isWin = true;
      winnings = betAmount * 2;
      newBalance += winnings;
      setResultMsg(`You rolled ${total}. It's below 7! You win ₹${winnings}!`);
    } else {
      newBalance -= betAmount;
      setResultMsg(`You rolled ${total}. You lose ₹${betAmount}.`);
    }

    setBalance(newBalance);
    await updateBalanceInFirestore(newBalance);
    playSound(isWin);
  };

  const handleLogout = () => {
    navigate('/dashboard');
  };

  const getChoiceColor = (choice) => {
    if (selectedChoice === choice) return '#000';
    switch (choice) {
      case '7 UP': return '#ff6f00';
      case '7': return '#00e676';
      case '7 DOWN': return '#ff4081';
      default: return '#888';
    }
  };

  return (
    <div style={styles.container}>
      <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>

      <div style={styles.main}>
        <h1 style={{ color: '#fffacd' }}>🎲 7 UP-DOWN Game 🎲</h1><br />

        <div style={styles.choices}>
          {['7 UP', '7', '7 DOWN'].map(choice => (
            <div
              key={choice}
              style={{
                ...styles.choice,
                backgroundColor: getChoiceColor(choice),
                border: selectedChoice === choice ? '2px solid white' : 'none',
              }}
              onClick={() => handleChoice(choice)}
            >
              {choice}
            </div>
          ))}
        </div>

        <div style={styles.input}>
          <input
            type="number"
            placeholder="Enter bet amount"
            value={bet}
            onChange={(e) => setBet(e.target.value)}
            style={styles.inputField}
          />
          <button onClick={rollDice} style={styles.button}>🎮 Start the Game</button>
        </div>

        <div style={styles.dice}>
          <img src={`/D-${dice[0]}.png`} alt="Dice 1" style={styles.diceImg} />
          <img src={`/D-${dice[1]}.png`} alt="Dice 2" style={styles.diceImg} />
        </div>

        <div style={styles.result}>{resultMsg}</div>
        <div style={styles.balance}>💰 Balance: ₹{balance}</div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(to right, #23074d, #cc5333)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Trebuchet MS, sans-serif',
    paddingBottom: 100,
    position: 'relative'
  },
  main: {
    width: '90%',
    maxWidth: 600,
    padding: 30,
    borderRadius: 20,
    background: 'rgba(255, 255, 255, 0.07)',
    backdropFilter: 'blur(12px)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
    textAlign: 'center',
    color: 'white',
    border: '1px solid rgba(255,255,255,0.15)'
  },
  choices: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 20,
    gap: '20px'
  },
  choice: {
    height: 100,
    width: 100,
    fontWeight: 'bold',
    fontSize: 18,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 15,
    transition: 'transform 0.2s, box-shadow 0.2s',
    color: 'white',
    boxShadow: '0 0 15px rgba(0,0,0,0.4)',
  },
  input: {
    margin: '20px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  inputField: {
    padding: 12,
    fontSize: 18,
    margin: 10,
    borderRadius: 10,
    border: 'none',
    width: '60%',
    textAlign: 'center',
    backgroundColor: '#fff8dc',
    color: '#333'
  },
  button: {
    padding: '12px 28px',
    fontSize: 18,
    backgroundColor: '#00f7ff',
    color: '#000',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: 10,
    cursor: 'pointer',
    boxShadow: '0 0 12px #00f7ff',
    transition: 'transform 0.2s, box-shadow 0.3s'
  },
  dice: {
    margin: 20
  },
  diceImg: {
    width: 90,
    height: 90,
    margin: '0 10px'
  },
  result: {
    fontSize: 22,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#dfff00'
  },
  balance: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#f8f8ff'
  },
  logoutButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: '10px 20px',
    backgroundColor: '#ff4d4d',
    color: 'white',
    border: 'none',
    borderRadius: 8,
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 0 10px rgba(188, 23, 23, 0.5)'
  }
};

export default SevenUpDownGame;
