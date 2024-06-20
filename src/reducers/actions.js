import { updateGigsData } from './gigsSlice.js';
import newRequest from '../utils/newRequest.js';




export const fetchAndUpdateGigsData = (selectedCurrency) => async (dispatch, getState) => {
  //const selectedCurrency = (useSelector(state => state.currencySlice.selectedCurrency) )|| 'USD';
  const state = getState();
  const currency = selectedCurrency || state.currencySlice.selectedCurrency || 'USD';
  console.log(`Selected Currency in fetchAndUpdateGigsData: ${currency}`);


  try {
    const response = await newRequest.get(`/gigs?currency=${currency}`);
    const gigs = response.data;
    console.log('Response at fetchAndUpdateGigsData:', gigs);

    
    dispatch(updateGigsData({gigs})); // Update gigs data and timestamp
  } catch (error) {
    console.error('Error fetching gigs in action creator:', error);
  }
};

// Other action creators...
// Middleware or Action Creator to check and fetch if data is expired
export const checkAndFetchIfExpired = () => async (dispatch, getState) => {
    const state = getState();
    console.log("state at checkand fetch", state);
    const { timestamp } = state.gigsSlice;
  
    if (!timestamp || ((Date.now() - timestamp) > 1 * 60 * 60 * 1000)) {
      // Data is expired or not available, fetch new data
      dispatch(fetchAndUpdateGigsData());
    }
  };

