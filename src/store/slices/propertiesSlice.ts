import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface Property {
  id: string;
  title: string;
  price: number;
  image: string;
  location: string;
  description: string;
}

interface PropertiesState {
  list: Property[];
  selected?: Property;
  loading: boolean;
  error: string | null;
}

const initialState: PropertiesState = {
  list: [],
  selected: undefined,
  loading: false,
  error: null,
};

// Async thunk to fetch property list
export const fetchProperties = createAsyncThunk(
  'properties/fetchAll',
  async () => {
    const response = await axios.get('/api/properties');
    return response.data;
  }
);

// Async thunk to fetch single property by ID
export const fetchPropertyById = createAsyncThunk(
  'properties/fetchById',
  async (id: string) => {
    const response = await axios.get(`/api/properties/${id}`);
    return response.data;
  }
);

const propertiesSlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProperties.fulfilled, (state, action: PayloadAction<Property[]>) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(fetchPropertyById.fulfilled, (state, action: PayloadAction<Property>) => {
        state.selected = action.payload;
        state.loading = false;
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load properties';
      });
  },
});

export default propertiesSlice.reducer;
