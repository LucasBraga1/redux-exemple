import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';

// Carrega o estado salvo do armazenamento local, se existir
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('counterState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Salva o estado atual no armazenamento local
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('counterState', serializedState);
  } catch (err) {
    // Tratar erros de armazenamento
  }
};

// Cria a store com o estado inicial carregado do armazenamento local
export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
  preloadedState: loadState(),
});

// Assina as mudanças no estado da store e salva no armazenamento local
store.subscribe(() => {
  saveState(store.getState());
});
