import { combineReducers, createStore } from 'redux'
import { persistStore, persistReducer, WebStorage } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import ThemeReducer, { Themes } from './reducers/theme'
import FontSizeReducer from './reducers/fontSize'

interface Reducers {
  theme: Themes
  fontSize: number
}

interface ReduxPersistConfig {
  key: string
  storage: WebStorage
  withelist: string[]
  blacklist?: string[]
}

const rootReducer = combineReducers<Reducers>({
  theme: ThemeReducer,
  fontSize: FontSizeReducer
})

const persistConfig: ReduxPersistConfig = {
  key: 'root',
  storage: storage,
  withelist: ['theme', 'fontSize']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)

export type StoreState = ReturnType<typeof store.getState>
