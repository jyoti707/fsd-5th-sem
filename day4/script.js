let row=4;
for(let i=1;i<=row;i++){
    let line=" ";
    for(let j=i;j<=2*row-1;j++){
        if(i+j>row &&j-i<row){
            line+="*";
        }else
            line+=" ";
        }
    console.log(line);
}