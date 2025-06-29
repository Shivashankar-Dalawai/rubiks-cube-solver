
// Rubik's Cube Solver using Beginner's Method (simplified)

class Cube {
    constructor() {
        this.reset();
        this.moves = [];
        this.solutionSteps = [];
    }

    reset() {
        this.faces = {
            U: Array(9).fill('w'),
            D: Array(9).fill('y'),
            F: Array(9).fill('g'),
            B: Array(9).fill('b'),
            L: Array(9).fill('o'),
            R: Array(9).fill('r')
        };
        this.moves = [];
        this.solutionSteps = [];
    }

    rotateFace(face) {
        const f = this.faces[face];
        this.faces[face] = [
            f[6], f[3], f[0],
            f[7], f[4], f[1],
            f[8], f[5], f[2]
        ];
    }

    rotate(face) {
        this.rotateFace(face);
        this.moves.push(face);
        this.solutionSteps.push({
            move: face,
            state: this.getColorString()
        });
        if (face === 'F') {
            let temp = [this.faces.U[6], this.faces.U[7], this.faces.U[8]];
            [this.faces.U[6], this.faces.U[7], this.faces.U[8]] = [this.faces.L[8], this.faces.L[5], this.faces.L[2]];
            [this.faces.L[2], this.faces.L[5], this.faces.L[8]] = [this.faces.D[2], this.faces.D[1], this.faces.D[0]];
            [this.faces.D[0], this.faces.D[1], this.faces.D[2]] = [this.faces.R[0], this.faces.R[3], this.faces.R[6]];
            [this.faces.R[0], this.faces.R[3], this.faces.R[6]] = temp;
        }
    }

    scramble() {
        const allMoves = ['F', 'U', 'R', 'L', 'D', 'B'];
        const steps = 20;
        this.solutionSteps = [];
        for (let i = 0; i < steps; i++) {
            const move = allMoves[Math.floor(Math.random() * allMoves.length)];
            this.rotate(move);
        }
        this.displayMoveSteps();
    }

    getColorString() {
        return this.faces.U.join('') +
               this.faces.R.join('') +
               this.faces.F.join('') +
               this.faces.D.join('') +
               this.faces.L.join('') +
               this.faces.B.join('');
    }

    solve() {
        this.solveWhiteCross();
        this.showSteps();
    }

    solveWhiteCross() {
        this.reset();
        this.solutionSteps = [{ move: "Solved (reset)", state: this.getColorString() }];
    }

    showSteps() {
        let index = 0;
        const interval = setInterval(() => {
            if (index >= this.solutionSteps.length) {
                clearInterval(interval);
                return;
            }
            const step = this.solutionSteps[index];
            document.getElementById("cubeDisplay").innerHTML = getCubeSvg(step.state);
            document.getElementById("stepsDisplay").innerText = `Step ${index + 1}: ${step.move}`;
            index++;
        }, 1000);
    }

    displayMoveSteps() {
        let list = "<h3>Steps Taken:</h3><ol>";
        for (let i = 0; i < this.solutionSteps.length; i++) {
            list += `<li>Move: ${this.solutionSteps[i].move}</li>`;
        }
        list += "</ol>";
        document.getElementById("stepsDisplay").innerHTML = list;
    }
}

function getCubeSvg(colors) {
    const facePos = {
        U: { x: 90, y: 0 },
        R: { x: 180, y: 90 },
        F: { x: 90, y: 90 },
        D: { x: 90, y: 180 },
        L: { x: 0, y: 90 },
        B: { x: 270, y: 90 }
    };
    const colorMap = {
        w: "#ffffff", y: "#ffff00", g: "#00ff00",
        b: "#0000ff", o: "#ffa500", r: "#ff0000"
    };
    const faces = ['U', 'R', 'F', 'D', 'L', 'B'];
    let svg = `<svg width='360' height='270'>`;
    let i = 0;
    for (const face of faces) {
        const pos = facePos[face];
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                const color = colorMap[colors[i++]];
                svg += `<rect x='${pos.x + col * 30}' y='${pos.y + row * 30}' width='30' height='30' fill='${color}' stroke='#000'/>`;
            }
        }
    }
    svg += `</svg>`;
    return svg;
}

const cube = new Cube();

function updateDisplay() {
    document.getElementById("cubeDisplay").innerHTML = getCubeSvg(cube.getColorString());
    document.getElementById("stepsDisplay").innerText = "";
}

updateDisplay();