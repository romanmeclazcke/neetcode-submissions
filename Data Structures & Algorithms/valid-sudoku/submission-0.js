class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

    const rows = new Set();

    const cols = new Set();

    const boxes = new Set();

    for (let row = 0; row < 9; row++) {

        for (let col = 0; col < 9; col++) {

            const value = board[row][col];

            if (value === ".") continue;

            const rowKey = `${row}-${value}`;

            const colKey = `${col}-${value}`;

            const boxKey = `${Math.floor(row / 3)}-${Math.floor(col / 3)}-${value}`;

            if (

                rows.has(rowKey) ||

                cols.has(colKey) ||

                boxes.has(boxKey)

            ) {

                return false;

            }

            rows.add(rowKey);

            cols.add(colKey);

            boxes.add(boxKey);

        }

    }

    return true;

}
}
