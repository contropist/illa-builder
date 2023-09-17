import { createSlice } from "@reduxjs/toolkit"
import {
  addComponentReducer,
  addModalComponentReducer,
  addPageNodeWithSortOrderReducer,
  addSectionViewConfigByConfigReducer,
  addSectionViewReducer,
  addSubPageReducer,
  addTargetPageSectionReducer,
  batchUpdateComponentLayoutInfoReducer,
  batchUpdateComponentLayoutInfoWhenReflowReducer,
  batchUpdateMultiComponentSlicePropsReducer,
  deleteComponentNodeReducer,
  deleteGlobalStateByKeyReducer,
  deletePageNodeReducer,
  deleteSectionViewReducer,
  deleteSubPageViewNodeReducer,
  deleteTargetPageSectionReducer,
  initComponentReducer,
  resetComponentsReducer,
  setComponentPropsReducer,
  setGlobalStateReducer,
  sortComponentNodeChildrenReducer,
  updateComponentContainerReducer,
  updateComponentDisplayNameReducer,
  updateComponentLayoutInfoReducer,
  updateComponentNodeHeightReducer,
  updateComponentPropsReducer,
  updateComponentReflowReducer,
  updateDefaultSubPagePathReducer,
  updateMultiComponentPropsReducer,
  updateRootNodePropsReducer,
  updateSectionViewPropsReducer,
  updateSubPagePathReducer,
  updateTargetPageLayoutReducer,
  updateTargetPagePropsReducer,
  updateViewportSizeReducer,
} from "@/redux/currentApp/editor/components/componentsReducer"
import { ComponentsInitialState } from "@/redux/currentApp/editor/components/componentsState"

const componentsSlice = createSlice({
  name: "components",
  initialState: ComponentsInitialState,
  reducers: {
    updateComponentNodeHeightReducer,
    addComponentReducer,
    initComponentReducer,
    updateComponentPropsReducer,
    setComponentPropsReducer,
    deleteComponentNodeReducer,
    sortComponentNodeChildrenReducer,
    updateComponentDisplayNameReducer,
    updateComponentReflowReducer,
    updateComponentContainerReducer,
    updateMultiComponentPropsReducer,
    updateTargetPageLayoutReducer,
    updateTargetPagePropsReducer,
    deleteTargetPageSectionReducer,
    addTargetPageSectionReducer,
    updateRootNodePropsReducer,
    addPageNodeWithSortOrderReducer,
    deletePageNodeReducer,
    addSectionViewReducer,
    addSectionViewConfigByConfigReducer,
    deleteSectionViewReducer,
    updateSectionViewPropsReducer,
    updateViewportSizeReducer,
    addModalComponentReducer,
    resetComponentsReducer,
    updateComponentLayoutInfoReducer,
    batchUpdateComponentLayoutInfoWhenReflowReducer,
    batchUpdateMultiComponentSlicePropsReducer,
    batchUpdateComponentLayoutInfoReducer,
    setGlobalStateReducer,
    deleteGlobalStateByKeyReducer,
    deleteSubPageViewNodeReducer,
    updateSubPagePathReducer,
    updateDefaultSubPagePathReducer,
    addSubPageReducer,
  },
})

export const componentsActions = componentsSlice.actions
export default componentsSlice.reducer
