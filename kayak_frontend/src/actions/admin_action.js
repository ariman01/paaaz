
export const updateTotalSales = (total_Sales) =>{
  console.log("Action UPDATE_TOTAL_SALES");
  return {type:'UPDATE_TOTAL_SALES',total_Sales:total_Sales}
}

export const updateHotelSalesAnalysis = (sales_analysis) =>{
  console.log("Action UPDATE_HOTEL_ANALYSIS");
  return {
    type:"UPDATE_HOTEL_ANALYSIS",
    hotel_analysis_data:sales_analysis
  }
}