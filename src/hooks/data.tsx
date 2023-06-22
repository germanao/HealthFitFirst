import moment, { MomentInput } from 'moment'
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { DataProviderData, Item, ItemData } from '../types'
import { filterIsToday, generateUniqueId, getLocalStorage, setLocalStorage } from '../helpers'

interface DataLocalProviderProps {
  children: React.ReactNode
}

const DataLocalContext = createContext<DataProviderData>({} as DataProviderData)

export const DataLocalProvider: React.FC<DataLocalProviderProps> = ({ children }) => {
  const [currentDate, setCurrentDate] = useState<MomentInput>(moment())
  const [currentKcal, setCurrentKcal] = useState(0)

  const [currentList, setCurrentList] = useState([] as Item[])
  const [listAllItens, setListAllItens] = useState([] as Item[])

  useEffect(() => {
    getStorageData()
  }, [])

  useEffect(() => {
    updateCurrentDay()
  }, [currentDate, listAllItens])

  useEffect(() => {
    setLocalStorage(listAllItens) //This isn't performant, but it's ok for now
  }, [listAllItens])

  const getStorageData = async () => {
    const res = await getLocalStorage()
    setListAllItens(res)
  }

  const addItem = (item: ItemData) => {
    const newItem: Item = {
      id: generateUniqueId(),
      name: item.name,
      kcal: item.kcal,
      date: currentDate,
    }

    setListAllItens(state => [...state, newItem])
    updateCurrentDay()
  }

  const removeItem = (id: string) => {
    setListAllItens(state => state.filter(item => item.id !== id))
  }

  const updateItem = (item: Item) => {
    const index = listAllItens.findIndex(element => element.id === item.id)
    const newList = [...listAllItens]
    newList[index] = item
    setListAllItens(newList)
  }

  const updateCurrentDay = useCallback(() => {
    if (listAllItens) {
      const filteredList = listAllItens.filter(item => filterIsToday(item.date, currentDate))
      const countKcal = filteredList.reduce((acc, item) => {
        return acc + item.kcal
      }, 0)

      setCurrentList(filteredList)
      setCurrentKcal(countKcal)
    }
  }, [listAllItens, currentDate])

  const handleChangeData = useCallback(async (date: MomentInput) => {
    setCurrentDate(date)
  }, [])

  return (
    <DataLocalContext.Provider
      value={{
        currentDate,
        currentKcal,
        currentList,
        addItem,
        removeItem,
        updateItem,
        handleChangeData,
      }}
    >
      {children}
    </DataLocalContext.Provider>
  )
}

export const useDataLocal = () => {
  const context = useContext(DataLocalContext)
  if (!context) throw new Error('useDataLocal must be used within a DataLocalProvider')

  return context
}
