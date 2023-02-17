class Node {
    constructor(id, nodeState, row, column) {
        this.id = id;
        this.nodeState = nodeState;
        this.row = row;
        this.column = column;

    }
};



function getRandInt(cap){
   return Math.floor(Math.random() * cap);
}

function gridGen(){

    var gheight=document.getElementById("container").offsetHeight;
    var gwidth=document.getElementById("container").offsetWidth;
    var bheight=Math.ceil(gheight/30);
    var bwidth=Math.ceil(gwidth/30);
    let hasStart = false, hasFinish = false;
    let rand1 = Math.abs(getRandInt(bheight));
    let rand2 = Math.abs(getRandInt(bwidth));
    let rand3 = Math.abs(getRandInt(bheight));
    let rand4 = Math.abs(getRandInt(bwidth));

    let tableHTML ="<tbody>";
    for(let row=0; row<bheight; row++){
        let currentRow = [];
       let currentRowHTML=`<tr id="row${row}">`;
        for(let column = 0; column<bwidth; column++){
            let nodeID = `${row}-${column}`, nodeState="node";
            let newNode = new Node(nodeID, nodeState, row, column);
            if(row===rand1&&column===rand2&&hasStart===false&&nodeState!="Finish"){
                nodeState="Start";
                hasStart=true;
            }
            else if (row===rand3&&column===rand4&&hasFinish===false&&nodeState!="Start"){
                nodeState="Finish";
                hasFinish=true; 
            }
            
            currentRow.push(newNode);
            currentRowHTML+=`<td id="row${row}_column${column}" class="${nodeState}"></td>`;
        }
        
        tableHTML+=`${currentRowHTML}</tr>`;
    }

    

    tableHTML+="</tbody>";
    let mygrid = document.getElementById("mygrid");
    mygrid.innerHTML=tableHTML;
}

gridGen();
