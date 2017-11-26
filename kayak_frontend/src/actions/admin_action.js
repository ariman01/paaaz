
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

export const updateHotelBillingInformation = (hotel_billing_info) =>{
  console.log("Action UPDATE_HOTEL_BILLING_INFO");
  return {
    type:"UPDATE_HOTEL_BILLING_INFO",
    hotel_billing_info:hotel_billing_info
  }
export const updateCarSalesAnalysis = (sales_analysis) =>{
    console.log("Action UPDATE_CAR_ANALYSIS");
    return {
      type:"UPDATE_CAR_ANALYSIS",
      car_analysis_data:sales_analysis
    }
}

export const updateFlightSalesAnalysis = (sales_analysis) =>{
    console.log("Action UPDATE_FLIGHT_ANALYSIS");
    return {
      type:"UPDATE_FLIGHT_ANALYSIS",
      flight_analysis_data:sales_analysis
    }
}
