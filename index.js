// Code your solution in this file!
function distanceFromHqInBlocks(pickUp){
    const block=42
    let distance=Math.abs(pickUp-block)
    return distance
}
// const distanceFromHqInBlocks= (blocks)=>{
//     return Math.abs(blocks-42)
// }
function distanceFromHqInFeet(feet) {
const distance2=distanceFromHqInBlocks(feet)*264
return distance2
}
// function distanceFromHqInFeet(value){
//const blocks=distanceFromHqInBlocks(value);
// return blocks=264
// }

const distanceTravelledInFeet=(pickOff,dropoff)=>{
//pickup and dropoff are streets
//find the distance between them and then convert to feet
const blocks=Math.abs(pickOff-dropoff)*264
return blocks
}
// if (pickup<dropoff){
//     return (dropoff-pickup)*264
// }else {
//     return (pickup-dropoff)*264
// }

const calculatesFarePrice=(start, destination)=>{
const feet=distanceTravelledInFeet(start,destination);

if (feet<=400){
    return 0     
}else if(feet >400 && feet < 2000){
    return (feet-400) *.02
}else if(feet >=2000 && feet <= 2500){
return 25
}else{
   return 'cannot travel that far' 
}}


