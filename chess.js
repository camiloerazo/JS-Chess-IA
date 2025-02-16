//Functions
const drawBoard = () => {
    ctx.fillRect(0,0,75,75);
    let x = 0;
    let y = 0;
    let white = true;
    for(let i = 0; i <= 7; i++){
        for(let j = 0; j <= 7; j++){
            if(white){
                ctx.fillStyle = "white";
                if (j != 7) white = false;
            }
            else{
                ctx.fillStyle = "blue";
                if(j != 7) white = true;
            }
            ctx.fillRect(x,y,75,75);
            x += 75;
        }
        x = 0;
        y += 75;
    }
}
//Classes
class Piece{
  x = 0;
  y = 0;
  posx = 0;
  posy = 0;
  constructor(type, route){
    this.type = type;
    this.route = route;
    this.piece = new Image();
    this.piece.src = route;
    this.taken = false;
  }
}
class Board{
  constructor(pieces){
    this.board = [];
    // [
    // [1,2,3]
    // [4,5,6]
    // [7,8,9]
    // ]
    for (let i = 0; i <= 7; i++){
      const row = [];
      for (let j = 0; j <= 7; j++){
        row.push(null);
      }
      this.board.push(row);
    }
  }
  addPiece(piece){
    this.board[piece.posy - 1][piece.posx - 1] = piece;
  }
}
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
//Pieces
let pieces = {};
pieces["white"] = {};
pieces["black"] = {};
//Board
const board = new Board();
//Pawns
for(let i = 0; i < 8; i++){
    let piece1 = new Piece("pawn","imgs/whitepawn.png");
    let piece2 = new Piece("pawn","imgs/blackpawn.png");
    pieces["white"]["pawn"+i] = piece1;
    pieces["black"]["pawn"+i] = piece2;
};
//Setting Pawns positions
let c = 0;
for (const color in pieces){
  let x = 0;
  let y = 75;
  c = 1;
  for (const key in pieces[color]){
    const piece = pieces[color][key]; 
    if (color == "white"){
      y = 75*6;
      piece.posy = 7;
    }else{
      piece.posy = 2;
    }
    piece.x = x;
    piece.y = y;
    x += 75
    piece.posx = c;
    board.addPiece(piece);
    c++;
    //console.log(piece.x,piece.y);
  };
};
//Rooks
pieces["white"]["rook0"] = new Piece("rook", "imgs/whiterook.png");
pieces["white"]["rook1"] = new Piece("rook", "imgs/whiterook.png");
pieces["black"]["rook0"] = new Piece("rook", "imgs/blackrook.png");
pieces["black"]["rook1"] = new Piece("rook", "imgs/blackrook.png");
pieces["white"]["rook0"].x = 0;
pieces["white"]["rook0"].y = 75*7;
pieces["white"]["rook1"].x = 75*7;
pieces["white"]["rook1"].y = 75*7;
pieces["black"]["rook0"].x = 0;
pieces["black"]["rook0"].x = 0;
pieces["black"]["rook1"].x = 75*7;
pieces["black"]["rook1"].y = 0;
//White knights
pieces["white"]["knight0"] = new Piece("knight", "imgs/whiteknight.png");
pieces["white"]["knight1"] = new Piece("knight", "imgs/whiteknight.png");
//Black knights
pieces["black"]["knight0"] = new Piece("knight", "imgs/blackknight.png");
pieces["black"]["knight1"] = new Piece("knight", "imgs/blackknight.png");
pieces["white"]["knight0"].x = 75;
pieces["white"]["knight0"].y = 75*7;
pieces["white"]["knight1"].x = 75*6;
pieces["white"]["knight1"].y = 75*7;
pieces["black"]["knight0"].x = 75;
pieces["black"]["knight0"].y = 0;
pieces["black"]["knight1"].x = 75*6;
pieces["black"]["knight1"].y = 0;
//White bishops
pieces["white"]["bishop0"] = new Piece("bishop", "imgs/whitebishop.png");
pieces["white"]["bishop1"] = new Piece("bishop", "imgs/whitebishop.png");
//Black bishops
pieces["black"]["bishop0"] = new Piece("bishop","imgs/blackbishop.png");
pieces["black"]["bishop1"] = new Piece("bishop","imgs/blackbishop.png");
pieces["white"]["bishop0"].x = 75*2;
pieces["white"]["bishop0"].y = 75*7;
pieces["white"]["bishop1"].x = 75*5;
pieces["white"]["bishop1"].y = 75*7;
pieces["black"]["bishop0"].x = 75*2;
pieces["black"]["bishop0"].y = 0;
pieces["black"]["bishop1"].x = 75*5;
pieces["black"]["bishop1"].y = 0;
//White queen
pieces["white"]["queen"] = new Piece("queen", "imgs/whitequeen.png");
pieces["white"]["queen"].x = 75*3; 
pieces["white"]["queen"].y = 75*7;
//Black queen
pieces["black"]["queen"] = new Piece("queen", "imgs/blackqueen.png");
pieces["black"]["queen"].x = 75*3;
pieces["black"]["queen"].y = 0;
//White king
pieces["white"]["king"] = new Piece("king", "imgs/whiteking.png");
pieces["white"]["king"].x = 75*4;
pieces["white"]["king"].y = 75*7;
//Black king
pieces["black"]["king"] = new Piece("king", "imgs/blackking.png");
pieces["black"]["king"].x = 75*4;
pieces["black"]["king"].y = 0;

function drawPiece(piece, x, y){
  console.log("The ", piece.type, " is trying to been drawn at x = ", x, " y = ", y);
  ctx.drawImage(piece.piece,x,y,75,75);
}
const loadImages = (pieces) => {
  for (let key in pieces["white"]){
    const piece = pieces["white"][key];
    piece.piece.onload = function(){
      //console.log(piece.type, " was load");
      //console.log(piece.piece.complete);
    }
  }
  for (let key in pieces["black"]){
    const piece = pieces["black"][key];
    piece.piece.onload = function(){
      //console.log(piece.type, " was load");
      //console.log(piece.piece.complete);
    }
  }
};
function drawPieces(pieces){
  //Draw white pieces
  for (const key in pieces["white"]){
    const piece = pieces["white"][key];
    if (!piece.taken) drawPiece(piece, piece.x, piece.y);
  };
  //Draw blakc pieces
  for (const key in pieces["black"]){
    const piece = pieces["black"][key];
    if (!piece.taken) drawPiece(piece, piece.x, piece.y);
  }
}; 
const clear = () =>{
  ctx.clearRect(0,0,600,600);
}
const checkContact = (x, y) => {

  return piece;
};

const onClick = (event) => {
  const canvasData = canvas.getBoundingClientRect();
  let mouseX = event.clientX - canvasData.x;
  let mouseY = event.clientY - canvasData.y;
  console.log("x pos = ", mouseX);
  console.log("y pos = ", mouseY);
}
canvas.addEventListener("click", onClick);

function game(){
  drawBoard();
  drawPieces(pieces);
  //setTimeout(clear,1000);
};
loadImages(pieces);
setTimeout(game,1000);
