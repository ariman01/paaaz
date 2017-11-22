
export const updateTotalSales = (total_Sales) =>{
  console.log("Action UPDATE_TOTAL_SALES");
  return {type:'UPDATE_TOTAL_SALES',total_Sales:total_Sales}
}
